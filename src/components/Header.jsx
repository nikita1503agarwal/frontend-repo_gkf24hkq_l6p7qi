import { Moon, Sun, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem('theme')
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ? stored === 'dark' : preferDark
    root.classList.toggle('dark', initial)
    setIsDark(initial)
  }, [])

  const toggle = () => {
    const root = document.documentElement
    const next = !isDark
    root.classList.toggle('dark', next)
    setIsDark(next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-black/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="font-semibold text-slate-900 dark:text-white">{`<YourName />`}</a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          {links.map(l => <a key={l.href} href={l.href} className="hover:text-slate-900 dark:hover:text-white transition">{l.label}</a>)}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={toggle} className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition">
            {isDark ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
          </button>
          <button className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" onClick={()=>setOpen(v=>!v)}>
            <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-black/50 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-col gap-2">
            {links.map(l => <a key={l.href} href={l.href} className="py-2 text-sm text-slate-700 dark:text-slate-200">{l.label}</a>)}
          </div>
        </div>
      )}
    </header>
  )
}
