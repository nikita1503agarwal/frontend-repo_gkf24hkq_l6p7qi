import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { PROJECTS } from '../data'

function Card({ p }) {
  return (
    <motion.a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group block rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-5 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{p.name}</h3>
        <span className="text-xs text-slate-500">{p.stack.join(' • ')}</span>
      </div>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{p.description}</p>
      <div className="mt-4 text-sm text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition">View case study →</div>
    </motion.a>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50"
        >
          Projects & Case Studies
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
