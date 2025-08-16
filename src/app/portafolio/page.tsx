import Link from "next/link"
import { ArrowRight, ExternalLink, TrendingUp, Users, Target, Award } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"

const proyectos = [
  {
    id: 1,
    titulo: "E-commerce TechStyle",
    categoria: "Marketing Digital",
    cliente: "TechStyle SA",
    imagen: "/api/placeholder/600/400",
    descripcion: "Transformación digital completa de una tienda de tecnología tradicional",
    resultados: {
      trafico: "+450%",
      ventas: "+320%",
      roi: "580%"
    },
    servicios: ["SEO", "Google Ads", "Redes Sociales", "Email Marketing"],
    desafio: "TechStyle era una tienda física tradicional que necesitaba adaptarse al comercio digital tras la pandemia.",
    solucion: "Desarrollamos una estrategia integral que incluía optimización SEO, campañas de Google Ads segmentadas y una estrategia de contenido en redes sociales.",
    testimonial: "MarketingPro transformó completamente nuestro negocio. Pasamos de vender solo en tienda física a ser líderes online en nuestro sector.",
    clienteNombre: "Carlos Mendoza, CEO TechStyle"
  },
  {
    id: 2,
    titulo: "Restaurante Gourmet Plus",
    categoria: "Redes Sociales",
    cliente: "Gourmet Plus",
    imagen: "/api/placeholder/600/400",
    descripcion: "Estrategia de redes sociales para posicionar un restaurante como referente gastronómico",
    resultados: {
      followers: "+890%",
      engagement: "+340%",
      reservas: "+210%"
    },
    servicios: ["Instagram Marketing", "Facebook Ads", "Influencer Marketing", "Content Creation"],
    desafio: "Un restaurante de alta cocina que no tenía presencia digital y competía con cadenas establecidas.",
    solucion: "Creamos una identidad visual única en redes sociales, colaboramos con food bloggers y desarrollamos campañas publicitarias segmentadas.",
    testimonial: "Nuestras reservas se multiplicaron gracias a la estrategia de redes sociales. Ahora tenemos lista de espera los fines de semana.",
    clienteNombre: "Ana García, Propietaria Gourmet Plus"
  },
  {
    id: 3,
    titulo: "StartUp FinanceAI",
    categoria: "Branding",
    cliente: "FinanceAI",
    imagen: "/api/placeholder/600/400",
    descripcion: "Desarrollo de identidad corporativa completa para startup de tecnología financiera",
    resultados: {
      reconocimiento: "+680%",
      inversion: "€2.5M",
      usuarios: "+125K"
    },
    servicios: ["Identidad Visual", "Branding Strategy", "Website Design", "Marketing Materials"],
    desafio: "Una startup fintech necesitaba diferenciarse en un mercado saturado y generar confianza entre inversores.",
    solucion: "Desarrollamos una identidad visual moderna y profesional, con un naming potente y materiales de comunicación que transmitían innovación y confianza.",
    testimonial: "El branding que desarrolló MarketingPro fue clave para conseguir nuestra ronda de inversión Serie A.",
    clienteNombre: "David López, Founder FinanceAI"
  },
  {
    id: 4,
    titulo: "Clínica Dental SmileCare",
    categoria: "SEO Local",
    cliente: "SmileCare",
    imagen: "/api/placeholder/600/400",
    descripcion: "Posicionamiento local y captación de pacientes para clínica dental",
    resultados: {
      posicion: "#1 Local",
      pacientes: "+280%",
      llamadas: "+420%"
    },
    servicios: ["SEO Local", "Google My Business", "Website Optimization", "Online Reviews"],
    desafio: "Una clínica dental nueva que necesitaba competir con clínicas establecidas en la zona.",
    solucion: "Implementamos una estrategia de SEO local, optimizamos Google My Business y desarrollamos un sistema de gestión de reseñas.",
    testimonial: "En 6 meses pasamos de ser desconocidos a ser la clínica dental más buscada en nuestra ciudad.",
    clienteNombre: "Dr. Miguel Ruiz, Director SmileCare"
  }
]

const estadisticas = [
  { numero: "500+", texto: "Proyectos Completados" },
  { numero: "98%", texto: "Clientes Satisfechos" },
  { numero: "350%", texto: "ROI Promedio" },
  { numero: "5 años", texto: "de Experiencia" }
]

