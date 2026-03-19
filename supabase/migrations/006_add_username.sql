ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS username TEXT UNIQUE;
-- Create usernames from existing emails (part before @)
UPDATE public.profiles SET username = LOWER(SPLIT_PART(email, '@', 1)) WHERE username IS NULL;
