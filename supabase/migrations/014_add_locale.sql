-- Add locale column to profiles for i18n support
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS locale text NOT NULL DEFAULT 'es';

-- Grant permissions
GRANT SELECT, UPDATE ON profiles TO authenticated;
GRANT SELECT ON profiles TO anon;
GRANT ALL ON profiles TO service_role;
