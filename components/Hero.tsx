"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const cars = [
  { name: "F40", image: "/porshe.png", background: "#f5e6d3", speed: "324MPH" },
  { name: "911", image: "/ferr.png", background: "#e6f5d3", speed: "330MPH" },
  { name: "GT3", image: "/LAMB.png", background: "#d3e6f5", speed: "315MPH" },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isInitialRender, setIsInitialRender] = useState(true)

  useEffect(() => {
    setIsInitialRender(false)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden font-mono" style={{ backgroundColor: cars[currentIndex].background }}>
      {/* Horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#8b4513] opacity-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#8b4513] opacity-20"></div>

      {/* Vertical lines */}
      <div className="absolute top-0 bottom-0 left-0 w-px bg-[#8b4513] opacity-20"></div>
      <div className="absolute top-0 bottom-0 right-0 w-px bg-[#8b4513] opacity-20"></div>

      {/* Top decorative elements */}
      <div className="absolute top-4 left-4 flex items-center space-x-4">
        <div className="w-8 h-8 border-2 border-[#8b4513] rounded-full"></div>
        <div className="w-8 h-8 bg-[#8b4513] rounded-full"></div>
        <div className="text-[#8b4513] font-bold">{cars[currentIndex].name}</div>
      </div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-[#8b4513] font-bold text-2xl mb-2">F40</div>
        <div className="w-12 h-px bg-red-500"></div>
      </div>
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <div className="w-8 h-8 border-2 border-[#8b4513] flex items-center justify-center">
          <span className="text-[#8b4513] font-extrabold">{currentIndex + 1}</span>
        </div>
      </div>

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-5 mix-blend-multiply"></div>

      <AnimatePresence initial={true}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          {/* Large car name text as background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute font-geist-mono inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
          >
            <div className="text-[40rem] font-light leading-none text-[#8b4513]">
              {cars[currentIndex].name}
            </div>
          </motion.div>

          {/* Main content */}
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-geist-sans font-bold text-[#8b4513] mb-8 tracking-widest"
          >
            {cars[currentIndex].name}
          </motion.h1>
          <motion.div
            key={`image-${currentIndex}`}
            initial={isInitialRender ? { x: "100%", opacity: 0 } : { x: "100%" }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            className="relative w-full h-[50vh] "
          >
            <Image
              src={cars[currentIndex].image}
              layout="fill"
              objectFit="contain"
              alt={cars[currentIndex].name}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col items-center">
        <div className="w-full h-px bg-red-500 mb-2"></div>
        <div className="w-full flex justify-between items-center text-[#8b4513]">
          <div className="font-bold">TYPE F120</div>
          <div className="flex items-center space-x-4">
            <div className="font-bold">288 GTO</div>
            <div className="font-bold">{cars[currentIndex].speed}</div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous car</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next car</span>
      </Button>
    </div>
  )
}