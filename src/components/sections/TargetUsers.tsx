'use client'

import { motion } from 'framer-motion'
import { Briefcase, Building2, HardHat, Home, TrendingUp, Users } from 'lucide-react'

export default function TargetUsers() {
  const users = [
    { icon: Briefcase, title: 'Self-Employed', description: 'Freelancers & consultants' },
    { icon: Building2, title: 'Company Directors', description: 'Limited company owners' },
    { icon: HardHat, title: 'CIS Subcontractors', description: 'Construction workers' },
    { icon: Home, title: 'Property Landlords', description: 'Rental income earners' },
    { icon: TrendingUp, title: 'Investors', description: 'Capital gains & dividends' },
    { icon: Users, title: 'Partnerships', description: 'Business partners' },
  ]

  return (
    <section id="who-we-help" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Who We Help</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert tax services tailored to your specific needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                <user.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{user.title}</h3>
              <p className="text-gray-600">{user.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
