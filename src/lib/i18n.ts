export type Locale = 'es' | 'en'

const translations: Record<Locale, Record<string, string>> = {
  es: {
    // Sidebar
    'nav.dashboard': 'Dashboard',
    'nav.projects': 'Proyectos',
    'nav.mysite': 'Mi Sitio',
    'nav.settings': 'Configuraci\u00f3n',
    'nav.billing': 'Facturaci\u00f3n',
    'nav.support': 'Soporte',
    'nav.logout': 'Cerrar sesi\u00f3n',

    // Dashboard
    'dashboard.title': 'Panel de Control',
    'dashboard.totalProjects': 'Total Proyectos',
    'dashboard.totalTestimonials': 'Total Testimonios',
    'dashboard.pending': 'Pendientes',
    'dashboard.impressions': 'Impresiones',
    'dashboard.recentTestimonials': 'Testimonios recientes',
    'dashboard.recentUsers': 'Registros recientes',

    // Projects
    'projects.title': 'Proyectos',
    'projects.new': 'Nuevo Proyecto',
    'projects.empty': 'No tienes proyectos. Crea tu primer proyecto.',
    'projects.view': 'Ver',
    'projects.edit': 'Editar',
    'projects.delete': 'Eliminar proyecto',
    'projects.deleteConfirm': '\u00bfEst\u00e1s seguro de que quieres eliminar este proyecto?',
    'projects.deleteWarning': 'Se eliminar\u00e1n todos los testimonios asociados. Esta acci\u00f3n no se puede deshacer.',
    'projects.cancel': 'Cancelar',
    'projects.deleteForever': 'Eliminar definitivamente',

    // Testimonials
    'testimonials.approve': 'Aprobar',
    'testimonials.reject': 'Rechazar',
    'testimonials.delete': 'Eliminar',
    'testimonials.pending': 'Pendiente',
    'testimonials.approved': 'Aprobado',
    'testimonials.rejected': 'Rechazado',
    'testimonials.verification': 'Verificaci\u00f3n',

    // Widget
    'widget.title': 'Configurar Widget',
    'widget.subtitle': 'Personaliza c\u00f3mo se muestran los testimonios en tu sitio web.',
    'widget.save': 'Guardar cambios',
    'widget.chooseTemplate': 'Elige una plantilla',
    'widget.customize': '\u00bfNo encuentras lo que buscas? Personaliza tu plantilla',
    'widget.preview': 'Vista previa real del widget',
    'widget.embedCode': 'C\u00f3digo de integraci\u00f3n',
    'widget.copyCode': 'Copiar c\u00f3digo',

    // Billing
    'billing.title': 'Facturaci\u00f3n',
    'billing.subtitle': 'Gestiona tu plan y suscripci\u00f3n.',
    'billing.currentPlan': 'Plan actual',
    'billing.upgrade': 'Mejora tu plan',
    'billing.upgradeSubtitle': 'Desbloquea m\u00e1s funciones para hacer crecer tu negocio.',
    'billing.renewsOn': 'Tu suscripci\u00f3n se renueva el',
    'billing.cancelsOn': 'Tu suscripci\u00f3n se cancela el',
    'billing.comparison': 'Comparaci\u00f3n de planes',

    // Settings
    'settings.title': 'Configuraci\u00f3n',
    'settings.subtitle': 'Gestiona tu cuenta.',
    'settings.name': 'Nombre completo',
    'settings.email': 'Correo electr\u00f3nico',
    'settings.password': 'Cambiar contrase\u00f1a',
    'settings.newPassword': 'Nueva contrase\u00f1a',
    'settings.confirmPassword': 'Confirmar contrase\u00f1a',
    'settings.save': 'Guardar cambios',
    'settings.deleteAccount': 'Eliminar cuenta',
    'settings.language': 'Idioma',

    // Support
    'support.title': 'Soporte',
    'support.new': 'Nuevo Ticket',
    'support.empty': 'No tienes tickets de soporte.',
    'support.subject': 'Asunto',
    'support.category': 'Categor\u00eda',
    'support.priority': 'Prioridad',
    'support.message': 'Mensaje',
    'support.send': 'Enviar',
    'support.reply': 'Responder',

    // My Site
    'mysite.title': 'Mi Sitio',
    'mysite.url': 'Tu URL p\u00fablica',
    'mysite.bio': 'Biograf\u00eda',
    'mysite.website': 'Sitio web',
    'mysite.share': 'Compartir',
    'mysite.templates': 'Elige una plantilla',

    // Common
    'common.save': 'Guardar',
    'common.cancel': 'Cancelar',
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': '\u00c9xito',
    'common.search': 'Buscar...',
    'common.noResults': 'No se encontraron resultados',
    'common.upgradePlan': 'Mejorar plan',
    'common.free': 'Gratuito',
    'common.pro': 'Pro',
    'common.business': 'Business',
    'common.minisite': 'Mini Sitio',
  },
  en: {
    // Sidebar
    'nav.dashboard': 'Dashboard',
    'nav.projects': 'Projects',
    'nav.mysite': 'My Site',
    'nav.settings': 'Settings',
    'nav.billing': 'Billing',
    'nav.support': 'Support',
    'nav.logout': 'Sign Out',

    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.totalProjects': 'Total Projects',
    'dashboard.totalTestimonials': 'Total Testimonials',
    'dashboard.pending': 'Pending',
    'dashboard.impressions': 'Impressions',
    'dashboard.recentTestimonials': 'Recent Testimonials',
    'dashboard.recentUsers': 'Recent Registrations',

    // Projects
    'projects.title': 'Projects',
    'projects.new': 'New Project',
    'projects.empty': "You don't have any projects yet. Create your first one.",
    'projects.view': 'View',
    'projects.edit': 'Edit',
    'projects.delete': 'Delete Project',
    'projects.deleteConfirm': 'Are you sure you want to delete this project?',
    'projects.deleteWarning': 'All associated testimonials will be deleted. This action cannot be undone.',
    'projects.cancel': 'Cancel',
    'projects.deleteForever': 'Delete Permanently',

    // Testimonials
    'testimonials.approve': 'Approve',
    'testimonials.reject': 'Reject',
    'testimonials.delete': 'Delete',
    'testimonials.pending': 'Pending',
    'testimonials.approved': 'Approved',
    'testimonials.rejected': 'Rejected',
    'testimonials.verification': 'Verification',

    // Widget
    'widget.title': 'Configure Widget',
    'widget.subtitle': 'Customize how testimonials are displayed on your website.',
    'widget.save': 'Save Changes',
    'widget.chooseTemplate': 'Choose a Template',
    'widget.customize': "Can't find what you're looking for? Customize your template",
    'widget.preview': 'Live Widget Preview',
    'widget.embedCode': 'Embed Code',
    'widget.copyCode': 'Copy Code',

    // Billing
    'billing.title': 'Billing',
    'billing.subtitle': 'Manage your plan and subscription.',
    'billing.currentPlan': 'Current Plan',
    'billing.upgrade': 'Upgrade Your Plan',
    'billing.upgradeSubtitle': 'Unlock more features to grow your business.',
    'billing.renewsOn': 'Your subscription renews on',
    'billing.cancelsOn': 'Your subscription cancels on',
    'billing.comparison': 'Plan Comparison',

    // Settings
    'settings.title': 'Settings',
    'settings.subtitle': 'Manage your account.',
    'settings.name': 'Full Name',
    'settings.email': 'Email Address',
    'settings.password': 'Change Password',
    'settings.newPassword': 'New Password',
    'settings.confirmPassword': 'Confirm Password',
    'settings.save': 'Save Changes',
    'settings.deleteAccount': 'Delete Account',
    'settings.language': 'Language',

    // Support
    'support.title': 'Support',
    'support.new': 'New Ticket',
    'support.empty': "You don't have any support tickets.",
    'support.subject': 'Subject',
    'support.category': 'Category',
    'support.priority': 'Priority',
    'support.message': 'Message',
    'support.send': 'Submit',
    'support.reply': 'Reply',

    // My Site
    'mysite.title': 'My Site',
    'mysite.url': 'Your Public URL',
    'mysite.bio': 'Bio',
    'mysite.website': 'Website',
    'mysite.share': 'Share',
    'mysite.templates': 'Choose a Template',

    // Common
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.search': 'Search...',
    'common.noResults': 'No results found',
    'common.upgradePlan': 'Upgrade Plan',
    'common.free': 'Free',
    'common.pro': 'Pro',
    'common.business': 'Business',
    'common.minisite': 'Mini Site',
  },
}

export function t(key: string, locale: Locale = 'es'): string {
  return translations[locale]?.[key] || translations.es[key] || key
}
