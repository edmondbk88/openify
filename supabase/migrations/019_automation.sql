CREATE TABLE public.automation_rules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL DEFAULT 'email_request',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  delay_days INTEGER NOT NULL DEFAULT 7,
  email_subject TEXT NOT NULL DEFAULT 'Nos encantaría conocer tu opinión',
  email_body TEXT NOT NULL DEFAULT 'Hola, nos encantaría que nos dejaras tu testimonio sobre tu experiencia con nosotros.',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.automation_contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  rule_id UUID REFERENCES public.automation_rules(id) ON DELETE CASCADE NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  scheduled_at TIMESTAMPTZ NOT NULL,
  sent_at TIMESTAMPTZ,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_automation_contacts_scheduled ON public.automation_contacts(scheduled_at, status);

ALTER TABLE public.automation_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "rules_owner" ON public.automation_rules FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.projects WHERE projects.id = automation_rules.project_id AND projects.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.projects WHERE projects.id = automation_rules.project_id AND projects.user_id = auth.uid()));

CREATE POLICY "contacts_owner" ON public.automation_contacts FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.automation_rules r JOIN public.projects p ON p.id = r.project_id WHERE r.id = automation_contacts.rule_id AND p.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.automation_rules r JOIN public.projects p ON p.id = r.project_id WHERE r.id = automation_contacts.rule_id AND p.user_id = auth.uid()));

GRANT SELECT, INSERT, UPDATE, DELETE ON public.automation_rules TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.automation_contacts TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.automation_rules TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.automation_contacts TO service_role;
