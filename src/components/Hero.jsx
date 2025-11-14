import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import { HERO } from '../data'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="hero" className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 to-white dark:from-black/60 dark:to-black" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24 w-full">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">{HERO.name}</p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold leading-tight text-slate-900 dark:text-slate-50">
            {HERO.headline}
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {HERO.subtext[0]}
            <br />
            {HERO.subtext[1]}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={HERO.cta[0].href} className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:shadow-lg hover:scale-[1.02] transition">
              {HERO.cta[0].label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href={HERO.cta[1].href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-5 py-3 text-sm font-medium hover:shadow transition">
              <Calendar className="mr-2 h-4 w-4" />
              {HERO.cta[1].label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
