-- Add source fields to testimonials for import feature
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS source_url TEXT;
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS source_platform TEXT;

-- Drop any existing check constraint on source (may not exist)
ALTER TABLE public.testimonials DROP CONSTRAINT IF EXISTS testimonials_source_check;

-- Grant permissions on new columns (already granted at table level, but ensure)
GRANT SELECT, INSERT, UPDATE ON public.testimonials TO authenticated;
GRANT SELECT, INSERT ON public.testimonials TO anon;
GRANT ALL ON public.testimonials TO service_role;
