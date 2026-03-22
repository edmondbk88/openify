import {
  generateSlug,
  formatDate,
  getInitials,
  isCompanyEmailMatch,
  getVerificationLevel,
  truncate,
} from '@/lib/utils'

describe('generateSlug', () => {
  it('converts basic string to slug', () => {
    expect(generateSlug('Mi Proyecto')).toBe('mi-proyecto')
  })

  it('removes accents', () => {
    expect(generateSlug('Café Olé')).toBe('cafe-ole')
  })

  it('handles special characters', () => {
    expect(generateSlug('Hello! @World #2024')).toBe('hello-world-2024')
  })

  it('removes leading and trailing hyphens', () => {
    expect(generateSlug('---test---')).toBe('test')
  })

  it('collapses multiple hyphens', () => {
    expect(generateSlug('a   b   c')).toBe('a-b-c')
  })

  it('truncates to 50 characters', () => {
    const longName = 'a'.repeat(100)
    expect(generateSlug(longName).length).toBeLessThanOrEqual(50)
  })

  it('handles empty string', () => {
    expect(generateSlug('')).toBe('')
  })

  it('handles Spanish characters (ñ, ü)', () => {
    expect(generateSlug('Año Nuevo')).toBe('ano-nuevo')
    expect(generateSlug('Pingüino Azul')).toBe('pinguino-azul')
  })

  it('handles all uppercase', () => {
    expect(generateSlug('HELLO WORLD')).toBe('hello-world')
  })
})

describe('formatDate', () => {
  it('formats a date string', () => {
    const result = formatDate('2026-03-19')
    // Spanish locale format: "19 mar 2026"
    expect(result).toMatch(/19/)
    expect(result).toMatch(/2026/)
  })

  it('formats a Date object', () => {
    const result = formatDate(new Date('2026-01-01'))
    expect(result).toMatch(/2026/)
  })

  it('handles ISO date strings', () => {
    const result = formatDate('2026-12-25T10:00:00Z')
    expect(result).toMatch(/2026/)
  })
})

describe('getInitials', () => {
  it('returns initials for two-word name', () => {
    expect(getInitials('Juan García')).toBe('JG')
  })

  it('returns single initial for one-word name', () => {
    expect(getInitials('Juan')).toBe('J')
  })

  it('limits to 2 characters for long names', () => {
    expect(getInitials('María José García López')).toBe('MJ')
  })

  it('uppercases initials', () => {
    expect(getInitials('ana lópez')).toBe('AL')
  })
})

describe('truncate', () => {
  it('returns original string if shorter than limit', () => {
    expect(truncate('Hello', 10)).toBe('Hello')
  })

  it('returns original string if equal to limit', () => {
    expect(truncate('Hello', 5)).toBe('Hello')
  })

  it('truncates and adds ellipsis', () => {
    expect(truncate('Hello World', 5)).toBe('Hello...')
  })

  it('handles empty string', () => {
    expect(truncate('', 10)).toBe('')
  })
})

describe('isCompanyEmailMatch', () => {
  it('returns true when domain matches company', () => {
    expect(isCompanyEmailMatch('info@rankia.com', 'Rankia')).toBe(true)
  })

  it('returns false when domain does not match company', () => {
    expect(isCompanyEmailMatch('info@gmail.com', 'Rankia')).toBe(false)
  })

  it('returns false for empty inputs', () => {
    expect(isCompanyEmailMatch('', 'Rankia')).toBe(false)
    expect(isCompanyEmailMatch('info@rankia.com', '')).toBe(false)
  })

  it('matches with author name for full verification', () => {
    expect(isCompanyEmailMatch('edmond@rankia.com', 'Rankia', 'Edmond Bojalil')).toBe(true)
  })

  it('ignores legal suffixes (S.L., Inc, etc.)', () => {
    expect(isCompanyEmailMatch('info@acme.com', 'Acme S.L.')).toBe(true)
  })
})

describe('getVerificationLevel', () => {
  it('returns "full" when email matches both company domain and person name', () => {
    expect(getVerificationLevel('edmond@rankia.com', 'Rankia', 'Edmond Bojalil')).toBe('full')
  })

  it('returns "company" when only domain matches', () => {
    expect(getVerificationLevel('info@rankia.com', 'Rankia')).toBe('company')
  })

  it('returns "company" when domain matches but name does not', () => {
    expect(getVerificationLevel('info@rankia.com', 'Rankia', 'Carlos Pérez')).toBe('company')
  })

  it('returns "none" when domain does not match', () => {
    expect(getVerificationLevel('info@gmail.com', 'Rankia')).toBe('none')
  })

  it('returns "none" for empty email', () => {
    expect(getVerificationLevel('', 'Rankia')).toBe('none')
  })

  it('returns "none" for empty company', () => {
    expect(getVerificationLevel('info@rankia.com', '')).toBe('none')
  })

  it('returns "none" for invalid email without @', () => {
    expect(getVerificationLevel('invalid-email', 'Rankia')).toBe('none')
  })

  it('returns "none" for very short company name', () => {
    expect(getVerificationLevel('info@ab.com', 'AB')).toBe('none')
  })

  it('handles dots in email local part', () => {
    expect(getVerificationLevel('e.bojalil@rankia.com', 'Rankia', 'Edmond Bojalil')).toBe('full')
  })
})
