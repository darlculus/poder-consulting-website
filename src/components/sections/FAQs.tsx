'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What business services do you offer?',
      answer: 'We provide comprehensive business solutions including accounting services, tax compliance, payroll management, ERP implementation, financial advisory, and corporate services. Our team specializes in Nigerian business regulations including NRS compliance, PAYE, NHF, NSITF, ITF, and PENCOM requirements.',
    },
    {
      question: 'How do you ensure NRS compliance?',
      answer: 'Our team stays updated with all Nigeria Revenue Service regulations and requirements. We ensure your business meets all tax obligations, from corporate tax filing to VAT returns. We handle all NRS submissions and maintain ongoing compliance monitoring to keep your business in good standing.',
    },
    {
      question: 'Can you help with payroll and statutory deductions?',
      answer: 'Absolutely! We manage complete payroll processing including PAYE calculations, NHF (National Housing Fund), NSITF (Nigeria Social Insurance Trust Fund), ITF (Industrial Training Fund), and PENCOM contributions. We ensure accurate calculations and timely remittances to all relevant agencies.',
    },
    {
      question: 'Do you assist with business registration and setup?',
      answer: 'Yes, we provide full corporate services including company registration with CAC (Corporate Affairs Commission), tax registration with NRS, and all necessary business permits. We guide you through the entire setup process and ensure compliance with all regulatory requirements.',
    },
    {
      question: 'What accounting software do you work with?',
      answer: 'We work with various accounting platforms including QuickBooks, Xero, and other ERP solutions. We can help implement the right system for your business size and needs, provide training, and ensure seamless integration with your existing processes.',
    },
    {
      question: 'How do you handle financial reporting and audits?',
      answer: 'We prepare comprehensive financial statements, management reports, and audit-ready documentation. Our team ensures your books are properly maintained and can assist with audit preparation, working closely with external auditors when required.',
    },
    {
      question: 'Can you help with tax planning and advisory?',
      answer: 'Yes! We provide strategic tax planning to optimize your tax position legally. Our advisory services include cash flow management, investment planning, and growth strategies tailored to Nigerian business environment and regulations.',
    },
    {
      question: 'How secure is our business information?',
      answer: 'We take data security extremely seriously. All your information is encrypted with bank-level security. We use secure servers, comply with data protection regulations, and never share your information with unauthorized parties. Our systems are regularly audited for security compliance.',
    },
    {
      question: 'Do you provide ongoing support after setup?',
      answer: 'Absolutely! We believe in building long-term partnerships. After initial setup, we provide ongoing support, regular check-ins, compliance monitoring, and are always available for business queries. You get dedicated support throughout your business journey.',
    },
    {
      question: 'How do we get started with your services?',
      answer: 'Getting started is simple! Contact us for a free consultation where we assess your business needs. We then create a customized service plan and begin implementation. Our onboarding process is designed to be smooth and efficient with minimal disruption to your operations.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <HelpCircle className="text-primary-600 mx-auto" size={48} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'ring-2 ring-primary-600' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8 text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                        <Minus className="text-white" size={20} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                        <Plus className="text-gray-600" size={20} />
                      </div>
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 pt-2"
                      >
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our friendly team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Services
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
