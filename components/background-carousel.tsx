"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface BackgroundCarouselProps {
  images: string[]
  className?: string
  onScrollComplete?: () => void
}

export default function BackgroundCarousel({ images, className = "" }: BackgroundCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hasCompletedCarousel, setHasCompletedCarousel] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInViewRef = useRef(false)
  const scrollAccumulatorRef = useRef(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if carousel element is in viewport
      if (!carouselRef.current) return

      const rect = carouselRef.current.getBoundingClientRect()
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight * 0.5
      isInViewRef.current = isInView

      // Only handle scroll when carousel section is in view
      if (!isInView) return

      // If carousel is completed and scrolling down, allow normal scroll
      if (hasCompletedCarousel && e.deltaY > 0) {
        return
      }

      // If at first image and scrolling up, allow normal scroll
      if (currentIndex === 0 && e.deltaY < 0) {
        return
      }

      // Prevent default scroll while navigating carousel
      e.preventDefault()

      if (isTransitioning) return

      // Accumulate scroll delta for smoother transitions
      scrollAccumulatorRef.current += e.deltaY

      // Threshold for changing images (adjust for sensitivity)
      const threshold = 100

      if (Math.abs(scrollAccumulatorRef.current) >= threshold) {
        if (scrollAccumulatorRef.current > 0) {
          // Scroll down - next image
          if (currentIndex < images.length - 1) {
            setIsTransitioning(true)
            setCurrentIndex((prev) => prev + 1)
            setTimeout(() => setIsTransitioning(false), 1000)
          } else {
            // Reached last image, mark as completed
            setHasCompletedCarousel(true)
          }
        } else {
          // Scroll up - previous image
          if (currentIndex > 0) {
            setIsTransitioning(true)
            setCurrentIndex((prev) => prev - 1)
            setHasCompletedCarousel(false) // Reset completion if going back
            setTimeout(() => setIsTransitioning(false), 1000)
          }
        }
        scrollAccumulatorRef.current = 0
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [images.length, isTransitioning, currentIndex, hasCompletedCarousel])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setCurrentIndex(0)
        setHasCompletedCarousel(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={carouselRef} className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`Architecture ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 flex flex-col gap-2 sm:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
                setCurrentIndex(index)
                setHasCompletedCarousel(index === images.length - 1)
                setTimeout(() => setIsTransitioning(false), 1000)
              }
            }}
            className={`w-1.5 sm:w-2 h-8 sm:h-12 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 text-white text-center">
        <div className="animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex items-start justify-center p-2 mx-auto">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full"></div>
          </div>
          <p className="text-xs sm:text-sm mt-2 font-medium">
            {hasCompletedCarousel ? "Scroll para continuar" : "Scroll para explorar"}
          </p>
        </div>
      </div>
    </div>
  )
}
