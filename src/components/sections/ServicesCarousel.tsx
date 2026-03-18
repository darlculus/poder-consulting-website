'use client'

import { motion } from 'framer-motion'
import { Calculator, FileText, Users, Settings, TrendingUp, Building2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesCarousel() {
  const services = [
    {
      icon: Calculator,
      title: 'Accounting Services',
      description: 'Complete bookkeeping, financial statements, and accounting management for your business',
      features: ['Monthly bookkeeping', 'Financial statements', 'Account reconciliation', 'Audit preparation'],
    },
    {
      icon: FileText,
      title: 'Tax Compliance',
      description: 'NRS-compliant tax filing, VAT returns, and comprehensive tax advisory services',
      features: ['Corporate tax filing', 'VAT returns', 'PAYE compliance', 'Tax advisory'],
    },
    {
      icon: Users,
      title: 'Payroll Management',
      description: 'Complete payroll processing including PAYE, NHF, NSITF, ITF, and PENCOM contributions',
      features: ['Monthly payroll', 'PAYE calculations', 'Statutory deductions', 'Payroll reports'],
    },
    {
      icon: Settings,
      title: 'ERP Solutions',
      description: 'Enterprise resource planning implementation and management for business efficiency',
      features: ['ERP implementation', 'System integration', 'Process automation', 'Training & support'],
    },
    {
      icon: TrendingUp,
      title: 'Financial Advisory',
      description: 'Strategic financial planning, investment advice, and business growth consulting',
      features: ['Financial planning', 'Investment advisory', 'Cash flow management', 'Growth strategies'],
    },
    {
      icon: Building2,
      title: 'Corporate Services',
      description: 'Business registration, compliance management, and corporate governance support',
      features: ['Company registration', 'Compliance monitoring', 'Corporate governance', 'Legal documentation'],
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
          <h2 className="text-4xl font-bold mb-4">Our Business Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive business solutions tailored for Nigerian enterprises. Expert service, transparent approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
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
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors group-hover:gap-3"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
