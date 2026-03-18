'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Upload, FileCheck, CreditCard } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Business Consultation',
      description: 'Free consultation to understand your business needs and challenges.',
    },
    {
      icon: Upload,
      title: 'Assessment & Planning',
      description: 'We assess your current setup and create a customized service plan.',
    },
    {
      icon: FileCheck,
      title: 'Implementation',
      description: 'Our experts implement solutions with minimal disruption to your operations.',
    },
    {
      icon: CreditCard,
      title: 'Ongoing Support',
      description: 'Continuous support and monitoring to ensure your business stays compliant.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to transform your business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-accent-300"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
