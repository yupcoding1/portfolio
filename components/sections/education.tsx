"use client"

import { Section } from "./section"

export function Education() {
  return (
    <Section label="Education">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Education</h2>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
        <div className="text-lg font-medium text-slate-900">Pune Institute of Computer Technology — Pune, India</div>
        <div className="text-sm text-slate-600">
          Electronics and Telecommunications, Honours in AI-ML • GPA: 9.25 • Dec 2022 – Jun 2026
        </div>
      </div>
    </Section>
  )
}
