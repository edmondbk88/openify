/** City characteristics - unique descriptions relevant to local business */
const cityDescriptions: Record<string, string> = {
  // Spain
  madrid:
    'capital de Espana y centro neuralgico de negocios, servicios financieros y administracion publica, con mas de 3,3 millones de habitantes y un area metropolitana que supera los 6 millones',
  barcelona:
    'hub tecnologico y turistico del Mediterraneo, con un ecosistema emprendedor vibrante, mas de 1,6 millones de habitantes y una fuerte proyeccion internacional gracias a eventos como el Mobile World Congress',
  valencia:
    'tercera ciudad mas grande de Espana, reconocida por su gastronomia, innovacion en arquitectura y un creciente polo tecnologico que atrae startups y talento digital',
  sevilla:
    'capital andaluza y referente en turismo, hosteleria y cultura, con un patrimonio historico que atrae millones de visitantes al ano y una economia local dinamica',
  malaga:
    'capital de la Costa del Sol, convertida en un polo tecnologico europeo gracias al Malaga TechPark, con un turismo internacional de primer nivel y un sector servicios en auge',
  bilbao:
    'motor economico del Pais Vasco, ciudad reinventada como destino cultural y gastronomico, con un tejido industrial solido y alta renta per capita',
  zaragoza:
    'capital de Aragon, estrategicamente situada entre Madrid y Barcelona, con un fuerte sector logistico, automovilistico y una universidad con mas de 30.000 estudiantes',
  alicante:
    'capital de la Costa Blanca, con un importante sector turistico y residencial, una comunidad internacional creciente y un ecosistema digital impulsado por el Distrito Digital',
  'palma-mallorca':
    'capital balear y destino turistico premium, con una economia altamente estacional que depende de la hosteleria, el comercio nautico y los servicios de lujo',
  'las-palmas':
    'capital de Gran Canaria, puerta de entrada al turismo europeo en las Islas Canarias, con un clima privilegiado y un sector servicios que representa el 85% de su PIB',
  // Mexico
  'ciudad-de-mexico':
    'la mayor metropoli de habla hispana con mas de 21 millones de habitantes en su zona metropolitana, epicentro economico y cultural de Mexico',
  guadalajara:
    'capital de Jalisco y el Silicon Valley mexicano, sede de grandes empresas tecnologicas y una creciente escena de startups y emprendimiento digital',
  monterrey:
    'capital industrial del norte de Mexico, sede de los mayores corporativos del pais y un ecosistema empresarial orientado a la manufactura, tecnologia y exportacion',
  // Colombia
  bogota:
    'capital de Colombia con mas de 8 millones de habitantes, centro financiero y de servicios del pais, con un sector tecnologico en rapido crecimiento',
  medellin:
    'conocida como la ciudad de la innovacion, transformada en un referente de emprendimiento y tecnologia en Latinoamerica, con un ecosistema empresarial vibrante',
  // Argentina
  'buenos-aires':
    'capital de Argentina y centro cultural de Sudamerica, con una economia diversificada en servicios, tecnologia, diseno y gastronomia de clase mundial',
  // Chile
  santiago:
    'capital de Chile y centro financiero mas estable de Latinoamerica, con un mercado sofisticado, alta penetracion digital y consumidores exigentes',
  // Peru
  lima:
    'capital de Peru y capital gastronomica de Latinoamerica, con un mercado de mas de 10 millones de personas y un sector servicios en constante expansion',
  // USA
  miami:
    'puerta de entrada del mercado hispanohablante en Estados Unidos, con una comunidad latina de mas del 70% de la poblacion y un ecosistema de negocios bilingue unico',
  'los-angeles':
    'la mayor concentracion de poblacion hispana en EE.UU., con millones de consumidores hispanohablantes y un mercado diverso que abarca entretenimiento, tecnologia y comercio',
}

/** Industry categories for contextual FAQ generation */
type IndustryCategory =
  | 'salud'
  | 'servicios-profesionales'
  | 'comercio'
  | 'hosteleria'
  | 'bienestar'
  | 'educacion'
  | 'creativo'
  | 'tecnologia'
  | 'vehiculos'

