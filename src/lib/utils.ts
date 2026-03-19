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
 * Verify identity by matching email against company name and person name.
 *
 * Returns a verification level:
 * - 'full': both company domain AND person name match (e.g., edmond@rankia.com + "Edmond" + "Rankia")
 * - 'company': only company domain matches (e.g., info@rankia.com + "Rankia")
 * - 'none': no match
 */
export type VerificationLevel = 'full' | 'company' | 'none'

export function getVerificationLevel(email: string, company: string, authorName?: string): VerificationLevel {
  if (!email || !company) return 'none'

  const atIndex = email.lastIndexOf('@')
  if (atIndex === -1) return 'none'

  const localPart = email.slice(0, atIndex).toLowerCase()
  const domain = email.slice(atIndex + 1).toLowerCase()

  // Extract domain without TLD
  const domainParts = domain.split('.')
  if (domainParts.length < 2) return 'none'
  const domainWithoutTld = domainParts[0]

  // Normalize company name
  const normalizedCompany = company
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\b(s\.?l\.?|s\.?a\.?|inc\.?|corp\.?|llc\.?|srl\.?|s\.?r\.?l\.?|ltd\.?|gmbh\.?)\b/gi, '')
    .replace(/[^a-z0-9]/g, '')

  if (normalizedCompany.length < 3 || domainWithoutTld.length < 3) return 'none'

  // Check domain matches company
  const domainMatchesCompany = domainWithoutTld.includes(normalizedCompany) || normalizedCompany.includes(domainWithoutTld)
  if (!domainMatchesCompany) return 'none'

  // If no author name, it's a company-only match
  if (!authorName) return 'company'

  // Check if person name appears in email local part
  const nameParts = authorName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/\s+/)
    .filter(p => p.length >= 3)

  if (nameParts.length === 0) return 'company'

  // Clean local part: "edmond.bojalil" → "edmondbojalil", "e.bojalil" → "ebojalil"
  const cleanLocal = localPart.replace(/[._\-+]/g, '')

  // At least one name part must appear in the local part
  // Examples: "edmond" in "edmond@rankia.com", "bojalil" in "ebojalil@rankia.com"
  const nameMatches = nameParts.some(part =>
    cleanLocal.includes(part) || part.includes(cleanLocal)
  )

  return nameMatches ? 'full' : 'company'
}

// Backward compat wrapper
export function isCompanyEmailMatch(email: string, company: string, authorName?: string): boolean {
  return getVerificationLevel(email, company, authorName) !== 'none'
}
