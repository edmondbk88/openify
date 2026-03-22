import { analyzeSentiment } from '@/lib/sentiment'

describe('analyzeSentiment', () => {
  describe('positive text', () => {
    it('detects positive sentiment in Spanish', () => {
      const result = analyzeSentiment('El servicio fue excelente y el equipo muy profesional. Recomiendo totalmente.')
      expect(result.score).toBeGreaterThan(0)
      expect(result.label).toMatch(/positivo/)
    })

    it('returns muy_positivo for very positive text', () => {
      const result = analyzeSentiment('Increíble servicio, excelente atención, fantástico resultado. Impecable.')
      expect(result.score).toBeGreaterThan(0.6)
      expect(result.label).toBe('muy_positivo')
    })
  })

  describe('negative text', () => {
    it('detects negative sentiment in Spanish', () => {
      const result = analyzeSentiment('El servicio fue terrible, una experiencia horrible y decepcionante.')
      expect(result.score).toBeLessThan(0)
      expect(result.label).toMatch(/negativo/)
    })

    it('returns muy_negativo for very negative text', () => {
      const result = analyzeSentiment('Terrible, horrible, pésimo servicio. Una estafa desastrosa.')
      expect(result.score).toBeLessThan(-0.6)
      expect(result.label).toBe('muy_negativo')
    })
  })

  describe('neutral text', () => {
    it('returns neutral for text without sentiment words', () => {
      const result = analyzeSentiment('El producto llegó el martes por la tarde a la oficina.')
      expect(result.label).toBe('neutral')
      expect(result.score).toBe(0)
    })
  })

  describe('intensifiers', () => {
    it('intensifier "muy" increases positive weight against negative', () => {
      // With a negative word present, the intensifier on the positive word tips the balance more
      const withoutIntensifier = analyzeSentiment('bueno pero lento')
      const withIntensifier = analyzeSentiment('muy bueno pero lento')
      expect(withIntensifier.score).toBeGreaterThan(withoutIntensifier.score)
    })

    it('intensifier "super" increases positive weight against negative', () => {
      const withoutIntensifier = analyzeSentiment('bueno pero lento')
      const withIntensifier = analyzeSentiment('super bueno pero lento')
      expect(withIntensifier.score).toBeGreaterThan(withoutIntensifier.score)
    })
  })

  describe('negations', () => {
    it('negation "no" flips positive word to negative', () => {
      const result = analyzeSentiment('no bueno')
      // "no bueno" should produce a negative contribution
      expect(result.score).toBeLessThan(0)
    })

    it('negation "nunca" flips sentiment', () => {
      const result = analyzeSentiment('nunca satisfecho con el servicio')
      expect(result.score).toBeLessThan(0)
    })
  })

  describe('key phrase extraction', () => {
    it('extracts key phrases from sentences with strong sentiment words', () => {
      const result = analyzeSentiment(
        'El servicio fue excelente desde el primer día. El equipo fue genial y nos ayudó mucho. La experiencia fue increíble.'
      )
      expect(result.keyPhrases.length).toBeGreaterThan(0)
      expect(result.keyPhrases.length).toBeLessThanOrEqual(3)
    })

    it('returns empty key phrases for neutral text', () => {
      const result = analyzeSentiment('El producto llegó el martes.')
      expect(result.keyPhrases).toEqual([])
    })
  })

  describe('summary generation', () => {
    it('generates summary for positive text', () => {
      const result = analyzeSentiment('El servicio fue excelente y profesional.')
      expect(result.summary).toContain('positivo')
      expect(result.summary).toContain('Destaca')
    })

    it('generates summary for negative text', () => {
      const result = analyzeSentiment('El servicio fue terrible y horrible.')
      expect(result.summary).toContain('negativo')
      expect(result.summary).toContain('Menciona')
    })

    it('generates summary for neutral text', () => {
      const result = analyzeSentiment('El producto llegó el martes.')
      expect(result.summary).toContain('neutral')
    })
  })

  describe('return structure', () => {
    it('returns all expected fields', () => {
      const result = analyzeSentiment('Buen servicio.')
      expect(result).toHaveProperty('score')
      expect(result).toHaveProperty('label')
      expect(result).toHaveProperty('keyPhrases')
      expect(result).toHaveProperty('summary')
      expect(typeof result.score).toBe('number')
      expect(typeof result.label).toBe('string')
      expect(Array.isArray(result.keyPhrases)).toBe(true)
      expect(typeof result.summary).toBe('string')
    })

    it('score is between -1 and 1', () => {
      const texts = [
        'Excelente servicio increíble fantástico',
        'Terrible horrible pésimo desastroso',
        'El producto llegó el martes.',
      ]
      for (const text of texts) {
        const result = analyzeSentiment(text)
        expect(result.score).toBeGreaterThanOrEqual(-1)
        expect(result.score).toBeLessThanOrEqual(1)
      }
    })
  })
})
