export type Plan = 'free' | 'pro' | 'business'
export type TestimonialStatus = 'pending_verification' | 'pending' | 'approved' | 'rejected'
export type WidgetLayout = 'carousel' | 'grid' | 'wall' | 'single' | 'badge'
export type WidgetTheme = 'light' | 'dark' | 'auto'

export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  plan: Plan
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  user_id: string
  name: string
  slug: string
  website_url: string | null
  logo_url: string | null
  brand_color: string
  collection_title: string
  collection_description: string | null
  thank_you_message: string
  is_active: boolean
  created_at: string
  updated_at: string
  testimonial_count?: number
}

export interface Testimonial {
  id: string
  project_id: string
  author_name: string
  author_email: string | null
  author_company: string | null
  author_role: string | null
  author_avatar_url: string | null
  content: string
  rating: number
  video_url: string | null
  status: TestimonialStatus
  tags: string[]
  is_featured: boolean
  verification_token: string | null
  source: string
  created_at: string
  updated_at: string
}

export interface WidgetConfig {
  id: string
  project_id: string
  layout: WidgetLayout
  theme: WidgetTheme
  primary_color: string
  background_color: string
  text_color: string
  border_radius: number
  show_rating: boolean
  show_date: boolean
  show_avatar: boolean
  show_company: boolean
  show_branding: boolean
  auto_play: boolean
  auto_play_speed: number
  max_testimonials: number
  min_rating: number
  filter_tags: string[]
  custom_css: string | null
  created_at: string
  updated_at: string
}

export interface WidgetImpression {
  id: string
  project_id: string
  referrer_domain: string | null
  impression_date: string
  count: number
}

export interface WidgetData {
  project: Pick<Project, 'name' | 'logo_url' | 'brand_color'>
  testimonials: Pick<Testimonial, 'id' | 'author_name' | 'author_company' | 'author_role' | 'author_avatar_url' | 'content' | 'rating' | 'created_at'>[]
  config: WidgetConfig | null
}

export interface PlanLimits {
  projects: number
  testimonials: number
  video: boolean
  removeBranding: boolean
  layouts: WidgetLayout[]
  seats: number
}
