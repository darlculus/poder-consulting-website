'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart2, Briefcase, Monitor, Users, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'

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
    modalContent: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>We support businesses with accurate record keeping, structured financial reporting, and insightful analysis that provides a clear view of performance. Our services include preparation and review of financial statements, management accounts, budgeting and forecasting, and profitability reviews.</p>
        <p>We also assess internal controls and financial processes to help reduce risk, improve efficiency, and support sound governance. Through clear reporting and practical advice, we help management make informed decisions and plan with confidence.</p>
      </div>
    ),
  },
  {
    icon: Briefcase,
    title: 'Corporate Tax Services',
    features: [
      'Corporate income tax compliance',
      'Tax planning and advisory',
      'VAT and indirect tax support',
      'Withholding tax compliance',
      'Tax computations and filings',
      'Regulatory liaison and audit support',
    ],
    modalContent: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>We provide end to end tax compliance and advisory services to ensure your business meets all Nigeria Revenue Service requirements. This includes Company Income Tax, Value Added Tax, Withholding Tax, Pay As You Earn, and other statutory obligations.</p>
        <p>Our team prepares accurate tax computations, manages filings and submissions, monitors deadlines, and supports responses to regulatory queries. We help you maintain clean statutory records, reduce exposure to penalties, and stay compliant while identifying opportunities for effective tax planning.</p>
        <p>All tax services are delivered in line with Nigerian regulatory and reporting expectations.</p>
      </div>
    ),
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
    modalContent: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>We help businesses select and implement accounting systems and enterprise resource planning solutions that support efficient operations and reliable reporting. Whether you are upgrading existing tools or implementing a new system, we manage the process from selection through to go live.</p>
        <p>Our services cover system configuration, customisation to your business processes, data migration, process documentation, testing, and user training. The result is a stable, well controlled system that supports accurate financial information and day to day operations.</p>
      </div>
    ),
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
    modalContent: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>We help businesses select and implement accounting systems and enterprise resource planning solutions that support efficient operations and reliable reporting. Whether you are upgrading existing tools or implementing a new system, we manage the process from selection through to go live.</p>
        <p>Our services cover system configuration, customisation to your business processes, data migration, process documentation, testing, and user training. The result is a stable, well controlled system that supports accurate financial information and day to day operations.</p>
      </div>
    ),
  },
]

type Service = typeof services[0]

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0)
  const [modalService, setModalService] = useState<Service | null>(null)

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
            <ServiceCard key={index} service={service} index={index} onLearnMore={() => setModalService(service)} />
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
                <ServiceCard service={services[current]} index={current} onLearnMore={() => setModalService(services[current])} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {services.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-primary-600' : 'w-2 bg-gray-300'}`} aria-label={`Go to slide ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-8"
            onClick={() => setModalService(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg"
            >
              <div className="flex items-start justify-between p-6 border-b border-gray-100">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wide rounded-full mb-2">
                    Our Services
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">{modalService.title}</h2>
                </div>
                <button onClick={() => setModalService(null)} className="text-gray-400 hover:text-gray-700 transition-colors ml-4 mt-1 flex-shrink-0">
                  <X size={22} />
                </button>
              </div>
              <div className="p-6 pt-3">
                {modalService.modalContent}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function ServiceCard({ service, index, onLearnMore }: { service: Service; index: number; onLearnMore: () => void }) {
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

      <button
        onClick={onLearnMore}
        className="flex items-center justify-center gap-2 w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors text-sm mt-auto"
      >
        Learn More
        <ArrowRight size={15} />
      </button>
    </motion.div>
  )
}
