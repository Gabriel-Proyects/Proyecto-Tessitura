"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/95 backdrop-blur-md"
      } border-b border-gray-200`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <Image
              src="/Proyecto-Tessitura/tessitura.jpeg"
              alt="Logo de Tessitura Arquitectos"
              width={40}
              height={40}
              className="rounded-lg shadow-sm sm:w-12 sm:h-12"
              unoptimized
            />
            <span className="text-sm sm:text-base lg:text-xl font-bold text-black whitespace-nowrap">
              TESSITURA ARQUITECTOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block ml-auto">
            <ul className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {[
                { href: "/", label: "Inicio" },
                { href: "/#about-us", label: "Nosotros" },
                { href: "/#servicios", label: "Servicios" },
                { href: "/#proyectos", label: "Proyectos" },
                { href: "/#contacto", label: "Contacto" },
                { href: "/galeria", label: "Galería" },
                { href: "/redes-sociales", label: "Redes" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm lg:text-base text-gray-700 hover:text-black transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5 p-2 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {[
                { href: "/", label: "Inicio" },
                { href: "/#about-us", label: "Nosotros" },
                { href: "/#servicios", label: "Servicios" },
                { href: "/#proyectos", label: "Proyectos" },
                { href: "/#contacto", label: "Contacto" },
                { href: "/galeria", label: "Galería" },
                { href: "/redes-sociales", label: "Redes" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="block text-gray-700 hover:text-black transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
