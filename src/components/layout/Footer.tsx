'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const services = [
    'Tax Return Preparation',
    'Tax Health Check',
    'Capital Gains Report',
    'UTR Registration',
  ]

  const resources = [
    'Tax Calculator',
    'Blog',
    'FAQs',
    'Tax Guides',
  ]

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'GDPR Compliance',
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo1.png"
                alt="Poder Consulting Logo"
                width={200}
                height={67}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Professional tax consulting services with transparent pricing. 
              Making tax filing simple and stress-free.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400" />
                <a href="mailto:hello@poderconsulting.com" className="hover:text-white transition-colors">
                  hello@poderconsulting.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400" />
                <a href="tel:+442012345678" className="hover:text-white transition-colors">
                  +44 20 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary-400" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <li key={i}>
                  <Link href="#services" className="hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Poder Consulting. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
