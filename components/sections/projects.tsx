"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TiltCard } from "@/components/ui/tilt-card"

type Project = {
  title: string
  desc: string
  tags: string[]
  img: string
  imgAlt: string
  category: "ML" | "NLP" | "Web"
}

const allProjects: Project[] = [
  {
    title: "Image Entity Extraction",
    desc: "Multi-pipeline model over 250K+ training and 150K+ test images using CNN (VGG16), BERT embeddings, and OCR/VLMs to extract entities.",
    tags: ["TensorFlow", "VGG16", "BERT", "OCR", "VLMs"],
    img: "/image-entity-extraction.png",
    imgAlt: "Grid of images with bounding boxes and extracted entities",
    category: "ML",
  },
  {
    title: "Automatic Email Replier (RAG)",
    desc: "Deployed RAG responder with Groq; auto-processed 500+ emails across 3+ types using 1K+ SQLite entries, 96% accuracy.",
    tags: ["Python", "LangChain", "RAG", "Groq", "SQLite"],
    img: "/rag-email-automation.png",
    imgAlt: "Email UI being auto-classified and drafted",
    category: "NLP",
  },
  {
    title: "Keyword Extractor Web App",
    desc: "Flask app for multilingual keyword extraction using KeyBERT, YAKE, RAKE, TextRank with language detection and n-grams.",
    tags: ["Flask", "NLTK", "KeyBERT", "YAKE", "RAKE"],
    img: "/multilingual-keyword-extraction.png",
    imgAlt: "Keyword extraction interface with results",
    category: "NLP",
  },
  {
    title: "PICTMUN Website + Chit System",
    desc: "Led a 5+ member team building and deploying a 5+ page website and a real-time digital chit-passing system, cutting delays by 70%.",
    tags: ["Next.js", "Neon", "Node", "Tailwind"],
    img: "/nextjs-event-website-realtime.png",
    imgAlt: "Event website layout with live chit system",
    category: "Web",
  },
]

const filters = ["All", "ML", "NLP", "Web"] as const
type Filter = (typeof filters)[number]

export function Projects() {
  const [active, setActive] = useState<Filter>("All")
  const projects = useMemo(
    () => (active === "All" ? allProjects : allProjects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section aria-label="Projects" className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{"Projects"}</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            {
              "Selected work across ML, NLP, RAG systems, and full-stack engineering focused on practical impact and scale."
            }
          </p>
        </div>

        {/* Reactive filter bar */}
        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = active === f
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={[
                  "rounded-full px-3 py-1 text-sm transition",
                  isActive
                    ? "bg-gradient-to-r from-[#0f9ba8] to-[#2e8b57] text-white shadow"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-[#0f9ba8]/40",
                ].join(" ")}
                aria-pressed={isActive}
              >
                {f}
              </button>
            )
          })}
        </div>

        {/* Animated, interactive grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.35 }}
              >
                <TiltCard intensity={12} className="will-change-transform">
                  <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-[#0f9ba8]/40">
                    <div className="overflow-hidden">
                      <img
                        src={p.img || "/placeholder.svg"}
                        alt={p.imgAlt}
                        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                      <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 ring-1 ring-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
