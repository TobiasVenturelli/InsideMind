"use client"

import { useState } from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown, Mail, Phone, MapPin, Shield } from "lucide-react"

export default function PrivacidadPage() {
  const [currentDate] = useState(() => {
    const date = new Date()
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Última actualización: {currentDate}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Esta Política de Privacidad (la "Política") explica cómo InsideMind Agency ("la Empresa", "nosotros") trata los datos personales cuando usted ("Usuario/Cliente") utiliza nuestro sitio web y/o contrata nuestros servicios de marketing digital (los "Servicios").
              </p>

              <Accordion.Root type="single" collapsible className="space-y-4">
                <Accordion.Item value="alcance" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">1. Alcance</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <p>Esta Política aplica al Sitio, a los formularios de contacto, newsletter, WhatsApp/Email/Chat, y a la prestación de Servicios. Puede contener enlaces a sitios de terceros que tienen sus propias políticas.</p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="datos" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">2. Datos que tratamos</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium mb-2">Datos que usted nos proporciona:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Nombre, apellido, empresa/cargo</li>
                          <li>Email, teléfono/WhatsApp</li>
                          <li>Mensaje, preferencias</li>
                          <li>Datos de facturación</li>
                          <li>Información necesaria para prestar Servicios</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Datos recabados automáticamente:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Direcciones IP</li>
                          <li>Identificadores de dispositivo</li>
                          <li>Navegador y sistema operativo</li>
                          <li>Páginas visitadas y tiempo de permanencia</li>
                          <li>Cookies y tecnologías similares</li>
                        </ul>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="finalidades" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">3. Finalidades y bases legales</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <ul className="space-y-3">
                      <li><strong>Responder consultas y brindar soporte</strong> (ejecución de contrato o interés legítimo)</li>
                      <li><strong>Preparar propuestas y cotizar</strong> (medidas precontractuales/contrato)</li>
                      <li><strong>Prestar y optimizar los Servicios</strong> (configurar campañas, analítica, contenidos)</li>
                      <li><strong>Comunicaciones comerciales</strong> (newsletter, novedades) con su consentimiento</li>
                      <li><strong>Analítica y mejora del Sitio</strong> (interés legítimo/consentimiento)</li>
                      <li><strong>Cumplimientos legales y seguridad</strong> (obligación legal/interés legítimo)</li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="cookies" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">4. Cookies y tecnologías similares</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <p>Usamos cookies propias y de terceros para fines técnicos, de preferencia, analítica y marketing. Puede gestionar su consentimiento en nuestro banner de cookies y desde su navegador.</p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="destinatarios" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">5. Destinatarios y transferencias</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <p>Podemos compartir datos con:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Proveedores de servicios (hosting, analítica, publicidad)</li>
                        <li>Plataformas de marketing (Google, Meta, LinkedIn)</li>
                        <li>Autoridades cuando exista obligación legal</li>
                        <li>Operaciones corporativas con salvaguardas</li>
                      </ul>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="seguridad" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">6. Seguridad</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <p>Aplicamos medidas técnicas y organizativas razonables (control de accesos, cifrado en tránsito, políticas de contraseñas, principio de mínimo privilegio). En caso de incidentes, seguiremos los procedimientos legales correspondientes.</p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="derechos" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">7. Sus derechos</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <p>Usted tiene derecho a:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Acceder a sus datos personales</li>
                        <li>Rectificar datos inexactos</li>
                        <li>Solicitar la supresión</li>
                        <li>Oponerse al tratamiento</li>
                        <li>Portar sus datos</li>
                        <li>Revocar el consentimiento</li>
                      </ul>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="proveedores" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">8. Proveedores y herramientas</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium mb-2">Analítica y Publicidad:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Google Analytics</li>
                            <li>Google Ads</li>
                            <li>Meta Ads</li>
                            <li>LinkedIn Ads</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Gestión y Comunicación:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>HubSpot</li>
                            <li>Mailchimp</li>
                            <li>WhatsApp Business</li>
                            <li>Intercom</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>

              <div className="mt-12 space-y-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Contacto para temas de privacidad</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <a href="mailto:privacidad@insidemind.com" className="text-blue-600 hover:text-blue-800">
                        privacidad@insidemind.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">+34 123 456 789</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">Calle Marketing 123, 28001 Madrid</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-2">Compromiso con su privacidad</h3>
                      <p className="text-purple-800">
                        Nos tomamos muy en serio la protección de sus datos personales. Si tiene alguna pregunta o inquietud sobre cómo manejamos su información, no dude en contactarnos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
