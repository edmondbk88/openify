export type CollectionLocale = 'es' | 'en'

export const collectionTexts = {
  es: {
    // Form fields
    name: 'Tu nombre *',
    namePlaceholder: 'Ej: María García',
    email: 'Email',
    emailPlaceholder: 'tu@email.com',
    emailHelper: 'No se mostrará públicamente',
    company: 'Empresa',
    companyPlaceholder: 'Ej: Acme S.L.',
    role: 'Cargo',
    rolePlaceholder: 'Ej: CEO',
    rating: '¿Cómo calificarías tu experiencia?',
    ratingError: 'Selecciona una calificación',
    content: 'Tu testimonio *',
    contentPlaceholder: 'Cuéntanos sobre tu experiencia...',
    contentMinLength: 'El testimonio debe tener al menos 10 caracteres',

    // Photo upload (avatar)
    photoLabel: 'Foto (opcional)',
    photoAlt: 'Foto de perfil',
    photoRemove: 'Eliminar foto',
    photoUpload: 'Subir',
    photoAriaLabel: 'Subir foto',
    photoFormatError: 'Formato no soportado. Usa JPG, PNG o WebP.',
    photoSizeError: 'La imagen no puede superar los 5MB.',
    photoUploadError: 'Error al subir la imagen',

    // Testimonial photo
    testimonialPhotoLabel: 'Quieres añadir una foto?',
    testimonialPhotoSubtitle: 'Sube una foto del producto, experiencia o resultado (opcional)',
    testimonialPhotoAlt: 'Foto del testimonio',
    testimonialPhotoSelect: 'Seleccionar foto',
    testimonialPhotoUploadError: 'Error al subir la foto',

    // Audio
    audioLabel: '¿Prefieres grabar un audio?',
    audioSubtitle: 'Graba un audio de hasta 3 minutos compartiendo tu experiencia',
    audioRecord: 'Grabar audio testimonio',
    audioRecording: 'Grabando',
    audioStop: 'Detener',
    audioReRecord: 'Grabar de nuevo',
    audioUse: 'Usar este audio',
    audioUploading: 'Subiendo audio...',
    audioDone: 'Audio grabado correctamente',
    audioRemove: 'Eliminar',
    audioPermissionError: 'Necesitas dar permiso a tu microfono para grabar un audio testimonio.',
    audioUploadError: 'Error al subir el audio',

    // Video
    videoLabel: '¿Quieres grabar un video testimonio?',
    videoSubtitle: 'Graba un video de hasta 2 minutos compartiendo tu experiencia',
    videoRecord: 'Grabar video testimonio',
    videoCancel: 'Cancelar',
    videoStartRecording: 'Empezar grabación',
    videoStop: 'Detener',
    videoReRecord: 'Grabar de nuevo',
    videoUse: 'Usar este video',
    videoUploading: 'Subiendo video...',
    videoDone: 'Video grabado correctamente',
    videoRemove: 'Eliminar',
    videoPermissionError: 'Necesitas dar permiso a tu cámara y micrófono para grabar un video testimonio.',
    videoUploadError: 'Error al subir el vídeo',

    // Submit
    submit: 'Enviar testimonio',
    submitting: 'Enviando...',
    submitSuccess: '¡Testimonio enviado con éxito! Gracias.',
    submitError: 'Error al enviar el testimonio',

    // Powered by
    poweredBy: 'Powered by',

    // Gracias page
    graciasCheckInbox: 'Revisa tu bandeja de entrada',
    graciasVerificationSent: 'Te hemos enviado un email de verificación. Revisa tu bandeja de entrada y haz clic en el enlace para confirmar tu testimonio.',
    graciasCheckSpam: 'Si no ves el email, revisa tu carpeta de spam.',
    graciasBack: 'Volver',

    // Metadata
    metaNotFound: 'No encontrado',
    metaLeaveTestimonial: 'Deja tu testimonio',
    metaThanks: 'Gracias',

    // Verificado page
    verificadoTitle: 'Verificación - Opinafy',
    verificadoSuccess: '¡Tu testimonio ha sido verificado!',
    verificadoSuccessDesc: 'Gracias por verificar tu testimonio. El propietario del negocio lo revisará pronto.',
    verificadoAlready: 'Testimonio ya verificado',
    verificadoAlreadyDesc: 'Este testimonio ya ha sido verificado anteriormente. No necesitas hacer nada más.',
    verificadoExpired: 'Tu enlace de verificación ha expirado',
    verificadoExpiredDesc: 'El enlace de verificación tiene una validez de 7 días. Puedes solicitar uno nuevo haciendo clic en el botón de abajo.',
    verificadoError: 'Error de verificación',
    verificadoErrorDesc: 'No se pudo verificar el testimonio. El enlace puede ser inválido o haber expirado.',
    verificadoGoTo: 'Ir a Opinafy',
    verificadoResent: '¡Email de verificación reenviado! Revisa tu bandeja de entrada.',
    verificadoResending: 'Reenviando...',
    verificadoResend: 'Reenviar email de verificación',
    verificadoResendError: 'Error al reenviar el email',
    verificadoResendRetry: 'Error al reenviar el email. Inténtalo de nuevo.',
  },
  en: {
    // Form fields
    name: 'Your name *',
    namePlaceholder: 'e.g. John Smith',
    email: 'Email',
    emailPlaceholder: 'you@email.com',
    emailHelper: 'Will not be shown publicly',
    company: 'Company',
    companyPlaceholder: 'e.g. Acme Inc.',
    role: 'Job title',
    rolePlaceholder: 'e.g. CEO',
    rating: 'How would you rate your experience?',
    ratingError: 'Please select a rating',
    content: 'Your testimonial *',
    contentPlaceholder: 'Tell us about your experience...',
    contentMinLength: 'Testimonial must be at least 10 characters',

    // Photo upload (avatar)
    photoLabel: 'Photo (optional)',
    photoAlt: 'Profile photo',
    photoRemove: 'Remove photo',
    photoUpload: 'Upload',
    photoAriaLabel: 'Upload photo',
    photoFormatError: 'Unsupported format. Use JPG, PNG or WebP.',
    photoSizeError: 'Image must be under 5MB.',
    photoUploadError: 'Error uploading image',

    // Testimonial photo
    testimonialPhotoLabel: 'Want to add a photo?',
    testimonialPhotoSubtitle: 'Upload a photo of the product, experience or result (optional)',
    testimonialPhotoAlt: 'Testimonial photo',
    testimonialPhotoSelect: 'Select photo',
    testimonialPhotoUploadError: 'Error uploading photo',

    // Audio
    audioLabel: 'Prefer to record audio?',
    audioSubtitle: 'Record an audio of up to 3 minutes sharing your experience',
    audioRecord: 'Record audio testimonial',
    audioRecording: 'Recording',
    audioStop: 'Stop',
    audioReRecord: 'Record again',
    audioUse: 'Use this audio',
    audioUploading: 'Uploading audio...',
    audioDone: 'Audio recorded successfully',
    audioRemove: 'Remove',
    audioPermissionError: 'You need to grant microphone permission to record an audio testimonial.',
    audioUploadError: 'Error uploading audio',

    // Video
    videoLabel: 'Want to record a video testimonial?',
    videoSubtitle: 'Record a video of up to 2 minutes sharing your experience',
    videoRecord: 'Record video testimonial',
    videoCancel: 'Cancel',
    videoStartRecording: 'Start recording',
    videoStop: 'Stop',
    videoReRecord: 'Record again',
    videoUse: 'Use this video',
    videoUploading: 'Uploading video...',
    videoDone: 'Video recorded successfully',
    videoRemove: 'Remove',
    videoPermissionError: 'You need to grant camera and microphone permission to record a video testimonial.',
    videoUploadError: 'Error uploading video',

    // Submit
    submit: 'Submit testimonial',
    submitting: 'Submitting...',
    submitSuccess: 'Testimonial submitted successfully! Thank you.',
    submitError: 'Error submitting testimonial',

    // Powered by
    poweredBy: 'Powered by',

    // Gracias page
    graciasCheckInbox: 'Check your inbox',
    graciasVerificationSent: 'We\'ve sent you a verification email. Check your inbox and click the link to confirm your testimonial.',
    graciasCheckSpam: 'If you don\'t see the email, check your spam folder.',
    graciasBack: 'Back',

    // Metadata
    metaNotFound: 'Not found',
    metaLeaveTestimonial: 'Leave your testimonial',
    metaThanks: 'Thanks',

    // Verificado page
    verificadoTitle: 'Verification - Opinafy',
    verificadoSuccess: 'Your testimonial has been verified!',
    verificadoSuccessDesc: 'Thank you for verifying your testimonial. The business owner will review it soon.',
    verificadoAlready: 'Testimonial already verified',
    verificadoAlreadyDesc: 'This testimonial has already been verified. You don\'t need to do anything else.',
    verificadoExpired: 'Your verification link has expired',
    verificadoExpiredDesc: 'The verification link is valid for 7 days. You can request a new one by clicking the button below.',
    verificadoError: 'Verification error',
    verificadoErrorDesc: 'The testimonial could not be verified. The link may be invalid or expired.',
    verificadoGoTo: 'Go to Opinafy',
    verificadoResent: 'Verification email resent! Check your inbox.',
    verificadoResending: 'Resending...',
    verificadoResend: 'Resend verification email',
    verificadoResendError: 'Error resending email',
    verificadoResendRetry: 'Error resending email. Please try again.',
  },
}

export type CollectionTexts = (typeof collectionTexts)['es']

export function getCollectionTexts(locale: CollectionLocale): CollectionTexts {
  return collectionTexts[locale] as CollectionTexts
}

/**
 * Detect locale from Accept-Language header.
 * Returns 'en' if the header starts with 'en', otherwise 'es'.
 */
export function detectLocale(acceptLanguage: string | null): CollectionLocale {
  if (!acceptLanguage) return 'es'
  return acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'es'
}
