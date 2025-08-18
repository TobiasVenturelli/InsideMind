"use client"

import { useState } from "react"
import * as Label from "@radix-ui/react-label"
import * as Separator from "@radix-ui/react-separator"
import * as Checkbox from "@radix-ui/react-checkbox"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Check, ChevronDown, ChevronUp } from "lucide-react"
import * as Select from "@radix-ui/react-select"
import * as Form from "@radix-ui/react-form"
import Link from "next/link"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    acceptTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const text = await response.text()
        console.error('Respuesta del servidor:', text)
        throw new Error('Error en el servidor: ' + response.status)
      }

      const data = await response.json()
      console.log('Respuesta exitosa:', data)
      
      if (data.error) {
        throw new Error(data.details || data.error)
      }
      
      setIsSubmitted(true)
    } catch (error: any) {
      setError(error.message || 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')
      console.error('Error en el formulario:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-platinum-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-orange_web/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-orange_web" />
          </div>
          <h2 className="text-2xl font-bold text-oxford_blue mb-4">¡Mensaje Enviado!</h2>
          <p className="text-oxford_blue-600 mb-6">
            Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  service: "",
                  message: "",
                  acceptTerms: false
                })
              }}
              className="w-full bg-orange_web hover:bg-orange_web-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Enviar Otro Mensaje
            </button>
            <Link 
              href="/"
              className="w-full inline-block bg-platinum-100 hover:bg-platinum-200 text-oxford_blue font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-platinum-50">
      <section className="bg-gradient-to-r from-oxford_blue to-oxford_blue-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hablemos de tu proyecto
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              ¿Listo para hacer crecer tu negocio? Contáctanos y descubre cómo nuestras estrategias de marketing digital pueden transformar tu empresa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-oxford_blue mb-8">Información de contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange_web/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange_web" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-oxford_blue">Email</h3>
                      <p className="text-oxford_blue-600">hola@insidemind.com</p>
                      <p className="text-oxford_blue-600">ventas@insidemind.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange_web/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange_web" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-oxford_blue">Teléfono</h3>
                      <p className="text-oxford_blue-600">+34 123 456 789</p>
                      <p className="text-oxford_blue-600">+34 987 654 321</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange_web/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange_web" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-oxford_blue">Oficina</h3>
                      <p className="text-oxford_blue-600">Calle Marketing 123</p>
                      <p className="text-oxford_blue-600">28001 Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange_web/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange_web" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-oxford_blue">Horario</h3>
                      <p className="text-oxford_blue-600">Lun - Vie: 9:00 - 18:00</p>
                      <p className="text-oxford_blue-600">Sáb: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>

                <Separator.Root className="my-8 bg-platinum-300 h-px" />

                <div>
                  <h3 className="font-semibold text-oxford_blue mb-4">Consulta gratuita</h3>
                  <p className="text-oxford_blue-600 text-sm mb-4">
                    Ofrecemos una consulta gratuita de 30 minutos para analizar tu negocio y proponer estrategias personalizadas.
                  </p>
                  <div className="bg-orange_web/10 rounded-lg p-4">
                    <p className="text-orange_web text-sm font-medium">
                      📞 ¡Llamada gratuita sin compromiso!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-oxford_blue mb-8">Envíanos un mensaje</h2>
                
                <Form.Root onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit(event);
                }} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Form.Field name="name">
                      <div className="flex items-baseline justify-between">
                        <Form.Label className="text-sm font-medium text-oxford_blue">
                          Nombre completo
                        </Form.Label>
                        <Form.Message className="text-xs text-red-600" match="valueMissing">
                          Por favor ingresa tu nombre
                        </Form.Message>
                      </div>
                      <Form.Control asChild>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 mt-2 border border-platinum-300 rounded-lg focus:ring-2 focus:ring-orange_web focus:border-transparent transition-colors bg-white text-oxford_blue placeholder-oxford_blue-400 hover:border-orange_web"
                          placeholder="Tu nombre completo"
                        />
                      </Form.Control>
                    </Form.Field>

                    <Form.Field name="email">
                      <div className="flex items-baseline justify-between">
                        <Form.Label className="text-sm font-medium text-oxford_blue">
                          Email
                        </Form.Label>
                        <Form.Message className="text-xs text-red-600" match="valueMissing">
                          Por favor ingresa tu email
                        </Form.Message>
                        <Form.Message className="text-xs text-red-600" match="typeMismatch">
                          Por favor ingresa un email válido
                        </Form.Message>
                      </div>
                      <Form.Control asChild>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 mt-2 border border-platinum-300 rounded-lg focus:ring-2 focus:ring-orange_web focus:border-transparent transition-colors bg-white text-oxford_blue placeholder-oxford_blue-400 hover:border-orange_web"
                          placeholder="tu@email.com"
                        />
                      </Form.Control>
                    </Form.Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Form.Field name="phone">
                      <Form.Label className="text-sm font-medium text-gray-900">
                        Teléfono
                      </Form.Label>
                      <Form.Control asChild>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 mt-2 border border-platinum-300 rounded-lg focus:ring-2 focus:ring-orange_web focus:border-transparent transition-colors bg-white text-oxford_blue placeholder-oxford_blue-400 hover:border-orange_web"
                          placeholder="+34 123 456 789"
                        />
                      </Form.Control>
                    </Form.Field>

                    <Form.Field name="company">
                      <Form.Label className="text-sm font-medium text-gray-900">
                        Empresa
                      </Form.Label>
                      <Form.Control asChild>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 mt-2 border border-platinum-300 rounded-lg focus:ring-2 focus:ring-orange_web focus:border-transparent transition-colors bg-white text-oxford_blue placeholder-oxford_blue-400 hover:border-orange_web"
                          placeholder="Nombre de tu empresa"
                        />
                      </Form.Control>
                    </Form.Field>
                  </div>

                  <Form.Field name="service">
                    <Form.Label className="text-sm font-medium text-gray-900">
                      Servicio de interés
                    </Form.Label>
                    <Select.Root
                      value={formData.service}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                    >
                      <Select.Trigger
                        className="w-full px-4 py-3 mt-2 border border-platinum-300 rounded-lg focus:ring-2 focus:ring-orange_web focus:border-transparent transition-colors bg-white text-oxford_blue hover:border-orange_web flex items-center justify-between"
                      >
                        <Select.Value placeholder="Selecciona un servicio" />
                        <Select.Icon>
                          <ChevronDown className="h-4 w-4 text-oxford_blue-400" />
                        </Select.Icon>
                      </Select.Trigger>

                      <Select.Portal>
                        <Select.Content
                          position="popper"
                          className="bg-white rounded-lg shadow-lg border border-platinum-200 overflow-hidden min-w-[200px] z-50"
                        >
                          <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-oxford_blue cursor-default">
                            <ChevronUp className="h-4 w-4" />
                          </Select.ScrollUpButton>
                          <Select.Viewport>
                            <Select.Group>
                              <Select.Item
                                value="marketing-digital"
                                className="px-4 py-2 hover:bg-orange_web/10 focus:bg-orange_web/10 focus:outline-none cursor-pointer text-oxford_blue data-[highlighted]:bg-orange_web/10"
                              >
                                <Select.ItemText>Marketing Digital</Select.ItemText>
                              </Select.Item>
                              <Select.Item
                                value="redes-sociales"
                                className="px-4 py-2 hover:bg-orange_web/10 focus:bg-orange_web/10 focus:outline-none cursor-pointer text-oxford_blue data-[highlighted]:bg-orange_web/10"
                              >
                                <Select.ItemText>Redes Sociales</Select.ItemText>
                              </Select.Item>
                              <Select.Item
                                value="branding"
                                className="px-4 py-2 hover:bg-orange_web/10 focus:bg-orange_web/10 focus:outline-none cursor-pointer text-oxford_blue data-[highlighted]:bg-orange_web/10"
                              >
                                <Select.ItemText>Branding</Select.ItemText>
                              </Select.Item>
                              <Select.Item
                                value="seo"
                                className="px-4 py-2 hover:bg-orange_web/10 focus:bg-orange_web/10 focus:outline-none cursor-pointer text-oxford_blue data-[highlighted]:bg-orange_web/10"
                              >
                                <Select.ItemText>SEO</Select.ItemText>
                              </Select.Item>
                              <Select.Item
                                value="consulta-general"
                                className="px-4 py-2 hover:bg-orange_web/10 focus:bg-orange_web/10 focus:outline-none cursor-pointer text-oxford_blue data-[highlighted]:bg-orange_web/10"
                              >
                                <Select.ItemText>Consulta General</Select.ItemText>
                              </Select.Item>
                              <Select.Item
                                value="otros"
                                className="px-4 py-2 hover:bg-orange_web/10 focus:bg-orange_web/10 focus:outline-none cursor-pointer text-oxford_blue data-[highlighted]:bg-orange_web/10"
                              >
                                <Select.ItemText>Otros</Select.ItemText>
                              </Select.Item>
                            </Select.Group>
                          </Select.Viewport>
                          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-oxford_blue cursor-default">
                            <ChevronDown className="h-4 w-4" />
                          </Select.ScrollDownButton>
                        </Select.Content>
                      </Select.Portal>
                    </Select.Root>
                  </Form.Field>

                  <Form.Field name="message">
                    <div className="flex items-baseline justify-between">
                      <Form.Label className="text-sm font-medium text-oxford_blue">
                        Mensaje
                      </Form.Label>
                      <Form.Message className="text-xs text-red-600" match="valueMissing">
                        Por favor ingresa tu mensaje
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 mt-2 border border-platinum-300 rounded-lg focus:ring-2 focus:ring-orange_web focus:border-transparent transition-colors resize-none bg-white text-oxford_blue placeholder-oxford_blue-400 hover:border-orange_web"
                        placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                      />
                    </Form.Control>
                  </Form.Field>

                  <Form.Field name="acceptTerms" className="flex items-start space-x-3">
                    <Form.Control asChild>
                      <Checkbox.Root
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptTerms: checked === true }))}
                        className="h-5 w-5 rounded border border-platinum-300 bg-white hover:bg-orange_web/5 focus:outline-none focus:ring-2 focus:ring-orange_web focus:ring-offset-2 data-[state=checked]:bg-orange_web data-[state=checked]:border-orange_web transition-colors"
                      >
                        <Checkbox.Indicator className="flex items-center justify-center">
                          <Check className="h-3.5 w-3.5 text-white" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                    </Form.Control>
                    <Label.Root htmlFor="acceptTerms" className="text-sm text-oxford_blue-600">
                      Acepto los <Link href="/terminos" className="text-orange_web hover:text-orange_web-600 underline">términos y condiciones</Link> y la{" "}
                      <Link href="/privacidad" className="text-orange_web hover:text-orange_web-600 underline">política de privacidad</Link>.
                      También acepto recibir comunicaciones sobre los servicios de InsideMind.
                    </Label.Root>
                  </Form.Field>

                  <div className="bg-platinum/20 rounded-lg p-4">
                    <p className="text-sm text-oxford_blue-600">
                      * Campos obligatorios.
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-sm text-red-600">
                        {error}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.acceptTerms}
                    className="w-full bg-orange_web hover:bg-orange_web-600 disabled:bg-platinum-400 text-black font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </button>
                </Form.Root>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir InsideMind?
            </h2>
            <p className="text-xl text-gray-600">
              Nuestro compromiso es tu éxito digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Respuesta rápida</h3>
              <p className="text-gray-600">
                Respondemos a todas las consultas en menos de 24 horas, garantizando una comunicación fluida y eficiente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consulta gratuita</h3>
              <p className="text-gray-600">
                Ofrecemos una primera consulta completamente gratuita para entender tus necesidades y objetivos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estrategia personalizada</h3>
              <p className="text-gray-600">
                Cada proyecto es único. Desarrollamos estrategias a medida que se adaptan perfectamente a tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}