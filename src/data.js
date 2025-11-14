export const SITE = {
  title: "Your Name — Developer Portfolio",
  description: "I build fast, scalable web & AI products using Next.js/React, TypeScript, and cloud-native backends.",
  url: "https://example.com",
  ogImage: "/og.png"
}

export const HERO = {
  name: "Your Name",
  headline: "Hi, I am Your Name. I build fast, scalable web & AI products.",
  subtext: [
    "Full‑stack engineer focused on performance, accessibility, and DX.",
    "I ship production‑ready MVPs, SaaS dashboards, and AI automations fast."
  ],
  cta: [
    { label: "View Projects", href: "#projects" },
    { label: "Book a Call", href: "https://cal.com", external: true }
  ]
}

export const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"] },
  { category: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "GraphQL", "tRPC"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Cloudflare", "Vercel", "CI/CD", "Serverless"] },
  { category: "AI & Automation", items: ["OpenAI", "LangChain", "RAG", "Vector DBs", "LLM Orchestration", "Agents"] }
]

export const PROJECTS = [
  {
    name: "Realtime Analytics Dashboard",
    description: "High‑throughput pipeline with live charts and anomaly alerts.",
    stack: ["Next.js", "ClickHouse", "tRPC", "Tailwind"],
    link: "https://example.com"
  },
  {
    name: "AI Support Copilot",
    description: "Chatbot that summarizes tickets and drafts replies with tone control.",
    stack: ["FastAPI", "OpenAI", "Pinecone", "React"],
    link: "https://example.com"
  },
  {
    name: "SaaS Billing Platform",
    description: "Usage‑based billing with webhooks, dunning, and customer portal.",
    stack: ["Next.js", "Stripe", "Prisma", "Postgres"],
    link: "https://example.com"
  }
]

export const SERVICES = [
  { title: "MVP development", blurb: "From spec to deployed product in weeks, not months." },
  { title: "SaaS dashboards", blurb: "Clean, fast, and extensible admin experiences." },
  { title: "AI chatbots", blurb: "Task‑focused assistants with guardrails and analytics." },
  { title: "AWS serverless backend", blurb: "Scalable APIs with minimal ops overhead." }
]

export const TESTIMONIALS = [
  { quote: "Delivered an incredible MVP under tight deadlines. Performance was outstanding.", author: "Alex M.", role: "Founder, GrowthCo" },
  { quote: "Great communicator and a joy to work with. Our dashboard UX is night and day.", author: "Priya S.", role: "PM, DataWave" },
  { quote: "He turned our fuzzy AI idea into a reliable product our team uses daily.", author: "Diego R.", role: "CTO, Supportly" }
]
