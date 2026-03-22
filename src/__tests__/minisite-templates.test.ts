import { miniSiteTemplates, MINISITE_CATEGORIES, getMiniSiteTemplateById, getMiniSiteTemplatesByCategory } from '@/lib/minisite-templates'

describe('Mini Site Templates', () => {
  it('has 30 templates', () => {
    expect(miniSiteTemplates.length).toBe(30)
  })

  it('has no duplicate IDs', () => {
    const ids = miniSiteTemplates.map(t => t.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('all templates have required fields', () => {
    for (const t of miniSiteTemplates) {
      expect(t.id).toBeTruthy()
      expect(typeof t.id).toBe('string')
      expect(t.name).toBeTruthy()
      expect(typeof t.name).toBe('string')
      expect(t.category).toBeTruthy()
      expect(t.description).toBeTruthy()
    }
  })

  it('all templates have required config fields', () => {
    for (const t of miniSiteTemplates) {
      const c = t.config
      expect(c).toBeDefined()
      expect(c.accent_color).toMatch(/^#[0-9A-Fa-f]{6}$/)
      expect(c.background_color).toMatch(/^#[0-9A-Fa-f]{6}$/)
      expect(c.text_color).toMatch(/^#[0-9A-Fa-f]{6}$/)
      expect(c.card_style).toBeTruthy()
      expect(c.layout).toBeTruthy()
      expect(c.header_style).toBeTruthy()
      expect(c.font_style).toBeTruthy()
      expect(typeof c.show_stats).toBe('boolean')
      expect(typeof c.show_contact).toBe('boolean')
      expect(typeof c.dark_mode).toBe('boolean')
    }
  })

  it('all card_styles are valid', () => {
    const valid = ['rounded', 'sharp', 'pill', 'bordered', 'shadow', 'glass']
    for (const t of miniSiteTemplates) {
      expect(valid).toContain(t.config.card_style)
    }
  })

  it('all layouts are valid', () => {
    const valid = ['masonry', 'grid', 'list', 'cards', 'timeline']
    for (const t of miniSiteTemplates) {
      expect(valid).toContain(t.config.layout)
    }
  })

  it('all header_styles are valid', () => {
    const valid = ['centered', 'left', 'hero', 'minimal', 'banner']
    for (const t of miniSiteTemplates) {
      expect(valid).toContain(t.config.header_style)
    }
  })

  it('all font_styles are valid', () => {
    const valid = ['modern', 'serif', 'rounded', 'minimal', 'bold']
    for (const t of miniSiteTemplates) {
      expect(valid).toContain(t.config.font_style)
    }
  })

  it('all categories are in MINISITE_CATEGORIES', () => {
    const validCategories = [...MINISITE_CATEGORIES]
    for (const t of miniSiteTemplates) {
      expect(validCategories).toContain(t.category)
    }
  })
})

describe('MINISITE_CATEGORIES', () => {
  it('has expected categories', () => {
    expect(MINISITE_CATEGORIES.length).toBe(9)
    expect(MINISITE_CATEGORIES).toContain('Salud')
    expect(MINISITE_CATEGORIES).toContain('Legal')
    expect(MINISITE_CATEGORIES).toContain('Tecnologia')
  })
})

describe('getMiniSiteTemplateById', () => {
  it('returns template by ID', () => {
    const t = getMiniSiteTemplateById('consultorio-sereno')
    expect(t).toBeDefined()
    expect(t?.name).toBe('Consultorio Sereno')
  })

  it('returns undefined for unknown ID', () => {
    expect(getMiniSiteTemplateById('non-existent')).toBeUndefined()
  })
})

describe('getMiniSiteTemplatesByCategory', () => {
  it('returns templates filtered by category', () => {
    const templates = getMiniSiteTemplatesByCategory('Salud')
    expect(templates.length).toBeGreaterThan(0)
    for (const t of templates) {
      expect(t.category).toBe('Salud')
    }
  })

  it('returns all templates for "Todas"', () => {
    const templates = getMiniSiteTemplatesByCategory('Todas')
    expect(templates.length).toBe(miniSiteTemplates.length)
  })
})
