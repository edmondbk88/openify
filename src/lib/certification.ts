export type CertificationTier = 'none' | 'bronze' | 'silver' | 'gold' | 'platinum'

export function getCertificationTier(approvedCount: number): CertificationTier {
  if (approvedCount >= 200) return 'platinum'
  if (approvedCount >= 50) return 'gold'
  if (approvedCount >= 20) return 'silver'
  if (approvedCount >= 5) return 'bronze'
  return 'none'
}

export function getNextTier(currentTier: CertificationTier): { tier: CertificationTier; threshold: number } | null {
  switch (currentTier) {
    case 'none': return { tier: 'bronze', threshold: 5 }
    case 'bronze': return { tier: 'silver', threshold: 20 }
    case 'silver': return { tier: 'gold', threshold: 50 }
    case 'gold': return { tier: 'platinum', threshold: 200 }
    case 'platinum': return null
  }
}

export function getTierThreshold(tier: CertificationTier): number {
  switch (tier) {
    case 'none': return 0
    case 'bronze': return 5
    case 'silver': return 20
    case 'gold': return 50
    case 'platinum': return 200
  }
}

export function getTierColor(tier: CertificationTier): { bg: string; text: string; border: string; hex: string } {
  switch (tier) {
    case 'bronze': return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300', hex: '#CD7F32' }
    case 'silver': return { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-300', hex: '#C0C0C0' }
    case 'gold': return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300', hex: '#FFD700' }
    case 'platinum': return { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-300', hex: '#E5E4E2' }
    default: return { bg: 'bg-gray-50', text: 'text-gray-400', border: 'border-gray-200', hex: '#9CA3AF' }
  }
}

export function getTierLabel(tier: CertificationTier, locale: 'es' | 'en' = 'es'): string {
  const labels = {
    es: { none: 'Sin certificación', bronze: 'Bronce', silver: 'Plata', gold: 'Oro', platinum: 'Platino' },
    en: { none: 'No certification', bronze: 'Bronze', silver: 'Silver', gold: 'Gold', platinum: 'Platinum' },
  }
  return labels[locale][tier]
}
