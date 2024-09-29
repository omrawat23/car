"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Component() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#f5e6d3] p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Models Section */}
        <section className="border border-gray-300 p-6">
          <motion.h2 
            className="text-2xl font-bold mb-6 text-right font-geist-sans"
            {...fadeIn}
          >
            MODELS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-l border-gray-300">
            <motion.div className="p-4 border-r border-b border-gray-300 space-y-4" {...fadeIn}>
              <h3 className="text-sm font-semibold">[Cars]</h3>
              <p className="text-xs">
                Who hasn&apos;t heard of Porsche? In 2006 it won the most prestigious design award in Germany. With over 70 years of excellence and passion, it&apos;s the four-wheel god.
              </p>
              <Link href="#" className="inline-block bg-black text-white text-xs px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                View all models
              </Link>
            </motion.div>
            {['Cayenne', 'Panamera'].map((model, index) => (
              <motion.div key={model} className="relative border-r border-b border-gray-300" {...fadeIn}>
                <Image
                  src='/rx3.png'
                  alt={model}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                  <h3 className="font-bold">{model}</h3>
                  <p className="text-xs">
                    {index === 0 ? 'Versatile SUV with sports car performance' : 'The luxury sports saloon for four'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="border border-gray-300 p-6">
          <motion.h2 
            className="text-2xl font-bold mb-6 text-right font-geist-sans"
            {...fadeIn}
          >
            SERVICES
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-l border-gray-300">
            <motion.div className="p-4 border-r border-b border-gray-300 space-y-4" {...fadeIn}>
              <h3 className="text-sm font-semibold">[Amenities]</h3>
              {['Classic - Service & Parts', 'Porsche Exclusive Manufaktur', 'Porsche Service'].map((service) => (
                <div key={service} className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                  <div className="w-16 h-8 bg-gray-300"></div>
                  <span className="text-xs">{service}</span>
                </div>
              ))}
            </motion.div>
            <motion.div className="md:col-span-2 p-4 border-r border-b border-gray-300 space-y-4" {...fadeIn}>
              <Image
                src=""
                alt="Porsche Service Center"
                width={600}
                height={300}
                className="w-full h-auto"
              />
              <div className="grid grid-cols-2 gap-4 text-xs">
                <p>
                  Every Porsche is not just important to us, it is part of our family. Since 1948 the name Porsche has represented engineering excellence, sports car performance, and innovative spirit and commitment. The pride of those who design and engineer Porsche cars. The commitment of those who service and maintain them.
                </p>
                <p>
                  Something extraordinary does not just happen randomly. It happens at every step. The Porsche crest represents engineering excellence, sports car performance, and innovative spirit and commitment. The pride of those who design and engineer Porsche cars. The commitment of those who service and maintain them.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