const industryCategories: Record<string, IndustryCategory> = {
  restaurantes: 'hosteleria',
  hoteles: 'hosteleria',
  'clinicas-medicas': 'salud',
  dentistas: 'salud',
  veterinarias: 'salud',
  psicologos: 'salud',
  nutricionistas: 'salud',
  'clinicas-estetica': 'salud',
  abogados: 'servicios-profesionales',
  contadores: 'servicios-profesionales',
  arquitectos: 'servicios-profesionales',
  'asesores-financieros': 'servicios-profesionales',
  inmobiliarias: 'comercio',
  'tiendas-online': 'comercio',
  gimnasios: 'bienestar',
  peluquerias: 'bienestar',
  coaches: 'bienestar',
  academias: 'educacion',
  fotografos: 'creativo',
  'agencias-marketing': 'tecnologia',
  mecanicos: 'vehiculos',
}

/** City size tiers */
type CityTier = 'grande' | 'mediana' | 'pequena'

const cityTiers: Record<string, CityTier> = {
  madrid: 'grande',
  barcelona: 'grande',
  'ciudad-de-mexico': 'grande',
  bogota: 'grande',
  lima: 'grande',
  'buenos-aires': 'grande',
  'los-angeles': 'grande',
  santiago: 'grande',
  guadalajara: 'mediana',
  monterrey: 'mediana',
  valencia: 'mediana',
  sevilla: 'mediana',
  medellin: 'mediana',
  miami: 'mediana',
  malaga: 'mediana',
  bilbao: 'pequena',
  zaragoza: 'mediana',
  alicante: 'pequena',
  'palma-mallorca': 'pequena',
  'las-palmas': 'pequena',
}

export function getCityDescription(citySlug: string): string {
  return cityDescriptions[citySlug] || ''
}

interface FAQ {
  question: string
  answer: string
}

