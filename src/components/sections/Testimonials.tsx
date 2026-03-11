'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Self-Employed Consultant',
      rating: 5,
      text: 'Poder Consulting made my tax return incredibly simple. My specialist was knowledgeable and responsive. Highly recommend!',
    },
    {
      name: 'James Thompson',
      role: 'Property Landlord',
      rating: 5,
      text: 'Best tax service I\'ve used. Transparent pricing, fast turnaround, and excellent communication throughout the process.',
    },
    {
      name: 'Emily Chen',
      role: 'Company Director',
      rating: 5,
      text: 'Professional service from start to finish. They handled my complex tax situation with expertise and care.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their taxes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 text-primary-200" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>

              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <Star className="text-yellow-400 fill-yellow-400" size={24} />
            <span className="font-bold text-2xl">4.9</span>
            <span className="text-gray-600">out of 5 based on 2,000+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
