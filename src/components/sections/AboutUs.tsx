'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Users, TrendingUp, CheckCircle, Star, Quote } from 'lucide-react'

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'why-exist', label: 'Why We Exist', icon: TrendingUp },
    { id: 'who-uses', label: 'Who We Serve', icon: Users },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
  ]

const clientTypes = [
    {
      icon: '🏢',
      title: 'Small & Medium Enterprises',
      description: 'Growing businesses needing comprehensive accounting and tax compliance support.',
      count: '200+',
    },
    {
      icon: '🏦',
      title: 'Startups & New Businesses',
      description: 'New companies requiring business registration, setup, and initial compliance.',
      count: '150+',
    },
    {
      icon: '💼',
      title: 'Professional Services',
      description: 'Consultants, lawyers, and professionals managing their business operations.',
      count: '100+',
    },
    {
      icon: '🏭',
      title: 'Manufacturing & Trading',
      description: 'Companies in manufacturing and trading sectors with complex tax requirements.',
      count: '50+',
    },
  ]

  const testimonials = [
    {
      name: 'Adebayo Ogundimu',
      role: 'CEO, Tech Startup',
      image: '/images/testimonial-1.jpg',
      rating: 5,
      text: 'Poder Consulting transformed our business operations. Their expertise in Nigerian tax compliance and business setup was invaluable for our growth.',
      company: 'TechFlow Nigeria Ltd',
    },
    {
      name: 'Fatima Mohammed',
      role: 'Managing Director',
      image: '/images/testimonial-2.jpg',
      rating: 5,
      text: 'Excellent service! They handled our payroll, PAYE, and all statutory compliance seamlessly. Highly professional team.',
      company: 'Northern Trading Co.',
    },
    {
      name: 'Chinedu Okwu',
      role: 'Business Owner',
      image: '/images/testimonial-3.jpg',
      rating: 5,
      text: 'From company registration to ongoing accounting support, Poder Consulting has been our trusted partner. Outstanding service delivery!',
      company: 'Okwu Manufacturing',
    },
  ]

  const partners = [
    { name: 'NRS', logo: '🏛️', description: 'Registered Agent' },
    { name: 'ICAN', logo: '📜', description: 'Certified Accountants' },
    { name: 'CITN', logo: '🎓', description: 'Institute Member' },
    { name: 'Xero', logo: '💻', description: 'Gold Partner' },
    { name: 'QuickBooks', logo: '📊', description: 'ProAdvisor' },
    { name: 'Paystack', logo: '💳', description: 'Verified Partner' },
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 shadow-xl">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold mb-6"
                >
                  About Us
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 text-gray-700 leading-relaxed"
                >
                  <p className="text-base">At <strong className="text-primary-600">Poder Consulting</strong>, we believe that managing your finances, taxes, systems, and statutory obligations should never feel overwhelming. Businesses deserve clarity, confidence, and a partner who makes compliance and financial operations seamless — not stressful. That's exactly why we exist.
                  </p>
                  <p>
                    As a proudly Nigerian owned consulting firm, we support organisations across industries with end to end accounting solutions, financial advisory, tax compliance, business process improvement, ERP implementation, and payroll services. Our mission is simple: to empower you to run your business with precision, compliance, and peace of mind.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 grid md:grid-cols-3 gap-6"
                >
                  {[
                    { title: 'Expert Team', desc: 'NRS-compliant specialists' },
                    { title: 'Transparent Approach', desc: 'Clear communication, always' },
                    { title: 'Comprehensive Service', desc: 'Full business solutions' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-lg p-4 shadow-md"
                    >
                      <CheckCircle className="text-green-500 mb-2" size={24} />
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'why-exist' && (
            <motion.div
              key="why-exist"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8 md:p-12 shadow-xl space-y-8">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold"
                >
                  Why We Exist
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-base text-gray-700 leading-relaxed"
                >
                  Every business — whether a growing startup or an established enterprise — faces the same challenges:
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  {[
                    'Navigating regulatory complexity',
                    'Maintaining accurate financial records',
                    'Meeting NRS, VAT, WHT, PAYE and statutory deadlines',
                    'Sustaining efficient, well-designed operational systems',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white" size={14} />
                      </span>
                      <span className="text-base text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary-600"
                >
                  <p className="text-base text-gray-700 leading-relaxed">These challenges can slow you down. But with the right partner, they don't have to.
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="text-base text-gray-700 leading-relaxed"
                >
                  <strong className="text-primary-600">Poder Consulting</strong> was established to give businesses a smooth, reliable and personalised way to manage their financial and compliance obligations. Unlike large institutions that focus on volume, we focus on <em>you</em> — your structure, your industry, your pain points, and your goals.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-6 text-white"
                >
                  <p className="text-base font-semibold leading-relaxed">
                    We take the complexity off your shoulders, allowing you to focus on what truly matters: <span className="underline decoration-white/60">growing your business.</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'who-uses' && (
            <motion.div
              key="who-uses"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {clientTypes.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="text-5xl mb-4"
                    >
                      {client.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{client.title}</h3>
                    <p className="text-gray-600 mb-4">{client.description}</p>
                    <div className="flex items-center gap-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                        className="h-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                      />
                      <span className="text-sm font-semibold text-primary-600 whitespace-nowrap">
                        {client.count} clients
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'testimonials' && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-white to-primary-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Quote className="absolute top-4 right-4 text-primary-200" size={40} />
                    </motion.div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.15 + i * 0.1 }}
                        >
                          <Star className="text-yellow-400 fill-yellow-400" size={18} />
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
