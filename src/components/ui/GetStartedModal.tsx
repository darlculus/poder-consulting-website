'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Mail, Phone, Briefcase, ArrowRight, CheckCircle } from 'lucide-react'

interface GetStartedModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
  })

  const serviceTypes = [
    { value: 'self-employed', label: 'Self-Employed Tax Return', icon: '💼' },
    { value: 'company-director', label: 'Company Director', icon: '🏢' },
    { value: 'property-landlord', label: 'Property Landlord', icon: '🏠' },
    { value: 'investor', label: 'Investor / Capital Gains', icon: '📈' },
    { value: 'other', label: 'Other / Not Sure', icon: '❓' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Handle form submission
      console.log('Form submitted:', formData)
      setStep(3)
      // Reset after 3 seconds
      setTimeout(() => {
        onClose()
        setStep(1)
        setFormData({ name: '', email: '', phone: '', serviceType: '' })
      }, 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Success State */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="text-green-600" size={48} />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4">You're All Set! 🎉</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Thank you for choosing Poder Consulting. We'll be in touch within 24 hours to get started on your tax return.
                  </p>
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      Check your email for next steps and your personal dashboard access.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Form Steps */}
              {step !== 3 && (
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.h2
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl font-bold mb-2"
                    >
                      Get Started with{' '}
                      <span className="font-serif bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                        Poder Consulting
                      </span>
                    </motion.h2>
                    <p className="text-gray-600">
                      {step === 1 ? 'Tell us about yourself' : 'What service do you need?'}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex items-center justify-center gap-2 mb-8">
                    {[1, 2].map((s) => (
                      <div key={s} className="flex items-center">
                        <motion.div
                          animate={{
                            scale: step === s ? 1.2 : 1,
                            backgroundColor: step >= s ? '#0284c7' : '#e5e7eb',
                          }}
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                        >
                          {s}
                        </motion.div>
                        {s < 2 && (
                          <motion.div
                            animate={{
                              backgroundColor: step > s ? '#0284c7' : '#e5e7eb',
                            }}
                            className="w-16 h-1 mx-2"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Personal Info */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                              placeholder="John Smith"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                              placeholder="+44 20 1234 5678"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Service Selection */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        {serviceTypes.map((service) => (
                          <motion.label
                            key={service.value}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.serviceType === service.value
                                ? 'border-primary-600 bg-primary-50'
                                : 'border-gray-200 hover:border-primary-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="serviceType"
                              value={service.value}
                              checked={formData.serviceType === service.value}
                              onChange={handleChange}
                              className="w-5 h-5 text-primary-600"
                              required
                            />
                            <span className="text-3xl">{service.icon}</span>
                            <span className="font-semibold text-gray-900">{service.label}</span>
                          </motion.label>
                        ))}
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8">
                      {step > 1 && (
                        <motion.button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Back
                        </motion.button>
                      )}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 btn-primary flex items-center justify-center gap-2"
                      >
                        {step === 1 ? 'Continue' : 'Submit'}
                        <ArrowRight size={20} />
                      </motion.button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
