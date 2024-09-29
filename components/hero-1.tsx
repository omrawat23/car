"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Component() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-[#f5e6d3] p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-right font-geist-sans"
          {...fadeIn}
        >
          PORSCHE IS QUALITY
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300">
          <motion.div 
            className="md:col-span-2 p-6 border-r border-b border-gray-300"
            {...fadeIn}
          >
            <div className="mb-4">
              <span className="text-sm text-gray-500">01</span>
              <h3 className="text-xl font-bold mt-1">TIMELESS DESIGN AND ICONIC LEGACY</h3>
            </div>
            <p className="text-sm mb-4">
              Porsche&apos;s design philosophy seamlessly blends timeless elegance with modern aesthetics,
              resulting in head-turning cars. With a rich heritage dating back to the legendary Porsche
              356, each vehicle proudly bears the hallmarks of an esteemed automotive legacy.
            </p>
            <div className="relative h-64 md:h-96">
              <Image
                src="/stand.gif"
                alt="Classic Porsche on a country road"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded object-cover"
              />
            </div>
          </motion.div>
          <div className="hidden md:flex flex-col gap-4">
            <motion.div 
              className=" p-4 h-1/2 relative border-b border-gray-300"
              {...fadeIn}
            >
              <span className="absolute top-2 left-2 text-sm text-gray-500">02</span>
              <div className="h-full relative">
                <Image
                  src="/walk.gif"
                  alt="Porsche car detail"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              className="p-4 h-1/2 relative"
              {...fadeIn}
            >
              <span className="absolute top-2 left-2 text-sm text-gray-500">03</span>
              <div className="h-full relative">
                <Image
                  src="/run.gif"
                  alt="Another Porsche car detail"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
