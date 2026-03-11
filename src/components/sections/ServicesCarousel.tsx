'use client'

import { motion } from 'framer-motion'
import { FileText, Stethoscope, TrendingUp, FileCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesCarousel() {
  const services = [
    {
      icon: FileText,
      title: 'Tax Return Preparation',
      price: '£130',
      description: 'Complete tax return filing with expert review and HMRC submission',
      features: ['Dedicated specialist', 'Document review', 'HMRC filing', 'Support included'],
    },
    {
      icon: Stethoscope,
      title: 'Tax Health Check',
      price: '£99',
      description: 'Comprehensive review of your tax situation with expert recommendations',
      features: ['Full tax review', 'Optimization tips', '60-min consultation', 'Action plan'],
    },
    {
      icon: TrendingUp,
      title: 'Capital Gains Report',
      price: '£99',
      description: '60-day CGT report for property and investment transactions',
      features: ['CGT calculation', 'HMRC compliant', 'Fast delivery', 'Expert support'],
    },
    {
      icon: FileCheck,
      title: 'UTR Registration',
      price: '£25',
      description: 'Quick and easy Unique Taxpayer Reference registration service',
      features: ['Fast processing', 'HMRC submission', 'Confirmation', 'Follow-up support'],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing, expert service. Choose what you need, pay only for what you use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary-600" size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <div className="text-3xl font-bold text-primary-600 mb-3">{service.price}</div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#signup"
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors group-hover:gap-3"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
