-- Add sentiment analysis columns to testimonials
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS sentiment_score REAL;
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS sentiment_label TEXT;
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS key_phrases TEXT[];
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS ai_summary TEXT;
