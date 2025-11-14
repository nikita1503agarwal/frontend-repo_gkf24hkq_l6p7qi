import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { SERVICES } from '../data'

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="services" ref={ref} className="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50"
        >
          Services
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-5 hover:shadow-lg hover:scale-[1.01] transition"
            >
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">{s.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">{s.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
