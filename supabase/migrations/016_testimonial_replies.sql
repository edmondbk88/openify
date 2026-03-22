-- Migration: Add owner reply support for testimonials
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS owner_reply TEXT;
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS owner_reply_at TIMESTAMPTZ;
