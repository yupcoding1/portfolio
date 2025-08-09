"use client"

import { Section } from "./section"
import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Programming",
    items: [
      { name: "Python", level: 95 },
      { name: "TypeScript/JS", level: 85 },
      { name: "C/C++", level: 70 },
      { name: "SQL", level: 80 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    title: "AI/ML & Data",
    items: [
      { name: "PyTorch", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "Transformers", level: 85 },
      { name: "OpenCV", level: 75 },
      { name: "Vision Transformers", level: 80 },
      { name: "RAG Systems", level: 90 },
    ],
  },
  {
    title: "MLOps & Workflow",
    items: [
      { name: "FastAPI", level: 80 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 65 },
      { name: "Postgres/SQLite", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "n8n", level: 70 },
    ],
  },
  {
    title: "Web & Software",
    items: [
      { name: "React/Next.js", level: 90 },
      { name: "Node/Express", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Git/GitHub", level: 85 },
      { name: "Postman", level: 75 },
      { name: "CMake", level: 60 },
    ],
  },
]

export function Skills() {
  return (
    <Section label="Skills">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Skills</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Broad ML stack with production deployment experience, and modern full-stack development for performant UIs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">{g.title}</h3>
            <div className="space-y-3">
              {g.items.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-slate-700">{s.name}</span>
                    <span className="text-slate-500">{s.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: false, amount: 0.4 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-emerald-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
