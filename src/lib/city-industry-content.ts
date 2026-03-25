/** City characteristics - unique descriptions relevant to local business */
const cityDescriptions: Record<string, string> = {
  // Spain
  madrid:
    'capital de España y centro neurálgico de negocios, servicios financieros y administración pública, con más de 3,3 millones de habitantes y un área metropolitana que supera los 6 millones',
  barcelona:
    'hub tecnológico y turístico del Mediterráneo, con un ecosistema emprendedor vibrante, más de 1,6 millones de habitantes y una fuerte proyección internacional gracias a eventos como el Mobile World Congress',
  valencia:
    'tercera ciudad más grande de España, reconocida por su gastronomía, innovación en arquitectura y un creciente polo tecnológico que atrae startups y talento digital',
  sevilla:
    'capital andaluza y referente en turismo, hostelería y cultura, con un patrimonio histórico que atrae millones de visitantes al año y una economía local dinámica',
  malaga:
    'capital de la Costa del Sol, convertida en un polo tecnológico europeo gracias al Malaga TechPark, con un turismo internacional de primer nivel y un sector servicios en auge',
  bilbao:
    'motor económico del País Vasco, ciudad reinventada como destino cultural y gastronómico, con un tejido industrial sólido y alta renta per cápita',
  zaragoza:
    'capital de Aragón, estratégicamente situada entre Madrid y Barcelona, con un fuerte sector logístico, automovilístico y una universidad con más de 30.000 estudiantes',
  alicante:
    'capital de la Costa Blanca, con un importante sector turístico y residencial, una comunidad internacional creciente y un ecosistema digital impulsado por el Distrito Digital',
  'palma-mallorca':
    'capital balear y destino turístico premium, con una economía altamente estacional que depende de la hostelería, el comercio náutico y los servicios de lujo',
  'las-palmas':
    'capital de Gran Canaria, puerta de entrada al turismo europeo en las Islas Canarias, con un clima privilegiado y un sector servicios que representa el 85% de su PIB',
  // Mexico
  'ciudad-de-mexico':
    'la mayor metropoli de habla hispana con más de 21 millones de habitantes en su zona metropolitana, epicentro económico y cultural de México',
  guadalajara:
    'capital de Jalisco y el Silicon Valley mexicano, sede de grandes empresas tecnológicas y una creciente escena de startups y emprendimiento digital',
  monterrey:
    'capital industrial del norte de México, sede de los mayores corporativos del país y un ecosistema empresarial orientado a la manufactura, tecnología y exportación',
  // Colombia
  bogota:
    'capital de Colombia con más de 8 millones de habitantes, centro financiero y de servicios del país, con un sector tecnológico en rápido crecimiento',
  medellin:
    'conocida como la ciudad de la innovación, transformada en un referente de emprendimiento y tecnología en Latinoamérica, con un ecosistema empresarial vibrante',
  // Argentina
  'buenos-aires':
    'capital de Argentina y centro cultural de Sudamérica, con una economía diversificada en servicios, tecnología, diseño y gastronomía de clase mundial',
  // Chile
  santiago:
    'capital de Chile y centro financiero más estable de Latinoamérica, con un mercado sofisticado, alta penetración digital y consumidores exigentes',
  // Peru
  lima:
    'capital de Perú y capital gastronómica de Latinoamérica, con un mercado de más de 10 millones de personas y un sector servicios en constante expansion',
  // USA
  miami:
    'puerta de entrada del mercado hispanohablante en Estados Unidos, con una comunidad latina de más del 70% de la población y un ecosistema de negocios bilingüe único',
  'los-angeles':
    'la mayor concentración de población hispana en EE.UU., con millones de consumidores hispanohablantes y un mercado diverso que abarca entretenimiento, tecnología y comercio',
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
export type CityTier = 'grande' | 'mediana' | 'pequena'

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

// ─── EXPANDED CITY DATA ────────────────────────────────────────────────

interface CityProfile {
  population: number
  keyIndustries: string[]
  economicProfile: string
  nearbyRelatedCities: string[] // slugs of 2-3 related/nearby cities
}

const cityProfiles: Record<string, CityProfile> = {
  madrid: {
    population: 3_300_000,
    keyIndustries: ['servicios financieros', 'tecnología', 'turismo', 'administración pública'],
    economicProfile:
      'Madrid concentra el 12,3% del PIB nacional español y alberga la sede de las principales empresas del IBEX 35. Su mercado de servicios profesionales es el más denso de habla hispana, con más de 180.000 pymes activas. La transformación digital avanza a ritmo acelerado, con un 78% de los consumidores madrileños consultando opiniones online antes de contratar un servicio local.',
    nearbyRelatedCities: ['barcelona', 'valencia', 'zaragoza'],
  },
  barcelona: {
    population: 1_620_000,
    keyIndustries: ['tecnología', 'turismo', 'diseño', 'comercio internacional'],
    economicProfile:
      'Barcelona es la segunda economía de España y un polo de atracción para startups europeas, con más de 1.900 empresas tecnológicas activas. El turismo genera el 14% de su PIB local, y su sector creativo y de diseño emplea a más de 45.000 profesionales. Los consumidores barceloneses son especialmente digitales: un 82% busca referencias online antes de una primera compra.',
    nearbyRelatedCities: ['madrid', 'valencia', 'malaga'],
  },
  valencia: {
    population: 800_000,
    keyIndustries: ['turismo', 'agroalimentación', 'cerámica', 'tecnología emergente'],
    economicProfile:
      'Valencia vive un auge emprendedor impulsado por el distrito de Ruzafa y el ecosistema de la Marina de Empresas. Su sector gastronómico genera más de 3.200 millones de euros anuales, y la ciudad se ha posicionado como destino de nomadas digitales con un coste de vida un 30% inferior a Barcelona. Las pymes valencianas compiten cada vez más por la reputación online.',
    nearbyRelatedCities: ['alicante', 'madrid', 'barcelona'],
  },
  sevilla: {
    population: 690_000,
    keyIndustries: ['turismo', 'hostelería', 'aeronáutica', 'agroalimentación'],
    economicProfile:
      'Sevilla es el motor económico de Andalucía, con un sector turístico que recibe más de 3,2 millones de visitantes internacionales al año. La industria aeronáutica emplea a más de 12.000 personas en la zona metropolitana. El comercio local sevillano está en plena transición digital, donde las opiniones de clientes se han convertido en el principal factor de decisión para el 67% de los consumidores.',
    nearbyRelatedCities: ['malaga', 'madrid', 'granada'],
  },
  malaga: {
    population: 580_000,
    keyIndustries: ['tecnología', 'turismo', 'servicios digitales', 'hostelería'],
    economicProfile:
      'Malaga se ha transformado en el principal hub tecnológico del sur de Europa gracias al Malaga TechPark, que alberga más de 630 empresas. Google, Vodafone y Accenture han abierto sedes aquí. El sector turístico genera el 20% del empleo local. Esta combinación de tecnología y turismo crea un mercado donde la presencia digital con prueba social es imprescindible para cualquier negocio.',
    nearbyRelatedCities: ['sevilla', 'granada', 'alicante'],
  },
  bilbao: {
    population: 345_000,
    keyIndustries: ['industria metalúrgica', 'servicios financieros', 'gastronomía', 'cultura'],
    economicProfile:
      'Bilbao tiene la renta per cápita más alta de España y un tejido empresarial dominado por la industria y los servicios avanzados. El efecto Guggenheim transformo la ciudad en un referente cultural y gastronómico, con 18 restaurantes con estrella Michelin en el área metropolitana. Los consumidores vascos valoran especialmente la calidad y la reputación, dedicando un 40% más de tiempo a investigar proveedores antes de contratar.',
    nearbyRelatedCities: ['madrid', 'zaragoza', 'barcelona'],
  },
  zaragoza: {
    population: 675_000,
    keyIndustries: ['logística', 'automocion', 'agroalimentación', 'comercio'],
    economicProfile:
      'Zaragoza es el principal nodo logístico de España por su ubicación equidistante entre Madrid y Barcelona. La plataforma PLAZA es la mayor zona logística del sur de Europa. Opel y más de 300 empresas auxiliares de automocion generan miles de empleos. Con una universidad de 30.000 estudiantes, el mercado local combina tradicion comercial con un consumidor joven cada vez más digital.',
    nearbyRelatedCities: ['madrid', 'barcelona', 'bilbao'],
  },
  alicante: {
    population: 335_000,
    keyIndustries: ['turismo', 'tecnología digital', 'calzado', 'servicios residenciales'],
    economicProfile:
      'Alicante atrae cada año a miles de residentes europeos, creando un mercado bilingüe único en España. El Distrito Digital de la Generalitat concentra más de 100 empresas tecnológicas. El sector turístico y residencial domina la economía, con más de 50.000 expatriados que buscan servicios locales fiables y valoran las recomendaciones online como primer filtro de selección.',
    nearbyRelatedCities: ['valencia', 'malaga', 'palma-mallorca'],
  },
  'palma-mallorca': {
    population: 415_000,
    keyIndustries: ['turismo premium', 'náutica', 'hostelería', 'servicios de lujo'],
    economicProfile:
      'Palma de Mallorca combina un turismo de alto poder adquisitivo con una comunidad residente internacional creciente. El puerto deportivo es el mayor del Mediterráneo occidental. La economía local es altamente estacional, con un pico de abril a octubre, lo que hace que los testimonios sean cruciales para captar clientes en la temporada baja cuando el boca a boca presencial se reduce drásticamente.',
    nearbyRelatedCities: ['barcelona', 'valencia', 'alicante'],
  },
  'las-palmas': {
    population: 380_000,
    keyIndustries: ['turismo', 'comercio portuario', 'energía renovable', 'servicios'],
    economicProfile:
      'Las Palmas de Gran Canaria recibe más de 4 millones de turistas al año y su puerto es el principal del Atlántico medio. La ciudad ha emergido como destino de nomadas digitales y trabajo remoto. Su insularidad hace que la confianza local sea fundamental: el 73% de los residentes canarios prefiere negocios recomendados por otros isleños antes de probar opciones nuevas.',
    nearbyRelatedCities: ['palma-mallorca', 'malaga', 'miami'],
  },
  'ciudad-de-mexico': {
    population: 9_200_000,
    keyIndustries: ['servicios financieros', 'tecnología', 'comercio', 'manufactura'],
    economicProfile:
      'Ciudad de México genera el 17% del PIB mexicano y alberga la mayor concentración de startups de Latinoamérica. Con más de 21 millones de personas en la zona metropolitana, la competencia entre negocios locales es feroz. El comercio electrónico crecio un 27% el último año, y el 84% de los consumidores capitalinos revisan testimonios antes de realizar una compra por primera vez con un negocio.',
    nearbyRelatedCities: ['guadalajara', 'monterrey', 'bogota'],
  },
  guadalajara: {
    population: 1_500_000,
    keyIndustries: ['tecnología', 'tequila y gastronomía', 'manufactura', 'comercio'],
    economicProfile:
      'Guadalajara es conocida como el Silicon Valley mexicano, con IBM, Intel, Oracle y HP manteniendo operaciones importantes. El sector creativo y gastronómico genera más de 50.000 empleos directos. Los tapatíos son consumidores informados que valoran la autenticidad: un negocio con testimonios verificados en su web convierte un 45% más que uno sin prueba social visible.',
    nearbyRelatedCities: ['ciudad-de-mexico', 'monterrey', 'leon'],
  },
  monterrey: {
    population: 1_100_000,
    keyIndustries: ['manufactura', 'cerveza y alimentos', 'tecnología', 'construcción'],
    economicProfile:
      'Monterrey concentra el mayor ingreso per cápita de México y es sede de conglomerados como FEMSA, CEMEX y Alfa. La mentalidad empresarial regiomontana valora los resultados medibles y la eficiencia. El 71% de las decisiones de compra B2B en Monterrey incluyen una revisión de testimonios o casos de éxito como parte del proceso de evaluación de proveedores.',
    nearbyRelatedCities: ['ciudad-de-mexico', 'guadalajara', 'miami'],
  },
  bogota: {
    population: 8_000_000,
    keyIndustries: ['servicios financieros', 'tecnología', 'comercio', 'educación'],
    economicProfile:
      'Bogota genera el 25% del PIB colombiano y lidera la transformación digital del país. El ecosistema de startups bogotano ha captado más de 1.200 millones de dólares en inversión. Los consumidores bogotanos son cada vez más exigentes con la transparencia: el 76% declara que los testimonios de otros clientes influyen directamente en sus decisiones de compra de servicios profesionales.',
    nearbyRelatedCities: ['medellin', 'lima', 'ciudad-de-mexico'],
  },
  medellin: {
    population: 2_500_000,
    keyIndustries: ['innovación', 'turismo médico', 'textil', 'tecnología'],
    economicProfile:
      'Medellin ha sido reconocida internacionalmente como ciudad innovadora, con un ecosistema de emprendimiento que incluye Ruta N y el distrito de innovación. El turismo médico genera más de 200 millones de dólares anuales. La ciudad atrae nomadas digitales y emprendedores extranjeros, creando un mercado donde los testimonios en línea son la principal herramienta de decisión para una comunidad diversa y conectada.',
    nearbyRelatedCities: ['bogota', 'ciudad-de-mexico', 'lima'],
  },
  'buenos-aires': {
    population: 3_000_000,
    keyIndustries: ['tecnología', 'gastronomía', 'diseño', 'servicios profesionales'],
    economicProfile:
      'Buenos Aires es la capital cultural de Sudamérica, con el mayor número de librerías, teatros y restaurantes per cápita del continente. El sector tecnológico porteño exporta más de 7.000 millones de dólares anuales en servicios. Los consumidores argentinos son escépticos por naturaleza ante la publicidad tradicional, lo que hace que los testimonios reales de otros clientes tengan un peso desproporcionado en sus decisiones.',
    nearbyRelatedCities: ['santiago', 'lima', 'bogota'],
  },
  santiago: {
    population: 5_600_000,
    keyIndustries: ['mineria y servicios', 'finanzas', 'retail', 'tecnología'],
    economicProfile:
      'Santiago de Chile concentra el 43% del PIB chileno y es la plaza financiera más estable de la region. El retail chileno es el más sofisticado de Latinoamérica, con consumidores que priorizan la investigación previa. Un 81% de los santiaguinos lee al menos 5 opiniones antes de contratar un servicio nuevo, y el 62% desconfia de negocios sin testimonios visibles en su página web.',
    nearbyRelatedCities: ['buenos-aires', 'lima', 'bogota'],
  },
  lima: {
    population: 10_000_000,
    keyIndustries: ['gastronomía', 'mineria', 'comercio', 'turismo'],
    economicProfile:
      'Lima concentra un tercio de la población peruana y es la capital gastronómica de Latinoamérica. El sector de restaurantes genera más de 6.000 millones de dólares anuales. El comercio electrónico peruano crecio un 35% en el último año, impulsado por consumidores limeños cada vez más digitales. Para los negocios locales, tener testimonios verificados se ha convertido en requisito mínimo para competir online.',
    nearbyRelatedCities: ['bogota', 'santiago', 'ciudad-de-mexico'],
  },
  miami: {
    population: 440_000,
    keyIndustries: ['finanzas internacionales', 'turismo', 'bienes raices', 'comercio latino'],
    economicProfile:
      'Miami es el puente comercial entre Estados Unidos y Latinoamérica, con un mercado bilingüe donde el 73% de la población habla español. El sector inmobiliario y los servicios financieros internacionales dominan la economía. Los consumidores miamenses operan en dos idiomas y dos culturas, valorando especialmente los testimonios en español que les conectan con negocios que entienden sus necesidades culturales específicas.',
    nearbyRelatedCities: ['los-angeles', 'ciudad-de-mexico', 'bogota'],
  },
  'los-angeles': {
    population: 3_900_000,
    keyIndustries: ['entretenimiento', 'tecnología', 'comercio', 'servicios de salud'],
    economicProfile:
      'Los Angeles tiene la mayor comunidad hispanohablante de EE.UU., con más de 4,9 millones de latinos en el condado. El mercado hispano angelino genera más de 280.000 millones de dólares en poder de compra anual. Para negocios que atienden a la comunidad hispana, los testimonios en español son un diferenciador clave que demuestra autenticidad cultural y genera la confianza que la publicidad genérica no puede ofrecer.',
    nearbyRelatedCities: ['miami', 'ciudad-de-mexico', 'guadalajara'],
  },
}

// ─── INDUSTRY INSIGHTS ─────────────────────────────────────────────────

interface IndustryInsight {
  challenges: string[]
  bestPractices: string[]
  metrics: string
}

const industryInsights: Record<string, IndustryInsight> = {
  restaurantes: {
    challenges: [
      'Las plataformas de reseñas como Google o TripAdvisor controlan la narrativa sobre tu restaurante, y un solo comentario negativo puede alejar a decenas de potenciales comensales sin que tengas forma de contextualizar la situación',
      'La estacionalidad y la rotación de personal dificultan mantener una calidad constante que se refleje en opiniones positivas durante todo el año',
      'Los clientes satisfechos rara vez dejan opiniones espontáneamente; por cada cliente insatisfecho que opina, hay 26 clientes contentos que se van sin decir nada',
    ],
    bestPractices: [
      'Coloca códigos QR junto a la cuenta o en soportes de mesa para captar opiniones cuando la experiencia está fresca y la satisfacción es alta',
      'Pide testimonios específicos sobre platos estrella o experiencias particulares como celebraciones, cenas románticas o eventos, ya que los detalles concretos generan más confianza en futuros comensales',
      'Rota los testimonios mostrados en tu web según la temporada, destacando terraza en verano, menu de navidad en diciembre y brunch los fines de semana',
    ],
    metrics: 'El 92% de los consumidores consulta opiniones online antes de elegir un restaurante, y los establecimientos con más de 10 testimonios visibles incrementan sus reservas online en un promedio del 28%',
  },
  'clinicas-medicas': {
    challenges: [
      'La regulación sanitaria limita qué tipo de información clínica pueden compartir los pacientes en sus testimonios, creando un equilibrio delicado entre transparencia y cumplimiento normativo',
      'Los pacientes descontentos son 3 veces más propensos a compartir su experiencia que los satisfechos, lo que distorsiona la percepción pública si no gestionas activamente los testimonios',
      'La decisión de elegir una clínica médica implica altos niveles de ansiedad para el paciente, lo que hace que la confianza previa sea más importante que en casi cualquier otro sector',
    ],
    bestPractices: [
      'Solicita testimonios centrados en la atención recibida, la empatia del equipo médico y la experiencia general, nunca en diagnósticos o tratamientos específicos para cumplir con la normativa de protección de datos',
      'Implementa un sistema de seguimiento post-consulta automatizado que envie un enlace de feedback 48 horas después de la visita, cuando el paciente ya puede valorar la atención con perspectiva',
      'Muestra testimonios agrupados por especialidad médica para que cada paciente potencial encuentre experiencias relevantes a su situación concreta',
    ],
    metrics: 'El 77% de los pacientes usan reseñas online como primer paso para encontrar un nuevo médico, y las clínicas con testimonios verificados reciben un 41% más de solicitudes de primera cita',
  },
  abogados: {
    challenges: [
      'El secreto profesional y la confidencialidad limitan severamente lo que un cliente puede revelar sobre su caso en un testimonio público',
      'Los clientes de servicios juridicos suelen estar en situaciones de estres o conflicto, lo que hace que la experiencia emocional pese más que el resultado tecnico en su valoración',
      'La percepción pública del sector legal tiende a ser negativa, y los abogados necesitan esforzarse más que otros profesionales para construir confianza inicial con potenciales clientes',
    ],
    bestPractices: [
      'Solicita testimonios que se centren en la comunicación, la accesibilidad, los tiempos de respuesta y la sensación de acompañamiento, evitando detalles del caso que comprometan la confidencialidad',
      'Segmenta los testimonios por área de práctica (familia, laboral, mercantil, penal) para que cada visitante encuentre experiencias relevantes a su situación específica',
      'Pide el testimonio justo después de la resolución favorable del caso, cuando la gratitud y el alivio del cliente están en su punto más alto',
    ],
    metrics: 'El 84% de las personas que buscan un abogado consultan opiniones online, y los despachos que muestran al menos 8 testimonios en su web generan un 53% más de consultas iniciales',
  },
  dentistas: {
    challenges: [
      'La odontofobia afecta al 36% de la población, y los pacientes con miedo al dentista dan un peso enorme a las experiencias de otros pacientes para decidir si acuden a una primera consulta',
      'Los tratamientos estéticos como blanqueamientos, carillas o implantes son decisiones de alto coste donde el paciente necesita mucha confianza previa en el profesional',
      'La competencia entre clínicas dentales ha aumentado un 23% en la última decada, haciendo que la diferenciación por reputación sea más importante que nunca',
    ],
    bestPractices: [
      'Destaca testimonios de pacientes que superaron su miedo al dentista gracias al trato del equipo, ya que estos relatos resuenan fuertemente con los indecisos',
      'Para tratamientos estéticos, solicita testimonios con fotos del antes y después (con consentimiento), ya que el impacto visual complementa la experiencia narrada',
      'Implementa un sistema de seguimiento post-tratamiento que pida feedback una semana después, cuando el paciente ya experimenta los resultados y puede valorar la inversion',
    ],
    metrics: 'Las clínicas dentales con testimonios visibles en su web experimentan un 47% más de solicitudes de primera cita que las que dependen unicamente de Google Reviews',
  },
  inmobiliarias: {
    challenges: [
      'Las transacciones inmobiliarias son de alto valor y baja frecuencia, lo que significa que cada decisión de compra o alquiler se investiga exhaustivamente antes de elegir un agente o agencia',
      'La desconfianza histórica hacia agentes inmobiliarios hace que los potenciales clientes busquen validacion externa antes de comprometerse con una agencia',
      'Los ciclos de venta largos (3-6 meses) dificultan el seguimiento y la recopilación oportuna de testimonios al final del proceso',
    ],
    bestPractices: [
      'Solicita testimonios en dos momentos clave: cuando el cliente firma el contrato de compraventa (satisfacción inmediata) y tres meses después de la mudanza (satisfacción confirmada)',
      'Incluye en los testimonios datos concretos como el tipo de operación (compra, venta, alquiler), la zona y el tiempo que tomo cerrar la operación para aportar contexto a futuros clientes',
      'Crea testimonios segmentados para compradores, vendedores e inquilinos, ya que cada perfil tiene preocupaciones y expectativas muy distintas',
    ],
    metrics: 'El 89% de los compradores de vivienda investigan agentes online antes del primer contacto, y las inmobiliarias con más de 12 testimonios verificados reducen su ciclo de captación en un 35%',
  },
  gimnasios: {
    challenges: [
      'La tasa de abandono en gimnasios supera el 50% en los primeros 6 meses, y los testimonios de miembros actuales son clave para convencer a nuevos clientes de que está vez será diferente',
      'La competencia de aplicaciones de fitness y entrenamiento online ha aumentado la presion sobre los gimnasios físicos para demostrar su valor añadido',
      'Los clientes potenciales dudan entre múltiples opciones cercanas y el precio suele ser el factor de desempate cuando no hay diferenciación clara por reputación',
    ],
    bestPractices: [
      'Recopila testimonios que incluyan transformaciones personales concretas: kilos perdidos, marcas mejoradas, hábitos adquiridos, ya que estos relatos inspiran y motivan a potenciales miembros',
      'Destaca testimonios de perfiles variados (principiantes, avanzados, personas mayores, jovenes) para que cada visitante se identifique con alguien similar',
      'Pide testimonios después de logros personales como completar un reto fitness, perder peso o superar una lesion, cuando la gratitud y el orgullo impulsan la generosidad en el feedback',
    ],
    metrics: 'Los gimnasios que muestran testimonios con historias de transformación en su landing page aumentan las inscripciones un 32% comparado con los que solo muestran fotos de instalaciones',
  },
  peluquerias: {
    challenges: [
      'La relación peluquero-cliente es altamente personal, y un cliente insatisfecho con su corte o color puede generar un testimonio negativo muy visible que ahuyente a decenas de potenciales clientes',
      'La rotación de estilistas es alta en el sector, y los clientes suelen ser fieles al profesional, no al salón, lo que dificulta construir una reputación de marca consistente',
      'Los clientes de peluqueria toman decisiones visuales, necesitan ver resultados y experiencias antes de confiar en un nuevo salón',
    ],
    bestPractices: [
      'Solicita testimonios con fotos del resultado final (con permiso), ya que en peluqueria la prueba visual tiene más impacto que cualquier texto descriptivo',
      'Crea testimonios asociados a cada estilista del salón para que los nuevos clientes elijan profesional basándose en experiencias previas con ese especialista concreto',
      'Pide el testimonio el mismo dia de la visita, cuando el cliente está satisfecho con su nuevo look y más dispuesto a compartir su experiencia positiva',
    ],
    metrics: 'El 68% de las personas eligen peluqueria basándose en recomendaciones, y los salones con testimonios visuales en su web incrementan las reservas de nuevos clientes un 38%',
  },
  veterinarias: {
    challenges: [
      'Los dueños de mascotas son emocionalmente vulnerables cuando buscan atención veterinaria, especialmente en emergencias, y necesitan sentir confianza absoluta en el profesional antes de dejar a su animal',
      'La decisión de elegir veterinario suele basarse en recomendaciones de otros dueños de mascotas, pero el boca a boca presencial tiene un alcance limitado frente al digital',
      'Las urgencias veterinarias no dan tiempo a investigar, lo que hace que tener una reputación online solida de antemano sea crítico para captar estos clientes de alto valor',
    ],
    bestPractices: [
      'Recoge testimonios que incluyan el nombre y especie de la mascota, ya que esto humaniza la experiencia y conecta emocionalmente con otros dueños de animales',
      'Solicita testimonios después de tratamientos exitosos y recuperaciones, cuando la gratitud del dueño hacia el equipo veterinario es más intensa',
      'Muestra testimonios agrupados por tipo de mascota (perros, gatos, exoticos) y tipo de servicio (rutina, cirugia, urgencias) para facilitar la identificación del visitante con casos similares',
    ],
    metrics: 'El 74% de los dueños de mascotas buscan opiniones online antes de elegir veterinario, y las clínicas con testimonios detallados reciben un 44% más de primeras consultas',
  },
  fotografos: {
    challenges: [
      'El portfolio muestra la calidad tecnica del trabajo, pero no transmite la experiencia de trabajar con el fotografo: la comunicación, la paciencia, la capacidad de poner cómodo al sujeto',
      'Los clientes de fotografía suelen contratar para eventos unicos e irrepetibles (bodas, comuniones, sesiones corporativas), lo que eleva enormemente el riesgo percibido de elegir mal',
      'La saturación del mercado fotografico hace que la diferenciación por precio sea una carrera al fondo; la diferenciación por reputación es la única sostenible',
    ],
    bestPractices: [
      'Solicita testimonios que detallen la experiencia completa: desde el primer contacto y la planificación hasta la entrega final, no solo la calidad de las fotos',
      'Pide testimonios específicos por tipo de servicio (bodas, corporativo, producto, recien nacidos) ya que cada segmento tiene preocupaciones y expectativas diferentes',
      'Incluye testimonios de parejas seis meses después de la boda, cuando ya han visto el album completo y pueden valorar tanto las fotos cómo los recuerdos que evocan',
    ],
    metrics: 'Los fotografos con más de 10 testimonios detallados en su web cierran un 56% más de presupuestos que los que solo muestran portfolio, ya que los clientes buscan confianza además de talento',
  },
  coaches: {
    challenges: [
      'El coaching es un servicio intangible donde los resultados son subjetivos, lo que hace extremadamente difícil demostrar valor sin testimonios de clientes que hayan experimentado la transformación',
      'La proliferación de coaches sin formación ha erosionado la confianza del mercado, y los profesionales serios necesitan diferenciarse con prueba social verificable',
      'Los potenciales clientes de coaching suelen estar en un momento de vulnerabilidad personal o profesional, lo que eleva sus estandares de confianza antes de comprometerse',
    ],
    bestPractices: [
      'Solicita testimonios que describan la situación antes del coaching, el proceso vivido y los resultados obtenidos, creando una narrativa de transformación que inspire a otros potenciales clientes',
      'Pide testimonios en formato video cuando sea posible, ya que la autenticidad emocional del relato en primera persona es mucho más persuasiva que el texto',
      'Recoge testimonios a los 3 meses del proceso, cuando los resultados ya son tangibles y el cliente puede articular el impacto del coaching en su vida profesional o personal',
    ],
    metrics: 'El 91% de las personas que contratan un coach consultan testimonios previamente, y los coaches con testimonios de transformación visible multiplican por 3 su tasa de cierre de nuevos clientes',
  },
  hoteles: {
    challenges: [
      'Las OTAs como Booking y Expedia controlan la mayoria de las reseñas y cobran comisiones del 15-25%, lo que hace crítico tener testimonios propios que impulsen las reservas directas',
      'Los huespedes insatisfechos publican reseñas negativas 6 veces más que los satisfechos, distorsionando la percepción real de la calidad del hotel',
      'La estacionalidad extrema del sector hace que los testimonios recientes de temporada alta sean irrelevantes en temporada baja y viceversa',
    ],
    bestPractices: [
      'Envia un email de seguimiento 24 horas después del checkout con un enlace directo al formulario de testimonio, cuando la experiencia aun está fresca',
      'Segmenta testimonios por tipo de viajero (pareja, familia, negocios, aventura) para que cada perfil encuentre opiniones relevantes a su estilo de viaje',
      'Destaca testimonios que mencionen elementos específicos del hotel (desayuno, ubicación, personal, limpieza) ya que los detalles concretos generan más confianza que las valoraciones genéricas',
    ],
    metrics: 'Los hoteles que muestran testimonios propios en su web aumentan las reservas directas un 24%, reduciendo la dependencia de OTAs y sus altas comisiones',
  },
  'tiendas-online': {
    challenges: [
      'La tasa de abandono del carrito en ecommerce supera el 70%, y la falta de confianza en la tienda es la segunda causa más citada detrás de los costes de envio',
      'Los consumidores no pueden tocar ni probar los productos antes de comprar, lo que hace que los testimonios de otros compradores sean el sustituto táctil más cercano',
      'La competencia de grandes marketplaces como Amazon hace que las tiendas online independientes necesiten generar confianza extra para justificar la compra directa',
    ],
    bestPractices: [
      'Coloca testimonios junto a los productos estrella y en el proceso de checkout para reducir la fricción de compra en los momentos criticos de decisión',
      'Solicita testimonios que incluyan fotos del producto recibido y detalles sobre envio, empaquetado y calidad real, ya que esto resuelve las principales objeciones de los compradores online',
      'Implementa un email automático 7 dias después de la entrega pidiendo feedback, cuando el cliente ya ha usado el producto y puede dar una opinion informada',
    ],
    metrics: 'Los productos con testimonios de compradores reales convierten un 270% más que los que no tienen opiniones, y los testimonios con fotos multiplican ese efecto por 2',
  },
  psicologos: {
    challenges: [
      'El estigma asociado a la salud mental hace que muchos pacientes sean reacios a dejar testimonios publicos, reduciendo drásticamente el volumen de opiniones disponibles',
      'La confidencialidad terapéutica es sagrada, y los pacientes deben poder compartir su experiencia sin revelar detalles sensibles sobre su tratamiento',
      'El vínculo terapéutico es el factor más determinante en la elección de psicólogo, y los testimonios son la única forma de transmitirlo antes del primer contacto',
    ],
    bestPractices: [
      'Ofrece la opcion de testimonios anónimos o con nombre de pila solamente, para que los pacientes puedan compartir sin sentirse expuestos',
      'Enfoca las preguntas del formulario hacia la experiencia emocional (me senti escuchado, el ambiente era seguro, senti que avanzaba) sin pedir detalles clínicos',
      'Muestra testimonios que normalicen la búsqueda de ayuda psicológica, ya que esto no solo genera confianza sino que reduce las barreras de entrada para nuevos pacientes',
    ],
    metrics: 'El 65% de las personas que buscan psicólogo por primera vez leen testimonios antes de agendar cita, y los consultorios con opiniones visibles reducen la tasa de no-show en un 28%',
  },
  nutricionistas: {
    challenges: [
      'La desinformacion nutricional en redes sociales ha creado consumidores escépticos que necesitan prueba social profesional para distinguir a un nutricionista serio de un influencer sin formación',
      'Los resultados de un plan nutricional tardan semanas o meses en manifestarse, lo que dificulta obtener testimonios inmediatos y requiere un seguimiento a largo plazo',
      'Los pacientes de nutrición suelen tener historial de fracasos con dietas previas, lo que eleva su desconfianza y la importancia de ver testimonios de personas con situaciones similares',
    ],
    bestPractices: [
      'Solicita testimonios a los 3 y 6 meses del inicio del plan nutricional, cuando los resultados son tangibles y el paciente puede hablar de cambios reales en su salud y hábitos',
      'Anima a los pacientes a incluir datos como kilos perdidos, niveles de energía mejorados o analíticas normalizadas (sin datos clínicos sensibles) para aportar credibilidad concreta',
      'Destaca testimonios de perfiles diversos (deportistas, embarazadas, personas con intolerancias, pérdida de peso) para que cada visitante encuentre un caso similar al suyo',
    ],
    metrics: 'Los nutricionistas con testimonios de transformación real en su web captan un 42% más de primeras consultas que los que solo publican contenido educativo en redes sociales',
  },
  academias: {
    challenges: [
      'La decisión de formarse implica una inversión significativa de tiempo y dinero, y los alumnos potenciales necesitan testimonios que validen que la formación realmente cumple lo que promete',
      'Las academias compiten no solo entre si, sino contra contenido gratuito en YouTube y plataformas de cursos masivos como Udemy o Coursera',
      'La tasa de abandono en formación online supera el 90%, lo que hace que testimonios de alumnos que completaron el programa sean especialmente valiosos y escasos',
    ],
    bestPractices: [
      'Recoge testimonios de alumnos en tres momentos: al completar el curso, al encontrar empleo o aplicar lo aprendido, y un año después para mostrar el impacto a largo plazo',
      'Incluye en los testimonios el perfil previo del alumno y su situación actual para demostrar el antes y después profesional que ofrece tu formación',
      'Destaca testimonios que mencionen aspectos concretos de la metodología, los profesores y el contenido que diferenciaron tu academia de otras opciones que el alumno considero',
    ],
    metrics: 'Las academias con testimonios de exalumnos exitosos incrementan las matriculaciones un 39%, y los testimonios con resultados profesionales concretos multiplican ese efecto por 2',
  },
  arquitectos: {
    challenges: [
      'Los proyectos arquitectónicos son de alta inversión y duración extendida (meses o años), lo que eleva el riesgo percibido y la necesidad de confianza previa en el profesional',
      'Los clientes de arquitectura son frecuentemente primerizos que no saben evaluar la calidad tecnica, por lo que dependen enormemente de las experiencias de otros clientes',
      'La comunicación durante el proyecto es tan importante como el resultado final, pero los portfolios solo muestran edificios, no la experiencia de trabajar con el arquitecto',
    ],
    bestPractices: [
      'Solicita testimonios al finalizar la obra y un año después de habitarla, ya que la perspectiva de uso real añade una dimensión de credibilidad que el dia de la entrega no tiene',
      'Pide a los clientes que comenten sobre el proceso completo: cumplimiento de plazos, gestión de imprevistos, comunicación y relación calidad-precio, no solo sobre el resultado estético',
      'Asocia cada testimonio con fotos del proyecto correspondiente para crear un portfolio enriquecido donde la experiencia del cliente complementa la imagen visual del trabajo',
    ],
    metrics: 'Los estudios de arquitectura con testimonios de clientes satisfechos cierran un 48% más de presupuestos que los que solo muestran portfolio grafico sin contexto humano',
  },
  contadores: {
    challenges: [
      'La contabilidad es percibida como un servicio de commodity, y muchos clientes eligen unicamente por precio sin entender las diferencias en calidad de asesoramiento',
      'La confianza es crítica cuando se manejan finanzas y datos fiscales sensibles, y un error contable puede tener consecuencias legales graves para el cliente',
      'La fidelidad al contador suele romperse solo por problemas graves, lo que hace difícil motivar a clientes satisfechos a dejar testimonios cuando simplemente no tienen quejas',
    ],
    bestPractices: [
      'Solicita testimonios durante la campaña de declaracion de renta, cuando los clientes sienten el alivio de tener su fiscalidad resuelta y valoran más el servicio recibido',
      'Anima a los clientes a mencionar ahorros fiscales obtenidos, problemas resueltos o tranquilidad ganada, ya que estos beneficios tangibles resuenan con otros empresarios y autónomos',
      'Segmenta testimonios por tipo de cliente (autónomo, pyme, startup, empresa) para que cada perfil encuentre experiencias relevantes a su complejidad fiscal',
    ],
    metrics: 'El 62% de los autónomos y pymes buscan contador por recomendación, y las asesorias con testimonios que mencionan ahorros concretos captan un 37% más de nuevos clientes',
  },
  'agencias-marketing': {
    challenges: [
      'El sector del marketing digital tiene una reputación mixta por agencias que prometen resultados milagrosos y no cumplen, lo que ha generado escepticismo generalizado entre los clientes potenciales',
      'Los resultados del marketing toman tiempo en materializarse (3-6 meses mínimo para SEO, por ejemplo), lo que dificulta demostrar valor antes de que el cliente se impaciente',
      'La medición de resultados es compleja y cada cliente tiene métricas de éxito diferentes, haciendo que los testimonios genéricos de satisfacción tengan poco peso',
    ],
    bestPractices: [
      'Solicita testimonios que incluyan métricas concretas: trafico incrementado, leads generados, ventas atribuidas, ROI obtenido, ya que los números son el lenguaje del marketing',
      'Pide testimonios a los 6 meses de trabajo cuando los resultados son medibles y el cliente puede hablar con datos sobre el impacto en su negocio',
      'Crea casos de estudio testimoniales que combinen la voz del cliente con los datos del proyecto para ofrecer la prueba social más convincente del sector B2B',
    ],
    metrics: 'Las agencias de marketing con testimonios que incluyen métricas de ROI cierran un 64% más de propuestas que las que solo muestran portfolio de creatividades sin datos de impacto',
  },
  'clinicas-estetica': {
    challenges: [
      'Los tratamientos estéticos son decisiones emocionales de alta inversión donde el miedo al resultado insatisfactorio paraliza a muchos potenciales clientes en la fase de investigación',
      'La proliferación de ofertas agresivas de bajo precio ha generado desconfianza en un sector donde la calidad y la seguridad deberían primar sobre el descuento',
      'Los resultados estéticos son altamente visibles, lo que amplifica tanto las experiencias positivas como las negativas y hace que cada testimonio tenga un impacto enorme en la decisión de otros',
    ],
    bestPractices: [
      'Solicita testimonios con fotos de antes y después (con consentimiento informado por escrito) ya que el impacto visual es el argumento más persuasivo en estética',
      'Recoge testimonios a las 2 semanas del tratamiento, cuando los resultados iniciales son visibles, y de nuevo a los 3 meses para testimonios de resultados consolidados',
      'Incluye en los formularios preguntas sobre el trato recibido, la higiene percibida y la información previa al tratamiento, ya que estos factores pesan tanto como el resultado estético',
    ],
    metrics: 'El 88% de los pacientes de estética consultan opiniones antes de elegir clínica, y los testimonios con fotos de resultados reales incrementan las solicitudes de primera cita en un 52%',
  },
  mecanicos: {
    challenges: [
      'El sector mecanico arrastra un problema histórico de desconfianza: muchos clientes temen que les cobren reparaciones innecesarias o que el precio final no coincida con el presupuesto',
      'Los clientes de mecanica rara vez son expertos en automocion, lo que crea una asimetria de información que genera ansiedad y dependencia de las opiniones de otros usuarios',
      'La fidelidad al taller suele basarse en la recomendación de conocidos, pero el alcance del boca a boca presencial es limitado en una era donde la búsqueda empieza en Google',
    ],
    bestPractices: [
      'Solicita testimonios que mencionen la transparencia en el presupuesto, la explicacion clara de los trabajos realizados y la honestidad en el diagnóstico, ya que estos son los principales miedos de los conductores',
      'Pide testimonios justo después de recoger el vehículo reparado, cuando el alivio y la satisfacción de tener el coche funcionando correctamente están en su punto más alto',
      'Destaca testimonios de diferentes tipos de servicio (revisión, ITV, reparación de motor, carrocería, electricidad) para demostrar versatilidad y competencia tecnica amplia',
    ],
    metrics: 'El 71% de los conductores buscan taller por recomendación, y los talleres con testimonios que destacan transparencia y honestidad incrementan la captación de nuevos clientes en un 39%',
  },
}

// ─── BLOG ARTICLE MAPPING ──────────────────────────────────────────────

interface BlogLink {
  slug: string
  title: string
}

const industryBlogLinks: Record<string, BlogLink[]> = {
  restaurantes: [
    { slug: 'testimonios-restaurantes-hosteleria', title: 'Testimonios para restaurantes y hostelería' },
    { slug: 'como-pedir-testimonios-clientes-plantillas', title: 'Cómo pedir testimonios a clientes' },
    { slug: 'widgets-testimonios-web-guia', title: 'Guia de widgets de testimonios' },
  ],
  'clinicas-medicas': [
    { slug: 'testimonios-clinicas-salud', title: 'Testimonios para clínicas y salud' },
    { slug: 'como-aumentar-confianza-clientes-online', title: 'Cómo aumentar la confianza online' },
    { slug: 'seo-testimonios-mejora-posicionamiento', title: 'SEO y testimonios' },
  ],
  abogados: [
    { slug: 'testimonios-abogados-despachos', title: 'Testimonios para abogados y despachos' },
    { slug: 'testimonios-b2b-empresas', title: 'Testimonios en el sector B2B' },
    { slug: 'como-pedir-testimonios-clientes-plantillas', title: 'Plantillas para pedir testimonios' },
  ],
  dentistas: [
    { slug: 'testimonios-dentistas-odontologia', title: 'Testimonios para dentistas' },
    { slug: 'testimonios-clinicas-salud', title: 'Testimonios para clínicas de salud' },
    { slug: 'landing-pages-testimonios-conversion', title: 'Landing pages con testimonios' },
  ],
  inmobiliarias: [
    { slug: 'testimonios-inmobiliarias-agentes', title: 'Testimonios para inmobiliarias' },
    { slug: 'caso-estudio-testimonios-conversion', title: 'Caso de estudio: testimonios y conversión' },
    { slug: 'prueba-social-que-es-como-usarla', title: 'Qué es la prueba social' },
  ],
  gimnasios: [
    { slug: 'testimonios-gimnasios-centros-fitness', title: 'Testimonios para gimnasios' },
    { slug: 'wall-of-love-que-es-como-crear', title: 'Cómo crear un Wall of Love' },
    { slug: 'testimonios-video-guia-completa', title: 'Testimonios en video' },
  ],
  peluquerias: [
    { slug: 'testimonios-tiendas-fisicas-negocios-locales', title: 'Testimonios para negocios locales' },
    { slug: 'como-usar-testimonios-redes-sociales', title: 'Testimonios en redes sociales' },
    { slug: 'como-pedir-testimonios-clientes-plantillas', title: 'Cómo pedir testimonios' },
  ],
  veterinarias: [
    { slug: 'testimonios-veterinarias-clinicas', title: 'Testimonios para veterinarias' },
    { slug: 'automatizar-recopilacion-testimonios', title: 'Automatizar la recopilación' },
    { slug: 'seo-testimonios-mejora-posicionamiento', title: 'Mejorar el SEO con testimonios' },
  ],
  fotografos: [
    { slug: 'testimonios-fotografia-bodas', title: 'Testimonios para fotografos de bodas' },
    { slug: 'carousel-testimonios-web-mejores-practicas', title: 'Carruseles de testimonios' },
    { slug: 'user-generated-content-testimonios', title: 'UGC y testimonios' },
  ],
  coaches: [
    { slug: 'testimonios-para-coaches-consultores', title: 'Testimonios para coaches y consultores' },
    { slug: 'testimonios-video-guia-completa', title: 'Guia de testimonios en video' },
    { slug: 'psicologia-prueba-social-ventas', title: 'Psicologia de la prueba social' },
  ],
  hoteles: [
    { slug: 'testimonios-restaurantes-hosteleria', title: 'Testimonios en hostelería' },
    { slug: 'badges-confianza-sellos-web', title: 'Badges de confianza para tu web' },
    { slug: 'estadisticas-testimonios-datos-conversion', title: 'Estadísticas de testimonios' },
  ],
  'tiendas-online': [
    { slug: 'testimonios-ecommerce-aumentar-ventas', title: 'Testimonios para ecommerce' },
    { slug: 'landing-pages-testimonios-conversion', title: 'Landing pages con testimonios' },
    { slug: 'medir-roi-testimonios', title: 'Medir el ROI de testimonios' },
  ],
  psicologos: [
    { slug: 'testimonios-clinicas-salud', title: 'Testimonios para clínicas de salud' },
    { slug: 'como-aumentar-confianza-clientes-online', title: 'Aumentar confianza online' },
    { slug: 'diferencia-testimonios-resenas-opiniones', title: 'Testimonios vs reseñas' },
  ],
  nutricionistas: [
    { slug: 'testimonios-clinicas-salud', title: 'Testimonios para el sector salud' },
    { slug: 'como-pedir-testimonios-clientes-plantillas', title: 'Plantillas para pedir testimonios' },
    { slug: 'email-marketing-testimonios', title: 'Email marketing con testimonios' },
  ],
  academias: [
    { slug: 'testimonios-academias-formacion', title: 'Testimonios para academias' },
    { slug: 'testimonios-video-guia-completa', title: 'Testimonios en video' },
    { slug: 'wall-of-love-que-es-como-crear', title: 'Crear un Wall of Love' },
  ],
  arquitectos: [
    { slug: 'testimonios-b2b-empresas', title: 'Testimonios B2B' },
    { slug: 'caso-estudio-testimonios-conversion', title: 'Caso de estudio de conversión' },
    { slug: 'widgets-testimonios-web-guia', title: 'Widgets de testimonios' },
  ],
  contadores: [
    { slug: 'testimonios-b2b-empresas', title: 'Testimonios para empresas B2B' },
    { slug: 'testimonios-tiendas-fisicas-negocios-locales', title: 'Testimonios para negocios locales' },
    { slug: 'automatizar-recopilacion-testimonios', title: 'Automatizar recopilación' },
  ],
  'agencias-marketing': [
    { slug: 'testimonios-agencias-marketing', title: 'Testimonios para agencias' },
    { slug: 'medir-roi-testimonios', title: 'Medir ROI de testimonios' },
    { slug: 'testimonios-b2b-empresas', title: 'Testimonios B2B' },
  ],
  'clinicas-estetica': [
    { slug: 'testimonios-clinicas-salud', title: 'Testimonios para clínicas' },
    { slug: 'testimonios-video-guia-completa', title: 'Testimonios en video' },
    { slug: 'badges-confianza-sellos-web', title: 'Sellos de confianza' },
  ],
  mecanicos: [
    { slug: 'testimonios-tiendas-fisicas-negocios-locales', title: 'Testimonios para negocios locales' },
    { slug: 'como-pedir-testimonios-clientes-plantillas', title: 'Cómo pedir testimonios' },
    { slug: 'seo-testimonios-mejora-posicionamiento', title: 'SEO con testimonios' },
  ],
}

// ─── RELATED INDUSTRIES MAPPING ─────────────────────────────────────────

const relatedIndustries: Record<string, string[]> = {
  restaurantes: ['hoteles', 'peluquerias', 'tiendas-online'],
  'clinicas-medicas': ['dentistas', 'psicologos', 'nutricionistas'],
  abogados: ['contadores', 'inmobiliarias', 'arquitectos'],
  dentistas: ['clinicas-medicas', 'clinicas-estetica', 'psicologos'],
  inmobiliarias: ['arquitectos', 'abogados', 'fotografos'],
  gimnasios: ['nutricionistas', 'coaches', 'peluquerias'],
  peluquerias: ['clinicas-estetica', 'fotografos', 'gimnasios'],
  veterinarias: ['clinicas-medicas', 'tiendas-online', 'peluquerias'],
  fotografos: ['agencias-marketing', 'peluquerias', 'inmobiliarias'],
  coaches: ['psicologos', 'academias', 'nutricionistas'],
  hoteles: ['restaurantes', 'fotografos', 'agencias-marketing'],
  'tiendas-online': ['agencias-marketing', 'fotografos', 'restaurantes'],
  psicologos: ['coaches', 'nutricionistas', 'clinicas-medicas'],
  nutricionistas: ['gimnasios', 'clinicas-medicas', 'coaches'],
  academias: ['coaches', 'agencias-marketing', 'contadores'],
  arquitectos: ['inmobiliarias', 'fotografos', 'abogados'],
  contadores: ['abogados', 'agencias-marketing', 'inmobiliarias'],
  'agencias-marketing': ['tiendas-online', 'fotografos', 'academias'],
  'clinicas-estetica': ['dentistas', 'peluquerias', 'nutricionistas'],
  mecanicos: ['tiendas-online', 'abogados', 'contadores'],
}

// ─── EXPORTED FUNCTIONS ─────────────────────────────────────────────────

export function getCityDescription(citySlug: string): string {
  return cityDescriptions[citySlug] || ''
}

export function getCityTier(citySlug: string): CityTier {
  return cityTiers[citySlug] || 'mediana'
}

export function getIndustryCategory(industrySlug: string): IndustryCategory {
  return industryCategories[industrySlug] || 'servicios-profesionales'
}

export function getCityProfile(citySlug: string): CityProfile | null {
  return cityProfiles[citySlug] || null
}

export function getIndustryInsight(industrySlug: string): IndustryInsight | null {
  return industryInsights[industrySlug] || null
}

export function getIndustryBlogLinks(industrySlug: string): BlogLink[] {
  return industryBlogLinks[industrySlug] || []
}

export function getRelatedIndustries(industrySlug: string): string[] {
  return relatedIndustries[industrySlug] || []
}

export function getNearbyRelatedCities(citySlug: string): string[] {
  const profile = cityProfiles[citySlug]
  return profile?.nearbyRelatedCities || []
}

/** Format population for display, e.g. 3300000 -> "3,3 millones" */
export function formatPopulation(pop: number): string {
  if (pop >= 1_000_000) {
    const millions = pop / 1_000_000
    const formatted = millions % 1 === 0 ? millions.toString() : millions.toFixed(1).replace('.', ',')
    return `${formatted} millones`
  }
  return `${Math.round(pop / 1000) * 1000 / 1000}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' habitantes'
}

/** Generate unique intro paragraph combining city + industry context */
export function generateUniqueIntro(
  citySlug: string,
  cityName: string,
  cityCountry: string,
  industrySlug: string,
  industryName: string
): string {
  const tier = getCityTier(citySlug)
  const profile = getCityProfile(citySlug)
  const insight = getIndustryInsight(industrySlug)
  const category = getIndustryCategory(industrySlug)
  const industryLower = industryName.toLowerCase()

  if (!profile || !insight) {
    return `Si tienes un negocio de ${industryLower} en ${cityName}, ${cityCountry}, sabes lo importante que es la reputación online.`
  }

  const popFormatted = formatPopulation(profile.population)

  // Each combination of tier + category produces a unique intro
  if (tier === 'grande') {
    if (category === 'salud') {
      return `${cityName}, con ${popFormatted} de habitantes, es uno de los mercados de salud más competitivos del mundo hispanohablante. Para un negocio de ${industryLower} en está metropoli, la saturación de opciones disponibles obliga a diferenciarse con algo más que buenas instalaciones o precios competitivos. ${profile.economicProfile} En este contexto, los testimonios verificados de pacientes reales se convierten en el factor de decisión número uno: resuelven la incertidumbre, generan empatia y transmiten la calidad humana de tu equipo de forma que ningun anuncio puede igualar.`
    }
    if (category === 'hosteleria') {
      return `En una metropoli como ${cityName}, con ${popFormatted} de residentes y millones de visitantes anuales, el sector de ${industryLower} enfrenta una competencia sin precedentes. ${profile.economicProfile} Cada dia, miles de personas en ${cityName} deciden donde ir basándose en opiniones de otros clientes. Los testimonios verificados de comensales y huespedes satisfechos son tu herramienta más poderosa para convertir esa búsqueda online en una reserva confirmada, destacando entre cientos de opciones que compiten por la misma atención.`
    }
    if (category === 'servicios-profesionales') {
      return `${cityName} concentra la mayor densidad de profesionales de ${industryLower} en su region, con un mercado de ${popFormatted} de potenciales clientes que buscan servicios de confianza. ${profile.economicProfile} En un entorno donde la competencia profesional es intensa, los testimonios de clientes satisfechos se convierten en tu carta de presentacion más persuasiva. Demuestran resultados reales, profesionalidad y un trato que la descripción de servicios en una web no puede transmitir.`
    }
    if (category === 'comercio') {
      return `Con ${popFormatted} de consumidores activos, ${cityName} es uno de los mercados comerciales más grandes y exigentes del mundo hispano. ${profile.economicProfile} Para negocios de ${industryLower} que operan en está plaza, la confianza del consumidor es el recurso más valioso y más difícil de obtener. Los testimonios de clientes reales actúan como el boca a boca digital que escala tu reputación a la velocidad que exige una ciudad de este tamano.`
    }
    return `${cityName}, con una población de ${popFormatted}, ofrece un mercado enorme pero extraordinariamente competitivo para ${industryLower}. ${profile.economicProfile} En este entorno, donde los consumidores tienen decenas de alternativas a un clic de distancia, los testimonios verificados de clientes satisfechos son el diferenciador que convierte la intencion de compra en accion. Tu reputación digital es tu activo más valioso.`
  }

  if (tier === 'mediana') {
    if (category === 'salud') {
      return `${cityName}, con ${popFormatted} de habitantes, combina el dinamismo de una ciudad en crecimiento con la cercanía de una comunidad donde las recomendaciones personales todavia importan. ${profile.economicProfile} Para negocios de ${industryLower}, esto crea una oportunidad única: los testimonios digitales amplifican el boca a boca tradicional y te posicionan como la referencia de salud en toda la zona metropolitana, llegando a pacientes que el boca a boca presencial nunca alcanzaria.`
    }
    if (category === 'bienestar') {
      return `En ${cityName}, con ${popFormatted} de residentes, el sector de ${industryLower} está en plena expansión. ${profile.economicProfile} Los consumidores de está ciudad buscan servicios de bienestar que combinen profesionalidad con un trato cercano, y las recomendaciones de otros clientes locales son el principal motor de decisión. Los testimonios verificados te permiten captar esa demanda creciente demostrando que otros vecinos de ${cityName} ya confian en ti.`
    }
    if (category === 'hosteleria') {
      return `${cityName} se ha consolidado como un destino gastronómico y turístico con identidad propia, atrayendo cada vez más visitantes nacionales e internacionales a su oferta de ${industryLower}. ${profile.economicProfile} En un mercado donde la oferta crece rápido, los testimonios de clientes satisfechos te ayudan a destacar ante un público que investiga online antes de cada visita y valora las experiencias auténticas por encima de la publicidad.`
    }
    return `${cityName}, con ${popFormatted} de habitantes, representa un mercado en crecimiento donde los negocios de ${industryLower} tienen una ventana de oportunidad para establecerse como referentes. ${profile.economicProfile} En una ciudad de tamano medio, cada testimonio de un cliente local tiene un efecto multiplicador: la comunidad es lo suficientemente grande para generar volumen, pero lo bastante cercana para que las recomendaciones se compartan orgánicamente.`
  }

  // pequeña
  if (category === 'salud') {
    return `En ${cityName}, con ${popFormatted}, la confianza personal es el pilar de la relación médico-paciente. ${profile.economicProfile} Los residentes de ${cityName} prefieren profesionales de ${industryLower} que vengan avalados por otros miembros de la comunidad. Los testimonios digitales extienden esas recomendaciones personales las 24 horas del dia, llegando a residentes, expatriados y nuevos habitantes que aun no tienen una red de contactos local.`
  }
  if (category === 'hosteleria') {
    return `${cityName} ofrece un mercado de ${industryLower} donde la calidad personal del servicio marca la diferencia. ${profile.economicProfile} Con una comunidad más compacta, cada experiencia positiva de un cliente se convierte en una recomendación que resuena con fuerza. Los testimonios verificados en tu web capturan esa energía del boca a boca local y la hacen visible para turistas y nuevos residentes que descubren ${cityName} por primera vez.`
  }
  return `En ${cityName}, con ${popFormatted}, los negocios de ${industryLower} construyen su reputación sobre la confianza de una comunidad cercana. ${profile.economicProfile} Aunque el mercado es más compacto, esto juega a tu favor: menos competencia online significa que posicionarte como la referencia local es alcanzable, y cada testimonio de un cliente satisfecho tiene un impacto proporcionalmente mayor que en las grandes ciudades.`
}

/** Generate "why testimonials matter" bullet points unique to tier + industry */
export function generateWhyTestimonialsMatter(
  citySlug: string,
  cityName: string,
  industrySlug: string,
  industryName: string
): string[] {
  const tier = getCityTier(citySlug)
  const insight = getIndustryInsight(industrySlug)
  const profile = getCityProfile(citySlug)
  const industryLower = industryName.toLowerCase()

  if (!insight || !profile) return []

  const bullets: string[] = []

  // Bullet 1: city-tier specific
  if (tier === 'grande') {
    bullets.push(
      `En ${cityName}, con más de ${formatPopulation(profile.population)} de habitantes, tu negocio de ${industryLower} compite contra cientos de alternativas. Los testimonios son la forma más eficaz de destacar en un oceano de opciones: el 84% de los consumidores en grandes ciudades los consideran tan fiables como una recomendación personal.`
    )
  } else if (tier === 'mediana') {
    bullets.push(
      `${cityName} está en plena expansión, y los negocios de ${industryLower} que construyen su reputación digital ahora tendrán una ventaja decisiva cuando el mercado madure. Los primeros en acumular testimonios verificados se posicionan como las referencias locales de la industria.`
    )
  } else {
    bullets.push(
      `En una ciudad como ${cityName}, donde las relaciones personales son la base del comercio, los testimonios digitales multiplican el alcance del boca a boca tradicional. Cada opinion positiva de un vecino genera un efecto cascada que la publicidad convencional no puede replicar.`
    )
  }

  // Bullet 2: industry-specific challenge addressed
  bullets.push(
    `${insight.challenges[0]} Los testimonios verificados contrarrestan directamente este desafio, dando voz a tus clientes satisfechos de ${cityName} y equilibrando la balanza de la percepción pública a tu favor.`
  )

  // Bullet 3: concrete metric
  bullets.push(
    `${insight.metrics}. Para negocios de ${industryLower} en ${cityName}, esto se traduce en más consultas, más reservas y más ventas provenientes de clientes que llegan ya convencidos gracias a la prueba social.`
  )

  return bullets
}

// ─── FAQ GENERATION (preserved and enhanced) ────────────────────────────

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
  const profile = getCityProfile(citySlug)
  const popStr = profile ? formatPopulation(profile.population) : ''

  const faqs: FAQ[] = []

  // FAQ 1: Varies by city tier — now references population data
  if (tier === 'grande') {
    faqs.push({
      question: `¿Cómo pueden los testimonios ayudar a mi negocio de ${industryLower} a destacar en un mercado tan competitivo como ${cityName}?`,
      answer: `${cityName} tiene ${popStr} de habitantes y una concentración altísima de negocios de ${industryLower}. ${profile ? profile.keyIndustries.join(', ') + ' son las industrias dominantes, lo que genera un ecosistema exigente donde los consumidores comparan múltiples opciones. ' : ''}Los testimonios verificados te permiten diferenciarte mostrando experiencias reales de clientes satisfechos. Cuando un potencial cliente busca "${industryLower} en ${cityName}", ver opiniones auténticas genera la confianza necesaria para elegirte. Además, el contenido generado por tus clientes mejora tu posicionamiento en búsquedas locales.`,
    })
  } else if (tier === 'mediana') {
    faqs.push({
      question: `¿Son efectivos los testimonios para ${industryLower} en una ciudad en crecimiento como ${cityName}?`,
      answer: `Absolutamente. ${cityName}${popStr ? `, con ${popStr} de habitantes,` : ''} está en un momento de expansión donde las oportunidades superan a la competencia establecida. ${profile ? profile.economicProfile.split('.')[0] + '. ' : ''}El boca a boca digital es más poderoso aquí porque la comunidad es conectada. Los testimonios de clientes locales generan un efecto de confianza multiplicado: cuando un vecino ve que otro residente recomienda tu negocio de ${industryLower}, la probabilidad de conversión aumenta significativamente. Es el momento de construir tu reputación digital.`,
    })
  } else {
    faqs.push({
      question: `¿Merece la pena invertir en testimonios para ${industryLower} en ${cityName}?`,
      answer: `En una ciudad especializada como ${cityName}${popStr ? ` (${popStr})` : ''}, los testimonios tienen un impacto desproporcionado. ${profile ? profile.economicProfile.split('.')[0] + '. ' : ''}Con menos negocios de ${industryLower} compitiendo, cada testimonio positivo te posiciona como la referencia local. Los habitantes de ${cityName} tienden a buscar recomendaciones de personas cercanas, y tener testimonios visibles en tu web cubre esa necesidad. Con el plan gratuito de Opinafy puedes empezar sin coste.`,
    })
  }

  // FAQ 2: Varies by industry category
  switch (category) {
    case 'salud':
      faqs.push({
        question: `¿Cómo gestionar testimonios de pacientes en ${industryLower} respetando la privacidad en ${cityName}?`,
        answer: `En el sector salud, la privacidad del paciente es prioritaria. Opinafy permite recopilar testimonios donde el paciente decide que información compartir. Puedes configurar formularios que recojan solo el nombre y la experiencia general, sin datos clínicos sensibles. Muchos negocios de ${industryLower} en ${cityName} recogen testimonios enfocados en la atención recibida, la profesionalidad del equipo y la experiencia general, sin mencionar diagnósticos o tratamientos específicos. Esto cumple con la normativa de protección de datos y sigue generando confianza.`,
      })
      break
    case 'hosteleria':
      faqs.push({
        question: `¿Cuál es la mejor forma de pedir testimonios a los clientes de mi negocio de ${industryLower} en ${cityName}?`,
        answer: `Para ${industryLower} en ${cityName}, el momento ideal es justo después de la experiencia positiva. Puedes colocar un código QR en la mesa, la cuenta o la recepción que enlace directamente a tu formulario de Opinafy. También funciona muy bien enviar un enlace por WhatsApp a las pocas horas de la visita. Los negocios de ${industryLower} en ${cityName} que piden testimonios de forma proactiva recopilan entre 5 y 10 veces más opiniones que los que esperan a que el cliente lo haga por su cuenta.`,
      })
      break
    case 'servicios-profesionales':
      faqs.push({
        question: `¿Qué tipo de testimonios funcionan mejor para ${industryLower} en ${cityName}?`,
        answer: `Para servicios profesionales como ${industryLower} en ${cityName}, los testimonios más efectivos son los que mencionan resultados concretos y la experiencia de trabajo. Por ejemplo, testimonios que destaquen la rapidez de respuesta, la claridad en la comunicación, el resultado obtenido o la relación calidad-precio. Los clientes potenciales en ${cityName} buscan profesionales de confianza, y un testimonio detallado de otro cliente local genera más credibilidad que cualquier descripción propia de tus servicios.`,
      })
      break
    case 'comercio':
      faqs.push({
        question: `¿Cómo pueden los testimonios aumentar las ventas de mi negocio de ${industryLower} en ${cityName}?`,
        answer: `Para ${industryLower} en ${cityName}, los testimonios actúan como el vendedor más convincente. Colocar testimonios junto a tus productos o servicios destacados puede aumentar las conversiones hasta un 34%. En ${cityName}, donde los consumidores comparan múltiples opciones online, ver que otros clientes locales están satisfechos reduce la fricción de compra. Opinafy te permite mostrar testimonios con widgets personalizables en las páginas más importantes: inicio, productos estrella y proceso de pago.`,
      })
      break
    case 'bienestar':
      faqs.push({
        question: `¿Cómo aprovechar los testimonios para fidelizar clientes de ${industryLower} en ${cityName}?`,
        answer: `En ${industryLower}, la fidelización es clave para el crecimiento sostenible. En ${cityName}, los clientes que dejan un testimonio positivo tienen un 70% más de probabilidad de volver. El acto de recomendar refuerza su compromiso con tu negocio. Además, puedes usar los testimonios como contenido para redes sociales, mostrando historias reales de transformación de clientes en ${cityName}. Opinafy facilita este ciclo: el cliente deja su testimonio, tu lo publicas, y nuevos clientes llegan gracias a esa recomendación.`,
      })
      break
    case 'educacion':
      faqs.push({
        question: `¿Qué impacto tienen los testimonios de alumnos en la captación de nuevos estudiantes para ${industryLower} en ${cityName}?`,
        answer: `Los testimonios de alumnos y exalumnos son el factor de decisión número uno para nuevos estudiantes. En ${cityName}, donde la oferta formativa es amplia, un testimonio que detalle la experiencia de aprendizaje, la calidad del profesorado y los resultados obtenidos tras la formación marca la diferencia. Las ${industryLower} en ${cityName} que muestran testimonios en su web y landing pages de captación ven un aumento promedio del 25% en matriculaciones respecto a las que no lo hacen.`,
      })
      break
    case 'creativo':
      faqs.push({
        question: `¿Cómo complementar mi portfolio de ${industryLower} con testimonios efectivos en ${cityName}?`,
        answer: `El portfolio muestra tu trabajo, pero los testimonios muestran la experiencia de trabajar contigo. Para ${industryLower} en ${cityName}, la combinación de ambos es imbatible. Un testimonio que explique cómo fue el proceso de trabajo, la comunicación, el cumplimiento de plazos y la satisfacción con el resultado final aporta la dimensión humana que el portfolio no puede transmitir. Opinafy te permite integrar testimonios junto a tu portfolio para que cada proyecto cuente la historia completa.`,
      })
      break
    case 'tecnologia':
      faqs.push({
        question: `¿Cómo pueden los testimonios mejorar la captación de clientes B2B para ${industryLower} en ${cityName}?`,
        answer: `En el mercado B2B de ${cityName}, las decisiones de compra involucran a múltiples personas y ciclos largos. Los testimonios de otros negocios en ${cityName} reducen el riesgo percibido y aceleran las decisiones. Para ${industryLower}, los testimonios más efectivos son los que incluyen métricas concretas: porcentajes de mejora, tiempos de retorno y resultados medibles. Opinafy te permite destacar estos testimonios de alto impacto en tus propuestas comerciales y landing pages.`,
      })
      break
    case 'vehiculos':
      faqs.push({
        question: `¿Cómo generar confianza con testimonios para ${industryLower} en ${cityName}, donde la desconfianza del sector es alta?`,
        answer: `El sector de ${industryLower} enfrenta un reto de credibilidad particular. En ${cityName}, muchos clientes buscan opiniones antes de confiar su vehículo a un taller. Los testimonios verificados en tu propia web son más creíbles que las reseñas anónimas porque llevan nombre real y se pueden contextualizar. Los negocios de ${industryLower} en ${cityName} que muestran testimonios con detalles del servicio realizado, transparencia en precios y fotos del antes/después logran tasas de conversión muy superiores.`,
      })
      break
  }

  // FAQ 3: Always unique - combines city tier + industry + practical advice
  if (tier === 'grande' && (category === 'salud' || category === 'servicios-profesionales')) {
    faqs.push({
      question: `¿Cuántos testimonios necesita mi negocio de ${industryLower} en ${cityName} para generar impacto?`,
      answer: `En una ciudad grande como ${cityName}${popStr ? ` (${popStr})` : ''}, recomendamos tener al menos 15-20 testimonios publicados para generar una percepción solida de confianza. ${profile ? 'Con sus industrias principales en ' + profile.keyIndustries.slice(0, 2).join(' y ') + ', la competencia es feroz. ' : ''}Los estudios muestran que a partir de 5 testimonios la conversión ya mejora, pero en mercados competitivos como ${cityName} la cantidad refuerza la credibilidad. Con Opinafy puedes empezar mostrando los primeros testimonios desde el dia uno. La clave es mantener un flujo constante: idealmente 2-3 por semana.`,
    })
  } else if (tier === 'grande') {
    faqs.push({
      question: `¿Cómo usar los testimonios para mejorar el SEO local de ${industryLower} en ${cityName}?`,
      answer: `Los testimonios son una fuente de contenido fresco y relevante que Google valora para el posicionamiento local. Cada testimonio de un cliente de ${cityName} que mencione tu negocio de ${industryLower}, el barrio o la zona genera señales de relevancia local. ${profile ? profile.economicProfile.split('.')[0] + ', lo que hace que el SEO local sea clave. ' : ''}Opinafy estructura los testimonios con marcado Schema.org que los buscadores entienden, lo que puede hacer que tus estrellas aparezcan en los resultados de búsqueda. En ${cityName}, está ventaja puede significar decenas de clientes adicionales al mes.`,
    })
  } else if (tier === 'mediana') {
    faqs.push({
      question: `¿Puedo usar testimonios de ${industryLower} para captar clientes de toda la zona de ${cityName}?`,
      answer: `Si, y es una estrategia muy inteligente. En una ciudad como ${cityName}${popStr ? ` (${popStr})` : ''}, tu alcance va más alla del municipio. ${profile ? profile.economicProfile.split('.')[0] + '. ' : ''}Los testimonios de clientes de la ciudad y alrededores demuestran que eres el referente de ${industryLower} en toda la zona. Opinafy te permite etiquetar testimonios por ubicación para mostrar opiniones relevantes a visitantes de distintas localidades. Esto amplifica tu alcance convirtiendo cada testimonio en un argumento de venta para toda tu área de influencia.`,
    })
  } else {
    faqs.push({
      question: `¿Cómo pueden los testimonios compensar la menor visibilidad online de ${industryLower} en ${cityName}?`,
      answer: `En ciudades como ${cityName}${popStr ? ` (${popStr})` : ''}, tu web puede posicionarse más fácilmente en búsquedas locales porque hay menos competencia online. ${profile ? profile.economicProfile.split('.')[0] + '. ' : ''}Los testimonios potencian está ventaja: generan contenido único con palabras clave locales y aumentan el tiempo que los visitantes pasan en tu web, ambas señales positivas para Google. Además, en ${cityName} la recomendación personal tiene mucho peso, y los testimonios digitales extienden ese boca a boca las 24 horas.`,
    })
  }

  return faqs
}
