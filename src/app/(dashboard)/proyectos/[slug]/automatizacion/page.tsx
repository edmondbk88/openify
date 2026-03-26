'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

interface AutomationRule {
  id: string
  project_id: string
  type: string
  is_active: boolean
  delay_days: number
  email_subject: string
  email_body: string
  created_at: string
  updated_at: string
}

interface AutomationContact {
  id: string
  rule_id: string
  email: string
  name: string | null
  scheduled_at: string
  sent_at: string | null
  status: 'pending' | 'sent' | 'failed' | 'cancelled'
  created_at: string
}

export default function AutomatizacionPage() {
  const params = useParams()
  const slug = params.slug as string
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [projectId, setProjectId] = useState<string | null>(null)
  const [collectionUrl, setCollectionUrl] = useState('')
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Rule state
  const [ruleId, setRuleId] = useState<string | null>(null)
  const [isActive, setIsActive] = useState(true)
  const [delayDays, setDelayDays] = useState(7)
  const [emailSubject, setEmailSubject] = useState('Nos encantaria conocer tu opinion')
  const [emailBody, setEmailBody] = useState(
    'Hola, nos encantaria que nos dejaras tu testimonio sobre tu experiencia con nosotros.'
  )

  // Contacts
  const [contacts, setContacts] = useState<AutomationContact[]>([])
  const [newContactName, setNewContactName] = useState('')
  const [newContactEmail, setNewContactEmail] = useState('')
  const [addingContact, setAddingContact] = useState(false)

  // Preview
  const [showPreview, setShowPreview] = useState(false)

  // Load project + existing rule
  useEffect(() => {
    async function load() {
      try {
        // Get project ID
        const projRes = await fetch('/api/projects')
        if (!projRes.ok) return
        const projects = await projRes.json()
        const project = (Array.isArray(projects) ? projects : []).find(
          (p: { slug: string }) => p.slug === slug
        )
        if (!project) return
        setProjectId(project.id)

        // Get profiles for collection URL
        const profileRes = await fetch('/api/profile')
        if (profileRes.ok) {
          const profile = await profileRes.json()
          if (profile?.username) {
            setCollectionUrl(`https://opinafy.com/p/${profile.username}/${slug}`)
          }
        }

        // Load existing automation rule
        const ruleRes = await fetch(`/api/automation?project_id=${project.id}`)
        if (ruleRes.ok) {
          const data = await ruleRes.json()
          if (data.rule) {
            const rule: AutomationRule = data.rule
            setRuleId(rule.id)
            setIsActive(rule.is_active)
            setDelayDays(rule.delay_days)
            setEmailSubject(rule.email_subject)
            setEmailBody(rule.email_body)
          }
          if (data.contacts) {
            setContacts(data.contacts)
          }
        }
      } catch {
        // ignore
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [slug])

  const handleSave = async () => {
    if (!projectId) return
    setSaving(true)
    setMessage(null)

    try {
      const res = await fetch('/api/automation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project_id: projectId,
          rule_id: ruleId,
          is_active: isActive,
          delay_days: delayDays,
          email_subject: emailSubject,
          email_body: emailBody,
        }),
      })

      if (res.ok) {
        const data = await res.json()
        if (data.rule?.id) setRuleId(data.rule.id)
        setMessage({ type: 'success', text: 'Configuracion de automatizacion guardada.' })
      } else {
        const data = await res.json().catch(() => null)
        setMessage({ type: 'error', text: data?.error || 'Error al guardar.' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Error de conexion.' })
    } finally {
      setSaving(false)
    }
  }

  const handleAddContact = async () => {
    if (!newContactEmail.trim()) return
    setAddingContact(true)
    setMessage(null)

    try {
      // Auto-create rule if it doesn't exist yet
      let currentRuleId = ruleId
      if (!currentRuleId && projectId) {
        const saveRes = await fetch('/api/automation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            project_id: projectId,
            is_active: isActive,
            delay_days: delayDays,
            email_subject: emailSubject,
            email_body: emailBody,
          }),
        })
        if (saveRes.ok) {
          const saveData = await saveRes.json()
          if (saveData.rule?.id) {
            currentRuleId = saveData.rule.id
            setRuleId(currentRuleId)
          }
        }
        if (!currentRuleId) {
          setMessage({ type: 'error', text: 'Error al crear la regla de automatización.' })
          setAddingContact(false)
          return
        }
      }

      const res = await fetch('/api/automation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'add-contacts',
          rule_id: currentRuleId,
          contacts: [{ name: newContactName.trim() || null, email: newContactEmail.trim() }],
        }),
      })

      if (res.ok) {
        const data = await res.json()
        if (data.contacts) {
          setContacts((prev) => [...data.contacts, ...prev])
        }
        setNewContactName('')
        setNewContactEmail('')
        setMessage({ type: 'success', text: 'Contacto agregado correctamente.' })
      } else {
        const data = await res.json().catch(() => null)
        setMessage({ type: 'error', text: data?.error || 'Error al agregar contacto.' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Error de conexion.' })
    } finally {
      setAddingContact(false)
    }
  }

  const handleCSVImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !ruleId) {
      setMessage({ type: 'error', text: 'Guarda la regla primero antes de importar contactos.' })
      return
    }

    setMessage(null)

    try {
      const text = await file.text()
      const lines = text.split('\n').filter((l) => l.trim())
      const csvContacts: { name: string | null; email: string }[] = []

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()
        if (!line) continue
        // Skip header row
        if (i === 0 && (line.toLowerCase().includes('email') || line.toLowerCase().includes('nombre'))) continue

        const parts = line.split(/[,;\t]/).map((p) => p.trim().replace(/^["']|["']$/g, ''))
        if (parts.length >= 2) {
          // name, email  or  email, name
          const emailIdx = parts.findIndex((p) => p.includes('@'))
          if (emailIdx >= 0) {
            const nameIdx = emailIdx === 0 ? 1 : 0
            csvContacts.push({
              email: parts[emailIdx],
              name: parts[nameIdx] || null,
            })
          }
        } else if (parts.length === 1 && parts[0].includes('@')) {
          csvContacts.push({ email: parts[0], name: null })
        }
      }

      if (csvContacts.length === 0) {
        setMessage({ type: 'error', text: 'No se encontraron contactos validos en el archivo CSV.' })
        return
      }

      const res = await fetch('/api/automation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'add-contacts',
          rule_id: ruleId,
          contacts: csvContacts,
        }),
      })

      if (res.ok) {
        const data = await res.json()
        if (data.contacts) {
          setContacts((prev) => [...data.contacts, ...prev])
        }
        setMessage({ type: 'success', text: `${csvContacts.length} contactos importados correctamente.` })
      } else {
        const data = await res.json().catch(() => null)
        setMessage({ type: 'error', text: data?.error || 'Error al importar contactos.' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Error al leer el archivo CSV.' })
    }

    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  // Stats
  const sentCount = contacts.filter((c) => c.status === 'sent').length
  const pendingCount = contacts.filter((c) => c.status === 'pending').length
  const failedCount = contacts.filter((c) => c.status === 'failed').length
  const totalCount = contacts.length
  const conversionRate = totalCount > 0 ? Math.round((sentCount / totalCount) * 100) : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600" />
      </div>
    )
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href={`/proyectos/${slug}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Volver al proyecto
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-gray-900">Automatizacion de solicitudes</h1>
      <p className="mt-2 text-sm text-gray-600">
        Configura el envio automático de emails para solicitar testimonios a tus clientes.
      </p>

      <div className="mt-8 max-w-3xl space-y-8">
        {/* Toggle active */}
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Automatizacion activa</h3>
            <p className="text-xs text-gray-500 mt-1">
              Cuando esta activa, los contactos programados recibiran el email automáticamente.
            </p>
          </div>
          <button
            onClick={() => setIsActive(!isActive)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isActive ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                isActive ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Delay days */}
        <div>
          <label htmlFor="delay_days" className="block text-sm font-medium text-gray-700">
            Dias de espera antes del envio
          </label>
          <select
            id="delay_days"
            value={delayDays}
            onChange={(e) => setDelayDays(parseInt(e.target.value))}
            className="mt-1 block w-full max-w-xs rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>
                {d} {d === 1 ? 'dia' : 'dias'}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-gray-500">
            El email se enviara {delayDays} {delayDays === 1 ? 'dia' : 'dias'} despues de agregar al contacto.
          </p>
        </div>

        {/* Email subject */}
        <div>
          <label htmlFor="email_subject" className="block text-sm font-medium text-gray-700">
            Asunto del email
          </label>
          <input
            id="email_subject"
            type="text"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Email body */}
        <div>
          <label htmlFor="email_body" className="block text-sm font-medium text-gray-700">
            Cuerpo del email
          </label>
          <textarea
            id="email_body"
            rows={5}
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <p className="mt-1 text-xs text-gray-500">
            El enlace de recopilacion se incluira automáticamente al final del email.
          </p>
        </div>

        {/* Collection URL info */}
        {collectionUrl && (
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700">
            <span className="font-medium">URL de recopilacion:</span>{' '}
            <code className="text-xs bg-blue-100 px-1 py-0.5 rounded">{collectionUrl}</code>
          </div>
        )}

        {/* Email preview */}
        <div>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            {showPreview ? 'Ocultar vista previa' : 'Ver vista previa del email'}
          </button>
          {showPreview && (
            <div className="mt-3 rounded-lg border border-gray-200 bg-white p-6">
              <div className="border-b border-gray-200 pb-3 mb-4">
                <p className="text-xs text-gray-500">Asunto:</p>
                <p className="text-sm font-semibold text-gray-900">{emailSubject}</p>
              </div>
              <div className="text-sm text-gray-700 whitespace-pre-wrap">{emailBody}</div>
              {collectionUrl && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={collectionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
                  >
                    Dejar mi testimonio
                  </a>
                </div>
              )}
              <p className="mt-4 text-xs text-gray-400">
                Enviado a traves de Opinafy
              </p>
            </div>
          )}
        </div>

        {/* Save button */}
        {message && (
          <div
            className={`rounded-lg border p-3 text-sm ${
              message.type === 'success'
                ? 'border-green-200 bg-green-50 text-green-700'
                : 'border-red-200 bg-red-50 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}

        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
        >
          {saving ? 'Guardando...' : 'Guardar configuracion'}
        </button>

        {/* ── Contacts Section ── */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-gray-900">Contactos</h2>
          <p className="mt-1 text-sm text-gray-600">
            Agrega contactos manualmente o importa un archivo CSV.
          </p>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-center">
              <p className="text-xl font-bold text-gray-900">{totalCount}</p>
              <p className="text-xs text-gray-500">Total</p>
            </div>
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-center">
              <p className="text-xl font-bold text-yellow-700">{pendingCount}</p>
              <p className="text-xs text-yellow-600">Pendientes</p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-center">
              <p className="text-xl font-bold text-green-700">{sentCount}</p>
              <p className="text-xs text-green-600">Enviados</p>
            </div>
            <div className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-3 text-center">
              <p className="text-xl font-bold text-indigo-700">{conversionRate}%</p>
              <p className="text-xs text-indigo-600">Tasa de envio</p>
            </div>
          </div>

          {/* Add contact manually */}
          <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Agregar contacto</h3>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Nombre (opcional)"
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={newContactEmail}
                onChange={(e) => setNewContactEmail(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                onClick={handleAddContact}
                disabled={addingContact || !newContactEmail.trim()}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
              >
                {addingContact ? 'Agregando...' : 'Agregar'}
              </button>
            </div>
          </div>

          {/* CSV import */}
          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Importar desde CSV</h3>
            <p className="text-xs text-gray-500 mb-3">
              Formato: nombre, email (una fila por contacto). Tambien acepta solo emails.
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv,.txt"
              onChange={handleCSVImport}
              disabled={false}
              className="block text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-indigo-700 hover:file:bg-indigo-100 disabled:opacity-50"
            />
          </div>

          {/* Contacts list */}
          {contacts.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Contactos programados ({contacts.length})
              </h3>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">
                        Nombre
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">
                        Email
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">
                        Programado
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">
                          {contact.name || '—'}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
                          {contact.email}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500">
                          {new Date(contact.scheduled_at).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                              contact.status === 'sent'
                                ? 'bg-green-100 text-green-700'
                                : contact.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : contact.status === 'failed'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {contact.status === 'sent'
                              ? 'Enviado'
                              : contact.status === 'pending'
                              ? 'Pendiente'
                              : contact.status === 'failed'
                              ? 'Fallido'
                              : 'Cancelado'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {failedCount > 0 && (
                <p className="mt-2 text-xs text-red-500">
                  {failedCount} {failedCount === 1 ? 'envio fallido' : 'envios fallidos'}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
