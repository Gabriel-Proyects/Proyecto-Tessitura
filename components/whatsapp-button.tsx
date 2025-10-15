"use client"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5218713914550?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20arquitectura"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110"
    >
      <i className="fab fa-whatsapp text-white text-2xl"></i>
    </a>
  )
}
