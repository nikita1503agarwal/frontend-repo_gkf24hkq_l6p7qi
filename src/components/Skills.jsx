import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { SKILLS } from '../data'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50"
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((group) => (
            <motion.div
              key={group.category}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-5"
            >
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
