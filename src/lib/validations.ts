import { z } from 'zod'

export const projectSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  website_url: z.string().url('URL inválida').optional().or(z.literal('')),
  brand_color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Color inválido'),
  collection_title: z.string().min(5, 'El título debe tener al menos 5 caracteres').max(200),
  collection_description: z.string().max(500).optional().or(z.literal('')),
  thank_you_message: z.string().min(5).max(500),
})

export const testimonialSchema = z.object({
  project_id: z.string().uuid(),
  author_name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  author_email: z.string().email('Email inválido').optional().or(z.literal('')),
  author_company: z.string().max(100).optional().or(z.literal('')),
  author_role: z.string().max(100).optional().or(z.literal('')),
  author_avatar_url: z.string().url().nullable().optional(),
  content: z.string().min(10, 'El testimonio debe tener al menos 10 caracteres').max(2000),
  rating: z.number().int().min(1).max(5),
})

export const widgetConfigSchema = z.object({
  layout: z.enum(['carousel', 'grid', 'wall', 'single', 'badge']),
  theme: z.enum(['light', 'dark', 'auto']),
  primary_color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  background_color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  text_color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  border_radius: z.number().int().min(0).max(32),
  show_rating: z.boolean(),
  show_date: z.boolean(),
  show_avatar: z.boolean(),
  show_company: z.boolean(),
  show_branding: z.boolean(),
  auto_play: z.boolean(),
  auto_play_speed: z.number().int().min(2000).max(10000),
  max_testimonials: z.number().int().min(1).max(50),
  min_rating: z.number().int().min(1).max(5),
  filter_tags: z.array(z.string()),
})

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
})

export const registerSchema = z.object({
  full_name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
})
