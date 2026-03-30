export interface City {
  slug: string
  name: string
  country: string
  región?: string
}

export const cities: City[] = [
  // Spain
  { slug: 'madrid', name: 'Madrid', country: 'España', región: 'Comunidad de Madrid' },
  { slug: 'barcelona', name: 'Barcelona', country: 'España', región: 'Cataluña' },
  { slug: 'valencia', name: 'Valencia', country: 'España', región: 'Comunidad Valenciana' },
  { slug: 'sevilla', name: 'Sevilla', country: 'España', región: 'Andalucía' },
  { slug: 'malaga', name: 'Málaga', country: 'España', región: 'Andalucía' },
  { slug: 'bilbao', name: 'Bilbao', country: 'España', región: 'País Vasco' },
  { slug: 'zaragoza', name: 'Zaragoza', country: 'España', región: 'Aragón' },
  { slug: 'alicante', name: 'Alicante', country: 'España', región: 'Comunidad Valenciana' },
  { slug: 'palma-mallorca', name: 'Palma de Mallorca', country: 'España', región: 'Islas Baleares' },
  { slug: 'las-palmas', name: 'Las Palmas de Gran Canaria', country: 'España', región: 'Canarias' },
  // Mexico
  { slug: 'ciudad-de-mexico', name: 'Ciudad de México', country: 'México' },
  { slug: 'guadalajara', name: 'Guadalajara', country: 'México' },
  { slug: 'monterrey', name: 'Monterrey', country: 'México' },
  // Colombia
  { slug: 'bogota', name: 'Bogotá', country: 'Colombia' },
  { slug: 'medellin', name: 'Medellín', country: 'Colombia' },
  // Argentina
  { slug: 'buenos-aires', name: 'Buenos Aires', country: 'Argentina' },
  // Chile
  { slug: 'santiago', name: 'Santiago de Chile', country: 'Chile' },
  // Peru
  { slug: 'lima', name: 'Lima', country: 'Perú' },
  // USA (Spanish-speaking markets)
  { slug: 'miami', name: 'Miami', country: 'Estados Unidos' },
  { slug: 'los-angeles', name: 'Los Angeles', country: 'Estados Unidos' },
]

/** Top 20 industries by search potential for city+industry programmatic SEO */
export const topIndustrySlugs = [
  'restaurantes',
  'clinicas-medicas',
  'abogados',
  'dentistas',
  'inmobiliarias',
  'gimnasios',
  'peluquerias',
  'veterinarias',
  'fotografos',
  'coaches',
  'hoteles',
  'tiendas-online',
  'psicologos',
  'nutricionistas',
  'academias',
  'arquitectos',
  'contadores',
  'agencias-marketing',
  'clinicas-estetica',
  'mecánicos',
] as const
