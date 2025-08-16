import Link from "next/link"
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Search, BarChart, Megaphone, Palette, Globe, Smartphone } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

const servicios = [
  {
    id: "marketing-digital",
    titulo: "Marketing Digital",
    icon: TrendingUp,
    descripcion: "Estrategias digitales completas que impulsan tu crecimiento online con resultados medibles y sostenibles.",
    color: "blue",
    serviciosIncluidos: [
      "Auditoría digital completa",
      "Estrategia de marketing digital",
      "Campañas SEM (Google Ads)",
      "Optimización SEO técnica y de contenido",
      "Análisis de competencia",
      "Reporting mensual detallado"
    ],
    procesos: [
      {
        paso: "1. Análisis",
        descripcion: "Auditamos tu presencia digital actual y analizamos a tu competencia"
      },
      {
        paso: "2. Estrategia", 
        descripcion: "Desarrollamos un plan personalizado basado en tus objetivos"
      },
      {
        paso: "3. Implementación",
        descripcion: "Ejecutamos las campañas y optimizaciones planificadas"
      },
      {
        paso: "4. Monitoreo",
        descripcion: "Seguimiento continuo y optimización de resultados"
      }
    ],
    beneficios: [
      "Aumento del tráfico web cualificado",
      "Mayor visibilidad en buscadores",
      "Incremento en conversiones y ventas",
      "ROI medible y transparente",
      "Posicionamiento competitivo sólido"
    ],
    precio: "Desde €899/mes",
    tiempoEntrega: "Resultados visibles en 2-3 meses"
  },
  {
    id: "redes-sociales",
    titulo: "Gestión de Redes Sociales",
    icon: Users,
    descripcion: "Construimos comunidades leales alrededor de tu marca con contenido que conecta y convierte.",
    color: "purple",
    serviciosIncluidos: [
      "Estrategia de contenido personalizada",
      "Gestión de todas las plataformas",
      "Creación de contenido visual",
      "Community management",
      "Publicidad en redes sociales",
      "Análisis de métricas y engagement"
    ],
    procesos: [
      {
        paso: "1. Investigación",
        descripcion: "Analizamos tu audiencia y definimos el tono de comunicación"
      },
      {
        paso: "2. Planificación",
        descripcion: "Creamos un calendario editorial estratégico"
      },
      {
        paso: "3. Creación",
        descripcion: "Producimos contenido atractivo y relevante"
      },
      {
        paso: "4. Interacción",
        descripcion: "Gestionamos la comunidad y fomentamos el engagement"
      }
    ],
    beneficios: [
      "Mayor reconocimiento de marca",
      "Comunidad activa y comprometida",
      "Aumento en leads cualificados",
      "Mejor atención al cliente",
      "Insights valiosos sobre tu audiencia"
    ],
    precio: "Desde €599/mes",
    tiempoEntrega: "Resultados visibles en 4-6 semanas"
  },
  {
    id: "branding",
    titulo: "Branding & Identidad Visual",
    icon: Zap,
    descripcion: "Creamos identidades visuales únicas que destacan tu marca y la posicionan como líder en tu sector.",
    color: "yellow",
    serviciosIncluidos: [
      "Investigación de marca y competencia",
      "Desarrollo de identidad visual",
      "Logotipo y variaciones",
      "Paleta de colores y tipografías",
      "Manual de marca completo",
      "Aplicaciones en diferentes formatos"
    ],
    procesos: [
      {
        paso: "1. Descubrimiento",
        descripcion: "Exploramos los valores y personalidad de tu marca"
      },
      {
        paso: "2. Conceptualización",
        descripcion: "Desarrollamos conceptos creativos alineados con tu visión"
      },
      {
        paso: "3. Diseño",
        descripcion: "Creamos la identidad visual completa"
      },
      {
        paso: "4. Implementación",
        descripcion: "Desarrollamos todas las aplicaciones necesarias"
      }
    ],
    beneficios: [
      "Diferenciación clara de la competencia",
      "Mayor reconocimiento visual",
      "Confianza y profesionalidad",
      "Coherencia en todas las comunicaciones",
      "Valor de marca a largo plazo"
    ],
    precio: "Desde €1,299 (proyecto)",
    tiempoEntrega: "Entrega completa en 4-6 semanas"
  },
  {
    id: "seo",
    titulo: "SEO & Posicionamiento",
    icon: Search,
    descripcion: "Optimizamos tu sitio web para que aparezca en las primeras posiciones de Google y atraigas más clientes.",
    color: "green",
    serviciosIncluidos: [
      "Auditoría SEO técnica completa",
      "Investigación de palabras clave",
      "Optimización on-page y off-page",
      "Creación de contenido SEO",
      "Link building de calidad",
      "Monitoreo de posiciones"
    ],
    procesos: [
      {
        paso: "1. Auditoría",
        descripcion: "Analizamos tu sitio web y identificamos oportunidades"
      },
      {
        paso: "2. Keyword Research",
        descripcion: "Investigamos las mejores palabras clave para tu negocio"
      },
      {
        paso: "3. Optimización",
        descripcion: "Implementamos mejoras técnicas y de contenido"
      },
      {
        paso: "4. Construcción",
        descripcion: "Desarrollamos autoridad con link building estratégico"
      }
    ],
    beneficios: [
      "Mayor visibilidad en Google",
      "Tráfico orgánico de calidad",
      "Reducción de costos publicitarios",
      "Autoridad y credibilidad online",
      "Resultados sostenibles a largo plazo"
    ],
    precio: "Desde €699/mes",
    tiempoEntrega: "Primeros resultados en 3-4 meses"
  }
]

