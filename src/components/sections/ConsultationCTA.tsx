'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ConsultationCTA() {
  return (
    <section id="consultation" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 p-12 md:p-16 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Calendar size={40} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not Sure Where to Start?
            </h2>
            
            <p className="text-xl mb-8 text-white/90">
              Book a 60-minute consultation with our tax experts. Get personalized advice 
              and a clear action plan for your tax situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="text-5xl font-bold">£99</div>
              <div className="text-left">
                <div className="font-semibold">One-time consultation</div>
                <div className="text-white/80">60 minutes with expert</div>
              </div>
            </div>

            <Link
              href="#book"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:gap-3"
            >
              Book Your Consultation
              <ArrowRight size={20} />
            </Link>

            <p className="mt-6 text-sm text-white/80">
              ✓ No obligation • ✓ Expert advice • ✓ Clear action plan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
