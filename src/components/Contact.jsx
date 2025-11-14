import { useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  function validate() {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.'
    if (form.message.trim().length < 10) return 'Message should be at least 10 characters.'
    return ''
  }

  async function onSubmit(e) {
    e.preventDefault()
    const err = validate()
    if (err) { setStatus(err); return }
    setStatus('Sending...')
    await new Promise(r => setTimeout(r, 600))
    setStatus('Thanks! I will get back to you shortly.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={onSubmit} className="lg:col-span-2 grid grid-cols-1 gap-4">
            <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
            <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
            <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Message" rows={5} className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
            <button className="inline-flex justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:shadow hover:scale-[1.01] transition">Send</button>
            {status && <p className="text-sm text-slate-600 dark:text-slate-300">{status}</p>}
          </form>

          <div className="flex items-start gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"><Github className="h-5 w-5"/> GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"><Linkedin className="h-5 w-5"/> LinkedIn</a>
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"><Mail className="h-5 w-5"/> Email</a>
          </div>
        </div>
      </div>
    </section>
  )
}
