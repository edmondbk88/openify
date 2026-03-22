import { blogArticles } from '@/lib/blog-data'
import { blogArticlesEn } from '@/lib/blog-data-en'

describe('Blog Data - Spanish', () => {
  it('has 110 articles', () => {
    expect(blogArticles.length).toBe(110)
  })

  it('every article has required fields', () => {
    for (const article of blogArticles) {
      expect(article.slug).toBeTruthy()
      expect(typeof article.slug).toBe('string')
      expect(article.title).toBeTruthy()
      expect(typeof article.title).toBe('string')
      expect(article.content).toBeTruthy()
      expect(typeof article.content).toBe('string')
      expect(article.image).toBeTruthy()
      expect(typeof article.image).toBe('string')
      expect(article.excerpt).toBeTruthy()
      expect(article.category).toBeTruthy()
      expect(article.date).toBeTruthy()
      expect(article.readTime).toBeTruthy()
      expect(article.metaDescription).toBeTruthy()
      expect(Array.isArray(article.keywords)).toBe(true)
      expect(article.keywords.length).toBeGreaterThan(0)
    }
  })

  it('has no duplicate slugs', () => {
    const slugs = blogArticles.map(a => a.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  it('all dates are valid', () => {
    for (const article of blogArticles) {
      const date = new Date(article.date)
      expect(date.toString()).not.toBe('Invalid Date')
    }
  })

  it('content length > 100 chars (not empty)', () => {
    for (const article of blogArticles) {
      expect(article.content.length).toBeGreaterThan(100)
    }
  })

  it('all categories are valid strings', () => {
    for (const article of blogArticles) {
      expect(typeof article.category).toBe('string')
      expect(article.category.length).toBeGreaterThan(0)
    }
  })
})

describe('Blog Data - English', () => {
  it('has 110 articles', () => {
    expect(blogArticlesEn.length).toBe(110)
  })

  it('every article has required fields', () => {
    for (const article of blogArticlesEn) {
      expect(article.slug).toBeTruthy()
      expect(typeof article.slug).toBe('string')
      expect(article.title).toBeTruthy()
      expect(typeof article.title).toBe('string')
      expect(article.content).toBeTruthy()
      expect(typeof article.content).toBe('string')
      expect(article.image).toBeTruthy()
      expect(typeof article.image).toBe('string')
      expect(article.excerpt).toBeTruthy()
      expect(article.category).toBeTruthy()
      expect(article.date).toBeTruthy()
      expect(article.readTime).toBeTruthy()
      expect(article.metaDescription).toBeTruthy()
      expect(Array.isArray(article.keywords)).toBe(true)
      expect(article.keywords.length).toBeGreaterThan(0)
    }
  })

  it('has no duplicate slugs', () => {
    const slugs = blogArticlesEn.map(a => a.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  it('all dates are valid', () => {
    for (const article of blogArticlesEn) {
      const date = new Date(article.date)
      expect(date.toString()).not.toBe('Invalid Date')
    }
  })

  it('content length > 100 chars (not empty)', () => {
    for (const article of blogArticlesEn) {
      expect(article.content.length).toBeGreaterThan(100)
    }
  })

  it('all categories are valid strings', () => {
    for (const article of blogArticlesEn) {
      expect(typeof article.category).toBe('string')
      expect(article.category.length).toBeGreaterThan(0)
    }
  })
})
