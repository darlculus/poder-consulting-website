'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How much does a tax return cost?',
      answer: 'Our standard tax return service starts at £130, which includes everything you need: dedicated tax specialist, document review, HMRC submission, and ongoing support. We offer transparent, fixed pricing with no hidden fees. Additional services like Capital Gains Tax reports (£99) and UTR registration (£25) are available separately.',
    },
    {
      question: 'How long does the tax filing process take?',
      answer: 'Our typical turnaround time is 48 hours from when we receive all your documents. However, this can vary depending on the complexity of your tax situation. For urgent cases, we offer expedited services. You can track your progress in real-time through your personal dashboard.',
    },
    {
      question: 'What documents do I need to provide?',
      answer: 'The documents required depend on your income sources. Generally, you\'ll need: P60/P45 forms, bank statements, invoices for self-employment income, rental income records, investment statements, and receipts for allowable expenses. Our team will provide you with a personalized checklist based on your specific situation.',
    },
    {
      question: 'Are you HMRC registered and compliant?',
      answer: 'Yes, absolutely! Poder Consulting is fully registered with HMRC and all our tax specialists are qualified accountants. We follow all HMRC guidelines and regulations to ensure your tax return is 100% compliant. We also carry professional indemnity insurance for your peace of mind.',
    },
    {
      question: 'Can you help with previous tax years?',
      answer: 'Yes, we can help you file tax returns for previous years. If you\'ve missed deadlines, we can also assist with penalty appeals and negotiations with HMRC. Our team has extensive experience handling backdated returns and resolving tax issues.',
    },
    {
      question: 'What if I make a mistake or need to amend my return?',
      answer: 'Don\'t worry! If you need to amend your tax return after submission, we\'ll help you file an amendment with HMRC at no extra cost (within the first year). Our thorough review process minimizes errors, but we\'re here to support you if any changes are needed.',
    },
    {
      question: 'Do you offer support after filing?',
      answer: 'Yes! Our service includes ongoing support even after your return is filed. If HMRC has questions or you receive correspondence, we\'ll handle it for you. You also get access to your dedicated tax specialist for any tax-related queries throughout the year.',
    },
    {
      question: 'How secure is my personal information?',
      answer: 'We take data security extremely seriously. All your information is encrypted with bank-level 256-bit encryption. We use secure servers, comply with GDPR regulations, and never share your data with third parties. Our systems are regularly audited for security compliance.',
    },
    {
      question: 'Can I track my tax return progress?',
      answer: 'Absolutely! You\'ll have access to a personal dashboard where you can track your tax return status in real-time, upload documents, communicate with your tax specialist, and view all your tax history. You\'ll also receive email notifications at each stage of the process.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards, bank transfers, and digital payment methods including Apple Pay and Google Pay. Payment is only required after you\'ve reviewed and approved your tax return. We also offer payment plans for larger amounts.',
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
