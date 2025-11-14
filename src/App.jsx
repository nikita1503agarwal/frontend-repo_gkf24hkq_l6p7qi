import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { SITE } from './data'

const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Services = lazy(() => import('./components/Services'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))

function SEO() {
  // In SPA context, inject common SEO tags. For full SSR/Next.js, move to head.
  React.useEffect(() => {
    document.title = SITE.title
    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}='${name}']`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    setMeta('description', SITE.description)
    setMeta('og:title', SITE.title, 'property')
    setMeta('og:description', SITE.description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:image', SITE.ogImage, 'property')
    setMeta('twitter:card', 'summary_large_image')
  }, [])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SEO />
      <Header />
      <main className="pt-14">
        <Hero />
        <Suspense fallback={<section className="py-16 sm:py-24"/>}>
          <Skills />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