export function generateCityIndustryFAQs(
  citySlug: string,
  cityName: string,
  industrySlug: string,
  industryName: string
): FAQ[] {
  const category = industryCategories[industrySlug] || 'servicios-profesionales'
  const tier = cityTiers[citySlug] || 'mediana'
  const industryLower = industryName.toLowerCase()

  const faqs: FAQ[] = []

  // FAQ 1: Varies by city tier
  if (tier === 'grande') {
    faqs.push({
      question: `¿Como pueden los testimonios ayudar a mi negocio de ${industryLower} a destacar en un mercado tan competitivo como ${cityName}?`,
      answer: `En una ciudad grande como ${cityName}, la competencia entre negocios de ${industryLower} es intensa. Los testimonios verificados te permiten diferenciarte de cientos de competidores mostrando experiencias reales de clientes satisfechos. Cuando un potencial cliente en ${cityName} busca "${industryLower} cerca de mi", ver opiniones autenticas genera la confianza necesaria para elegirte frente a las decenas de alternativas disponibles. Ademas, el contenido generado por tus clientes mejora tu posicionamiento en busquedas locales de ${cityName}.`,
    })
  } else if (tier === 'mediana') {
    faqs.push({
      question: `¿Son efectivos los testimonios para ${industryLower} en una ciudad como ${cityName}?`,
      answer: `Absolutamente. En una ciudad de tamano medio como ${cityName}, el boca a boca digital es aun mas poderoso porque la comunidad es mas conectada. Los testimonios de clientes locales en ${cityName} generan un efecto de confianza multiplicado: cuando un vecino ve que otro residente recomienda tu negocio de ${industryLower}, la probabilidad de conversion aumenta significativamente. Opinafy te permite capitalizar esa dinamica comunitaria mostrando testimonios verificados directamente en tu web.`,
    })
  } else {
    faqs.push({
      question: `¿Merece la pena invertir en testimonios para ${industryLower} en ${cityName}?`,
      answer: `En ciudades mas especializadas como ${cityName}, los testimonios tienen un impacto desproporcionado. Con menos negocios de ${industryLower} compitiendo, cada testimonio positivo te posiciona como la referencia local. Los habitantes de ${cityName} tienden a buscar recomendaciones de personas cercanas, y tener testimonios visibles en tu web cubre esa necesidad. Con el plan gratuito de Opinafy puedes empezar sin coste y comprobar el efecto en tus conversiones.`,
    })
  }

  // FAQ 2: Varies by industry category
  switch (category) {
    case 'salud':
      faqs.push({
        question: `¿Como gestionar testimonios de pacientes en ${industryLower} respetando la privacidad en ${cityName}?`,
        answer: `En el sector salud, la privacidad del paciente es prioritaria. Opinafy permite recopilar testimonios donde el paciente decide que informacion compartir. Puedes configurar formularios que recojan solo el nombre y la experiencia general, sin datos clinicos sensibles. Muchos negocios de ${industryLower} en ${cityName} recogen testimonios enfocados en la atencion recibida, la profesionalidad del equipo y la experiencia general, sin mencionar diagnosticos o tratamientos especificos. Esto cumple con la normativa de proteccion de datos y sigue generando confianza.`,
      })
      break
    case 'hosteleria':
      faqs.push({
        question: `¿Cual es la mejor forma de pedir testimonios a los clientes de mi negocio de ${industryLower} en ${cityName}?`,
        answer: `Para ${industryLower} en ${cityName}, el momento ideal es justo despues de la experiencia positiva. Puedes colocar un codigo QR en la mesa, la cuenta o la recepcion que enlace directamente a tu formulario de Opinafy. Tambien funciona muy bien enviar un enlace por WhatsApp a las pocas horas de la visita. Los negocios de ${industryLower} en ${cityName} que piden testimonios de forma proactiva recopilan entre 5 y 10 veces mas opiniones que los que esperan a que el cliente lo haga por su cuenta.`,
      })
      break
    case 'servicios-profesionales':
      faqs.push({
        question: `¿Que tipo de testimonios funcionan mejor para ${industryLower} en ${cityName}?`,
        answer: `Para servicios profesionales como ${industryLower} en ${cityName}, los testimonios mas efectivos son los que mencionan resultados concretos y la experiencia de trabajo. Por ejemplo, testimonios que destaquen la rapidez de respuesta, la claridad en la comunicacion, el resultado obtenido o la relacion calidad-precio. Los clientes potenciales en ${cityName} buscan profesionales de confianza, y un testimonio detallado de otro cliente local genera mas credibilidad que cualquier descripcion propia de tus servicios.`,
      })
      break
    case 'comercio':
      faqs.push({
        question: `¿Como pueden los testimonios aumentar las ventas de mi negocio de ${industryLower} en ${cityName}?`,
        answer: `Para ${industryLower} en ${cityName}, los testimonios actuan como el vendedor mas convincente. Colocar testimonios junto a tus productos o servicios destacados puede aumentar las conversiones hasta un 34%. En ${cityName}, donde los consumidores comparan multiples opciones online, ver que otros clientes locales estan satisfechos reduce la friccion de compra. Opinafy te permite mostrar testimonios con widgets personalizables en las paginas mas importantes: inicio, productos estrella y proceso de pago.`,
      })
      break
    case 'bienestar':
      faqs.push({
        question: `¿Como aprovechar los testimonios para fidelizar clientes de ${industryLower} en ${cityName}?`,
        answer: `En ${industryLower}, la fidelizacion es clave para el crecimiento sostenible. En ${cityName}, los clientes que dejan un testimonio positivo tienen un 70% mas de probabilidad de volver. El acto de recomendar refuerza su compromiso con tu negocio. Ademas, puedes usar los testimonios como contenido para redes sociales, mostrando historias reales de transformacion de clientes en ${cityName}. Opinafy facilita este ciclo: el cliente deja su testimonio, tu lo publicas, y nuevos clientes llegan gracias a esa recomendacion.`,
      })
      break
    case 'educacion':
      faqs.push({
        question: `¿Que impacto tienen los testimonios de alumnos en la captacion de nuevos estudiantes para ${industryLower} en ${cityName}?`,
        answer: `Los testimonios de alumnos y exalumnos son el factor de decision numero uno para nuevos estudiantes. En ${cityName}, donde la oferta formativa es amplia, un testimonio que detalle la experiencia de aprendizaje, la calidad del profesorado y los resultados obtenidos tras la formacion marca la diferencia. Las ${industryLower} en ${cityName} que muestran testimonios en su web y landing pages de captacion ven un aumento promedio del 25% en matriculaciones respecto a las que no lo hacen.`,
      })
      break
    case 'creativo':
      faqs.push({
        question: `¿Como complementar mi portfolio de ${industryLower} con testimonios efectivos en ${cityName}?`,
        answer: `El portfolio muestra tu trabajo, pero los testimonios muestran la experiencia de trabajar contigo. Para ${industryLower} en ${cityName}, la combinacion de ambos es imbatible. Un testimonio que explique como fue el proceso de trabajo, la comunicacion, el cumplimiento de plazos y la satisfaccion con el resultado final aporta la dimension humana que el portfolio no puede transmitir. Opinafy te permite integrar testimonios junto a tu portfolio para que cada proyecto cuente la historia completa.`,
      })
      break
    case 'tecnologia':
      faqs.push({
        question: `¿Como pueden los testimonios mejorar la captacion de clientes B2B para ${industryLower} en ${cityName}?`,
        answer: `En el mercado B2B de ${cityName}, las decisiones de compra involucran a multiples personas y ciclos largos. Los testimonios de otros negocios en ${cityName} reducen el riesgo percibido y aceleran las decisiones. Para ${industryLower}, los testimonios mas efectivos son los que incluyen metricas concretas: porcentajes de mejora, tiempos de retorno y resultados medibles. Opinafy te permite destacar estos testimonios de alto impacto en tus propuestas comerciales y landing pages.`,
      })
      break
    case 'vehiculos':
      faqs.push({
        question: `¿Como generar confianza con testimonios para ${industryLower} en ${cityName}, donde la desconfianza del sector es alta?`,
        answer: `El sector de ${industryLower} enfrenta un reto de credibilidad particular. En ${cityName}, muchos clientes buscan opiniones antes de confiar su vehiculo a un taller. Los testimonios verificados en tu propia web son mas creibles que las resenas anonimas porque llevan nombre real y se pueden contextualizar. Los negocios de ${industryLower} en ${cityName} que muestran testimonios con detalles del servicio realizado, transparencia en precios y fotos del antes/despues logran tasas de conversion muy superiores.`,
      })
      break
  }

  // FAQ 3: Always unique - combines city tier + industry + practical advice
  if (tier === 'grande' && (category === 'salud' || category === 'servicios-profesionales')) {
    faqs.push({
      question: `¿Cuantos testimonios necesita mi negocio de ${industryLower} en ${cityName} para generar impacto?`,
      answer: `En una ciudad grande como ${cityName}, recomendamos tener al menos 15-20 testimonios publicados para generar una percepcion solida de confianza. Los estudios muestran que a partir de 5 testimonios la conversion ya mejora, pero en mercados competitivos como ${cityName} la cantidad refuerza la credibilidad. Con Opinafy puedes empezar mostrando los primeros testimonios desde el dia uno e ir construyendo tu reputacion de forma consistente. La clave es mantener un flujo constante de nuevos testimonios, idealmente 2-3 por semana.`,
    })
  } else if (tier === 'grande') {
    faqs.push({
      question: `¿Como usar los testimonios para mejorar el SEO local de ${industryLower} en ${cityName}?`,
      answer: `Los testimonios son una fuente de contenido fresco y relevante que Google valora para el posicionamiento local. Cada testimonio de un cliente de ${cityName} que mencione tu negocio de ${industryLower}, el barrio o la zona genera senales de relevancia local. Opinafy estructura los testimonios con marcado Schema.org que los buscadores entienden, lo que puede hacer que tus estrellas aparezcan directamente en los resultados de busqueda. En una ciudad con tanta competencia online como ${cityName}, esta ventaja de SEO puede significar decenas de clientes adicionales al mes.`,
    })
  } else if (tier === 'mediana') {
    faqs.push({
      question: `¿Puedo usar testimonios de ${industryLower} para captar clientes de toda la provincia de ${cityName}?`,
      answer: `Si, y es una estrategia muy inteligente. En una ciudad como ${cityName}, tu alcance real va mas alla del municipio. Los testimonios de clientes de la ciudad y alrededores muestran que eres el referente de ${industryLower} en toda la zona. Opinafy te permite etiquetar testimonios por ubicacion, para que puedas mostrar opiniones relevantes a visitantes de distintas localidades. Esto amplifica tu alcance sin coste adicional, convirtiendo cada testimonio en un argumento de venta para toda tu area de influencia.`,
    })
  } else {
    faqs.push({
      question: `¿Como pueden los testimonios compensar la menor visibilidad online de ${industryLower} en ${cityName}?`,
      answer: `En ciudades mas pequenas como ${cityName}, tu web puede posicionarse mas facilmente en busquedas locales porque hay menos competencia online. Los testimonios potencian esta ventaja de dos formas: generan contenido unico con palabras clave locales y aumentan el tiempo que los visitantes pasan en tu web, ambas senales positivas para Google. Ademas, en ${cityName} la recomendacion personal tiene mucho peso, y los testimonios digitales extienden ese efecto boca a boca las 24 horas del dia.`,
    })
  }

  return faqs
}
