'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface HeroProps {}

export default function Hero({}: HeroProps = {}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      type: 'static',
      title: 'Business Growth Made',
      highlight: 'Simple & Strategic',
      description: 'Professional business consulting services with transparent approach. Expert guidance for accounting, tax compliance, payroll, and ERP solutions.',
      features: ['Expert Consultation', 'NRS Compliant', 'Full Business Support'],
    },
    {
      type: 'video',
      title: 'Your Trusted',
      highlight: 'Business Partner',
      description: 'Join hundreds of satisfied businesses who trust us with their growth. NRS compliant and secure business solutions.',
      features: ['500+ Businesses Served', '4.9★ Rating', 'Bank-Level Security'],
      videoUrl: '/videos/hero-video.mp4',
    },
    {
      type: 'gif',
      title: 'Transform Your',
      highlight: 'Business Today',
      description: 'Comprehensive business solutions. From accounting setup to tax compliance - all managed by our expert team.',
      features: ['Quick Onboarding', 'Real-time Support', 'Dedicated Specialist'],
      gifUrl: '/images/Tax Filing.gif',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-3xl opacity-20"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 bg-primary-100 rounded-full"
              >
                <span className="text-primary-700 font-semibold text-sm">🎉 NRS Compliant & Trusted</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {slides[currentSlide].title}{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  {slides[currentSlide].highlight}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#contact" className="btn-primary flex items-center justify-center gap-2 text-lg group">
                  Contact Us Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </a>
                <a href="#services" className="btn-secondary flex items-center justify-center gap-2 text-lg">
                  View Services
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                {slides[currentSlide].features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`visual-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {slides[currentSlide].type === 'static' && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
                >
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Professional Services</div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="text-3xl font-bold text-primary-600 mb-2"
                    >
                      Business Solutions
                    </motion.div>
                    <div className="text-gray-600">Comprehensive consulting services</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {['Dedicated business consultant', 'Accounting & tax compliance', 'NRS submission support', 'Ongoing business guidance'].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="text-2xl font-bold text-gray-900"
                        >
                          500+
                        </motion.div>
                        <div className="text-sm text-gray-600">Businesses Served</div>
                      </div>
                      <div className="border-l border-gray-300 h-12"></div>
                      <div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="text-2xl font-bold text-gray-900"
                        >
                          4.9★
                        </motion.div>
                        <div className="text-sm text-gray-600">Client Rating</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {slides[currentSlide].type === 'video' && (
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                    style={{ maxHeight: '600px' }}
                  >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {slides[currentSlide].type === 'gif' && (
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  <img
                    src="/images/Tax Filing.gif"
                    alt="Tax Filing Process Animation"
                    className="w-full h-auto"
                    style={{ maxHeight: '600px' }}
                  />
                </div>
              )}

              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-3xl opacity-30"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-primary-600" size={24} />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="text-primary-600" size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
