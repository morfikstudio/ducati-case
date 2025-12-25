import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { SanityLive } from "@/sanity/lib/live"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ducati Case | Eccellenza Italiana",
  description: "Portale per l'annuncio di immobili in Italia e all'estero",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SanityLive />
      </body>
    </html>
  )
}
