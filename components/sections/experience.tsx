"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { TiltCard } from "@/components/ui/tilt-card"

export function Experience() {
  return (
    <Section label="Experience">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{"Experience"}</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          {
            "Hands-on ML engineering, RAG systems, and end-to-end deployments improving latency, responsiveness, and reliability."
          }
        </p>
      </div>

      <div className="relative">
        {/* Timeline rail re-tinted */}
        <div
          aria-hidden="true"
          className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#0f9ba8] to-[#2e8b57]"
        />
        <div className="space-y-6">
          <TimelineItem
            title="Machine Learning Intern"
            org="Froncort.AI • Pune, India"
            period="Nov 2024 – Mar 2025"
            bullets={[
              "Built production-ready RAG pipeline to query 1K+ medical documents with real-time accuracy.",
              "Integrated LLMs and NLP workflows; improved response latency by 30%.",
              "Led full-stack deployment (React, Node.js, PostgreSQL), enhancing UI responsiveness by 15%.",
            ]}
            tags={["RAG", "LLMs", "PostgreSQL", "React", "Node.js"]}
          />
          <TimelineItem
            title="Research Intern"
            org="Pune Institute of Computer Technology • Pune, India"
            period="Mar 2024 – May 2025"
            bullets={[
              "Developed Vision Transformer models for Diabetic Retinopathy classification.",
              "Increased efficiency by 20% via training on 2,000+ images and model fusion.",
            ]}
            tags={["Vision Transformers", "PyTorch", "Computer Vision"]}
          />
        </div>
      </div>
    </Section>
  )
}

function TimelineItem({
  title,
  org,
  period,
  bullets,
  tags,
}: {
  title: string
  org: string
  period: string
  bullets: string[]
  tags: string[]
}) {
  return (
    <motion.div
      className="relative pl-12"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Marker */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-2 h-3 w-3 -translate-x-1.5 rounded-full border-2 border-white bg-[#0f9ba8] shadow"
      />
      <TiltCard>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <div className="text-xs text-slate-500">{period}</div>
          </div>
          <div className="text-sm text-slate-600">{org}</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md bg-[#2e8b57]/10 px-2 py-1 text-xs text-[#2e8b57] ring-1 ring-[#2e8b57]/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}