export default function PortafolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Casos de Éxito
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos digitales 
              y multiplicar sus resultados con estrategias probadas.
            </p>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {estadisticas.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                    {stat.numero}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base">
                    {stat.texto}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filtros de categoría */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">
              Todos
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium transition-colors">
              Marketing Digital
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium transition-colors">
              Redes Sociales
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium transition-colors">
              Branding
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium transition-colors">
              SEO
            </button>
          </div>
        </div>
      </section>

      {/* Grid de proyectos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                {/* Imagen del proyecto */}
                <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-lg font-medium">
                    {proyecto.titulo}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {proyecto.categoria}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {proyecto.descripcion}
                  </p>

                  {/* Resultados destacados */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(proyecto.resultados).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Servicios */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyecto.servicios.map((servicio) => (
                      <span key={servicio} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {servicio}
                      </span>
                    ))}
                  </div>

                  {/* Botones de acción */}
                  <div className="flex gap-4">
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center">
                          Ver caso completo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </Dialog.Trigger>
                      
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                        <Dialog.Content className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto z-50 mx-4">
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <Dialog.Title className="text-2xl font-bold text-gray-900">
                                {proyecto.titulo}
                              </Dialog.Title>
                              <Dialog.Description className="text-gray-600 mt-2">
                                Cliente: {proyecto.cliente}
                              </Dialog.Description>
                            </div>
                            <Dialog.Close asChild>
                              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Cross2Icon className="h-6 w-6" />
                              </button>
                            </Dialog.Close>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-lg font-semibold mb-4 flex items-center">
                                <Target className="h-5 w-5 mr-2 text-red-500" />
                                El Desafío
                              </h4>
                              <p className="text-gray-600 mb-6">{proyecto.desafio}</p>

                              <h4 className="text-lg font-semibold mb-4 flex items-center">
                                <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                                La Solución
                              </h4>
                              <p className="text-gray-600 mb-6">{proyecto.solucion}</p>

                              <h4 className="text-lg font-semibold mb-4 flex items-center">
                                <Award className="h-5 w-5 mr-2 text-yellow-500" />
                                Servicios Implementados
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {proyecto.servicios.map((servicio) => (
                                  <span key={servicio} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                    {servicio}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-4 flex items-center">
                                <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                                Resultados Obtenidos
                              </h4>
                              <div className="grid grid-cols-2 gap-4 mb-6">
                                {Object.entries(proyecto.resultados).map(([key, value]) => (
                                  <div key={key} className="bg-gray-50 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-600">{value}</div>
                                    <div className="text-sm text-gray-500 capitalize">{key}</div>
                                  </div>
                                ))}
                              </div>

                              <div className="bg-blue-50 rounded-lg p-6">
                                <h5 className="font-semibold text-gray-900 mb-2">Testimonial del Cliente</h5>
                                <blockquote className="text-gray-600 italic mb-4">
                                  "{proyecto.testimonial}"
                                </blockquote>
                                <cite className="text-sm text-gray-500 not-italic">
                                  — {proyecto.clienteNombre}
                                </cite>
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 flex gap-4">
                            <Link 
                              href="/contacto"
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                            >
                              ¿Quieres resultados similares?
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </div>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600">
              La satisfacción de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Carlos Mendoza</div>
                  <div className="text-sm text-gray-600">CEO, TechStyle</div>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "MarketingPro no solo cumplió nuestras expectativas, las superó. Su enfoque estratégico y atención al detalle nos ayudó a posicionarnos como líderes en nuestro sector."
              </blockquote>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Ana García</div>
                  <div className="text-sm text-gray-600">Propietaria, Gourmet Plus</div>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "La transformación de nuestras redes sociales fue increíble. Pasamos de tener pocos seguidores a ser el restaurante más seguido de la ciudad."
              </blockquote>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">David López</div>
                  <div className="text-sm text-gray-600">Founder, FinanceAI</div>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "Su trabajo de branding fue fundamental para conseguir nuestra ronda de inversión. La identidad que crearon transmite exactamente lo que somos."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contacta con nosotros y descubre cómo podemos transformar tu negocio digital
          </p>
          <Link 
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold rounded-lg transition-colors"
          >
            Comenzar mi proyecto
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
