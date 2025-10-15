"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import RevealOnScroll from "@/components/reveal-on-scroll"

export default function GaleriaPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/Proyecto-Tessitura"

  const projects = [
    {
      title: "NOIR'S PIZZA",
      description:
        "Restaurante-bar con diseño inmersivo y temático de los años 30's y 40's, inspirado en el estilo Chicago, fusionando elementos visuales distintivos y una iluminación dramática.",
      location: "Torreón, Coah. México",
      area: "70 m²",
      year: "2025",
      image: "/galeria/pizza.png",
    },
    {
      title: "MARROK HOTEL BOUTIQUE",
      description:
        "Complejo que reinterpreta la arquitectura marroquí con un diseño sostenible y sensible al paisaje mexicano. Ofrece experiencias sensoriales únicas mediante arcos, celosías y transiciones fluidas.",
      location: "Parras de la Fuente, Coah. México",
      area: "Parras de la Fuente, Coah. México",
      year: "2025",
      image: "/galeria/hotel.jpg",
    },
    {
      title: "ESTUDIOS QREATA",
      description:
        "Centro corporativo para marketing y creación de contenido. Combina sofisticación y máxima creatividad en espacios multifuncionales y sets especializados para la producción audiovisual.",
      location: "Torreón, Coah. México",
      area: "236 m²",
      year: "2025",
      image: "/galeria/estudio.jpg",
    },
    {
      title: "CASA NARANJOS",
      description:
        "Proyecto de reorganización estratégica enfocado en la convivencia y el disfrute. Optimiza espacios interiores/exteriores creando una fluida conexión entre la terraza y la alberca.",
      location: "Torreón, Coahuila, México",
      area: "315 m²",
      year: "En proceso",
      image: "/galeria/casa.jpg",
    },
    {
      title: "OUT 27",
      description:
        "Restaurante de comida rápida con concepto deportivo. Fusiona un estilo industrial con la calidez de acabados en madera, creando un ambiente funcional, atractivo y temático cerca del estadio de béisbol.",
      location: "Torreón, Coah. México",
      area: "93.60 m²",
      year: "En proceso",
      image: "/galeria/out27.jpg",
    },
    {
      title: "PUMP FITNESS",
      description:
        "Proyecto de remodelación integral que transforma la estética del gimnasio. Utiliza colores vibrantes (amarillos/naranjas) en zonas de entrenamiento y un estilo industrial funcional, priorizando la durabilidad.",
      location: "Torreón, Coah. México",
      area: "490 m²",
      year: "2025",
      image: "/galeria/pump.jpg",
    },
  ]

  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Nuestra Galería de Proyectos
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Descubre nuestros trabajos más destacados
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <RevealOnScroll key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <Image
                      src={`${basePath}${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="space-y-2 text-sm sm:text-base text-gray-600">
                      <p className="flex items-start">
                        <i className="fas fa-map-marker-alt text-amber-400 mr-2 mt-1 flex-shrink-0"></i>
                        <span>{project.location}</span>
                      </p>
                      <p className="flex items-center">
                        <i className="fas fa-ruler-combined text-amber-400 mr-2 flex-shrink-0"></i>
                        Área: {project.area}
                      </p>
                      <p className="flex items-center">
                        <i className="fas fa-calendar-alt text-amber-400 mr-2 flex-shrink-0"></i>
                        Año: {project.year}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
