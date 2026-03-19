-- Profiles table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  plan TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'business')),
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Projects table
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  website_url TEXT,
  logo_url TEXT,
  brand_color TEXT NOT NULL DEFAULT '#6366f1',
  collection_title TEXT NOT NULL DEFAULT '¿Qué opinas de nuestro servicio?',
  collection_description TEXT,
  thank_you_message TEXT NOT NULL DEFAULT '¡Muchas gracias por tu testimonio! Tu opinión es muy valiosa para nosotros.',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE public.testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT,
  author_company TEXT,
  author_role TEXT,
  author_avatar_url TEXT,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  video_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  tags TEXT[] DEFAULT '{}',
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  source TEXT NOT NULL DEFAULT 'form',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Widget configs table
CREATE TABLE public.widget_configs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL UNIQUE,
  layout TEXT NOT NULL DEFAULT 'carousel' CHECK (layout IN ('carousel', 'grid', 'wall', 'single', 'badge')),
  theme TEXT NOT NULL DEFAULT 'light' CHECK (theme IN ('light', 'dark', 'auto')),
  primary_color TEXT NOT NULL DEFAULT '#6366f1',
  background_color TEXT NOT NULL DEFAULT '#ffffff',
  text_color TEXT NOT NULL DEFAULT '#1f2937',
  border_radius INTEGER NOT NULL DEFAULT 12,
  show_rating BOOLEAN NOT NULL DEFAULT TRUE,
  show_date BOOLEAN NOT NULL DEFAULT TRUE,
  show_avatar BOOLEAN NOT NULL DEFAULT TRUE,
  show_company BOOLEAN NOT NULL DEFAULT TRUE,
  show_branding BOOLEAN NOT NULL DEFAULT TRUE,
  auto_play BOOLEAN NOT NULL DEFAULT TRUE,
  auto_play_speed INTEGER NOT NULL DEFAULT 5000,
  max_testimonials INTEGER NOT NULL DEFAULT 10,
  min_rating INTEGER NOT NULL DEFAULT 1,
  filter_tags TEXT[] DEFAULT '{}',
  custom_css TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Widget impressions (analytics)
CREATE TABLE public.widget_impressions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL,
  referrer_domain TEXT,
  impression_date DATE NOT NULL DEFAULT CURRENT_DATE,
  count INTEGER NOT NULL DEFAULT 1,
  UNIQUE(project_id, referrer_domain, impression_date)
);

-- Indexes
CREATE INDEX idx_projects_user_id ON public.projects(user_id);
CREATE INDEX idx_projects_slug ON public.projects(slug);
CREATE INDEX idx_testimonials_project_id ON public.testimonials(project_id);
CREATE INDEX idx_testimonials_status ON public.testimonials(status);
CREATE INDEX idx_widget_impressions_project_date ON public.widget_impressions(project_id, impression_date);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON public.testimonials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_widget_configs_updated_at BEFORE UPDATE ON public.widget_configs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'),
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Auto-create widget config on project creation
CREATE OR REPLACE FUNCTION public.handle_new_project()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.widget_configs (project_id, primary_color)
  VALUES (NEW.id, NEW.brand_color);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_project_created
  AFTER INSERT ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_project();

-- RLS Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.widget_configs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.widget_impressions ENABLE ROW LEVEL SECURITY;

-- Profiles: only own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Projects: owner full access + anon read active
CREATE POLICY "Users can manage own projects" ON public.projects
  FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Anyone can read active projects" ON public.projects
  FOR SELECT USING (is_active = TRUE);

-- Testimonials: owner full access + anon insert + anon read approved
CREATE POLICY "Project owners can manage testimonials" ON public.testimonials
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.projects
      WHERE projects.id = testimonials.project_id
      AND projects.user_id = auth.uid()
    )
  );
CREATE POLICY "Anyone can submit testimonials" ON public.testimonials
  FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Anyone can read approved testimonials" ON public.testimonials
  FOR SELECT USING (status = 'approved');

-- Widget configs: owner full access + anon read
CREATE POLICY "Project owners can manage widget configs" ON public.widget_configs
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.projects
      WHERE projects.id = widget_configs.project_id
      AND projects.user_id = auth.uid()
    )
  );
CREATE POLICY "Anyone can read widget configs" ON public.widget_configs
  FOR SELECT USING (TRUE);

-- Widget impressions: owner read + anon insert
CREATE POLICY "Project owners can view impressions" ON public.widget_impressions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.projects
      WHERE projects.id = widget_impressions.project_id
      AND projects.user_id = auth.uid()
    )
  );
CREATE POLICY "Anyone can insert impressions" ON public.widget_impressions
  FOR INSERT WITH CHECK (TRUE);
