'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Award, Lock } from 'lucide-react'

export default function TrustIndicators() {
  const indicators = [
    { icon: Shield, label: 'NRS Compliant', value: '100%' },
    { icon: Clock, label: 'Business Experience', value: '8+ Years' },
    { icon: Award, label: 'Client Rating', value: '4.9/5' },
    { icon: Lock, label: 'Bank-Level Security', value: '256-bit' },
  ]

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mb-4">
                <item.icon className="text-primary-600" size={28} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
