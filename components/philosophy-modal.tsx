"use client"

import { useEffect } from "react"

interface PhilosophyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PhilosophyModal({ isOpen, onClose }: PhilosophyModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-black">Nuestra Filosofía</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <i className="fas fa-times text-gray-600"></i>
          </button>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl border border-amber-200">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">MISIÓN</h3>
              <p className="text-gray-700 leading-relaxed">
                Crear para nuestros clientes proyectos de la más alta calidad, siempre en función de sus necesidades y
                respondiendo a la naturaleza de cada uno de ellos, con una visión abierta en el panorama de la
                arquitectura, con un equilibrio de confort, sofisticación y espacio, con un juego de luces y sombras, de
                contrastes, que embellezcan cada detalle y los hagan resaltar de forma sutil y elegante.
              </p>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-2xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-eye text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">VISIÓN</h3>
              <p className="text-gray-200 leading-relaxed">
                Seguir desarrollando proyectos rompiendo las fronteras locales y nacionales, posicionándonos en un
                mercado globalizado, siempre fieles a nuestros valores y principios, conscientes de nuestras raíces y
                sin perder el sentido humano para poder mantener esa relación cercana con nuestros clientes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-history text-2xl text-amber-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">HISTORIA</h3>
              <p className="text-gray-700 leading-relaxed">
                Con 15 años de trayectoria en Torreón, Coahuila, hemos evolucionado desde un pequeño estudio hasta
                convertirnos en referente regional en arquitectura residencial, comercial e industrial. Cada proyecto ha
                sido una oportunidad de crecimiento y aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
