import { PLAN_LIMITS, STRIPE_PRICES, WIDGET_LAYOUTS } from '@/lib/constants'
import type { Plan } from '@/types'

describe('PLAN_LIMITS', () => {
  const plans: Plan[] = ['free', 'minisite', 'pro', 'business']

  it('all plans exist', () => {
    for (const plan of plans) {
      expect(PLAN_LIMITS[plan]).toBeDefined()
    }
  })

  it('free plan has correct limits', () => {
    const free = PLAN_LIMITS.free
    expect(free.projects).toBe(1)
    expect(free.testimonials).toBe(10)
    expect(free.video).toBe(false)
    expect(free.removeBranding).toBe(false)
    expect(free.miniSite).toBe(false)
    expect(free.seats).toBe(1)
  })

  it('business plan has correct limits', () => {
    const biz = PLAN_LIMITS.business
    expect(biz.projects).toBe(20)
    expect(biz.testimonials).toBe(Infinity)
    expect(biz.video).toBe(true)
    expect(biz.removeBranding).toBe(true)
    expect(biz.miniSite).toBe(true)
    expect(biz.seats).toBe(3)
  })

  it('video is only on business plan', () => {
    expect(PLAN_LIMITS.free.video).toBe(false)
    expect(PLAN_LIMITS.minisite.video).toBe(false)
    expect(PLAN_LIMITS.pro.video).toBe(false)
    expect(PLAN_LIMITS.business.video).toBe(true)
  })

  it('miniSite is available on minisite, pro, and business', () => {
    expect(PLAN_LIMITS.free.miniSite).toBe(false)
    expect(PLAN_LIMITS.minisite.miniSite).toBe(true)
    expect(PLAN_LIMITS.pro.miniSite).toBe(true)
    expect(PLAN_LIMITS.business.miniSite).toBe(true)
  })

  it('layout permissions increase with plan tier', () => {
    expect(PLAN_LIMITS.free.layouts.length).toBeLessThanOrEqual(PLAN_LIMITS.pro.layouts.length)
    expect(PLAN_LIMITS.pro.layouts.length).toBeLessThanOrEqual(PLAN_LIMITS.business.layouts.length)
  })

  it('free plan only has carousel and grid layouts', () => {
    expect(PLAN_LIMITS.free.layouts).toEqual(['carousel', 'grid'])
  })

  it('pro and business plans have all layouts', () => {
    expect(PLAN_LIMITS.pro.layouts).toContain('wall')
    expect(PLAN_LIMITS.pro.layouts).toContain('single')
    expect(PLAN_LIMITS.pro.layouts).toContain('badge')
    expect(PLAN_LIMITS.pro.layouts).toContain('popup')
    expect(PLAN_LIMITS.business.layouts).toContain('wall')
    expect(PLAN_LIMITS.business.layouts).toContain('single')
    expect(PLAN_LIMITS.business.layouts).toContain('badge')
    expect(PLAN_LIMITS.business.layouts).toContain('popup')
  })

  it('all plans have required properties', () => {
    for (const plan of plans) {
      const limits = PLAN_LIMITS[plan]
      expect(typeof limits.projects).toBe('number')
      expect(typeof limits.testimonials).toBe('number')
      expect(typeof limits.video).toBe('boolean')
      expect(typeof limits.audio).toBe('boolean')
      expect(typeof limits.removeBranding).toBe('boolean')
      expect(Array.isArray(limits.layouts)).toBe(true)
      expect(typeof limits.seats).toBe('number')
      expect(typeof limits.miniSite).toBe('boolean')
    }
  })
})

describe('STRIPE_PRICES', () => {
  it('has minisite, pro, and business plans', () => {
    expect(STRIPE_PRICES.minisite).toBeDefined()
    expect(STRIPE_PRICES.pro).toBeDefined()
    expect(STRIPE_PRICES.business).toBeDefined()
  })

  it('each plan has monthly price ID and name', () => {
    for (const plan of ['minisite', 'pro', 'business'] as const) {
      expect(STRIPE_PRICES[plan]).toHaveProperty('monthly')
      expect(STRIPE_PRICES[plan]).toHaveProperty('name')
      expect(STRIPE_PRICES[plan]).toHaveProperty('price')
      expect(typeof STRIPE_PRICES[plan].price).toBe('number')
      expect(STRIPE_PRICES[plan].price).toBeGreaterThan(0)
    }
  })

  it('prices are in ascending order', () => {
    expect(STRIPE_PRICES.minisite.price).toBeLessThan(STRIPE_PRICES.pro.price)
    expect(STRIPE_PRICES.pro.price).toBeLessThan(STRIPE_PRICES.business.price)
  })
})

describe('WIDGET_LAYOUTS', () => {
  it('has all 6 layouts', () => {
    expect(WIDGET_LAYOUTS.length).toBe(6)
  })

  it('carousel and grid are not pro-only', () => {
    const carousel = WIDGET_LAYOUTS.find(l => l.value === 'carousel')
    const grid = WIDGET_LAYOUTS.find(l => l.value === 'grid')
    expect(carousel?.proOnly).toBe(false)
    expect(grid?.proOnly).toBe(false)
  })

  it('wall, single, badge, popup are pro-only', () => {
    const proLayouts = ['wall', 'single', 'badge', 'popup']
    for (const value of proLayouts) {
      const layout = WIDGET_LAYOUTS.find(l => l.value === value)
      expect(layout?.proOnly).toBe(true)
    }
  })
})
