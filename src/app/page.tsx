import Link from "next/link"
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, BarChart } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"
import * as Tooltip from "@radix-ui/react-tooltip"
import { ChevronDownIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-oxford_blue via-oxford_blue-400 to-oxford_blue-600 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-oxford_blue/20"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange_web/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-platinum/10 rounded-full blur-2xl animate-bounce"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                No hacemos magia,
                <span className="text-orange_web block">impactamos su mente</span>
                <span className="text-white block">con estrategia</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-lg">
                Transformamos ideas en resultados tangibles con estrategias digitales 
                que conectan con la mente de tu audiencia y generan conversiones reales.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contacto"
                  className="group inline-flex items-center px-8 py-4 bg-orange_web text-oxford_blue font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Comenzar Ahora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  href="/portafolio"
                  className="group inline-flex items-center px-8 py-4 border-2 border-orange_web text-orange_web hover:bg-orange_web hover:text-oxford_blue font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  Ver Casos de Éxito
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-orange_web mb-2">+500</div>
                    <div className="text-gray-300 text-sm font-medium">Clientes Satisfechos</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-orange_web mb-2">+300%</div>
                    <div className="text-gray-300 text-sm font-medium">ROI Promedio</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-orange_web mb-2">5 años</div>
                    <div className="text-gray-300 text-sm font-medium">de Experiencia</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-orange_web mb-2">24/7</div>
                    <div className="text-gray-300 text-sm font-medium">Soporte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20 bg-platinum-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 -top-10">
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange_web/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-oxford_blue/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-orange_web pb-4">
                Nuestros Servicios
              </h2>
              <div className="w-24 h-1 bg-orange_web mx-auto mt-4 rounded-full"></div>
              <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
                Soluciones estratégicas que impactan la mente de tu audiencia y transforman tu presencia digital
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Paid Media */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:scale-105 border border-platinum-300 hover:border-orange_web">
              <div className="w-16 h-16 bg-gradient-to-br from-orange_web-100 to-orange_web-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange_web-200 group-hover:to-orange_web-300 transition-all duration-300 group-hover:scale-110">
                <TrendingUp className="h-8 w-8 text-orange_web group-hover:text-orange_web-600" />
              </div>
              <h3 className="text-xl font-semibold text-oxford_blue mb-4">Paid Media</h3>
              <p className="text-gray-600 mb-6">
                Publicidad estratégica en plataformas digitales que impacta la mente de tu audiencia y maximiza el ROI.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Google Ads & Meta Ads
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Segmentación avanzada
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Optimización continua
                </li>
              </ul>
              <Link 
                href="/servicios/paid-media"
                className="group inline-flex items-center px-4 py-2 bg-orange_web hover:bg-orange_web-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                Saber más
                <ArrowRight className="ml-1 h-4 w-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>

            {/* Redes Sociales */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:scale-105 border border-platinum-300 hover:border-orange_web">
              <div className="w-16 h-16 bg-gradient-to-br from-orange_web-100 to-orange_web-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange_web-200 group-hover:to-orange_web-300 transition-all duration-300 group-hover:scale-110">
                <Users className="h-8 w-8 text-orange_web group-hover:text-orange_web-600" />
              </div>
              <h3 className="text-xl font-semibold text-oxford_blue mb-4">Redes Sociales</h3>
              <p className="text-gray-600 mb-6">
                Conectamos tu marca con la audiencia correcta, construyendo comunidades que se convierten en clientes leales.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Estrategia de contenido
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Community management
          </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Campañas orgánicas
          </li>
              </ul>
              <Link 
                href="/servicios/redes-sociales"
                className="group inline-flex items-center px-4 py-2 bg-orange_web hover:bg-orange_web-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                Saber más
                <ArrowRight className="ml-1 h-4 w-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>

            {/* Sitio Web */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:scale-105 border border-platinum-300 hover:border-orange_web">
              <div className="w-16 h-16 bg-gradient-to-br from-orange_web-100 to-orange_web-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange_web-200 group-hover:to-orange_web-300 transition-all duration-300 group-hover:scale-110">
                <Zap className="h-8 w-8 text-orange_web group-hover:text-orange_web-600" />
              </div>
              <h3 className="text-xl font-semibold text-oxford_blue mb-4">Sitio Web</h3>
              <p className="text-gray-600 mb-6">
                Experiencias digitales que generan resultados. Sitios web optimizados para conversión y performance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Diseño UX/UI estratégico
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Desarrollo responsive
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Optimización SEO
                </li>
              </ul>
              <Link 
                href="/servicios/sitio-web"
                className="group inline-flex items-center px-4 py-2 bg-orange_web hover:bg-orange_web-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                Saber más
                <ArrowRight className="ml-1 h-4 w-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>

            {/* Branding & Diseño Digital */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:scale-105 border border-platinum-300 hover:border-orange_web">
              <div className="w-16 h-16 bg-gradient-to-br from-orange_web-100 to-orange_web-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange_web-200 group-hover:to-orange_web-300 transition-all duration-300 group-hover:scale-110">
                <Zap className="h-8 w-8 text-orange_web group-hover:text-orange_web-600" />
              </div>
              <h3 className="text-xl font-semibold text-oxford_blue mb-4">Branding & Diseño Digital</h3>
              <p className="text-gray-600 mb-6">
                Identidad visual que impacta en la mente. Creamos marcas memorables y diseños que convierten.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Identidad visual completa
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Diseño digital estratégico
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange_web mr-2" />
                  Manual de marca
                </li>
              </ul>
              <Link 
                href="/servicios/branding"
                className="group inline-flex items-center px-4 py-2 bg-orange_web hover:bg-orange_web-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                Saber más
                <ArrowRight className="ml-1 h-4 w-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange_web/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-oxford_blue/20 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-orange_web pb-4">
                ¿Por qué elegir InsideMind?
              </h2>
              <div className="w-24 h-1 bg-orange_web mt-4 rounded-full"></div>
              <p className="text-xl text-oxford_blue-600 mt-8 mb-8">
                No hacemos magia, aplicamos <span className="font-semibold text-orange_web">psicología del consumidor</span> y 
                <span className="font-semibold text-orange_web"> estrategia basada en datos</span> para impactar 
                directamente en la mente de tu audiencia.
              </p>
              
              <Accordion.Root type="single" collapsible className="space-y-4">
                <Accordion.Item value="estrategia" className="border border-platinum-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <Accordion.Trigger className="flex w-full items-center justify-between p-6 text-left hover:bg-orange_web/5 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange_web/10 flex items-center justify-center group-data-[state=open]:scale-110 transition-transform duration-300">
                        <TrendingUp className="h-5 w-5 text-orange_web" />
                      </div>
                      <span className="font-semibold text-oxford_blue group-hover:text-orange_web transition-colors">Estrategia Basada en Psicología</span>
                    </div>
                    <ChevronDownIcon className="h-5 w-5 text-orange_web transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 bg-orange_web/5">
                    <div className="border-l-2 border-orange_web pl-4">
                      <p className="text-oxford_blue-600">
                        Aplicamos principios de neurociencia y psicología del consumidor para crear campañas que 
                        conectan emocionalmente con tu audiencia y generan acciones concretas.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="impacto" className="border border-platinum-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <Accordion.Trigger className="flex w-full items-center justify-between p-6 text-left hover:bg-oxford_blue/5 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-oxford_blue/10 flex items-center justify-center group-data-[state=open]:scale-110 transition-transform duration-300">
                        <BarChart className="h-5 w-5 text-oxford_blue" />
                      </div>
                      <span className="font-semibold text-oxford_blue group-hover:text-orange_web transition-colors">Impacto Mental Medible</span>
                    </div>
                    <ChevronDownIcon className="h-5 w-5 text-oxford_blue transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 bg-oxford_blue/5">
                    <div className="border-l-2 border-oxford_blue pl-4">
                      <p className="text-oxford_blue-600">
                        No solo medimos clicks y conversiones. Analizamos el impacto en la percepción de marca, 
                        recordación y intención de compra para optimizar cada touchpoint del customer journey.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="enfoque" className="border border-platinum-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <Accordion.Trigger className="flex w-full items-center justify-between p-6 text-left hover:bg-platinum/5 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-platinum/20 flex items-center justify-center group-data-[state=open]:scale-110 transition-transform duration-300">
                        <Zap className="h-5 w-5 text-oxford_blue" />
                      </div>
                      <span className="font-semibold text-oxford_blue group-hover:text-orange_web transition-colors">Enfoque Integral</span>
                    </div>
                    <ChevronDownIcon className="h-5 w-5 text-oxford_blue transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 bg-platinum/5">
                    <div className="border-l-2 border-oxford_blue pl-4">
                      <p className="text-oxford_blue-600">
                        Desde paid media hasta branding, cada servicio se integra para crear una experiencia 
                        cohesiva que maximiza el impacto en la mente del consumidor y acelera el crecimiento de tu negocio.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-oxford_blue to-oxford_blue-700 rounded-3xl blur-xl opacity-30 transform -rotate-3"></div>
              <div className="relative bg-gradient-to-r from-oxford_blue to-oxford_blue-700 rounded-2xl p-8 shadow-2xl">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange_web rounded-full blur-2xl opacity-20"></div>
                <div className="relative">
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    Consulta Gratuita
                  </h3>
                  <div className="w-16 h-1 bg-orange_web rounded-full mb-6"></div>
                  <p className="text-lg text-white mb-8">
                    ¿Listo para impactar mentes? Agenda una consulta gratuita y descubre cómo podemos transformar tu presencia digital.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-8 h-8 bg-orange_web/20 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="h-5 w-5 text-orange_web" />
                      </div>
                      <span className="text-white">Análisis de tu situación actual</span>
                    </li>
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-8 h-8 bg-orange_web/20 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="h-5 w-5 text-orange_web" />
                      </div>
                      <span className="text-white">Estrategia personalizada</span>
                    </li>
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-8 h-8 bg-orange_web/20 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="h-5 w-5 text-orange_web" />
                      </div>
                      <span className="text-white">Plan de acción detallado</span>
                    </li>
                  </ul>
                  <Link 
                    href="/contacto"
                    className="group inline-flex items-center w-full justify-center px-8 py-4 bg-orange_web hover:bg-orange_web-600 text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Agendar Consulta Gratuita
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-oxford_blue via-oxford_blue-600 to-oxford_blue-700 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange_web/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-platinum/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para impactar mentes?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a cientos de empresas que ya están creciendo con nuestras estrategias basadas en psicología del consumidor.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contacto"
              className="group inline-flex items-center px-8 py-4 bg-orange_web hover:bg-orange_web-600 text-oxford_blue font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Comenzar Ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/portafolio"
              className="group inline-flex items-center px-8 py-4 border-2 border-orange_web hover:bg-orange_web/10 backdrop-blur-sm font-semibold rounded-xl transition-all duration-300 hover:border-orange_web hover:shadow-lg"
            >
              Ver Casos de Éxito
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange_web">98%</div>
              <div className="text-sm text-gray-400">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange_web">500+</div>
              <div className="text-sm text-gray-400">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange_web">300%</div>
              <div className="text-sm text-gray-400">ROI Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange_web">24h</div>
              <div className="text-sm text-gray-400">Respuesta</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}