'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const taxItems = [
  { id: 1, title: 'Company Income Tax' },
  { id: 2, title: 'Withholding Tax' },
  { id: 3, title: 'Value Added Tax' },
  { id: 4, title: 'Stamp Duties' },
  { id: 5, title: 'Surcharge' },
  { id: 6, title: 'Development Levy' },
]

// Duplicate for seamless loop
const loopItems = [...taxItems, ...taxItems, ...taxItems]

export default function TaxCarousel() {
  const [selected, setSelected] = useState<(typeof taxItems)[0] | null>(null)
  const [paused, setPaused] = useState(false)

  return (
    <section className="py-10 bg-gradient-to-r from-primary-600 to-accent-600 overflow-hidden">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            ...(paused && { playState: 'paused' }),
          }}
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {loopItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(item)}
              className="flex-shrink-0 bg-white/15 hover:bg-white/30 border border-white/30 text-white font-semibold text-sm md:text-base px-8 py-4 rounded-xl backdrop-blur-sm transition-all hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg"
            >
              {item.title}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X size={22} />
              </button>
              <div className="mb-4 inline-block px-3 py-1 bg-primary-100 rounded-full">
                <span className="text-primary-700 text-xs font-semibold uppercase tracking-wide">Tax Service</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selected.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Content for <strong>{selected.title}</strong> coming soon. Check back for detailed information about this service.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
