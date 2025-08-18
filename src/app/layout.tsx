import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "InsideMind Agency - Agencia de Marketing Digital",
  description: "No hacemos magia, impactamos su mente con estrategia. Paid Media, Redes Sociales, Sitio Web, Branding y Diseño Digital.",
  keywords: "paid media, redes sociales, sitio web, branding, diseño digital, agencia marketing, estrategia digital",
  icons: {
    icon: [
      { url: '/favicon1.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon1.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon1.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon1.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon1.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon1.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicon1.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon1.png', sizes: '256x256', type: 'image/png' },
      { url: '/favicon1.png', sizes: '512x512', type: 'image/png' }
    ],
    shortcut: '/favicon1.png',
    apple: [
      { url: '/favicon1.png', sizes: '57x57', type: 'image/png' },
      { url: '/favicon1.png', sizes: '60x60', type: 'image/png' },
      { url: '/favicon1.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicon1.png', sizes: '76x76', type: 'image/png' },
      { url: '/favicon1.png', sizes: '114x114', type: 'image/png' },
      { url: '/favicon1.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon1.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon1.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon1.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon1.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon1.png',
      },
      {
        rel: 'manifest',
        url: '/manifest.json',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}