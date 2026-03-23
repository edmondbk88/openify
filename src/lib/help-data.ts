export interface HelpGuide {
  slug: string
  slugEn: string
  title: string
  category: string
  description: string
  content: string
}

export const helpCategories = [
  { id: 'primeros-pasos', label: 'Primeros Pasos', icon: '🚀' },
  { id: 'testimonios', label: 'Testimonios', icon: '💬' },
  { id: 'widget', label: 'Widget', icon: '🧩' },
  { id: 'mini-sitio', label: 'Mini Sitio', icon: '🌐' },
  { id: 'automatizacion', label: 'Automatizacion', icon: '⚡' },
  { id: 'analytics', label: 'Analytics', icon: '📊' },
  { id: 'integraciones', label: 'Integraciones', icon: '🔗' },
  { id: 'facturacion', label: 'Facturacion', icon: '💳' },
]

export const helpGuides: HelpGuide[] = [
  {
    slug: 'primeros-pasos',
    slugEn: 'getting-started',
    title: 'Primeros pasos con Opinafy',
    category: 'primeros-pasos',
    description: 'Aprende a crear tu cuenta, configurar tu primer proyecto y recopilar tu primer testimonio.',
    content: `
<h2 id="crear-cuenta">Crear tu cuenta en Opinafy</h2>
<p>Comenzar con Opinafy es rapido y gratuito. No necesitas tarjeta de credito para empezar.</p>
<h3>Paso 1: Registro</h3>
<ol>
<li>Ve a <a href="https://opinafy.com/registro">opinafy.com/registro</a> o haz clic en <strong>"Empezar Gratis"</strong> en cualquier pagina.</li>
<li>Introduce tu nombre, email y una contrasena segura.</li>
<li>Haz clic en <strong>"Crear cuenta"</strong>.</li>
<li>Recibiras un email de verificacion. Haz clic en el enlace para activar tu cuenta.</li>
</ol>
<p>Tambien puedes registrarte con Google para un acceso mas rapido.</p>

<h3>Paso 2: Completa tu perfil</h3>
<p>Una vez dentro del panel, te recomendamos completar tu perfil:</p>
<ul>
<li><strong>Nombre de empresa:</strong> Aparecera en tus formularios de recopilacion y en tu mini sitio.</li>
<li><strong>Logo:</strong> Sube el logo de tu empresa para personalizar la experiencia.</li>
<li><strong>URL de tu web:</strong> Necesaria para configurar el widget correctamente.</li>
<li><strong>Username:</strong> Se usara para la URL de tu mini sitio (opinafy.com/s/tu-username).</li>
</ul>

<h2 id="crear-proyecto">Crear tu primer proyecto</h2>
<p>Los proyectos son la forma de organizar tus testimonios. Puedes tener un proyecto por producto, servicio o marca.</p>
<h3>Como crear un proyecto</h3>
<ol>
<li>En el panel de control, haz clic en <strong>"Nuevo Proyecto"</strong>.</li>
<li>Dale un <strong>nombre</strong> al proyecto (ej: "Mi Tienda Online", "Consultoria SEO").</li>
<li>Opcionalmente, anade una <strong>descripcion</strong> para recordar para que es.</li>
<li>Haz clic en <strong>"Crear"</strong>.</li>
</ol>
<p>Tu proyecto se creara con un <strong>slug unico</strong> (URL amigable) basado en el nombre. Este slug se usa en el enlace de recopilacion y en el codigo del widget.</p>

<h3>Limites por plan</h3>
<ul>
<li><strong>Gratis:</strong> 1 proyecto, hasta 10 testimonios</li>
<li><strong>Starter:</strong> 3 proyectos, hasta 50 testimonios por proyecto</li>
<li><strong>Pro:</strong> 10 proyectos, testimonios ilimitados</li>
<li><strong>Business:</strong> Proyectos ilimitados, testimonios ilimitados</li>
</ul>

<h2 id="personalizar-formulario">Personalizar tu formulario de recopilacion</h2>
<p>Cada proyecto tiene un formulario publico donde tus clientes pueden dejar sus testimonios.</p>
<h3>Opciones de personalizacion</h3>
<ul>
<li><strong>Titulo personalizado:</strong> Cambia el mensaje de bienvenida del formulario.</li>
<li><strong>Preguntas guia:</strong> Anade preguntas especificas que ayuden a tus clientes a escribir mejores testimonios (ej: "Que problema te resolvi?", "Recomendarias este servicio?").</li>
<li><strong>Campos opcionales:</strong> Activa o desactiva campos como empresa, cargo, sitio web, telefono.</li>
<li><strong>Logo y colores:</strong> Tu logo aparece automaticamente en el formulario.</li>
<li><strong>Multimedia:</strong> Permite que tus clientes suban fotos, graben audio o video (segun tu plan).</li>
</ul>

<h2 id="compartir-enlace">Compartir tu enlace de recopilacion</h2>
<p>Una vez creado el proyecto, tendras un enlace unico para recopilar testimonios:</p>
<p><code>https://opinafy.com/p/tu-username/nombre-proyecto</code></p>
<h3>Formas de compartir</h3>
<ul>
<li><strong>Enlace directo:</strong> Copialo y compartelo por email, WhatsApp o redes sociales.</li>
<li><strong>Codigo QR:</strong> Genera un QR automaticamente desde el panel y descargalo en PNG o SVG. Ideal para negocios fisicos.</li>
<li><strong>Email:</strong> Usa las plantillas de email incluidas para solicitar testimonios de forma profesional.</li>
<li><strong>WhatsApp:</strong> Comparte directamente con un mensaje predefinido.</li>
</ul>

<h2 id="aprobar-testimonio">Aprobar tu primer testimonio</h2>
<p>Cuando un cliente deja un testimonio, este aparece en tu panel con estado <strong>"Pendiente"</strong>.</p>
<h3>Proceso de aprobacion</h3>
<ol>
<li>Ve a tu proyecto en el panel de control.</li>
<li>Veras los testimonios pendientes en la pestana correspondiente.</li>
<li>Lee el testimonio y decide:</li>
</ol>
<ul>
<li><strong>Aprobar:</strong> El testimonio sera visible en tu widget y mini sitio.</li>
<li><strong>Rechazar:</strong> El testimonio se archiva y no se muestra publicamente.</li>
<li><strong>Destacar (pin):</strong> Marca el testimonio como destacado para que aparezca primero.</li>
</ul>
<p>Recibes una <strong>notificacion por email</strong> cada vez que llega un nuevo testimonio, para que puedas actuar rapidamente.</p>

<h3>Consejos para empezar</h3>
<ul>
<li>Empieza pidiendo testimonios a tus 5-10 mejores clientes. Son los mas propensos a responder.</li>
<li>Personaliza las preguntas guia para obtener testimonios mas detallados y utiles.</li>
<li>Responde publicamente a los testimonios para mostrar que valoras la opinion de tus clientes.</li>
<li>Instala el widget en tu web lo antes posible: incluso 2-3 testimonios ya generan confianza.</li>
</ul>
`,
  },
  {
    slug: 'recopilar-testimonios',
    slugEn: 'collecting-testimonials',
    title: 'Recopilar testimonios',
    category: 'testimonios',
    description: 'Todas las formas de recopilar testimonios: formulario, QR, WhatsApp, email, importacion y automatizacion.',
    content: `
<h2 id="formulario-publico">Formulario publico de recopilacion</h2>
<p>Cada proyecto en Opinafy tiene un formulario publico accesible desde una URL unica. Tus clientes pueden acceder sin necesidad de registrarse ni iniciar sesion.</p>
<h3>Que incluye el formulario</h3>
<ul>
<li><strong>Estrellas (1-5):</strong> Valoracion rapida y visual.</li>
<li><strong>Texto del testimonio:</strong> Campo abierto para que tu cliente escriba su experiencia.</li>
<li><strong>Nombre y apellidos:</strong> Obligatorio para verificar la identidad.</li>
<li><strong>Email:</strong> Opcional pero recomendado para la verificacion.</li>
<li><strong>Empresa y cargo:</strong> Campos opcionales que dan mas credibilidad al testimonio.</li>
<li><strong>Foto de perfil:</strong> El cliente puede subir su foto.</li>
<li><strong>Audio/Video:</strong> Segun tu plan, el cliente puede grabar un testimonio en audio o video.</li>
</ul>

<h2 id="codigos-qr">Codigos QR</h2>
<p>Opinafy genera automaticamente un codigo QR para cada proyecto. Es perfecto para negocios con presencia fisica.</p>
<h3>Como usarlo</h3>
<ol>
<li>Ve a tu proyecto y haz clic en <strong>"Compartir"</strong>.</li>
<li>Descarga el QR en formato PNG o SVG.</li>
<li>Imprimelo y colocalo en:</li>
</ol>
<ul>
<li>El mostrador o caja registradora</li>
<li>Tarjetas de visita</li>
<li>Facturas o presupuestos impresos</li>
<li>Packaging o embalajes</li>
<li>Carteles en la tienda o consulta</li>
</ul>
<p>Cuando un cliente escanea el QR con su movil, se abre directamente el formulario de recopilacion.</p>

<h2 id="whatsapp">Compartir por WhatsApp</h2>
<p>Desde el panel de cada proyecto, puedes compartir el enlace de recopilacion directamente por WhatsApp.</p>
<h3>Como funciona</h3>
<ol>
<li>Haz clic en el boton <strong>"Compartir por WhatsApp"</strong>.</li>
<li>Se abrira WhatsApp con un mensaje predefinido que incluye el enlace a tu formulario.</li>
<li>Selecciona el contacto o grupo al que quieras enviarlo.</li>
</ol>
<p>El mensaje predeterminado es profesional y amigable, pero puedes editarlo antes de enviarlo.</p>

<h2 id="plantillas-email">Plantillas de email para solicitar testimonios</h2>
<p>Opinafy incluye <strong>6 plantillas de email</strong> profesionales que puedes copiar y personalizar para solicitar testimonios a tus clientes.</p>
<h3>Plantillas disponibles</h3>
<ol>
<li><strong>Despues de una compra:</strong> Ideal para ecommerce. Enviala 3-7 dias despues de la entrega.</li>
<li><strong>Despues de un servicio:</strong> Para freelancers, consultores y agencias. Enviala al finalizar el proyecto.</li>
<li><strong>Seguimiento amable:</strong> Un recordatorio suave para clientes que no respondieron la primera vez.</li>
<li><strong>Cliente recurrente:</strong> Para clientes fieles que llevan tiempo contigo.</li>
<li><strong>Despues de una buena interaccion:</strong> Cuando un cliente te da feedback positivo por otro canal.</li>
<li><strong>Incentivo especial:</strong> Ofrece un pequeno descuento o beneficio a cambio del testimonio.</li>
</ol>
<p>Cada plantilla incluye el enlace a tu formulario de recopilacion y puedes personalizarla con el nombre del cliente y de tu empresa.</p>

<h2 id="automatizacion">Automatizacion de solicitudes</h2>
<p>Con los planes Pro y Business, puedes automatizar la solicitud de testimonios usando <strong>webhooks</strong>.</p>
<h3>Integraciones disponibles</h3>
<ul>
<li><strong>Zapier:</strong> Conecta Opinafy con mas de 5.000 apps. Ejemplo: cuando un pedido se marca como entregado en Shopify, envia automaticamente un email pidiendo testimonio.</li>
<li><strong>Make (Integromat):</strong> Crea flujos de trabajo visuales para automatizar solicitudes.</li>
<li><strong>n8n:</strong> Para los que prefieren una solucion self-hosted.</li>
</ul>
<p>Tambien puedes usar la URL del webhook directamente desde tu propio backend para enviar solicitudes programaticas.</p>

<h2 id="importar">Importar testimonios existentes</h2>
<p>Si ya tienes testimonios en otras plataformas, puedes importarlos a Opinafy.</p>
<h3>Fuentes de importacion soportadas</h3>
<ul>
<li><strong>Google Business:</strong> Importa tus resenas de Google directamente.</li>
<li><strong>TripAdvisor:</strong> Copia y anade tus mejores resenas de TripAdvisor.</li>
<li><strong>Trustpilot:</strong> Traete las resenas que ya tienes.</li>
<li><strong>Facebook:</strong> Importa las recomendaciones de tu pagina de Facebook.</li>
<li><strong>Manual:</strong> Anade testimonios uno a uno desde el panel (util para testimonios recibidos por email o chat).</li>
</ul>
<h3>Como importar manualmente</h3>
<ol>
<li>Ve a tu proyecto y haz clic en <strong>"Anadir testimonio"</strong>.</li>
<li>Rellena los campos: nombre, email, texto, estrellas.</li>
<li>Marca la casilla <strong>"Testimonio importado"</strong> para que se identifique correctamente.</li>
<li>El testimonio se anadira como aprobado directamente.</li>
</ol>

<h3>Mejores practicas para recopilar testimonios</h3>
<ul>
<li><strong>Pide en el momento adecuado:</strong> Justo despues de una experiencia positiva, cuando el recuerdo esta fresco.</li>
<li><strong>Se especifico:</strong> Las preguntas guia ayudan a obtener testimonios mas detallados y utiles.</li>
<li><strong>Hazlo facil:</strong> Cuantos menos pasos tenga que dar el cliente, mas testimonios recibiras.</li>
<li><strong>No te desanimes:</strong> La tasa de respuesta tipica es del 10-20%. Cuantos mas pidas, mas recibiras.</li>
<li><strong>Ofrece multiples canales:</strong> Algunos clientes prefieren escribir, otros grabar audio o video.</li>
</ul>
`,
  },
  {
    slug: 'gestionar-testimonios',
    slugEn: 'managing-testimonials',
    title: 'Gestionar testimonios',
    category: 'testimonios',
    description: 'Aprende a aprobar, rechazar, destacar, responder y verificar testimonios en Opinafy.',
    content: `
<h2 id="aprobar-rechazar">Aprobar y rechazar testimonios</h2>
<p>Todos los testimonios pasan por un proceso de moderacion antes de ser visibles publicamente. Esto te da control total sobre lo que se muestra en tu web.</p>
<h3>Estados de un testimonio</h3>
<ol>
<li><strong>Pendiente de verificacion (pending_verification):</strong> El testimonio acaba de llegar y esta esperando la verificacion de email del autor (si esta activada).</li>
<li><strong>Pendiente (pending):</strong> El email ha sido verificado (o la verificacion no estaba activada). El testimonio espera tu aprobacion.</li>
<li><strong>Aprobado (approved):</strong> Has aprobado el testimonio. Es visible en el widget y en tu mini sitio.</li>
<li><strong>Rechazado (rejected):</strong> Has rechazado el testimonio. No es visible publicamente pero se guarda en tu panel.</li>
</ol>

<h3>Como aprobar o rechazar</h3>
<ol>
<li>Ve a <strong>Proyectos &gt; Tu proyecto &gt; Testimonios</strong>.</li>
<li>Filtra por estado <strong>"Pendiente"</strong> para ver los que necesitan atencion.</li>
<li>Para cada testimonio, tienes botones de <strong>Aprobar</strong> y <strong>Rechazar</strong>.</li>
<li>Tambien puedes aprobar o rechazar en lote seleccionando varios testimonios.</li>
</ol>

<h2 id="destacar">Destacar testimonios (Pin)</h2>
<p>Los testimonios destacados aparecen primero en tu widget y mini sitio. Es una forma de dar visibilidad a los testimonios mas potentes.</p>
<h3>Como destacar un testimonio</h3>
<ul>
<li>Haz clic en el icono de <strong>estrella/pin</strong> junto al testimonio aprobado.</li>
<li>Los testimonios destacados se muestran con un indicador especial.</li>
<li>Puedes destacar tantos como quieras, pero recomendamos 3-5 por proyecto.</li>
</ul>

<h2 id="responder">Responder publicamente</h2>
<p>Puedes responder publicamente a cualquier testimonio aprobado. La respuesta aparecera debajo del testimonio en tu widget y mini sitio.</p>
<h3>Por que responder</h3>
<ul>
<li>Muestra que valoras la opinion de tus clientes.</li>
<li>Humaniza tu marca.</li>
<li>Permite aclarar o anadir contexto.</li>
<li>Mejora el engagement y la percepcion de otros visitantes.</li>
</ul>
<h3>Como responder</h3>
<ol>
<li>Abre el testimonio en tu panel.</li>
<li>Escribe tu respuesta en el campo <strong>"Respuesta publica"</strong>.</li>
<li>Haz clic en <strong>"Guardar"</strong>. La respuesta sera visible inmediatamente.</li>
</ol>

<h2 id="verificacion-email">Verificacion de email</h2>
<p>La verificacion de email anade una capa de confianza a tus testimonios. Cuando esta activada, el autor recibe un email para confirmar que el testimonio es suyo.</p>
<h3>Como funciona</h3>
<ol>
<li>El cliente deja un testimonio e introduce su email.</li>
<li>Recibe un email con un enlace de verificacion.</li>
<li>Al hacer clic, el testimonio pasa de <strong>"pending_verification"</strong> a <strong>"pending"</strong>.</li>
<li>Tu lo apruebas o rechazas como siempre.</li>
</ol>
<p>Los testimonios verificados muestran un <strong>badge de "Email verificado"</strong> en el widget, lo que aumenta la credibilidad.</p>

<h2 id="verificacion-empresa">Verificacion de empresa</h2>
<p>Si el autor incluye un email corporativo (no Gmail, Hotmail, etc.), Opinafy verifica automaticamente que el dominio coincida con el sitio web de la empresa indicada.</p>
<p>Los testimonios con empresa verificada muestran un <strong>badge adicional de verificacion</strong> que aumenta la confianza.</p>

<h2 id="sentiment-analysis">Analisis de sentimiento</h2>
<p>Opinafy analiza automaticamente el sentimiento de cada testimonio usando inteligencia artificial.</p>
<h3>Categorias de sentimiento</h3>
<ul>
<li><strong>Positivo:</strong> El testimonio expresa satisfaccion y recomendacion.</li>
<li><strong>Neutral:</strong> El testimonio es equilibrado o factual sin emociones fuertes.</li>
<li><strong>Negativo:</strong> El testimonio expresa insatisfaccion o quejas.</li>
</ul>
<p>El analisis de sentimiento te ayuda a:</p>
<ul>
<li>Identificar rapidamente testimonios problematicos.</li>
<li>Filtrar testimonios por sentimiento.</li>
<li>Entender la satisfaccion general de tus clientes.</li>
<li>Tomar decisiones de aprobacion mas informadas.</li>
</ul>

<h2 id="flujo-completo">Flujo completo de un testimonio</h2>
<p>Este es el recorrido completo de un testimonio desde que se crea hasta que aparece en tu web:</p>
<ol>
<li><strong>El cliente accede al formulario</strong> (via enlace, QR, WhatsApp o email).</li>
<li><strong>Rellena el formulario</strong> con su valoracion, texto, nombre y datos opcionales.</li>
<li><strong>Si la verificacion de email esta activada:</strong> recibe un email y confirma. Estado: <code>pending_verification</code> &rarr; <code>pending</code>.</li>
<li><strong>Si la verificacion no esta activada:</strong> pasa directamente a <code>pending</code>.</li>
<li><strong>Tu recibes una notificacion</strong> por email de que ha llegado un nuevo testimonio.</li>
<li><strong>Revisas y apruebas</strong> el testimonio. Estado: <code>pending</code> &rarr; <code>approved</code>.</li>
<li><strong>El testimonio aparece</strong> automaticamente en tu widget, mini sitio y donde tengas el codigo instalado.</li>
</ol>

<h3>Consejos de gestion</h3>
<ul>
<li>Revisa los testimonios pendientes al menos una vez al dia.</li>
<li>Destaca testimonios que incluyan resultados concretos o numeros.</li>
<li>Responde siempre a los testimonios negativos de forma profesional.</li>
<li>Usa los filtros del panel para gestionar eficientemente grandes volumenes.</li>
</ul>
`,
  },
  {
    slug: 'configurar-widget',
    slugEn: 'configuring-widget',
    title: 'Configurar el widget de testimonios',
    category: 'widget',
    description: 'Elige plantilla, personaliza colores, configura layouts y embebe el widget en tu web con una sola linea.',
    content: `
<h2 id="elegir-plantilla">Elegir una plantilla</h2>
<p>Opinafy ofrece <strong>mas de 100 plantillas</strong> de widget prediseñadas, organizadas por estilo y caso de uso.</p>
<h3>Tipos de plantillas</h3>
<ul>
<li><strong>Clasicas:</strong> Disenos limpios y profesionales para cualquier sector.</li>
<li><strong>Modernas:</strong> Con gradientes, sombras y efectos visuales contemporaneos.</li>
<li><strong>Minimalistas:</strong> Para webs que priorizan la simplicidad.</li>
<li><strong>Creativas:</strong> 15 plantillas con disenos unicos y llamativos.</li>
<li><strong>Oscuras:</strong> Perfectas para webs con fondo oscuro.</li>
</ul>
<p>Puedes previsualizar todas las plantillas en <a href="https://opinafy.com/plantillas">opinafy.com/plantillas</a> antes de elegir.</p>

<h2 id="personalizar">Personalizar colores y tipografia</h2>
<p>Cada plantilla es totalmente personalizable para que se adapte a la identidad visual de tu marca.</p>
<h3>Opciones de personalizacion</h3>
<ul>
<li><strong>Color de fondo:</strong> Del contenedor del widget.</li>
<li><strong>Color de tarjeta:</strong> De cada tarjeta de testimonio individual.</li>
<li><strong>Color de texto:</strong> Del nombre, contenido y metadatos.</li>
<li><strong>Color de estrellas:</strong> Personaliza el color de las valoraciones.</li>
<li><strong>Color de acento:</strong> Para bordes, badges y elementos decorativos.</li>
<li><strong>Tipografia:</strong> Elige entre cientos de Google Fonts. El widget las carga automaticamente.</li>
<li><strong>Radio de bordes:</strong> Ajusta la redondez de las tarjetas.</li>
<li><strong>Sombras:</strong> Activa o desactiva las sombras de las tarjetas.</li>
</ul>

<h2 id="layouts">Los 7 layouts disponibles</h2>
<p>Elige el layout que mejor se adapte a tu web y al espacio disponible:</p>
<h3>1. Carousel</h3>
<p>Muestra los testimonios en un carrusel horizontal con navegacion por flechas o autoplay. Ideal para secciones estrechas o para mostrar muchos testimonios sin ocupar espacio vertical.</p>
<h3>2. Grid</h3>
<p>Muestra los testimonios en una cuadricula responsive. Se adapta automaticamente al ancho disponible (1, 2 o 3 columnas). Ideal para paginas dedicadas a testimonios.</p>
<h3>3. Wall (Masonry)</h3>
<p>Diseno tipo Pinterest donde los testimonios se organizan en columnas de altura variable. Cada tarjeta ocupa el alto natural de su contenido. Ideal para mostrar testimonios de diferentes longitudes.</p>
<h3>4. Single</h3>
<p>Muestra un solo testimonio a la vez con transicion suave entre ellos. Ideal para hero sections o sidebars donde el espacio es limitado.</p>
<h3>5. Badge</h3>
<p>Un widget compacto tipo badge que muestra la valoracion media y el numero de testimonios. Perfecto para colocar en headers, junto al logo o en botones de confianza.</p>
<h3>6. Popup FOMO</h3>
<p>Muestra testimonios como notificaciones emergentes en la esquina inferior de la pantalla. Aparecen periodicamente para crear urgencia y prueba social. Ideal para ecommerce y landing pages de conversion.</p>
<h3>7. Marquee</h3>
<p>Los testimonios se desplazan horizontalmente de forma continua, como un ticker de noticias. Ideal para secciones de logos de clientes o como banner de confianza.</p>

<h2 id="codigo-embed">Codigo embed (una sola linea)</h2>
<p>Instalar el widget en tu web es tan facil como copiar y pegar una linea de codigo:</p>
<pre><code>&lt;div data-opinafy="tu-proyecto-slug" data-template="nombre-plantilla"&gt;&lt;/div&gt;
&lt;script src="https://opinafy.com/widget.js" async&gt;&lt;/script&gt;</code></pre>
<p>Eso es todo. El widget se carga automaticamente, obtiene tus testimonios aprobados y los muestra con la plantilla que hayas elegido.</p>

<h2 id="smart-tags">Smart Tags (data-tags)</h2>
<p>Puedes personalizar el comportamiento del widget usando atributos HTML:</p>
<ul>
<li><code>data-opinafy="slug"</code> - El slug de tu proyecto (obligatorio).</li>
<li><code>data-template="nombre"</code> - La plantilla a usar.</li>
<li><code>data-layout="carousel|grid|wall|single|badge|popup|marquee"</code> - El layout.</li>
<li><code>data-limit="10"</code> - Numero maximo de testimonios a mostrar.</li>
<li><code>data-min-rating="4"</code> - Solo testimonios con valoracion minima.</li>
<li><code>data-tags="vip,premium"</code> - Filtrar por etiquetas.</li>
<li><code>data-autoplay="true"</code> - Autoplay en carousel/single.</li>
<li><code>data-speed="5000"</code> - Velocidad de autoplay en milisegundos.</li>
</ul>

<h2 id="video-display">Modos de visualizacion de video</h2>
<p>Si tus testimonios incluyen video, puedes elegir como se muestran:</p>
<ul>
<li><strong>Inline:</strong> El video se reproduce dentro de la tarjeta del testimonio.</li>
<li><strong>Modal:</strong> Al hacer clic, el video se abre en un modal a pantalla completa.</li>
<li><strong>Thumbnail:</strong> Se muestra una miniatura y al hacer clic se reproduce.</li>
</ul>

<h2 id="preview">Preview en vivo</h2>
<p>Desde el panel de control, puedes previsualizar el widget antes de instalarlo en tu web.</p>
<ol>
<li>Ve a <strong>Proyectos &gt; Tu proyecto &gt; Widget</strong>.</li>
<li>Selecciona plantilla, layout y personaliza los colores.</li>
<li>El preview se actualiza en tiempo real mientras haces cambios.</li>
<li>Cuando estes satisfecho, copia el codigo embed.</li>
</ol>
<p>El preview muestra exactamente como se vera el widget en tu web, incluyendo testimonios reales de tu proyecto.</p>
`,
  },
  {
    slug: 'ab-testing',
    slugEn: 'ab-testing',
    title: 'A/B Testing de testimonios',
    category: 'analytics',
    description: 'Descubre como el A/B testing de testimonios te ayuda a encontrar los que mas convierten.',
    content: `
<h2 id="que-es">Que es el A/B Testing de testimonios</h2>
<p>El A/B testing de testimonios te permite comparar el rendimiento de diferentes testimonios para identificar cuales generan mas confianza y conversiones en tu web.</p>
<p>A diferencia del A/B testing tradicional (que compara paginas completas), en Opinafy comparas <strong>testimonios individuales</strong> para descubrir cuales son mas efectivos.</p>
<h3>Por que es importante</h3>
<ul>
<li>No todos los testimonios generan el mismo impacto.</li>
<li>Un testimonio especifico sobre resultados convierte mas que uno generico.</li>
<li>Los testimonios con foto suelen tener mayor engagement.</li>
<li>Identificar los mejores testimonios te permite optimizar tu conversion.</li>
</ul>

<h2 id="como-funciona">Como funciona</h2>
<p>El sistema de A/B testing de Opinafy rastrea automaticamente dos metricas clave para cada testimonio:</p>
<h3>Metricas rastreadas</h3>
<ul>
<li><strong>Impresiones:</strong> Cuantas veces se ha mostrado un testimonio en tu widget.</li>
<li><strong>Clics:</strong> Cuantas veces un visitante ha interactuado con el testimonio (clic para expandir, ver video, etc.).</li>
</ul>
<h3>Proceso automatico</h3>
<ol>
<li>Cada vez que tu widget se carga en la pagina de un visitante, se registra una <strong>impresion</strong> para cada testimonio visible.</li>
<li>Cuando un visitante interactua con un testimonio (clic para leer mas, reproducir video, etc.), se registra un <strong>clic</strong>.</li>
<li>El sistema calcula automaticamente el <strong>CTR (Click-Through Rate)</strong> de cada testimonio.</li>
<li>Con el tiempo, puedes ver cuales testimonios generan mas engagement.</li>
</ol>

<h2 id="ver-analytics">Ver analytics de testimonios</h2>
<p>Accede a las analytics de A/B testing desde tu panel:</p>
<ol>
<li>Ve a <strong>Proyectos &gt; Tu proyecto &gt; Analytics</strong>.</li>
<li>La URL directa es: <code>/proyectos/tu-slug/analytics</code>.</li>
<li>Veras una tabla con todos tus testimonios y sus metricas:</li>
</ol>
<ul>
<li><strong>Impresiones totales:</strong> Numero total de veces que se ha mostrado.</li>
<li><strong>Clics totales:</strong> Numero total de interacciones.</li>
<li><strong>CTR:</strong> Porcentaje de clics sobre impresiones.</li>
<li><strong>Tendencia:</strong> Si el rendimiento sube o baja con el tiempo.</li>
</ul>

<h2 id="ctr">CTR por testimonio</h2>
<p>El CTR (Click-Through Rate) es la metrica principal del A/B testing. Se calcula asi:</p>
<p><code>CTR = (Clics / Impresiones) x 100</code></p>
<h3>Interpretar el CTR</h3>
<ul>
<li><strong>CTR alto (&gt; 5%):</strong> El testimonio genera mucho interes. Consideralo como testimonio destacado.</li>
<li><strong>CTR medio (2-5%):</strong> Rendimiento normal. Buen testimonio de apoyo.</li>
<li><strong>CTR bajo (&lt; 2%):</strong> El testimonio no genera interes. Considera reemplazarlo o moverlo a una posicion menos visible.</li>
</ul>
<p>Ten en cuenta que los CTR varian segun el sector, el tipo de widget y la posicion del testimonio en la pagina.</p>

<h2 id="mejores-practicas">Mejores practicas</h2>
<h3>1. Espera datos suficientes</h3>
<p>No tomes decisiones con pocas impresiones. Espera al menos <strong>100 impresiones por testimonio</strong> antes de comparar CTRs.</p>
<h3>2. Destaca los ganadores</h3>
<p>Marca como destacados los testimonios con mayor CTR para que aparezcan primero en tu widget.</p>
<h3>3. Rota los testimonios</h3>
<p>Anade nuevos testimonios periodicamente y compara su rendimiento con los existentes. Los testimonios recientes suelen tener mejor engagement.</p>
<h3>4. Prueba diferentes formatos</h3>
<p>Compara el rendimiento de testimonios de texto vs. video, cortos vs. largos, con foto vs. sin foto.</p>
<h3>5. Considera el contexto</h3>
<p>Un testimonio puede funcionar mejor en una landing page que en la home. Si usas varios widgets, analiza el rendimiento por ubicacion.</p>
<h3>6. Actua sobre los datos</h3>
<ul>
<li>Reemplaza los testimonios con peor CTR.</li>
<li>Pide mas testimonios similares a los que mejor funcionan.</li>
<li>Ajusta las preguntas guia de tu formulario basandote en los patrones de los testimonios mas efectivos.</li>
</ul>
`,
  },
  {
    slug: 'mini-sitio',
    slugEn: 'mini-site',
    title: 'Mini Sitio de testimonios',
    category: 'mini-sitio',
    description: 'Crea tu propio mini sitio de testimonios con URL personalizada, bio, plantillas y mas.',
    content: `
<h2 id="que-es">Que es el Mini Sitio</h2>
<p>El Mini Sitio es una pagina web publica alojada en Opinafy donde puedes mostrar todos tus testimonios, tu perfil profesional y los enlaces a tus proyectos. Es como tu propia pagina de prueba social.</p>
<h3>URL del Mini Sitio</h3>
<p>Tu mini sitio es accesible desde:</p>
<p><code>https://opinafy.com/s/tu-username</code></p>
<p>Puedes compartir esta URL en tu firma de email, redes sociales, tarjetas de visita o donde quieras mostrar tu reputacion.</p>

<h3>Para quien es</h3>
<ul>
<li><strong>Freelancers:</strong> Muestra testimonios de tus clientes en una pagina profesional.</li>
<li><strong>Pequenas empresas:</strong> Complementa tu web con una pagina dedicada a la reputacion.</li>
<li><strong>Consultores:</strong> Comparte tu historial de satisfaccion con potenciales clientes.</li>
<li><strong>Agencias:</strong> Muestra el feedback de todos tus proyectos en un solo lugar.</li>
<li><strong>Profesionales de salud:</strong> Dentistas, medicos, terapeutas... con plantillas especificas.</li>
</ul>

<h2 id="configurar-bio">Configurar tu bio y sitio web</h2>
<p>El mini sitio muestra tu informacion profesional en la cabecera:</p>
<h3>Campos disponibles</h3>
<ul>
<li><strong>Nombre o empresa:</strong> Tu nombre profesional o el de tu empresa.</li>
<li><strong>Bio:</strong> Una descripcion breve (hasta 300 caracteres) de lo que haces.</li>
<li><strong>Sitio web:</strong> Enlace a tu web principal.</li>
<li><strong>Logo/Avatar:</strong> Tu foto profesional o logo de empresa.</li>
<li><strong>Ubicacion:</strong> Ciudad o pais (opcional).</li>
</ul>
<p>Configura estos datos desde <strong>Panel &gt; Configuracion &gt; Perfil</strong>.</p>

<h2 id="elegir-plantilla">Elegir plantilla del Mini Sitio</h2>
<p>Opinafy ofrece <strong>30 plantillas de Mini Sitio</strong> organizadas por profesion y estilo.</p>
<h3>Categorias de plantillas</h3>
<ul>
<li><strong>General:</strong> Disenos universales que funcionan para cualquier sector.</li>
<li><strong>Freelancer:</strong> Enfocadas en servicios profesionales.</li>
<li><strong>Ecommerce:</strong> Ideales para tiendas online.</li>
<li><strong>Restauracion:</strong> Para restaurantes, cafeterias, bares.</li>
<li><strong>Salud:</strong> Para consultas medicas, dentales, terapeuticas.</li>
<li><strong>Educacion:</strong> Para academias, profesores, tutores.</li>
<li><strong>Inmobiliaria:</strong> Para agentes y agencias inmobiliarias.</li>
<li><strong>Legal:</strong> Para abogados y despachos.</li>
</ul>
<p>Puedes previsualizar todas las plantillas en <a href="https://opinafy.com/plantillas-minisitio">opinafy.com/plantillas-minisitio</a>.</p>

<h2 id="elegir-proyectos">Elegir que proyectos mostrar</h2>
<p>Tu mini sitio puede mostrar los testimonios de uno, varios o todos tus proyectos.</p>
<h3>Opciones de configuracion</h3>
<ul>
<li><strong>Todos los proyectos:</strong> Muestra todos tus testimonios aprobados de todos los proyectos.</li>
<li><strong>Proyectos seleccionados:</strong> Elige manualmente cuales proyectos incluir.</li>
<li><strong>Ocultar proyectos:</strong> Excluye proyectos que no quieras mostrar publicamente.</li>
</ul>

<h2 id="testimonios-por-pagina">Configurar testimonios por pagina</h2>
<p>Controla cuantos testimonios se muestran inicialmente y como se cargan mas:</p>
<ul>
<li><strong>Testimonios por pagina:</strong> Elige cuantos testimonios se muestran al cargar (6, 12, 24 o todos).</li>
<li><strong>Orden:</strong> Los testimonios destacados siempre aparecen primero, seguidos de los mas recientes.</li>
<li><strong>Cargar mas:</strong> Un boton "Ver mas testimonios" permite cargar el siguiente lote sin recargar la pagina.</li>
</ul>

<h2 id="compartir">Compartir tu Mini Sitio</h2>
<p>Una vez configurado, puedes compartir tu mini sitio de varias formas:</p>
<ul>
<li><strong>URL directa:</strong> <code>opinafy.com/s/tu-username</code> - Compartela en emails, chats, etc.</li>
<li><strong>Codigo QR:</strong> Genera un QR de tu mini sitio y descargalo. Ideal para materiales impresos.</li>
<li><strong>Redes sociales:</strong> Comparte directamente en LinkedIn, Twitter, Instagram bio, etc.</li>
<li><strong>Firma de email:</strong> Anade el enlace a tu firma profesional.</li>
<li><strong>Tarjetas de visita:</strong> Imprime el QR o la URL en tus tarjetas.</li>
</ul>

<h3>SEO del Mini Sitio</h3>
<p>Tu mini sitio esta optimizado para buscadores:</p>
<ul>
<li>Incluye datos estructurados (Schema.org) para que Google entienda el contenido.</li>
<li>Meta tags optimizados con tu nombre, bio y numero de testimonios.</li>
<li>Open Graph para previsualizacion en redes sociales.</li>
<li>URL limpia y facil de recordar.</li>
</ul>
`,
  },
  {
    slug: 'video-audio-foto',
    slugEn: 'video-audio-photo',
    title: 'Testimonios en video, audio y foto',
    category: 'testimonios',
    description: 'Como grabar y gestionar testimonios en video, audio y con foto adjunta.',
    content: `
<h2 id="video">Testimonios en video</h2>
<p>Los testimonios en video son los mas poderosos: generan hasta <strong>3 veces mas confianza</strong> que los testimonios de texto. Opinafy permite a tus clientes grabar video directamente desde el formulario.</p>
<h3>Disponibilidad</h3>
<ul>
<li><strong>Plan Business:</strong> Grabacion de video habilitada.</li>
<li><strong>Otros planes:</strong> Solo texto, audio y foto.</li>
</ul>
<h3>Como funciona la grabacion de video</h3>
<ol>
<li>El cliente accede a tu formulario de recopilacion.</li>
<li>Hace clic en el boton <strong>"Grabar video"</strong>.</li>
<li>El navegador solicita permiso para acceder a la camara y microfono.</li>
<li>El cliente graba su testimonio (duracion maxima: 2 minutos).</li>
<li>Puede previsualizar y re-grabar si no queda satisfecho.</li>
<li>Al enviar, el video se sube automaticamente.</li>
</ol>
<h3>Especificaciones tecnicas</h3>
<ul>
<li><strong>Formato:</strong> WebM (grabacion) / MP4 (conversion automatica).</li>
<li><strong>Resolucion:</strong> Hasta 720p.</li>
<li><strong>Duracion maxima:</strong> 2 minutos.</li>
<li><strong>Tamano maximo:</strong> 50 MB.</li>
<li><strong>Compresion:</strong> Automatica del lado del servidor para optimizar el almacenamiento y la carga.</li>
</ul>

<h2 id="audio">Testimonios en audio</h2>
<p>Los testimonios en audio son una alternativa perfecta al video: mas personales que el texto, pero sin la barrera de ponerse frente a una camara.</p>
<h3>Disponibilidad</h3>
<ul>
<li><strong>Todos los planes de pago:</strong> Grabacion de audio habilitada (Starter, Pro y Business).</li>
<li><strong>Plan Gratis:</strong> Solo texto y foto.</li>
</ul>
<h3>Como funciona la grabacion de audio</h3>
<ol>
<li>El cliente accede a tu formulario de recopilacion.</li>
<li>Hace clic en el boton <strong>"Grabar audio"</strong>.</li>
<li>El navegador solicita permiso para acceder al microfono.</li>
<li>El cliente graba su testimonio (duracion maxima: 3 minutos).</li>
<li>Puede previsualizar y re-grabar.</li>
<li>Al enviar, el audio se sube automaticamente.</li>
</ol>
<h3>Especificaciones tecnicas</h3>
<ul>
<li><strong>Formato:</strong> WebM audio / MP3 (conversion automatica).</li>
<li><strong>Duracion maxima:</strong> 3 minutos.</li>
<li><strong>Tamano maximo:</strong> 10 MB.</li>
<li><strong>Calidad:</strong> 128 kbps.</li>
</ul>

<h2 id="foto">Fotos en testimonios</h2>
<p>Tus clientes pueden subir una foto junto a su testimonio. Las fotos anadidas credibilidad y hacen que los testimonios sean mas visuales.</p>
<h3>Disponibilidad</h3>
<ul>
<li><strong>Todos los planes:</strong> Subida de fotos habilitada.</li>
</ul>
<h3>Tipos de fotos</h3>
<ul>
<li><strong>Foto de perfil:</strong> Una foto del cliente que aparece como avatar junto a su nombre.</li>
<li><strong>Foto adjunta:</strong> Una foto relacionada con el testimonio (ej: el producto, el resultado, antes/despues).</li>
</ul>
<h3>Especificaciones tecnicas</h3>
<ul>
<li><strong>Formatos soportados:</strong> JPG, PNG, WebP, GIF.</li>
<li><strong>Tamano maximo:</strong> 5 MB por imagen.</li>
<li><strong>Resolucion:</strong> Se redimensiona automaticamente a un maximo de 1200px de ancho.</li>
<li><strong>Compresion:</strong> Automatica para optimizar la carga.</li>
</ul>

<h2 id="compresion">Compresion automatica</h2>
<p>Todos los archivos multimedia subidos a Opinafy se comprimen automaticamente para garantizar tiempos de carga rapidos sin sacrificar calidad perceptible.</p>
<h3>Como funciona</h3>
<ul>
<li><strong>Imagenes:</strong> Se redimensionan y comprimen manteniendo una calidad visual excelente.</li>
<li><strong>Audio:</strong> Se convierte a MP3 a 128 kbps, equilibrio optimo entre calidad y tamano.</li>
<li><strong>Video:</strong> Se convierte a MP4 con compresion H.264. La resolucion se ajusta a 720p si el original es mayor.</li>
</ul>
<p>La compresion es transparente para el usuario: el archivo original se procesa en segundo plano y el resultado optimizado se sirve a traves de CDN para maxima velocidad.</p>

<h3>Consejos para multimedia</h3>
<ul>
<li>Anima a tus clientes a grabar testimonios en video: son mucho mas impactantes.</li>
<li>Si tu plan no incluye video, el audio es una excelente alternativa.</li>
<li>Las fotos de perfil ayudan a humanizar los testimonios de texto.</li>
<li>Asegurate de que tus clientes tengan buena iluminacion y un entorno tranquilo para grabar.</li>
</ul>
`,
  },
  {
    slug: 'integraciones',
    slugEn: 'integrations',
    title: 'Integraciones',
    category: 'integraciones',
    description: 'Como integrar Opinafy con WordPress, Shopify, WooCommerce, Webflow, Wix y mas.',
    content: `
<h2 id="wordpress">WordPress</h2>
<p>Instalar Opinafy en WordPress es rapido y facil. Tienes varias opciones:</p>
<h3>Opcion 1: Bloque HTML personalizado</h3>
<ol>
<li>Edita la pagina donde quieres mostrar testimonios.</li>
<li>Anade un bloque <strong>"HTML personalizado"</strong>.</li>
<li>Pega el codigo embed de Opinafy.</li>
<li>Guarda y publica.</li>
</ol>
<h3>Opcion 2: Plugin de header/footer</h3>
<ol>
<li>Instala un plugin como <strong>"WPCode"</strong> o <strong>"Insert Headers and Footers"</strong>.</li>
<li>Ve a la configuracion del plugin.</li>
<li>Pega el script de Opinafy (<code>&lt;script src="https://opinafy.com/widget.js" async&gt;&lt;/script&gt;</code>) en la seccion Footer.</li>
<li>En la pagina deseada, anade un bloque HTML con <code>&lt;div data-opinafy="tu-slug"&gt;&lt;/div&gt;</code>.</li>
</ol>
<h3>Opcion 3: Shortcode (con plugin)</h3>
<p>Si usas un plugin de shortcodes, puedes crear uno que inserte el div de Opinafy. Consulta la <a href="https://opinafy.com/guias/wordpress">guia completa de WordPress</a>.</p>

<h2 id="shopify">Shopify</h2>
<p>Integra testimonios en tu tienda Shopify para aumentar la confianza de tus compradores.</p>
<h3>Instalacion</h3>
<ol>
<li>Ve a <strong>Tienda online &gt; Temas &gt; Personalizar</strong>.</li>
<li>Anade una seccion <strong>"HTML personalizado"</strong> o <strong>"Liquid personalizado"</strong>.</li>
<li>Pega el codigo embed de Opinafy.</li>
<li>Guarda los cambios.</li>
</ol>
<h3>Donde colocar testimonios en Shopify</h3>
<ul>
<li><strong>Pagina de inicio:</strong> Debajo del hero o de los productos destacados.</li>
<li><strong>Paginas de producto:</strong> Justo antes del boton de compra o en una pestana dedicada.</li>
<li><strong>Pagina de checkout:</strong> Para reducir el abandono de carrito.</li>
</ul>

<h2 id="woocommerce">WooCommerce</h2>
<p>WooCommerce funciona sobre WordPress, asi que puedes usar las mismas opciones de instalacion de WordPress.</p>
<p>Ademas, puedes colocar testimonios en:</p>
<ul>
<li><strong>Paginas de producto:</strong> Usando hooks de WooCommerce.</li>
<li><strong>Pagina de agradecimiento:</strong> Despues de una compra completada.</li>
<li><strong>Sidebar:</strong> Como widget de WordPress en la barra lateral.</li>
</ul>

<h2 id="prestashop">PrestaShop</h2>
<ol>
<li>Ve a <strong>Diseno &gt; Posiciones</strong>.</li>
<li>Haz clic en <strong>"Inyectar un modulo"</strong>.</li>
<li>Usa el modulo <strong>"HTML personalizado"</strong> o similar.</li>
<li>Pega el codigo embed de Opinafy en el hook deseado (displayHome, displayFooterBefore, etc.).</li>
<li>Guarda los cambios.</li>
</ol>

<h2 id="webflow">Webflow</h2>
<h3>Opcion 1: Codigo personalizado del proyecto</h3>
<ol>
<li>Ve a <strong>Configuracion del proyecto &gt; Codigo personalizado</strong>.</li>
<li>Pega el script de Opinafy en la seccion <strong>"Footer Code"</strong>.</li>
<li>En tu pagina, anade un elemento <strong>Embed</strong> con el div de Opinafy.</li>
</ol>
<h3>Opcion 2: Por pagina</h3>
<ol>
<li>En la pagina deseada, ve a <strong>Configuracion de pagina &gt; Codigo personalizado</strong>.</li>
<li>Pega todo el codigo embed (div + script) en la seccion "Before &lt;/body&gt; tag".</li>
</ol>
<p>Consulta la <a href="https://opinafy.com/guias/webflow">guia completa de Webflow</a>.</p>

<h2 id="wix">Wix y Squarespace</h2>
<h3>Wix</h3>
<ol>
<li>Anade un elemento <strong>"HTML embebido"</strong> (iframe o embed) a tu pagina.</li>
<li>Pega el codigo embed de Opinafy.</li>
<li>Ajusta el tamano del elemento.</li>
</ol>
<h3>Squarespace</h3>
<ol>
<li>Anade un bloque de <strong>"Codigo"</strong> a tu pagina.</li>
<li>Pega el codigo embed de Opinafy.</li>
<li>Guarda y publica.</li>
</ol>
<p>Consulta las guias completas: <a href="https://opinafy.com/guias/wix">Wix</a> | <a href="https://opinafy.com/guias/squarespace">Squarespace</a>.</p>

<h2 id="gtm">Google Tag Manager</h2>
<p>Si ya usas GTM para gestionar los scripts de tu sitio, puedes instalar Opinafy a traves de el.</p>
<ol>
<li>En GTM, crea una nueva etiqueta de tipo <strong>"HTML personalizado"</strong>.</li>
<li>Pega el script de Opinafy.</li>
<li>Configura el activador para que se dispare en las paginas donde quieras mostrar testimonios.</li>
<li>Publica los cambios.</li>
</ol>
<p>Consulta la <a href="https://opinafy.com/guias/google-tag-manager">guia completa de GTM</a>.</p>

<h2 id="webhooks">Webhooks (Zapier, Make, n8n)</h2>
<p>Los webhooks te permiten conectar Opinafy con miles de herramientas externas.</p>
<h3>Eventos disponibles</h3>
<ul>
<li><strong>Nuevo testimonio:</strong> Se dispara cuando un cliente deja un nuevo testimonio.</li>
<li><strong>Testimonio aprobado:</strong> Se dispara cuando apruebas un testimonio.</li>
<li><strong>Testimonio rechazado:</strong> Se dispara cuando rechazas un testimonio.</li>
</ul>
<h3>Ejemplos de automatizaciones</h3>
<ul>
<li>Enviar un mensaje de agradecimiento por email cuando se aprueba un testimonio.</li>
<li>Publicar automaticamente en redes sociales cuando llega un testimonio de 5 estrellas.</li>
<li>Notificar en Slack cuando llega un testimonio negativo.</li>
<li>Solicitar testimonio automaticamente 7 dias despues de una compra en Shopify.</li>
</ul>
`,
  },
  {
    slug: 'facturacion-planes',
    slugEn: 'billing-plans',
    title: 'Facturacion y planes',
    category: 'facturacion',
    description: 'Informacion sobre los 4 planes de Opinafy, como mejorar, cancelar y la garantia de 14 dias.',
    content: `
<h2 id="planes">Los 4 planes de Opinafy</h2>
<p>Opinafy ofrece 4 planes adaptados a cada etapa de crecimiento de tu negocio:</p>

<h3>Plan Gratis (0 EUR/mes)</h3>
<ul>
<li>1 proyecto</li>
<li>10 testimonios</li>
<li>2 layouts de widget (Grid y Carousel)</li>
<li>Formulario de recopilacion basico</li>
<li>Foto en testimonios</li>
<li>Mini Sitio basico</li>
<li>Sin marca de agua de Opinafy: NO (aparece "Powered by Opinafy")</li>
</ul>

<h3>Plan Starter (5 EUR/mes)</h3>
<ul>
<li>3 proyectos</li>
<li>50 testimonios por proyecto</li>
<li>Todos los layouts de widget</li>
<li>Audio en testimonios</li>
<li>Plantillas basicas de widget</li>
<li>Sin marca de agua de Opinafy</li>
<li>QR codes</li>
<li>Plantillas de email</li>
<li>Analisis de sentimiento</li>
</ul>

<h3>Plan Pro (9 EUR/mes)</h3>
<ul>
<li>10 proyectos</li>
<li>Testimonios ilimitados</li>
<li>Todas las plantillas de widget (80+)</li>
<li>A/B testing de testimonios</li>
<li>Analytics avanzados</li>
<li>Respuesta publica a testimonios</li>
<li>Importacion de testimonios</li>
<li>Smart tags</li>
<li>Mini Sitio con todas las plantillas</li>
<li>Webhooks</li>
<li>Soporte prioritario</li>
</ul>

<h3>Plan Business (19 EUR/mes)</h3>
<ul>
<li>Proyectos ilimitados</li>
<li>Testimonios ilimitados</li>
<li>Todo lo del plan Pro</li>
<li>Video en testimonios</li>
<li>3 asientos de equipo</li>
<li>API completa</li>
<li>CSS personalizado para widgets</li>
<li>Certificacion verificada</li>
<li>Social Post Generator</li>
<li>PDF Export</li>
<li>Soporte premium</li>
</ul>

<h2 id="mejorar-plan">Como mejorar tu plan</h2>
<ol>
<li>Ve a <strong>Panel &gt; Configuracion &gt; Facturacion</strong>.</li>
<li>Haz clic en <strong>"Cambiar plan"</strong>.</li>
<li>Selecciona el plan al que quieres mejorar.</li>
<li>Introduce tus datos de pago (tarjeta de credito o debito).</li>
<li>Confirma el cambio. El nuevo plan se activa inmediatamente.</li>
</ol>
<p>Opinafy usa <strong>Stripe</strong> para procesar los pagos de forma segura. No almacenamos datos de tarjetas en nuestros servidores.</p>
<h3>Pago proporcional</h3>
<p>Si mejoras a mitad de ciclo, solo pagas la diferencia proporcional. No pierdes el dinero del plan anterior.</p>

<h2 id="cancelar">Como cancelar tu suscripcion</h2>
<ol>
<li>Ve a <strong>Panel &gt; Configuracion &gt; Facturacion</strong>.</li>
<li>Haz clic en <strong>"Cancelar suscripcion"</strong>.</li>
<li>Confirma la cancelacion.</li>
<li>Tu plan de pago seguira activo hasta el final del periodo de facturacion actual.</li>
<li>Despues, tu cuenta se degradara automaticamente al plan Gratis.</li>
</ol>
<p>No hay penalizaciones por cancelar. Puedes volver a suscribirte en cualquier momento.</p>

<h2 id="garantia">Garantia de 14 dias</h2>
<p>Todos los planes de pago incluyen una <strong>garantia de devolucion de 14 dias</strong>.</p>
<ul>
<li>Si no estas satisfecho con Opinafy, contactanos dentro de los primeros 14 dias.</li>
<li>Te devolvemos el 100% del importe sin preguntas.</li>
<li>La garantia aplica al primer pago de cada suscripcion.</li>
</ul>
<p>Para solicitar la devolucion, envia un email a <a href="mailto:hola@opinafy.com">hola@opinafy.com</a> con tu email de registro.</p>

<h2 id="downgrade">Que pasa al bajar de plan (downgrade)</h2>
<p>Si cancelas tu plan de pago o bajas a un plan inferior, esto es lo que ocurre:</p>
<h3>Proyectos</h3>
<ul>
<li>Si tienes mas proyectos de los permitidos en el nuevo plan, los proyectos <strong>no se eliminan</strong>.</li>
<li>Puedes seguir viendo todos tus proyectos, pero no podras crear nuevos hasta estar dentro del limite.</li>
<li>Los widgets de todos tus proyectos siguen funcionando.</li>
</ul>
<h3>Testimonios</h3>
<ul>
<li>Los testimonios existentes <strong>no se eliminan</strong>.</li>
<li>Si superas el limite de testimonios del nuevo plan, no podras recibir nuevos hasta estar dentro del limite.</li>
<li>Los testimonios aprobados siguen mostrando en tu widget.</li>
</ul>
<h3>Funcionalidades</h3>
<ul>
<li>Las funcionalidades exclusivas del plan anterior dejan de estar disponibles.</li>
<li>Los widgets que usen plantillas o layouts no disponibles en tu nuevo plan seguiran mostrando los testimonios, pero con la configuracion por defecto del plan.</li>
<li>Los testimonios en video dejan de mostrarse si bajas del plan Business (pero no se eliminan).</li>
</ul>
<h3>Mini Sitio</h3>
<ul>
<li>Tu mini sitio sigue activo, pero usa la plantilla por defecto del plan Gratis.</li>
</ul>
<p>En resumen: <strong>nunca pierdes datos</strong>. Solo se limitan las funcionalidades disponibles segun tu plan actual.</p>
`,
  },
  {
    slug: 'herramientas-avanzadas',
    slugEn: 'advanced-tools',
    title: 'Herramientas avanzadas',
    category: 'automatizacion',
    description: 'Health Score, Certificacion, Social Post Generator, PDF Export, Ranking y mas.',
    content: `
<h2 id="health-score">Health Score</h2>
<p>El Health Score es una herramienta gratuita que analiza cualquier sitio web y evalua su estrategia de prueba social.</p>
<h3>Que analiza</h3>
<ul>
<li><strong>Testimonios visibles:</strong> Tiene testimonios de clientes en la web?</li>
<li><strong>Logos de clientes:</strong> Muestra logos de empresas que confian en el?</li>
<li><strong>Casos de exito:</strong> Tiene paginas de casos de exito o estudios?</li>
<li><strong>Valoraciones:</strong> Muestra estrellas o puntuaciones?</li>
<li><strong>Badges de confianza:</strong> Tiene sellos de seguridad, certificaciones, etc.?</li>
<li><strong>Redes sociales:</strong> Tiene presencia y prueba social en redes?</li>
</ul>
<h3>Como usarlo</h3>
<ol>
<li>Ve a <a href="https://opinafy.com/health-score">opinafy.com/health-score</a>.</li>
<li>Introduce la URL del sitio web que quieras analizar.</li>
<li>Recibiras una puntuacion de 0 a 100 con recomendaciones especificas.</li>
</ol>
<p>Es una herramienta gratuita y no requiere registro. Ideal para analizar tu propia web o la de tu competencia.</p>

<h2 id="certificacion">Certificacion de Prueba Social</h2>
<p>La certificacion de Opinafy reconoce a los negocios que usan activamente la prueba social para generar confianza.</p>
<h3>Niveles de certificacion</h3>
<ul>
<li><strong>Bronze:</strong> Al menos 5 testimonios aprobados con una media de 4+ estrellas.</li>
<li><strong>Silver:</strong> Al menos 15 testimonios aprobados con una media de 4.2+ estrellas.</li>
<li><strong>Gold:</strong> Al menos 30 testimonios aprobados con una media de 4.5+ estrellas y verificacion de email activa.</li>
<li><strong>Platinum:</strong> Al menos 50 testimonios aprobados con una media de 4.7+ estrellas, verificacion de email activa y testimonios en video.</li>
</ul>
<h3>Beneficios</h3>
<ul>
<li><strong>Badge embebible:</strong> Puedes incrustar tu badge de certificacion en tu web con un codigo simple.</li>
<li><strong>Visibilidad en el ranking:</strong> Apareces en el ranking publico de Opinafy.</li>
<li><strong>Credibilidad:</strong> Los clientes ven que tu reputacion esta verificada por un tercero.</li>
</ul>
<p>Comprueba tu certificacion en <a href="https://opinafy.com/certificacion">opinafy.com/certificacion</a>.</p>

<h2 id="social-post">Social Post Generator</h2>
<p>Convierte tus mejores testimonios en imagenes profesionales para redes sociales.</p>
<h3>Como funciona</h3>
<ol>
<li>Ve a un testimonio aprobado en tu panel.</li>
<li>Haz clic en <strong>"Crear post social"</strong>.</li>
<li>Elige una plantilla de diseno para redes sociales.</li>
<li>Personaliza colores y formato.</li>
<li>Descarga la imagen en formato optimizado para Instagram, LinkedIn, Twitter o Facebook.</li>
</ol>
<p>Disponible en los planes <strong>Business</strong>.</p>

<h2 id="pdf-export">PDF Export</h2>
<p>Exporta tus testimonios en formato PDF profesional para usar en propuestas, presentaciones o materiales impresos.</p>
<h3>Opciones de exportacion</h3>
<ul>
<li><strong>Todos los testimonios:</strong> Exporta un PDF con todos los testimonios aprobados de un proyecto.</li>
<li><strong>Seleccionados:</strong> Elige los testimonios especificos que quieres incluir.</li>
<li><strong>Con formato:</strong> El PDF incluye tu logo, estrellas, nombres y fechas.</li>
</ul>
<p>Disponible en los planes <strong>Business</strong>.</p>

<h2 id="ranking">Ranking publico</h2>
<p>El ranking de Opinafy es una clasificacion publica de los negocios con mejor reputacion verificada.</p>
<h3>Como funciona</h3>
<ul>
<li>Se calcula automaticamente basandose en: numero de testimonios, media de estrellas, verificaciones y actividad reciente.</li>
<li>Solo incluye negocios con al menos 5 testimonios aprobados.</li>
<li>Se actualiza diariamente.</li>
</ul>
<p>Consulta el ranking en <a href="https://opinafy.com/ranking">opinafy.com/ranking</a>.</p>

<h2 id="notificaciones">Notificaciones</h2>
<p>Opinafy te mantiene informado con notificaciones por email:</p>
<ul>
<li><strong>Nuevo testimonio:</strong> Recibes un email cada vez que un cliente deja un testimonio.</li>
<li><strong>Testimonio verificado:</strong> Cuando un testimonio completa la verificacion de email.</li>
<li><strong>Resumen semanal:</strong> Un resumen de la actividad de la semana (testimonios recibidos, aprobados, etc.).</li>
</ul>
<p>Puedes configurar que notificaciones recibir desde <strong>Panel &gt; Configuracion &gt; Notificaciones</strong>.</p>

<h2 id="badge-verificacion">Badge de verificacion embebible</h2>
<p>Muestra tu certificacion de Opinafy directamente en tu web con un badge embebible.</p>
<h3>Como instalarlo</h3>
<ol>
<li>Ve a <a href="https://opinafy.com/verificado-badge">opinafy.com/verificado-badge</a>.</li>
<li>Selecciona el estilo del badge (claro, oscuro, compacto).</li>
<li>Copia el codigo embed.</li>
<li>Pegalo en tu web donde quieras mostrar el badge.</li>
</ol>
<p>El badge muestra:</p>
<ul>
<li>Tu nivel de certificacion (Bronze/Silver/Gold/Platinum).</li>
<li>Tu media de estrellas.</li>
<li>El numero de testimonios verificados.</li>
<li>Un enlace a tu mini sitio para que los visitantes vean los testimonios completos.</li>
</ul>
<p>El badge se actualiza automaticamente cuando cambian tus metricas.</p>
`,
  },
]
