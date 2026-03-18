'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export default function Comparison() {
  const features = [
    { name: 'Comprehensive Business Solutions', poder: true, others: false },
    { name: 'Dedicated Business Consultant', poder: true, others: false },
    { name: 'NRS Compliance Expertise', poder: true, others: true },
    { name: 'Payroll & Statutory Management', poder: true, others: false },
    { name: 'Ongoing Business Support', poder: true, others: false },
    { name: 'ERP Implementation', poder: true, others: false },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Poder Consulting?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we compare to other business consulting services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6">
              <div className="col-span-1"></div>
              <div className="text-center font-bold text-lg">Poder Consulting</div>
              <div className="text-center font-bold text-lg">Others</div>
            </div>

            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-6 items-center ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="font-semibold text-gray-900">{feature.name}</div>
                <div className="flex justify-center">
                  {feature.poder ? (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="text-green-600" size={20} />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="text-red-600" size={20} />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.others ? (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="text-green-600" size={20} />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="text-red-600" size={20} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
