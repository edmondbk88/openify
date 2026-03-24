-- 1. Update plan CHECK constraint to include 'minisite'
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_plan_check;
ALTER TABLE public.profiles ADD CONSTRAINT profiles_plan_check
  CHECK (plan IN ('free', 'minisite', 'pro', 'business'));

-- 2. Add gifted plan columns
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS gifted_plan TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS gifted_plan_expires_at TIMESTAMPTZ;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS gifted_by TEXT; -- admin email who gifted

-- Constraint: gifted_plan must be a valid paid plan
ALTER TABLE public.profiles ADD CONSTRAINT gifted_plan_check
  CHECK (gifted_plan IS NULL OR gifted_plan IN ('minisite', 'pro', 'business'));

-- Grant permissions
GRANT SELECT, UPDATE ON profiles TO authenticated;
GRANT SELECT ON profiles TO anon;
GRANT ALL ON profiles TO service_role;
