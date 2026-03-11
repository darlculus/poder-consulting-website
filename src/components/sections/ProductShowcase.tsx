'use client'

import { motion } from 'framer-motion'
import { BarChart3, FileText, MessageCircle, Calendar } from 'lucide-react'

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Your Personal Tax Dashboard
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Track your tax filing progress in real-time. Upload documents, communicate with your specialist, 
              and monitor every step from one simple dashboard.
            </p>

            <div className="space-y-4">
              {[
                { icon: BarChart3, text: 'Real-time filing status' },
                { icon: FileText, text: 'Secure document management' },
                { icon: MessageCircle, text: 'Direct specialist messaging' },
                { icon: Calendar, text: 'Deadline tracking & reminders' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary-600" size={24} />
                  </div>
                  <span className="text-lg text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Tax Return Status</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">In Progress</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Documents Uploaded</span>
                    <span className="font-semibold text-green-600">✓ Complete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Specialist Review</span>
                    <span className="font-semibold text-primary-600">● In Progress</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">HMRC Submission</span>
                    <span className="font-semibold text-gray-400">Pending</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-sm">Documents received</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-sm">Specialist assigned</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
