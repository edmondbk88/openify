/**
 * Rule-based Spanish sentiment analyzer for testimonials.
 * No external AI API needed.
 */

const POSITIVE_WORDS: Record<string, number> = {
  // Very strong positive (weight 2)
  excelente: 2, increíble: 2, excepcional: 2, extraordinario: 2, impecable: 2,
  fantástico: 2, espectacular: 2, maravilloso: 2, sobresaliente: 2, inmejorable: 2,
  perfecto: 2, impresionante: 2, fenomenal: 2, brillante: 2, magistral: 2,
  // Strong positive (weight 1.5)
  genial: 1.5, encantó: 1.5, encanta: 1.5, recomiendo: 1.5, mejor: 1.5,
  profesional: 1.5, confianza: 1.5, satisfecho: 1.5, satisfecha: 1.5,
  estupendo: 1.5, magnífico: 1.5, destacado: 1.5, superó: 1.5, supera: 1.5,
  // Standard positive (weight 1)
  bueno: 1, buena: 1, bien: 1, agradable: 1, amable: 1,
  atento: 1, atenta: 1, rápido: 1, rápida: 1, eficiente: 1,
  calidad: 1, útil: 1, cómodo: 1, cómoda: 1, fiable: 1,
  puntual: 1, dedicado: 1, dedicada: 1, agradecido: 1, agradecida: 1,
  contento: 1, contenta: 1, feliz: 1, encantado: 1, encantada: 1,
  positivo: 1, positiva: 1, correcto: 1, correcta: 1, cumplió: 1,
  cumple: 1, resolvió: 1, resuelve: 1, ayudó: 1, ayuda: 1,
  facilidad: 1, sencillo: 1, sencilla: 1, innovador: 1, innovadora: 1,
  vale: 1, merece: 1, oportuno: 1, oportuna: 1, acertado: 1,
  acertada: 1, exitoso: 1, exitosa: 1, logró: 1, logra: 1,
}

const NEGATIVE_WORDS: Record<string, number> = {
  // Very strong negative (weight 2)
  terrible: 2, horrible: 2, pésimo: 2, pésima: 2, desastroso: 2,
  desastrosa: 2, nefasto: 2, nefasta: 2, inaceptable: 2, vergonzoso: 2,
  vergonzosa: 2, estafa: 2, fraude: 2,
  // Strong negative (weight 1.5)
  malo: 1.5, mala: 1.5, decepción: 1.5, decepcionante: 1.5, frustrante: 1.5,
  insatisfecho: 1.5, insatisfecha: 1.5, lamentable: 1.5, mediocre: 1.5,
  deficiente: 1.5, incompetente: 1.5, inútil: 1.5,
  // Standard negative (weight 1)
  problema: 1, problemas: 1, error: 1, errores: 1, lento: 1,
  lenta: 1, caro: 1, cara: 1, difícil: 1, complicado: 1,
  complicada: 1, confuso: 1, confusa: 1, falta: 1, faltan: 1,
  demora: 1, tardó: 1, tarda: 1, peor: 1, empeoró: 1,
  molesto: 1, molesta: 1, incómodo: 1, incómoda: 1, arrepiento: 1,
  queja: 1, quejas: 1, roto: 1, rota: 1, fallo: 1,
  falló: 1, perdí: 1, perdida: 1, pérdida: 1,
}

const INTENSIFIERS: Record<string, number> = {
  muy: 1.5,
  super: 1.5,
  súper: 1.5,
  bastante: 1.3,
  realmente: 1.4,
  totalmente: 1.5,
  completamente: 1.5,
  absolutamente: 1.5,
  extremadamente: 1.8,
  tremendamente: 1.7,
  sumamente: 1.6,
  demasiado: 1.3,
  especialmente: 1.3,
  verdaderamente: 1.4,
  increíblemente: 1.6,
}

const NEGATIONS = new Set([
  'no', 'nunca', 'ni', 'tampoco', 'jamás', 'sin', 'ningún', 'ninguno', 'ninguna', 'nada',
])

type SentimentLabel = 'muy_positivo' | 'positivo' | 'neutral' | 'negativo' | 'muy_negativo'

