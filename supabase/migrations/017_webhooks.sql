-- Add webhook support to projects
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS webhook_url TEXT;
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS webhook_events TEXT[] DEFAULT '{}';

-- Add photo_url to testimonials
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS photo_url TEXT;
