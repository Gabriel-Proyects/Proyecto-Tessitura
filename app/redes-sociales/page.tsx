import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import RevealOnScroll from "@/components/reveal-on-scroll"

export default function RedesSocialesPage() {
  const socialNetworks = [
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      description:
        "Descubre nuestros proyectos a través de imágenes impactantes. Comparte el proceso creativo, avances de obra, renders y espacios terminados.",
      features: [
        "Avances de obra en tiempo real",
        "Renders y visualizaciones 3D",
        "Antes y después de proyectos",
        "Tips de diseño arquitectónico",
      ],
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      description:
        "Únete a nuestra comunidad para conocer proyectos completos, testimonios de clientes y contenido educativo sobre arquitectura.",
      features: [
        "Proyectos completos documentados",
        "Testimonios de clientes",
        "Eventos y participaciones",
        "Artículos sobre tendencias",
      ],
      link: "#",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "TikTok",
      icon: "fab fa-tiktok",
      description:
        "Contenido dinámico y entretenido sobre arquitectura. Procesos creativos, transformaciones rápidas y tendencias actuales.",
      features: [
        "Time-lapse de construcciones",
        "Procesos de diseño acelerados",
        "Transformaciones impactantes",
        "Tendencias arquitectónicas",
      ],
      link: "#",
      color: "from-black to-gray-700",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      description:
        "Conecta con nosotros en el ámbito profesional. Proyectos corporativos, alianzas estratégicas y networking empresarial.",
      features: [
        "Proyectos corporativos",
        "Alianzas y colaboraciones",
        "Insights del sector",
        "Oportunidades profesionales",
      ],
      link: "#",
      color: "from-blue-700 to-blue-500",
    },
    {
      name: "YouTube",
      icon: "fab fa-youtube",
      description:
        "Videos detallados de nuestros proyectos, entrevistas con el equipo y contenido educativo sobre arquitectura y construcción.",
      features: [
        "Tours virtuales de proyectos",
        "Entrevistas con arquitectos",
        "Tutoriales y consejos",
        "Documentales de obra",
      ],
      link: "#",
      color: "from-red-600 to-red-400",
    },
    {
      name: "WhatsApp Business",
      icon: "fab fa-whatsapp",
      description:
        "Contacto directo para consultas, cotizaciones y seguimiento de proyectos. Atención personalizada y respuesta rápida.",
      features: ["Consultas inmediatas", "Cotizaciones personalizadas", "Seguimiento de proyectos", "Atención 24/7"],
      link: "https://wa.me/528745436565?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20arquitectura",
      color: "from-green-600 to-green-400",
    },
  ]

  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Síguenos en Redes Sociales</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mantente al día con nuestros proyectos, procesos creativos y contenido exclusivo
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialNetworks.map((network, index) => (
              <RevealOnScroll key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div className={`bg-gradient-to-r ${network.color} p-8 text-white text-center`}>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${network.icon} text-4xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold">{network.name}</h3>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-700 mb-6 leading-relaxed">{network.description}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {network.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <i className="fas fa-check text-amber-400 mr-2 mt-1"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={network.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 bg-black text-white text-center rounded-full font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Seguir en {network.name}
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-16 bg-white p-10 rounded-2xl shadow-xl border-l-4 border-amber-400">
              <h3 className="text-3xl font-bold text-black mb-6 text-center">Nuestra Estrategia Digital</h3>
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
                En Tessitura Arquitectos entendemos la importancia de la presencia digital. Nuestro objetivo es generar
                confianza, mostrar nuestro trabajo de calidad y mantener una comunicación cercana con nuestros clientes
                y la comunidad arquitectónica.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Contenido Educativo",
                    description: "Tips de diseño, procesos y tendencias",
                  },
                  {
                    title: "Transparencia",
                    description: "Mostramos cada etapa de nuestros proyectos",
                  },
                  {
                    title: "Interacción",
                    description: "Respondemos dudas y comentarios",
                  },
                  {
                    title: "Inspiración",
                    description: "Compartimos ideas y referencias",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-bold text-black mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </>
  )
}
