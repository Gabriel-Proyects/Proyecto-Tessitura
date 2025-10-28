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

      {/* Servicios - Proyectos Ejecutivos */}
      <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Ofrecemos soluciones integrales para todas las fases de tu proyecto arquitectónico.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "PROYECTO",
                items: ["Residenciales", "Comerciales", "Industriales", "Deportivos"],
                image: "/servicios/proyecto.jpg",
              },
              {
                title: "GESTORÍA Y TRAMITOLOGÍA",
                items: ["Director", "Responsable de Obra", "Corresponsable", "Uso de Suelo, Lic de Construcción"],
                image: "/servicios/Gestoria.png",
              },
              {
                title: "ADMINISTRACIÓN DE OBRA",
                description:
                  "Nos volvemos tus ojos, cuidando tus intereses, para que todo se ejecute en tiempo y forma",
                image: "/servicios/ojos.jpg",
              },
              {
                title: "CONSTRUCCIÓN",
                description: "Damos valor a tus activos, edificando, brindando confianza en la ejecución",
                image: "/servicios/obra.jpg",
              },
              {
                title: "DISEÑO DE INTERIORES",
                items: ["Espacios residenciales", "Oficinas corporativas", "Locales comerciales", "Espacios públicos"],
                image: "/servicios/interiores.png",
              },
              {
                title: "CONSULTORÍA ESPECIALIZADA",
                items: [
                  "Estudios de factibilidad",
                  "Peritajes técnicos",
                  "Certificaciones energéticas",
                  "Asesoría normativa",
                ],
                image: "/servicios/consultoria.jpg",
              },
            ].map((project, index) => (
              <RevealOnScroll key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-200">
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src={`${basePath}${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">{project.title}</h3>
                    {project.items ? (
                      <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                        {project.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fas fa-check text-amber-400 mr-2 mt-1 flex-shrink-0"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-700">{project.description}</p>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos - Galería */}
      <section id="proyectos" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6">
              Nuestros Proyectos
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Descubre nuestros trabajos más destacados donde la creatividad y la funcionalidad se encuentran.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                title: "ALKIMIA",
                description:
                  "Proyecto residencial que fusiona eficiencia estructural con bienestar. Diseño modular en acero que optimiza un terreno reducido con departamentos monoambiente que maximizan luz y ventilación natural cruzada. Incluye rooftop comunitario para fomentar interacción entre residentes.",
                location: "Torreón, Coahuila, México",
                area: "274.10 m²",
                year: "Proyecto ejecutivo",
                image: "/proyectos/alkimia.jpg",
              },
              {
                title: "CASA ÁRBOLES GEMELOS",
                description:
                  "Intervención a residencia existente organizada en tres franjas: casa, jardín central y departamento. Los dos árboles gemelos preexistentes articulan visualmente ambos cuerpos, convirtiéndose en el núcleo verde y simbólico del conjunto.",
                location: "Torreón, Coahuila, México",
                area: "462.25 m²",
                year: "Proyecto ejecutivo",
                image: "/proyectos/arboles-gemelos.jpg",
              },
              {
                title: "TERRAZA CERVANTES",
                description:
                  "Transformación de patio desordenado en terraza dinámica y organizada. Reorganización de vegetación existente con juego de muros a diferentes alturas e iluminación estratégica que crea ambiente visualmente amplio y acogedor.",
                location: "Torreón, Coah. México",
                area: "30 m²",
                year: "Proyecto ejecutivo-Construcción",
                image: "/proyectos/terraza-cervantes.jpg",
              },
              {
                title: "CASA HIDALGO",
                description:
                  "Transformación de área vacía en atractiva terraza con servicio de cocina, destinada a huéspedes y público general. Diseño estratégico que responde a la demanda de espacio de descanso y relajación confortable y visualmente agradable.",
                location: "Torreón, Coah. México",
                area: "183 m²",
                year: "Proyecto ejecutivo-Construcción",
                image: "/proyectos/casa-hidalgo.jpg",
              },
              {
                title: "TERRAZA VIÑEDOS",
                description:
                  "Transformación de espacio exterior en sofisticada terraza residencial diseñada para convivencia, con áreas de bar y estar con fogata bajo cubierta versátil. Combinación de materiales contemporáneos, paisajismo minimalista e iluminación que crean un oasis estético, acogedor y funcional.",
                location: "Torreón, Coah. México",
                area: "Superficie por definir",
                year: "Proyecto ejecutivo-Construcción",
                image: "/proyectos/terraza-vinedos.jpg",
              },
              {
                title: "PLAZA TOCHMATZINTLA",
                description:
                  "Transformación de terreno irregular en vibrante plaza urbana multifuncional. Diseño articulado por quiosco central, áreas deportivas y recreativas que responde a necesidades comunitarias. Impacto visual sublime logrado con paleta verde de especies endémicas y rediseño integral.",
                location: "Tochmatzintla, Puebla, México",
                area: "5,590 m²",
                year: "Proyecto ejecutivo",
                image: "/proyectos/plaza-tochmatzintla.jpeg",
              },
            ].map((project, index) => (
              <RevealOnScroll key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <Image
                      src={`${basePath}${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                        Estatus: {project.year}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Botón para ver más proyectos */}
          <RevealOnScroll>
            <div className="text-center">
              <Link
                href="/galeria"
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                <span>¿Quieres ver más proyectos?</span>
                <i className="fas fa-arrow-right ml-3"></i>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Testimonios */}
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

      {/* Contacto */}
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