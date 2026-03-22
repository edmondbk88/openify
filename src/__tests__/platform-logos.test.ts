import { PLATFORMS, IMPORTABLE_PLATFORMS, getPlatform } from '@/lib/platform-logos'

describe('PLATFORMS', () => {
  it('all platforms have name, color, and icon', () => {
    for (const [key, platform] of Object.entries(PLATFORMS)) {
      expect(platform.name).toBeTruthy()
      expect(typeof platform.name).toBe('string')
      expect(platform.color).toMatch(/^#[0-9A-Fa-f]{6}$/)
      expect(platform.icon).toBeTruthy()
      expect(typeof platform.icon).toBe('string')
      expect(platform.description).toBeTruthy()
      expect(typeof platform.description).toBe('string')
    }
  })

  it('has expected platforms', () => {
    expect(PLATFORMS.google).toBeDefined()
    expect(PLATFORMS.tripadvisor).toBeDefined()
    expect(PLATFORMS.trustpilot).toBeDefined()
    expect(PLATFORMS.facebook).toBeDefined()
    expect(PLATFORMS.yelp).toBeDefined()
    expect(PLATFORMS.capterra).toBeDefined()
    expect(PLATFORMS.g2).toBeDefined()
    expect(PLATFORMS.form).toBeDefined()
  })

  it('icons contain SVG markup', () => {
    for (const platform of Object.values(PLATFORMS)) {
      expect(platform.icon).toContain('<svg')
      expect(platform.icon).toContain('</svg>')
    }
  })
})

describe('IMPORTABLE_PLATFORMS', () => {
  it('does not include "form"', () => {
    const keys = IMPORTABLE_PLATFORMS.map(p => p.key)
    expect(keys).not.toContain('form')
  })

  it('includes all other platforms', () => {
    const keys = IMPORTABLE_PLATFORMS.map(p => p.key)
    expect(keys).toContain('google')
    expect(keys).toContain('tripadvisor')
    expect(keys).toContain('trustpilot')
    expect(keys).toContain('facebook')
    expect(keys).toContain('yelp')
    expect(keys).toContain('capterra')
    expect(keys).toContain('g2')
  })

  it('each importable platform has key, name, color, icon', () => {
    for (const p of IMPORTABLE_PLATFORMS) {
      expect(p.key).toBeTruthy()
      expect(p.name).toBeTruthy()
      expect(p.color).toBeTruthy()
      expect(p.icon).toBeTruthy()
    }
  })
})

describe('getPlatform', () => {
  it('returns correct platform for valid key', () => {
    const google = getPlatform('google')
    expect(google).toBeDefined()
    expect(google?.name).toBe('Google Reviews')
  })

  it('returns correct platform for "form"', () => {
    const form = getPlatform('form')
    expect(form).toBeDefined()
    expect(form?.name).toBe('Formulario')
  })

  it('returns undefined for unknown key', () => {
    expect(getPlatform('unknown-platform')).toBeUndefined()
  })
})
