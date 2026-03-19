import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 50)
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatRelativeDate(date: string | Date): string {
  const now = new Date()
  const d = new Date(date)
  const diffMs = now.getTime() - d.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Hoy'
  if (diffDays === 1) return 'Ayer'
  if (diffDays < 7) return `Hace ${diffDays} días`
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`
  if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} meses`
  return `Hace ${Math.floor(diffDays / 365)} años`
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function absoluteUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}${path}`
}

/**
 * Check if an email domain matches a company name.
 * Used to automatically verify that a testimonial author belongs to the stated company.
 */
export function isCompanyEmailMatch(email: string, company: string): boolean {
  if (!email || !company) return false

  // Extract domain from email
  const atIndex = email.lastIndexOf('@')
  if (atIndex === -1) return false
  const domain = email.slice(atIndex + 1).toLowerCase()

  // Extract domain without TLD (e.g., "acme.com" → "acme", "acme.co.uk" → "acme")
  const domainParts = domain.split('.')
  if (domainParts.length < 2) return false
  const domainWithoutTld = domainParts[0]

  // Normalize company name: lowercase, remove accents, strip common suffixes, remove non-alphanumeric
  const normalized = company
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip combining marks (accents)
    .replace(/\b(s\.?l\.?|s\.?a\.?|inc\.?|corp\.?|llc\.?|srl\.?|s\.?r\.?l\.?|ltd\.?|gmbh\.?)\b/gi, '')
    .replace(/[^a-z0-9]/g, '') // remove non-alphanumeric

  if (normalized.length < 3 || domainWithoutTld.length < 3) return false

  // Check bidirectional containment
  return domainWithoutTld.includes(normalized) || normalized.includes(domainWithoutTld)
}
