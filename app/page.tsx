"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample photography data
const photos = [
  {
    id: 1,
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Ocean waves crashing against rocky shore",
    caption: "Tidal Symphony",
    description: "Captured at dawn on the northern coast",
    position: "bottom-right",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Aerial view of coastline with turquoise waters",
    caption: "Azure Horizons",
    description: "Where the sky meets the sea",
    position: "top-left",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Silhouette of a lighthouse against sunset",
    caption: "Guiding Light",
    description: "Standing tall through centuries of storms",
    position: "bottom-left",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Close-up of seashells on white sand",
    caption: "Treasures Ashore",
    description: "Nature's intricate designs washed ashore",
    position: "top-right",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Underwater coral reef with colorful fish",
    caption: "Hidden Worlds",
    description: "Life flourishes beneath the surface",
    position: "bottom-right",
  },
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToNext = (index: number) => {
    const nextSection = document.getElementById(`photo-${index + 1}`)
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="bg-white text-sky-950">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-sky-900/20 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hero image of ocean"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-light tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OCEANIC VISIONS
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A photography portfolio by Jane Doe
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          onClick={() => scrollToNext(0)}
        >
          <ChevronDown className="w-10 h-10 text-white" />
        </motion.div>
      </section>

      {/* Photo Sections */}
      <div ref={containerRef} className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {photos.map((photo, index) => (
          <section key={photo.id} id={`photo-${photo.id}`} className="h-screen w-full relative snap-start">
            <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-sky-900/10" />

            <motion.div
              className={cn(
                "absolute p-6 max-w-md text-white",
                photo.position === "top-left" && "top-10 left-10",
                photo.position === "top-right" && "top-10 right-10 text-right",
                photo.position === "bottom-left" && "bottom-10 left-10",
                photo.position === "bottom-right" && "bottom-10 right-10 text-right",
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-2">{photo.caption}</h2>
              <p className="text-lg md:text-xl font-light opacity-80">{photo.description}</p>
            </motion.div>

            {index < photos.length - 1 && (
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                viewport={{ once: false }}
                onClick={() => scrollToNext(photo.id)}
              >
                <ChevronDown className="w-10 h-10 text-white" />
              </motion.div>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}
