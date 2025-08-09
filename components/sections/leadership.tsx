"use client"

import { Section } from "./section"
import { motion } from "framer-motion"

export function Leadership() {
  const cards = [
    {
      title: "Chief Strategy Officer",
      subtitle: "PICT MUN • Mar 2024 – Apr 2025",
      bullets: [
        "Led 12 heads and 50+ juniors, ensuring successful conference operations.",
        "Oversaw 6 UN Committees and 1 Indian Committee execution.",
      ],
    },
    {
      title: "Technical Head",
      subtitle: "PICT MUN • Mar 2024 – Apr 2025",
      bullets: [
        "Led website development, chit system, and club technical features.",
        "Delivered real-time digital chit passing to reduce delays by 70%.",
      ],
    },
    {
      title: "Active Member",
      subtitle: "PICT ACM • Nov 2022 – Present",
      bullets: [
        "Actively contributed and played a key role in the organization and successful execution of the Pulzion Events.",
        "Contributed in the Technical, Marketing, Publicity, Social Media and Design teams of the club.",
      ],
    },
  ]
  return (
    <Section label="Leadership">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Leadership</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Driving teams and delivering outcomes at PICT MUN through strategy, operations, and technical initiatives.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
            <div className="text-xs text-slate-500">{c.subtitle}</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
