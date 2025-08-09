"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

export function Achievements() {
  const items = [
    "9.0+ CGPA, top 5% of batch.",
    "Winner of BMC AI Hackathon 2025.",
    "Top 150 in National Amazon AI Challenge 2024.",
  ]
  return (
    <Section label="Achievements">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Achievements</h2>
        <p className="mt-2 max-w-2xl text-slate-600">Recognitions in academics and AI competitions.</p>
      </div>

      <ul className="space-y-3">
        {items.map((text, i) => (
          <motion.li
            key={text}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Trophy className="mt-0.5 h-5 w-5 text-emerald-600" />
            <div className="text-slate-700">{text}</div>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
