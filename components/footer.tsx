"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronUp, Facebook, Twitter, Instagram } from 'lucide-react'

const footerLinks = [
  { title: "Models", links: ["911", "718", "Taycan", "Panamera", "Macan", "Cayenne"] },
  { title: "Shopping Tools", links: ["Build Your Porsche", "Find a Dealer", "Special Offers", "Test Drive"] },
  { title: "Experience", links: ["Motorsport", "Porsche Experience Center", "Events", "Porsche Club"] },
]

export default function Footer() {

  return (
    <footer className="bg-[#f5e6d3] pt-16 pb-8 font-sans ">
      <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Image src="/placeholder.svg?height=50&width=150&text=Porsche+Logo" alt="Porsche Logo" width={150} height={50} className="mb-6" />
            <p className="text-sm">Porsche AG - Driving excellence since 1931. Experience the thrill of precision engineering and unparalleled performance.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
         
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Porsche AG. All rights reserved.</p>
            <div className="flex flex-wrap justify-center space-x-4 text-sm">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
              <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}