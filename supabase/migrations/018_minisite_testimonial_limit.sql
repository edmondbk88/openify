-- Add configurable testimonial limit for mini site pages
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS minisite_testimonial_limit integer NOT NULL DEFAULT 30;

-- Add constraint to keep value in valid range
ALTER TABLE profiles ADD CONSTRAINT minisite_testimonial_limit_range
  CHECK (minisite_testimonial_limit >= 10 AND minisite_testimonial_limit <= 100);

-- Grant permissions
GRANT SELECT, UPDATE ON profiles TO authenticated;
GRANT SELECT ON profiles TO anon;
GRANT ALL ON profiles TO service_role;