const faqs = [
  {
    pregunta: "¿Cuánto tiempo tardan en verse los resultados?",
    respuesta: "Los tiempos varían según el servicio: las redes sociales muestran resultados en 4-6 semanas, mientras que SEO puede tomar 3-4 meses. El marketing digital y branding tienen tiempos intermedios."
  },
  {
    pregunta: "¿Incluyen reportes y análisis?",
    respuesta: "Sí, todos nuestros servicios incluyen reportes mensuales detallados con métricas clave, análisis de rendimiento y recomendaciones para optimización continua."
  },
  {
    pregunta: "¿Puedo contratar solo un servicio o necesito un paquete?",
    respuesta: "Puedes contratar servicios individuales según tus necesidades. Sin embargo, recomendamos enfoques integrales para obtener mejores resultados y sinergias entre servicios."
  },
  {
    pregunta: "¿Qué pasa si no estoy satisfecho con los resultados?",
    respuesta: "Ofrecemos garantía de satisfacción. Si no alcanzamos los KPIs acordados en los primeros 3 meses, trabajamos gratis hasta conseguirlos o devolvemos tu inversión."
  },
  {
    pregunta: "¿Trabajan con empresas de mi sector?",
    respuesta: "Trabajamos con empresas de todos los sectores: e-commerce, servicios profesionales, restauración, tecnología, salud, educación y más. Adaptamos nuestras estrategias a cada industria."
  }
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Soluciones integrales de marketing digital diseñadas para hacer crecer tu negocio, 
              aumentar tu visibilidad y multiplicar tus ventas online.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div className="text-sm font-medium">Marketing Digital</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <div className="text-sm font-medium">Redes Sociales</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <div className="text-sm font-medium">Branding</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8" />
                </div>
                <div className="text-sm font-medium">SEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {servicios.map((servicio, index) => {
              const IconComponent = servicio.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={servicio.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className={`w-12 h-12 bg-${servicio.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className={`h-6 w-6 text-${servicio.color}-600`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {servicio.titulo}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      {servicio.descripcion}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">¿Qué incluye?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {servicio.serviciosIncluidos.map((item) => (
                          <div key={item} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4 flex-1">
                        <div className="font-semibold text-gray-900">Precio</div>
                        <div className={`text-2xl font-bold text-${servicio.color}-600`}>
                          {servicio.precio}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 flex-1">
                        <div className="font-semibold text-gray-900">Tiempo</div>
                        <div className="text-gray-600">{servicio.tiempoEntrega}</div>
                      </div>
                    </div>

                    <Link 
                      href="/contacto"
                      className={`group inline-flex items-center px-8 py-4 bg-gradient-to-r from-${servicio.color}-500 to-${servicio.color}-600 hover:from-${servicio.color}-600 hover:to-${servicio.color}-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
                    >
                      Solicitar información
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Nuestro proceso</h3>
                      <div className="space-y-6">
                        {servicio.procesos.map((proceso, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className={`w-8 h-8 bg-${servicio.color}-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0`}>
                              {idx + 1}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{proceso.paso}</div>
                              <div className="text-gray-600 text-sm">{proceso.descripcion}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className={`mt-8 p-6 bg-${servicio.color}-50 rounded-lg`}>
                        <h4 className="font-semibold text-gray-900 mb-4">Beneficios clave</h4>
                        <ul className="space-y-2">
                          {servicio.beneficios.map((beneficio) => (
                            <li key={beneficio} className="flex items-center text-sm">
                              <CheckCircle className={`h-4 w-4 text-${servicio.color}-600 mr-2`} />
                              {beneficio}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios Complementarios
            </h2>
            <p className="text-xl text-gray-600">
              Amplía tu estrategia digital con nuestros servicios especializados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-6">
                Análisis profundo de datos para optimizar tus estrategias y maximizar el ROI.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Dashboard personalizado
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Reportes automatizados
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Análisis predictivo
                </li>
              </ul>
              <div className="text-orange-600 font-semibold">Desde €299/mes</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Desarrollo Web</h3>
              <p className="text-gray-600 mb-6">
                Sitios web optimizados para conversión, velocidad y experiencia de usuario.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Diseño responsive
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Optimización SEO
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Integración analytics
                </li>
              </ul>
              <div className="text-indigo-600 font-semibold">Desde €1,999</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Megaphone className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Marketing</h3>
              <p className="text-gray-600 mb-6">
                Campañas de email personalizadas que nutren leads y fidelizan clientes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Automatización avanzada
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Segmentación inteligente
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  A/B testing
                </li>
              </ul>
              <div className="text-pink-600 font-semibold">Desde €399/mes</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                <Accordion.Trigger className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900">{faq.pregunta}</span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-6 text-gray-600">
                  {faq.respuesta}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Agenda una consulta gratuita y descubre qué servicios necesita tu empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Consulta gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/portafolio"
              className="group inline-flex items-center px-8 py-4 border-2 border-white/80 hover:bg-white/10 backdrop-blur-sm font-semibold rounded-xl transition-all duration-300 hover:border-white hover:shadow-lg"
            >
              Ver casos de éxito
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
