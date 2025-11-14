import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="testimonials" ref={ref} className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50"
        >
          Testimonials
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.blockquote
              key={idx}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-5"
            >
              <p className="text-slate-700 dark:text-slate-300">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-slate-500">— {t.author}, {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
