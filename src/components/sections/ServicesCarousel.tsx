'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart2, Briefcase, Monitor, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const services = [
  {
    icon: BarChart2,
    title: 'Accounting & Financial Advisory',
    features: [
      'Financial reporting & analysis',
      'Management accounting',
      'Budgeting & planning',
      'Profitability and cost reviews',
      'Internal control design & review',
      'Risk management advisory',
    ],
  },
  {
    icon: Briefcase,
    title: 'Corporate Advisory & Transaction Support',
    features: [
      'Due diligence',
      'Business valuations',
      'Feasibility studies',
      'Market assessments',
      'Merger & acquisition support',
      'Business process optimisation',
    ],
    note: 'All work aligned with Nigerian regulatory expectations.',
  },
  {
    icon: Monitor,
    title: 'ERP & Accounting Systems',
    features: [
      'ERP selection',
      'Implementation & customisation',
      'Data migration',
      'System testing',
      'Documentation',
      'User training',
    ],
  },
  {
    icon: Users,
    title: 'Payroll Administration Services',
    features: [
      'Payroll processing',
      'Statutory deductions compliance',
      'NRS PAYE rules',
      'Pensions (PENCOM)',
      'NSITF, NHF, ITF',
      'Payroll reconciliation',
      'Confidential data handling',
    ],
  },
]

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + services.length) % services.length)
  const next = () => setCurrent((c) => (c + 1) % services.length)

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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive business solutions tailored for Nigerian enterprises. Expert service, transparent approach.
          </p>
        </motion.div>

        {/* Desktop: 4 cards in a row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Mobile/Tablet: carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
              >
                <ServiceCard service={services[current]} index={current} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-primary-600' : 'w-2 bg-gray-300'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group flex flex-col"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
        <service.icon className="text-primary-600" size={24} />
      </div>

      <h3 className="text-lg font-bold mb-4">{service.title}</h3>

      <ul className="space-y-2 mb-4 flex-1">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-gray-700">
            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>

      {service.note && (
        <p className="text-xs text-primary-600 font-medium italic mb-4">
          ➡️ {service.note}
        </p>
      )}

      <a
        href="#contact"
        className="flex items-center justify-center gap-2 w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors text-sm mt-auto"
      >
        Get Started
        <ArrowRight size={15} />
      </a>
    </motion.div>
  )
}
