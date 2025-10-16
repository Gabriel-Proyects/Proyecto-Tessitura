"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import PhilosophyModal from "@/components/philosophy-modal"
import RevealOnScroll from "@/components/reveal-on-scroll"
import BackgroundCarousel from "@/components/background-carousel"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 👇 Base para GitHub Pages (usa /Proyecto-Tessitura)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/Proyecto-Tessitura"

  // 👇 Agrega el prefijo en las imágenes
  const heroImages = [
    `${basePath}/1.jpg`,
    `${basePath}/2.jpeg`,
    `${basePath}/3.jpg`,
    `${basePath}/4.jpeg`,
    `${basePath}/5.jpg`,
  ]

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <PhilosophyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <BackgroundCarousel images={heroImages} />

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28 md:pt-32">
          <div className="max-w-4xl">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                "La arquitectura es el arte de dar forma a los espacios donde la vida sucede."
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#servicios"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-center text-sm sm:text-base shadow-xl"
                >
                  Conoce más
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base shadow-xl backdrop-blur-sm"
                >
                  Nuestra Filosofía
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section id="estadisticas" className="py-12 sm:py-16 lg:py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {[
              { icon: "calendar-alt", number: "15+", label: "Años de Experiencia" },
              { icon: "building", number: "200+", label: "Proyectos Completados" },
              { icon: "users", number: "150+", label: "Clientes Satisfechos" },
              { icon: "award", number: "25+", label: "Reconocimientos" },
            ].map((stat, index) => (
              <RevealOnScroll key={index} className="text-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas fa-${stat.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${basePath}/workplace.jpg`}
            alt="Tessitura workspace"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Quiénes Somos
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Conoce nuestra filosofía y valores que nos definen como estudio de arquitectura.
            </p>
          </div>

          <RevealOnScroll>
            <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-2xl border-l-4 border-amber-400">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <i className="fas fa-building text-2xl text-amber-400"></i>
                </div>
                <h3 className="text-3xl font-bold text-black">TESSITURA ARQUITECTOS</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos un despacho con 15 años de experiencia en los ramos residencial, comercial e industrial. Siempre
                pensando en las necesidades presentes y futuras de nuestros clientes, desarrollamos estrategias únicas
                para cada proyecto respondiendo a las condiciones específicas.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              En Tessitura Arquitectos fusionamos creatividad y funcionalidad para crear espacios que inspiran y
              perduran en el tiempo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <RevealOnScroll>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0">
                  <i className="fas fa-drafting-compass text-xl sm:text-2xl text-amber-400"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Diseño Arquitectónico</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow">
                  Creamos diseños arquitectónicos innovadores que equilibran estética, funcionalidad y sostenibilidad
                  para cada proyecto.
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Arquitectura residencial
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Edificios comerciales
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Espacios culturales
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Diseño de interiores
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0">
                  <i className="fas fa-city text-xl sm:text-2xl text-amber-400"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Planificación Urbana</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow">
                  Desarrollamos soluciones urbanas que mejoran la calidad de vida y promueven comunidades sostenibles y
                  vibrantes.
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Masterplans
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Regeneración urbana
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Espacios públicos
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Movilidad sostenible
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0">
                  <i className="fas fa-tools text-xl sm:text-2xl text-amber-400"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Consultoría Técnica</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow">
                  Ofrecemos asesoramiento especializado en todos los aspectos técnicos y normativos de la arquitectura y
                  construcción.
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Certificaciones energéticas
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Gestión de licencias
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Dirección de obra
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-amber-400 mr-2 flex-shrink-0"></i>
                    Peritajes técnicos
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
              Proyectos Ejecutivos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales para todas las fases de tu proyecto arquitectónico.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "PROYECTO", items: ["Residenciales", "Comerciales", "Industriales", "Deportivos"], image: "/proyectos/proyecto.jpg" },
              { title: "GESTORÍA Y TRAMITOLOGÍA", items: ["Director", "Responsable de Obra", "Corresponsable", "Uso de Suelo, Lic de Construcción"], image: "/proyectos/Gestoria.png" },
              { title: "ADMINISTRACIÓN DE OBRA", description: "Nos volvemos tus ojos, cuidando tus intereses, para que todo se ejecute en tiempo y forma", image: "/proyectos/ojos.jpg" },
              { title: "CONSTRUCCIÓN", description: "Damos valor a tus activos, edificando, brindando confianza en la ejecución", image: "/proyectos/obra.jpg" },
              { title: "DISEÑO DE INTERIORES", items: ["Espacios residenciales", "Oficinas corporativas", "Locales comerciales", "Espacios públicos"], image: "/proyectos/interiores.png" },
              { title: "CONSULTORÍA ESPECIALIZADA", items: ["Estudios de factibilidad", "Peritajes técnicos", "Certificaciones energéticas", "Asesoría normativa"], image: "/proyectos/consultoria.jpg" },
            ].map((project, index) => (
              <RevealOnScroll key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-48">
                    <Image
                      src={`${basePath}${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-black mb-4">{project.title}</h3>
                    {project.items ? (
                      <ul className="space-y-2 text-gray-700">
                        {project.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fas fa-check text-amber-400 mr-2 mt-1"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700">{project.description}</p>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              La satisfacción de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "María González",
                project: "Casa Residencial",
                text: "Tessitura transformó completamente nuestra visión de hogar. Su atención al detalle y profesionalismo superaron nuestras expectativas.",
              },
              {
                name: "Carlos Mendoza",
                project: "Edificio Comercial",
                text: "El equipo de Tessitura entendió perfectamente nuestras necesidades comerciales y creó un espacio que ha potenciado nuestro negocio.",
              },
              {
                name: "Ana Rodríguez",
                project: "Proyecto Industrial",
                text: "Su experiencia en proyectos industriales es excepcional. Cumplieron con todos los plazos y especificaciones técnicas.",
              },
            ].map((testimonial, index) => (
              <RevealOnScroll key={index}>
                <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 flex flex-col h-full">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <i className="fas fa-user text-black text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">{testimonial.project}</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="flex text-amber-400 text-sm sm:text-base">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6">Contacto</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Estamos a tu disposición para convertir tus ideas en proyectos arquitectónicos excepcionales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <RevealOnScroll>
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Oficina Principal</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-bold text-black mb-2 text-sm sm:text-base">Dirección</h4>
                      <p className="text-sm sm:text-base text-gray-700">Av Juan I. Jiménez 465, Los Ángeles</p>
                      <p className="text-sm sm:text-base text-gray-700">27140 Torreón, Coah.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2 text-sm sm:text-base">Teléfono</h4>
                      <p className="text-sm sm:text-base text-gray-700">+52 87 456 78 90</p>
                      <p className="text-sm sm:text-base text-gray-700">+52 87 45 43 65 (Móvil)</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2 text-sm sm:text-base">Email</h4>
                      <p className="text-sm sm:text-base text-gray-700">info@tessituraarchitects.com</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2 text-sm sm:text-base">Horario</h4>
                      <p className="text-sm sm:text-base text-gray-700">Lunes a Viernes: 9:00 - 19:00</p>
                      <p className="text-sm sm:text-base text-gray-700">Sábados: Con cita previa</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Oficina Segunda</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-bold text-black mb-2 text-sm sm:text-base">Dirección</h4>
                      <p className="text-sm sm:text-base text-gray-700">Carrer de Provença 310, Principal</p>
                      <p className="text-sm sm:text-base text-gray-700">27080 CDMX</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2 text-sm sm:text-base">Teléfono</h4>
                      <p className="text-sm sm:text-base text-gray-700">+52 87 123 45 67</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2 text-sm sm:text-base">Email</h4>
                      <p className="text-sm sm:text-base text-gray-700">CDMX@tessituraarchitects.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.866082595827!2d-103.42862322472876!3d25.53398317748886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd9d40b1e35db%3A0x2c05f61f5cbf90a3!2sAv%20Juan%20I.%20Jim%C3%A9nez%20465%2C%20Los%20%C3%81ngeles%2C%2027140%20Torre%C3%B3n%2C%20Coah.!5e0!3m2!1ses-419!2smx!4v1715000000000!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
