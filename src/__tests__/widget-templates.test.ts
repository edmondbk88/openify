import { widgetTemplates, TEMPLATE_CATEGORIES } from '@/lib/widget-templates'

describe('Widget Templates', () => {
  it('has 80 templates', () => {
    expect(widgetTemplates.length).toBe(80)
  })

  it('has no duplicate IDs', () => {
    const ids = widgetTemplates.map(t => t.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('all templates have required fields', () => {
    for (const t of widgetTemplates) {
      expect(t.id).toBeTruthy()
      expect(typeof t.id).toBe('string')
      expect(t.name).toBeTruthy()
      expect(typeof t.name).toBe('string')
      expect(t.description).toBeTruthy()
      expect(typeof t.description).toBe('string')
      expect(t.category).toBeTruthy()
      expect(t.layout).toBeTruthy()
      expect(t.preview_image).toBeTruthy()
    }
  })

  it('all templates have required config fields', () => {
    for (const t of widgetTemplates) {
      const c = t.config
      expect(c).toBeDefined()
      expect(c.theme).toBeTruthy()
      expect(c.primary_color).toMatch(/^#[0-9A-Fa-f]{6}$/)
      expect(c.background_color).toMatch(/^#[0-9A-Fa-f]{6}$/)
      expect(c.text_color).toMatch(/^#[0-9A-Fa-f]{6}$/)
      expect(typeof c.border_radius).toBe('number')
      expect(typeof c.show_rating).toBe('boolean')
      expect(typeof c.show_date).toBe('boolean')
      expect(typeof c.show_avatar).toBe('boolean')
      expect(typeof c.show_company).toBe('boolean')
      expect(c.font_style).toBeTruthy()
    }
  })

  it('all layouts are valid', () => {
    const validLayouts = ['carousel', 'grid', 'wall', 'single', 'badge', 'popup']
    for (const t of widgetTemplates) {
      expect(validLayouts).toContain(t.layout)
    }
  })

  it('all font_styles are valid', () => {
    const validFontStyles = ['modern', 'serif', 'rounded', 'minimal', 'bold', 'handwritten', 'mono', 'elegant']
    for (const t of widgetTemplates) {
      expect(validFontStyles).toContain(t.config.font_style)
    }
  })

  it('all categories are in TEMPLATE_CATEGORIES', () => {
    const validCategories = [...TEMPLATE_CATEGORIES]
    for (const t of widgetTemplates) {
      expect(validCategories).toContain(t.category)
    }
  })

  it('all themes are valid', () => {
    const validThemes = ['light', 'dark']
    for (const t of widgetTemplates) {
      expect(validThemes).toContain(t.config.theme)
    }
  })
})

describe('TEMPLATE_CATEGORIES', () => {
  it('has expected categories', () => {
    expect(TEMPLATE_CATEGORIES.length).toBeGreaterThan(0)
    expect(TEMPLATE_CATEGORIES).toContain('Minimalista')
    expect(TEMPLATE_CATEGORIES).toContain('Corporativo')
    expect(TEMPLATE_CATEGORIES).toContain('Oscuro')
  })
})
