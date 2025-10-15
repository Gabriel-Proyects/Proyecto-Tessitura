import type React from "react"
import type { Metadata } from "next"
import "../app/globals.css"

export const metadata: Metadata = {
  title: "Tessitura Arquitectos",
  description:
    "Estudio de arquitectura con 15 años de experiencia en proyectos residenciales, comerciales e industriales",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
