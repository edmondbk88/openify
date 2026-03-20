-- A/B Testing: Add click and impression tracking columns to testimonials
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS click_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS impression_count INTEGER NOT NULL DEFAULT 0;

-- Grant permissions
GRANT SELECT, UPDATE ON public.testimonials TO authenticated;
GRANT SELECT, UPDATE ON public.testimonials TO anon;
GRANT ALL ON public.testimonials TO service_role;
