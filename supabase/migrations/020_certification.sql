ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS certification_tier TEXT DEFAULT 'none';

GRANT SELECT, UPDATE ON public.projects TO authenticated;
GRANT SELECT ON public.projects TO anon;
GRANT ALL ON public.projects TO service_role;
