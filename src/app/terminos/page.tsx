"use client"

import { useState } from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

export default function TerminosPage() {
  const [currentDate] = useState(() => {
    const date = new Date()
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Términos y Condiciones
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
                Estos Términos y Condiciones (los "Términos") regulan el acceso y uso del sitio web y la contratación de servicios de marketing digital brindados por InsideMind Agency ("la Empresa", "nosotros"). Al navegar el Sitio y/o contratar nuestros servicios, usted ("Usuario/Cliente") declara haber leído y aceptado estos Términos y nuestra Política de Privacidad.
              </p>

              <Accordion.Root type="single" collapsible className="space-y-4">
                <Accordion.Item value="definiciones" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">1. Definiciones</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Servicios:</strong> acciones y entregables de marketing digital (p. ej., pauta en plataformas, SEO/SEM, social media, branding, analítica, email marketing, diseño, desarrollo web, automatizaciones, etc.).</li>
                      <li><strong>Plataformas de Terceros:</strong> Google, Meta, LinkedIn, TikTok, X, Shopify, WordPress, Mailchimp, entre otras.</li>
                      <li><strong>Materiales del Cliente:</strong> marcas, logos, imágenes, textos, bases de datos, accesos y cualquier contenido provisto por el Cliente.</li>
                      <li><strong>Entregables:</strong> piezas creativas, configuraciones, reportes, documentos y demás resultados del Servicio.</li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="aceptacion" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">2. Aceptación de los Términos</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <p>El uso del Sitio y/o la contratación de Servicios implica la aceptación plena de estos Términos. Si no está de acuerdo, no utilice el Sitio ni contrate los Servicios.</p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="uso" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">3. Uso del Sitio</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <p>3.1. Usted se compromete a utilizar el Sitio de forma lícita, evitando:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Vulnerar derechos de terceros</li>
                        <li>Intentar acceder sin autorización a sistemas</li>
                        <li>Extraer datos mediante scraping sin permiso expreso</li>
                        <li>Introducir malware o realizar actos que afecten la seguridad o disponibilidad</li>
                      </ul>
                      <p>3.2. El contenido del Sitio (textos, imágenes, diseños, código) es propiedad de la Empresa o se utiliza con licencia. Queda prohibida su reproducción o uso no autorizado.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="proceso" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">4. Proceso de Contratación de Servicios</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <p><strong>5.1. Propuestas y Alcance.</strong> Las prestaciones se regirán por una Propuesta y/o Orden de Trabajo específica (el "Acuerdo de Servicios") que detallará alcance, cronograma, honorarios, supuestos y exclusiones.</p>
                      <p><strong>5.2. Onboarding.</strong> El Cliente deberá facilitar accesos, Materiales del Cliente, lineamientos de marca y aprobaciones en tiempo y forma. Los plazos comprometidos corren desde que se reciben todos los insumos necesarios.</p>
                      <p><strong>5.3. Cambios de Alcance.</strong> Cualquier cambio solicitado fuera del alcance aprobado será cotizado y, de aceptarse, incorporado mediante adenda o nueva orden.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="honorarios" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">5. Honorarios, Facturación y Pagos</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <p><strong>6.1. Honorarios.</strong> Pueden ser fijos, por hora, por proyecto, suscripción mensual o mixtos. La pauta publicitaria y costos de terceros son a cargo del Cliente salvo pacto en contrario.</p>
                      <p><strong>6.2. Pagos.</strong> Los honorarios se abonan por adelantado. La mora automática habilita la suspensión de trabajos, campañas y accesos.</p>
                      <p><strong>6.3. Impuestos.</strong> Los precios no incluyen impuestos salvo indicación expresa. El Cliente asume tributos aplicables.</p>
                      <p><strong>6.4. Reembolsos.</strong> No hay reembolsos de honorarios ya devengados ni de inversión publicitaria consumida.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="propiedad" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">6. Propiedad Intelectual y Licencias</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <p><strong>8.1. Materiales del Cliente.</strong> El Cliente declara poseer derechos sobre los Materiales proporcionados y otorga licencia no exclusiva para su uso en los Servicios.</p>
                      <p><strong>8.2. Entregables.</strong> Con el pago total, el Cliente adquiere licencia de uso sobre los Entregables. El código fuente, metodologías y know-how siguen siendo de la Empresa.</p>
                      <p><strong>8.3. Portafolio.</strong> La Empresa puede referenciar el proyecto en su portafolio y redes tras la publicación, salvo acuerdo contrario.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="confidencialidad" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">7. Confidencialidad y Datos Personales</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <p>Las partes mantendrán confidencial la información técnica, comercial y de negocio de la otra parte. El tratamiento de datos personales se rige por nuestra Política de Privacidad.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="responsabilidad" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">8. Resultados y Responsabilidad</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <p><strong>12.1. No Garantía de Resultados.</strong> El marketing depende de variables externas. No garantizamos ventas, ROI o resultados específicos.</p>
                      <p><strong>12.2. Limitación.</strong> La responsabilidad total por daños directos se limita al monto pagado en los tres meses previos al hecho.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="terminacion" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">9. Suspensión y Terminación</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <p>Podemos suspender Servicios por falta de pago o incumplimientos sustanciales. Cualquier parte puede resolver el Acuerdo con previo aviso. El Cliente abonará lo trabajado hasta la fecha efectiva.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="servicios" className="border border-gray-200 rounded-lg">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900">10. Condiciones Específicas de Servicios</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">SEO (Posicionamiento Orgánico)</p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>No se garantiza ranking específico</li>
                          <li>Se prohíben prácticas penalizables</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium">Publicidad Digital</p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Resultados dependen de múltiples factores</li>
                          <li>Inversión publicitaria a cargo del Cliente</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium">Social Media y Contenidos</p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Cliente responsable de derechos sobre materiales</li>
                          <li>Requiere aprobaciones en tiempo y forma</li>
                        </ul>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

              </Accordion.Root>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-600">
                  Para consultas, notificaciones o reclamos: 
                  <a href="mailto:contacto@insidemind.com" className="font-semibold hover:text-blue-800"> contacto@insidemind.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
