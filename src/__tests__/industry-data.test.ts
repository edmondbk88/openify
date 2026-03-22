import { industries } from '@/lib/industry-data'
import { industriesEn } from '@/lib/industry-data-en'

describe('Industry Data - Spanish', () => {
  it('has 80 industries', () => {
    expect(industries.length).toBe(80)
  })

  it('every industry has required fields', () => {
    for (const ind of industries) {
      expect(ind.slug).toBeTruthy()
      expect(typeof ind.slug).toBe('string')
      expect(ind.name).toBeTruthy()
      expect(ind.title).toBeTruthy()
      expect(ind.metaDescription).toBeTruthy()
      expect(ind.heroTitle).toBeTruthy()
      expect(ind.heroSubtitle).toBeTruthy()
      expect(ind.icon).toBeTruthy()
      expect(ind.ctaText).toBeTruthy()
      expect(ind.content).toBeTruthy()
      expect(Array.isArray(ind.benefits)).toBe(true)
      expect(Array.isArray(ind.faqItems)).toBe(true)
      expect(Array.isArray(ind.keywords)).toBe(true)
      expect(Array.isArray(ind.testimonialExamples)).toBe(true)
    }
  })

  it('has no duplicate slugs', () => {
    const slugs = industries.map(i => i.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  it('benefits always has 6 items', () => {
    for (const ind of industries) {
      expect(ind.benefits.length).toBe(6)
    }
  })

  it('faqItems always has 4 items', () => {
    for (const ind of industries) {
      expect(ind.faqItems.length).toBe(4)
    }
  })

  it('content length > 100 chars', () => {
    for (const ind of industries) {
      expect(ind.content.length).toBeGreaterThan(100)
    }
  })

  it('FAQ items have question and answer', () => {
    for (const ind of industries) {
      for (const faq of ind.faqItems) {
        expect(faq.question).toBeTruthy()
        expect(faq.answer).toBeTruthy()
      }
    }
  })

  it('testimonial examples have required fields', () => {
    for (const ind of industries) {
      for (const example of ind.testimonialExamples) {
        expect(example.author).toBeTruthy()
        expect(example.company).toBeTruthy()
        expect(example.text).toBeTruthy()
        expect(example.rating).toBeGreaterThanOrEqual(1)
        expect(example.rating).toBeLessThanOrEqual(5)
      }
    }
  })
})

describe('Industry Data - English', () => {
  it('has 80 industries', () => {
    expect(industriesEn.length).toBe(80)
  })

  it('every industry has required fields', () => {
    for (const ind of industriesEn) {
      expect(ind.slug).toBeTruthy()
      expect(typeof ind.slug).toBe('string')
      expect(ind.name).toBeTruthy()
      expect(ind.title).toBeTruthy()
      expect(ind.metaDescription).toBeTruthy()
      expect(ind.heroTitle).toBeTruthy()
      expect(ind.heroSubtitle).toBeTruthy()
      expect(ind.icon).toBeTruthy()
      expect(ind.ctaText).toBeTruthy()
      expect(ind.content).toBeTruthy()
      expect(Array.isArray(ind.benefits)).toBe(true)
      expect(Array.isArray(ind.faqItems)).toBe(true)
      expect(Array.isArray(ind.keywords)).toBe(true)
      expect(Array.isArray(ind.testimonialExamples)).toBe(true)
    }
  })

  it('has no duplicate slugs', () => {
    const slugs = industriesEn.map(i => i.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  it('benefits always has 6 items', () => {
    for (const ind of industriesEn) {
      expect(ind.benefits.length).toBe(6)
    }
  })

  it('faqItems always has 4 items', () => {
    for (const ind of industriesEn) {
      expect(ind.faqItems.length).toBe(4)
    }
  })

  it('content length > 100 chars', () => {
    for (const ind of industriesEn) {
      expect(ind.content.length).toBeGreaterThan(100)
    }
  })
})
