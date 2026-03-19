-- Fix: Grant table privileges to Supabase roles
-- The original migration created tables but didn't grant SELECT/INSERT/UPDATE/DELETE
-- to the authenticated, anon, and service_role roles.

-- Profiles
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO service_role;

-- Projects
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projects TO authenticated;
GRANT SELECT ON public.projects TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projects TO service_role;

-- Testimonials
GRANT SELECT, INSERT, UPDATE, DELETE ON public.testimonials TO authenticated;
GRANT SELECT, INSERT ON public.testimonials TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.testimonials TO service_role;

-- Widget configs
GRANT SELECT, INSERT, UPDATE, DELETE ON public.widget_configs TO authenticated;
GRANT SELECT ON public.widget_configs TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.widget_configs TO service_role;

-- Widget impressions
GRANT SELECT, INSERT ON public.widget_impressions TO authenticated;
GRANT SELECT, INSERT ON public.widget_impressions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.widget_impressions TO service_role;

-- Fix RLS policies: use specific roles instead of public
-- Drop old policies
DROP POLICY IF EXISTS "Users can manage own projects" ON public.projects;
DROP POLICY IF EXISTS "Anyone can read active projects" ON public.projects;
DROP POLICY IF EXISTS "Project owners can manage testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Anyone can read approved testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Anyone can submit testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Project owners can manage widget configs" ON public.widget_configs;
DROP POLICY IF EXISTS "Anyone can read widget configs" ON public.widget_configs;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Project owners can view impressions" ON public.widget_impressions;
DROP POLICY IF EXISTS "Anyone can insert impressions" ON public.widget_impressions;

-- Profiles
CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- Projects
CREATE POLICY "projects_select_own" ON public.projects FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "projects_insert_own" ON public.projects FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "projects_update_own" ON public.projects FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "projects_delete_own" ON public.projects FOR DELETE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "projects_select_active_anon" ON public.projects FOR SELECT TO anon USING (is_active = true);

-- Testimonials
CREATE POLICY "testimonials_select_owner" ON public.testimonials FOR SELECT TO authenticated USING (EXISTS (SELECT 1 FROM public.projects WHERE projects.id = testimonials.project_id AND projects.user_id = auth.uid()));
CREATE POLICY "testimonials_update_owner" ON public.testimonials FOR UPDATE TO authenticated USING (EXISTS (SELECT 1 FROM public.projects WHERE projects.id = testimonials.project_id AND projects.user_id = auth.uid()));
CREATE POLICY "testimonials_delete_owner" ON public.testimonials FOR DELETE TO authenticated USING (EXISTS (SELECT 1 FROM public.projects WHERE projects.id = testimonials.project_id AND projects.user_id = auth.uid()));
CREATE POLICY "testimonials_insert_public" ON public.testimonials FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "testimonials_select_approved" ON public.testimonials FOR SELECT TO anon USING (status = 'approved');

-- Widget configs
CREATE POLICY "wc_manage_owner" ON public.widget_configs FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM public.projects WHERE projects.id = widget_configs.project_id AND projects.user_id = auth.uid())) WITH CHECK (EXISTS (SELECT 1 FROM public.projects WHERE projects.id = widget_configs.project_id AND projects.user_id = auth.uid()));
CREATE POLICY "wc_select_anon" ON public.widget_configs FOR SELECT TO anon USING (true);

-- Widget impressions
CREATE POLICY "wi_select_owner" ON public.widget_impressions FOR SELECT TO authenticated USING (EXISTS (SELECT 1 FROM public.projects WHERE projects.id = widget_impressions.project_id AND projects.user_id = auth.uid()));
CREATE POLICY "wi_insert_public" ON public.widget_impressions FOR INSERT TO anon, authenticated WITH CHECK (true);
