"use client"

import { useState, useEffect } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    // Comprobar si ya existe el consentimiento
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: new Date().toISOString()
    }))
    setShowBanner(false)
  }

  const handleAcceptSelected = (selected: { [key: string]: boolean }) => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      ...selected,
      necessary: true, // Las cookies necesarias siempre se aceptan
      timestamp: new Date().toISOString()
    }))
    setShowBanner(false)
    setShowPreferences(false)
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                Utilizamos cookies propias y de terceros para mejorar nuestros servicios, personalizar tu experiencia y analizar el tráfico del sitio. 
                Puedes aceptar todas las cookies o configurar tus preferencias.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Configurar preferencias
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog.Root open={showPreferences} onOpenChange={setShowPreferences}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-xl shadow-xl z-50 p-6">
            <div className="flex justify-between items-start mb-6">
              <Dialog.Title className="text-xl font-semibold text-gray-900">
                Preferencias de cookies
              </Dialog.Title>
              <Dialog.Close className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </Dialog.Close>
            </div>

            <CookiePreferences onSave={handleAcceptSelected} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

function CookiePreferences({ onSave }: { onSave: (selected: { [key: string]: boolean }) => void }) {
  const [selected, setSelected] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  })

  const handleToggle = (key: string) => {
    if (key === "necessary") return // No se puede desactivar
    setSelected(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }))
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selected.necessary}
                disabled
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">Cookies necesarias</span>
            </label>
            <p className="mt-1 text-sm text-gray-500 ml-7">
              Estas cookies son esenciales para el funcionamiento básico del sitio web.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selected.analytics}
                onChange={() => handleToggle("analytics")}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">Cookies analíticas</span>
            </label>
            <p className="mt-1 text-sm text-gray-500 ml-7">
              Nos ayudan a entender cómo utilizas el sitio web para mejorarlo.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selected.marketing}
                onChange={() => handleToggle("marketing")}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">Cookies de marketing</span>
            </label>
            <p className="mt-1 text-sm text-gray-500 ml-7">
              Utilizadas para mostrarte anuncios relevantes y medir campañas.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selected.preferences}
                onChange={() => handleToggle("preferences")}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">Cookies de preferencias</span>
            </label>
            <p className="mt-1 text-sm text-gray-500 ml-7">
              Recuerdan tus preferencias para mejorar tu experiencia.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <Dialog.Close className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
          Cancelar
        </Dialog.Close>
        <button
          onClick={() => onSave(selected)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          Guardar preferencias
        </button>
      </div>
    </div>
  )
}
