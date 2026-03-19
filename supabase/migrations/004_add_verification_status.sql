-- Add pending_verification status
ALTER TABLE public.testimonials DROP CONSTRAINT IF EXISTS testimonials_status_check;
ALTER TABLE public.testimonials ADD CONSTRAINT testimonials_status_check
  CHECK (status IN ('pending_verification', 'pending', 'approved', 'rejected'));

-- Add verification token column
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS verification_token UUID DEFAULT gen_random_uuid();