export interface SentimentResult {
  score: number
  label: SentimentLabel
  keyPhrases: string[]
  summary: string
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function normalizeKeepAccents(text: string): string {
  return text.toLowerCase()
}

export function analyzeSentiment(text: string): SentimentResult {
  const normalizedText = normalizeKeepAccents(text)
  const normalizedNoAccents = normalize(text)

  // Tokenize (split by non-word characters, keeping Spanish chars)
  const words = normalizedText.split(/[^a-záéíóúüñ]+/).filter(Boolean)
  const wordsNoAccents = normalizedNoAccents.split(/[^a-z]+/).filter(Boolean)

  let positiveScore = 0
  let negativeScore = 0
  const matchedPositive: string[] = []
  const matchedNegative: string[] = []

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const wordNoAccent = wordsNoAccents[i]

    // Check if previous word is a negation
    const prevWord = i > 0 ? wordsNoAccents[i - 1] : ''
    const isNegated = NEGATIONS.has(prevWord)

    // Check for intensifier
    let intensifier = 1
    if (i > 0) {
      const prevOriginal = words[i - 1]
      if (INTENSIFIERS[prevOriginal]) {
        intensifier = INTENSIFIERS[prevOriginal]
      }
      const prevNoAccent = wordsNoAccents[i - 1]
      if (INTENSIFIERS[prevNoAccent]) {
        intensifier = INTENSIFIERS[prevNoAccent]
      }
    }

    // Look up word (try both with and without accents)
    const posWeight = POSITIVE_WORDS[word] || POSITIVE_WORDS[wordNoAccent] || 0
    const negWeight = NEGATIVE_WORDS[word] || NEGATIVE_WORDS[wordNoAccent] || 0

    if (posWeight > 0) {
      if (isNegated) {
        negativeScore += posWeight * intensifier * 0.5
        matchedNegative.push(`no ${word}`)
      } else {
        positiveScore += posWeight * intensifier
        matchedPositive.push(word)
      }
    }

    if (negWeight > 0) {
      if (isNegated) {
        positiveScore += negWeight * intensifier * 0.3
        matchedPositive.push(`no ${word}`)
      } else {
        negativeScore += negWeight * intensifier
        matchedNegative.push(word)
      }
    }
  }

  // Calculate score from -1 to 1
  const total = positiveScore + negativeScore
  let score: number
  if (total === 0) {
    score = 0
  } else {
    score = (positiveScore - negativeScore) / total
  }

  // Clamp to -1..1
  score = Math.max(-1, Math.min(1, score))

  // Determine label
  let label: SentimentLabel
  if (score > 0.6) label = 'muy_positivo'
  else if (score > 0.2) label = 'positivo'
  else if (score > -0.2) label = 'neutral'
  else if (score > -0.6) label = 'negativo'
  else label = 'muy_negativo'

  // Extract key phrases: sentences containing strong sentiment words
  const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(Boolean)
  const keyPhrases: string[] = []

  for (const sentence of sentences) {
    const sentNorm = normalize(sentence)
    const sentWords = sentNorm.split(/[^a-z]+/).filter(Boolean)

    const hasStrong = sentWords.some(w => {
      const pos = POSITIVE_WORDS[w] || 0
      const neg = NEGATIVE_WORDS[w] || 0
      return pos >= 1.5 || neg >= 1.5
    })

    if (hasStrong && sentence.length > 10 && sentence.length < 200) {
      keyPhrases.push(sentence)
    }
  }

  // Keep max 3 key phrases
  const finalPhrases = keyPhrases.slice(0, 3)

  // Generate summary
  const summary = generateSummary(label, matchedPositive, matchedNegative, score)

  return {
    score: Math.round(score * 100) / 100,
    label,
    keyPhrases: finalPhrases,
    summary,
  }
}

function generateSummary(
  label: SentimentLabel,
  positive: string[],
  negative: string[],
  score: number,
): string {
  const labelMap: Record<SentimentLabel, string> = {
    muy_positivo: 'Testimonio muy positivo',
    positivo: 'Testimonio positivo',
    neutral: 'Testimonio neutral',
    negativo: 'Testimonio negativo',
    muy_negativo: 'Testimonio muy negativo',
  }

  const base = labelMap[label]

  // Deduplicate highlights
  const uniquePositive = Array.from(new Set(positive.map(w => w.replace(/^no /, ''))))
  const uniqueNegative = Array.from(new Set(negative.map(w => w.replace(/^no /, ''))))

  if (score > 0 && uniquePositive.length > 0) {
    const highlights = uniquePositive.slice(0, 3).join(', ')
    return `${base}. Destaca: ${highlights}.`
  }

  if (score < 0 && uniqueNegative.length > 0) {
    const highlights = uniqueNegative.slice(0, 3).join(', ')
    return `${base}. Menciona: ${highlights}.`
  }

  if (score === 0 && positive.length === 0 && negative.length === 0) {
    return `${base}. Sin palabras clave de sentimiento detectadas.`
  }

  return `${base}.`
}
