"use client"

import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { Menu, X, TrendingUp, Users, Globe, Palette } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-brand-white/95 backdrop-blur supports-[backdrop-filter]:bg-brand-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-brand-black">
              Inside<span className="text-brand-orange">Mind</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu.Root className="relative">
              <NavigationMenu.List className="flex space-x-8">
                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link 
                      href="/" 
                      className="text-brand-black hover:text-brand-orange px-3 py-2 text-sm font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-orange after:transition-all after:duration-300 h-[38px] flex items-center"
                    >
                      Inicio
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="group flex items-center gap-1 text-brand-black hover:text-brand-orange px-3 py-2 text-sm font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full after:bg-brand-orange after:transition-all after:duration-300 h-[38px]">
                    <span>Servicios</span>
                    <ChevronDownIcon 
                      className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" 
                      aria-hidden="true" 
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute left-0 top-full w-full sm:w-auto z-50">
                    <div className="w-[420px] bg-brand-white shadow-xl border rounded-xl p-6 mt-2 backdrop-blur-sm bg-brand-white/95">
                      <div className="grid gap-3">
                        <Link 
                          href="/servicios/paid-media" 
                          className="group block p-4 rounded-lg hover:bg-orange-50/50 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <TrendingUp className="h-4 w-4 text-brand-orange" />
                            </div>
                            <div className="font-medium text-brand-black group-hover:text-brand-orange">
                              Paid Media
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 pl-11">
                            Publicidad estratégica que impacta y convierte
                          </div>
                        </Link>
                        <Link 
                          href="/servicios/redes-sociales" 
                          className="group block p-4 rounded-lg hover:bg-orange-50/50 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Users className="h-4 w-4 text-brand-orange" />
                            </div>
                            <div className="font-medium text-brand-black group-hover:text-brand-orange">
                              Redes Sociales
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 pl-11">
                            Conectamos tu marca con la audiencia correcta
                          </div>
                        </Link>
                        <Link 
                          href="/servicios/sitio-web" 
                          className="group block p-4 rounded-lg hover:bg-orange-50/50 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Globe className="h-4 w-4 text-brand-orange" />
                            </div>
                            <div className="font-medium text-brand-black group-hover:text-brand-orange">
                              Sitio Web
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 pl-11">
                            Experiencias digitales que generan resultados
                          </div>
                        </Link>
                        <Link 
                          href="/servicios/branding" 
                          className="group block p-4 rounded-lg hover:bg-orange-50/50 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Palette className="h-4 w-4 text-brand-orange" />
                            </div>
                            <div className="font-medium text-brand-black group-hover:text-brand-orange">
                              Branding & Diseño Digital
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 pl-11">
                            Identidad visual que impacta en la mente
                          </div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link 
                      href="/portafolio" 
                      className="text-brand-black hover:text-brand-orange px-3 py-2 text-sm font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-orange after:transition-all after:duration-300 h-[38px] flex items-center"
                    >
                      Portafolio
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link 
                      href="/nosotros" 
                      className="text-brand-black hover:text-brand-orange px-3 py-2 text-sm font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-orange after:transition-all after:duration-300 h-[38px] flex items-center"
                    >
                      Nosotros
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link 
                      href="/contacto" 
                      className="group inline-flex items-center bg-brand-orange hover:bg-orange-600 text-brand-black px-4 py-2 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] h-[38px]"
                    >
                      Contacto
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-brand-black hover:text-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="/portafolio"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Portafolio
              </Link>
              <Link
                href="/nosotros"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="block mx-3 my-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl text-base font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] text-center"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
