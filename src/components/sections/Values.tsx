'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, CheckCircle } from 'lucide-react'

export default function Values() {
  const values = [
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Your information is protected with bank-level 256-bit encryption. We never share your data with third parties.',
    },
    {
      icon: Eye,
      title: 'Complete Transparency',
      description: 'Fixed pricing with no hidden fees. You know exactly what you pay before you start.',
    },
    {
      icon: CheckCircle,
      title: 'Client Approval',
      description: 'Nothing gets submitted without your explicit approval. You stay in control throughout.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Commitment to You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built on trust, transparency, and exceptional service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
