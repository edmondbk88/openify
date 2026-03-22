import { projectSchema, testimonialSchema, loginSchema, registerSchema } from '@/lib/validations'

describe('projectSchema', () => {
  const validProject = {
    name: 'Mi Proyecto',
    website_url: 'https://example.com',
    brand_color: '#6366f1',
    collection_title: 'Deja tu opinión aquí',
    collection_description: 'Queremos saber qué piensas',
    thank_you_message: 'Gracias por tu testimonio',
  }

  it('validates correct data', () => {
    const result = projectSchema.safeParse(validProject)
    expect(result.success).toBe(true)
  })

  it('rejects name shorter than 2 chars', () => {
    const result = projectSchema.safeParse({ ...validProject, name: 'A' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid brand color', () => {
    const result = projectSchema.safeParse({ ...validProject, brand_color: 'not-a-color' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid website URL', () => {
    const result = projectSchema.safeParse({ ...validProject, website_url: 'not-a-url' })
    expect(result.success).toBe(false)
  })

  it('allows empty website URL', () => {
    const result = projectSchema.safeParse({ ...validProject, website_url: '' })
    expect(result.success).toBe(true)
  })

  it('rejects short collection title', () => {
    const result = projectSchema.safeParse({ ...validProject, collection_title: 'Hi' })
    expect(result.success).toBe(false)
  })

  it('rejects short thank you message', () => {
    const result = projectSchema.safeParse({ ...validProject, thank_you_message: 'Thx' })
    expect(result.success).toBe(false)
  })
})

describe('testimonialSchema', () => {
  const validTestimonial = {
    project_id: '550e8400-e29b-41d4-a716-446655440000',
    author_name: 'Juan García',
    author_email: 'juan@example.com',
    author_company: 'Mi Empresa',
    author_role: 'CEO',
    content: 'Este servicio es excelente, lo recomiendo mucho.',
    rating: 5,
  }

  it('validates correct data', () => {
    const result = testimonialSchema.safeParse(validTestimonial)
    expect(result.success).toBe(true)
  })

  it('rejects missing required fields', () => {
    const result = testimonialSchema.safeParse({})
    expect(result.success).toBe(false)
  })

  it('rejects invalid project_id (not UUID)', () => {
    const result = testimonialSchema.safeParse({ ...validTestimonial, project_id: 'not-uuid' })
    expect(result.success).toBe(false)
  })

  it('rejects short author name', () => {
    const result = testimonialSchema.safeParse({ ...validTestimonial, author_name: 'A' })
    expect(result.success).toBe(false)
  })

  it('rejects short content', () => {
    const result = testimonialSchema.safeParse({ ...validTestimonial, content: 'Bien' })
    expect(result.success).toBe(false)
  })

  it('rejects rating below 1', () => {
    const result = testimonialSchema.safeParse({ ...validTestimonial, rating: 0 })
    expect(result.success).toBe(false)
  })

  it('rejects rating above 5', () => {
    const result = testimonialSchema.safeParse({ ...validTestimonial, rating: 6 })
    expect(result.success).toBe(false)
  })

  it('allows empty author email', () => {
    const result = testimonialSchema.safeParse({ ...validTestimonial, author_email: '' })
    expect(result.success).toBe(true)
  })

  it('rejects invalid email format', () => {
    const result = testimonialSchema.safeParse({ ...validTestimonial, author_email: 'not-email' })
    expect(result.success).toBe(false)
  })
})

describe('loginSchema', () => {
  it('validates correct email + password', () => {
    const result = loginSchema.safeParse({ email: 'user@example.com', password: 'password123' })
    expect(result.success).toBe(true)
  })

  it('rejects invalid email', () => {
    const result = loginSchema.safeParse({ email: 'not-email', password: 'password123' })
    expect(result.success).toBe(false)
  })

  it('rejects short password', () => {
    const result = loginSchema.safeParse({ email: 'user@example.com', password: '12345' })
    expect(result.success).toBe(false)
  })

  it('rejects missing fields', () => {
    expect(loginSchema.safeParse({}).success).toBe(false)
    expect(loginSchema.safeParse({ email: 'user@example.com' }).success).toBe(false)
    expect(loginSchema.safeParse({ password: 'password123' }).success).toBe(false)
  })
})

describe('registerSchema', () => {
  it('validates full_name + email + password', () => {
    const result = registerSchema.safeParse({
      full_name: 'Juan García',
      email: 'juan@example.com',
      password: 'password123',
    })
    expect(result.success).toBe(true)
  })

  it('rejects short full_name', () => {
    const result = registerSchema.safeParse({
      full_name: 'J',
      email: 'juan@example.com',
      password: 'password123',
    })
    expect(result.success).toBe(false)
  })

  it('rejects invalid email', () => {
    const result = registerSchema.safeParse({
      full_name: 'Juan García',
      email: 'invalid',
      password: 'password123',
    })
    expect(result.success).toBe(false)
  })

  it('rejects short password', () => {
    const result = registerSchema.safeParse({
      full_name: 'Juan García',
      email: 'juan@example.com',
      password: '123',
    })
    expect(result.success).toBe(false)
  })
})
