import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Image src="/tessitura.jpeg" alt="Logo" width={48} height={48} className="rounded-lg" />
            <span className="text-xl font-bold">TESSITURA ARQUITECTOS</span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-gray-400">&copy; 2025 Tessitura Arquitectos. Todos los derechos reservados.</p>
          </div>

          <div className="flex space-x-6">
            <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">
              Inicio
            </Link>
            <Link href="/#servicios" className="text-gray-400 hover:text-amber-400 transition-colors">
              Servicios
            </Link>
            <Link href="/galeria" className="text-gray-400 hover:text-amber-400 transition-colors">
              Galería
            </Link>
            <Link href="/#contacto" className="text-gray-400 hover:text-amber-400 transition-colors">
              Contacto
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="#"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
