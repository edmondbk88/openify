'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/toast'
import { createClient } from '@/lib/supabase/client'

export default function ConfiguracionPage() {
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClient()

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [changingPassword, setChangingPassword] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const [profile, setProfile] = useState({
    full_name: '',
    email: '',
    avatar_url: '',
    locale: 'es' as 'es' | 'en',
  })

  const [passwords, setPasswords] = useState({
    new_password: '',
    confirm_password: '',
  })

  useEffect(() => {
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      const { data } = await supabase
        .from('profiles')
        .select('full_name, email, avatar_url, locale')
        .eq('id', user.id)
        .single()

      if (data) {
        setProfile({
          full_name: data.full_name || '',
          email: data.email || user.email || '',
          avatar_url: data.avatar_url || '',
          locale: (data.locale as 'es' | 'en') || 'es',
        })
      }

      setLoading(false)
    }

    load()
  }, [router, supabase])

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) throw new Error('No autenticado')

      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: profile.full_name,
          avatar_url: profile.avatar_url || null,
          locale: profile.locale,
        })
        .eq('id', user.id)

      if (error) throw error

      toast('Perfil actualizado correctamente', 'success')
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : 'Error al actualizar el perfil', 'error')
    } finally {
      setSaving(false)
    }
  }

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault()

    if (passwords.new_password.length < 6) {
      toast('La contraseña debe tener al menos 6 caracteres', 'error')
      return
    }

    if (passwords.new_password !== passwords.confirm_password) {
      toast('Las contraseñas no coinciden', 'error')
      return
    }

    setChangingPassword(true)

    try {
      const { error } = await supabase.auth.updateUser({
        password: passwords.new_password,
      })

      if (error) throw error

      setPasswords({ new_password: '', confirm_password: '' })
      toast('Contraseña actualizada correctamente', 'success')
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : 'Error al cambiar la contraseña', 'error')
    } finally {
      setChangingPassword(false)
    }
  }

  async function handleDeleteAccount() {
    setDeleting(true)

    try {
      const res = await fetch('/api/account', {
        method: 'DELETE',
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Error al eliminar la cuenta')
      }

      await supabase.auth.signOut()
      router.push('/')
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : 'Error al eliminar la cuenta', 'error')
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg
          className="h-8 w-8 animate-spin text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Configuración</h1>
        <p className="mt-1 text-sm text-gray-500">
          Gestiona tu perfil y preferencias de cuenta.
        </p>
      </div>

      {/* Profile Form */}
      <form
        onSubmit={handleSaveProfile}
        className="rounded-xl border border-gray-200 bg-white p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900">Perfil</h2>

        <div className="mt-6 space-y-4">
          {/* Avatar URL */}
          <div>
            <label
              htmlFor="avatar_url"
              className="block text-sm font-medium text-gray-700"
            >
              URL del avatar
            </label>
            <input
              id="avatar_url"
              type="url"
              value={profile.avatar_url}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, avatar_url: e.target.value }))
              }
              placeholder="https://ejemplo.com/mi-avatar.jpg"
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Full Name */}
          <div>
            <label
              htmlFor="full_name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre completo
            </label>
            <input
              id="full_name"
              type="text"
              value={profile.full_name}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, full_name: e.target.value }))
              }
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Email (readonly) */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={profile.email}
              readOnly
              className="mt-1.5 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500"
            />
            <p className="mt-1 text-xs text-gray-400">
              El email no se puede cambiar.
            </p>
          </div>

          {/* Language */}
          <div>
            <label
              htmlFor="locale"
              className="block text-sm font-medium text-gray-700"
            >
              Idioma / Language
            </label>
            <select
              id="locale"
              value={profile.locale}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, locale: e.target.value as 'es' | 'en' }))
              }
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="es">Espa\u00f1ol</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving && (
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            )}
            {saving ? 'Guardando...' : 'Guardar perfil'}
          </button>
        </div>
      </form>

      {/* Change Password */}
      <form
        onSubmit={handleChangePassword}
        className="mt-6 rounded-xl border border-gray-200 bg-white p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900">
          Cambiar contraseña
        </h2>

        <div className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="new_password"
              className="block text-sm font-medium text-gray-700"
            >
              Nueva contraseña
            </label>
            <input
              id="new_password"
              type="password"
              value={passwords.new_password}
              onChange={(e) =>
                setPasswords((prev) => ({
                  ...prev,
                  new_password: e.target.value,
                }))
              }
              placeholder="Mínimo 6 caracteres"
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmar contraseña
            </label>
            <input
              id="confirm_password"
              type="password"
              value={passwords.confirm_password}
              onChange={(e) =>
                setPasswords((prev) => ({
                  ...prev,
                  confirm_password: e.target.value,
                }))
              }
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            disabled={changingPassword}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {changingPassword && (
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            )}
            {changingPassword ? 'Cambiando...' : 'Cambiar contraseña'}
          </button>
        </div>
      </form>

      {/* Delete Account */}
      <div className="mt-6 rounded-xl border border-red-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-red-700">Zona de peligro</h2>
        <p className="mt-2 text-sm text-gray-500">
          Al eliminar tu cuenta se borrarán permanentemente todos tus proyectos,
          testimonios y datos asociados. Esta acción no se puede deshacer.
        </p>

        {!showDeleteConfirm ? (
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-red-300 px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            Eliminar mi cuenta
          </button>
        ) : (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-700">
              ¿Estás seguro? Esta acción es irreversible.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={handleDeleteAccount}
                disabled={deleting}
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 disabled:opacity-50"
              >
                {deleting && (
                  <svg
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                )}
                {deleting ? 'Eliminando...' : 'Sí, eliminar mi cuenta'}
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
