"use client"

import { useEffect } from 'react'

export default function FontInspector() {
  useEffect(() => {
    // Función para obtener la fuente aplicada a un elemento
    const getAppliedFont = (element: Element) => {
      const style = window.getComputedStyle(element)
      return style.fontFamily
    }

    // Función para verificar fuentes
    const checkFonts = () => {
      console.group('🔍 Inspección de Fuentes')
      
      // Verificar títulos (DM Sans)
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      console.group('📝 Títulos (deberían usar DM Sans):')
      headings.forEach((heading, i) => {
        const font = getAppliedFont(heading)
        console.log(`${heading.tagName}: "${heading.textContent}"`, {
          'Fuente aplicada': font,
          'Elemento': heading
        })
      })
      console.groupEnd()

      // Verificar texto normal (Plus Jakarta Sans)
      const paragraphs = document.querySelectorAll('p')
      console.group('📄 Texto (debería usar Plus Jakarta Sans):')
      paragraphs.forEach((p, i) => {
        const font = getAppliedFont(p)
        console.log(`Párrafo ${i + 1}: "${p.textContent?.slice(0, 50)}..."`, {
          'Fuente aplicada': font,
          'Elemento': p
        })
      })
      console.groupEnd()

      // Verificar variables CSS
      const root = document.documentElement
      const style = getComputedStyle(root)
      console.group('🎨 Variables CSS de fuentes:')
      console.log('--font-sans:', style.getPropertyValue('--font-sans'))
      console.log('--font-display:', style.getPropertyValue('--font-display'))
      console.groupEnd()

      console.groupEnd()
    }

    // Ejecutar la verificación después de que la página cargue completamente
    setTimeout(checkFonts, 1000)
  }, [])

  return null
}
