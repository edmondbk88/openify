export type Plan = 'free' | 'minisite' | 'pro' | 'business'
export type TestimonialStatus = 'pending_verification' | 'pending' | 'approved' | 'rejected'
export type WidgetLayout = 'carousel' | 'grid' | 'wall' | 'single' | 'badge' | 'popup'
export type WidgetTheme = 'light' | 'dark' | 'auto'

export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  username: string | null
  bio: string | null
  website_url: string | null
  plan: Plan
  is_admin: boolean
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  minisite_config: Record<string, unknown> | null
  minisite_testimonial_limit: number
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
  show_on_minisite: boolean
  webhook_url: string | null
  webhook_events: string[]
  certification_tier: string | null
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
  is_company_verified: boolean
  verification_token: string | null
  source: string
  source_url: string | null
  source_platform: string | null
  sentiment_score: number | null
  sentiment_label: string | null
  key_phrases: string[] | null
  ai_summary: string | null
  photo_url: string | null
  owner_reply: string | null
  owner_reply_at: string | null
  click_count: number
  impression_count: number
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
  video_display_mode: string
  custom_css: string | null
  font_style: string
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
  testimonials: Pick<Testimonial, 'id' | 'author_name' | 'author_company' | 'author_role' | 'author_avatar_url' | 'content' | 'rating' | 'is_company_verified' | 'source' | 'source_platform' | 'source_url' | 'owner_reply' | 'photo_url' | 'created_at'>[]
  config: WidgetConfig | null
}

export interface PlanLimits {
  projects: number
  testimonials: number
  video: boolean
  audio: boolean
  removeBranding: boolean
  layouts: WidgetLayout[]
  seats: number
  miniSite: boolean
}

// Support Tickets
export type TicketCategory = 'billing' | 'technical' | 'feature' | 'account' | 'widget' | 'other'
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent'
export type TicketStatus = 'open' | 'in_progress' | 'waiting' | 'resolved' | 'closed'

export interface SupportTicket {
  id: string
  user_id: string
  subject: string
  category: TicketCategory
  priority: TicketPriority
  status: TicketStatus
  created_at: string
  updated_at: string
}

export interface TicketMessage {
  id: string
  ticket_id: string
  user_id: string | null
  message: string
  is_admin: boolean
  created_at: string
}
