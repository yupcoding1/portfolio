"use client"

import type React from "react"

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
  useMotionValue,
  useTransform as fmTransform,
} from "framer-motion"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, Database, Mails, ImageIcon, GraduationCap } from "lucide-react"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <div ref={ref} className="relative">
      {/* Parallax decorative orb with the new palette */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-12 top-[-60px] h-40 w-40 rounded-full blur-2xl md:h-56 md:w-56"
        style={{ y, opacity, background: "color(display-p3 0.18 0.62 0.58 / 0.35)" }}
      />
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 md:px-6 md:py-28">
        <Badge className="bg-[#2e8b57]/10 text-[#2e8b57] ring-1 ring-[#2e8b57]/20 hover:bg-[#2e8b57]/15">
          {"AI/ML • Agentic AI • Full-Stack • AI Automation • Software Engineer"}
        </Badge>

        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {"Mohammed Huzefa Abbasi"}
        </motion.h1>

        <motion.p
          className="max-w-2xl text-base text-slate-600 sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {
            "ML Engineer and Full-Stack Developer specializing in Agentic AI, RAG pipelines, and automation using AI. Experienced in building performant, end-to-end web applications and intelligent systems. GPA 9.25 • Winner — BMC AI Hackathon 2025 • Exploring AI red teaming for safety and robustness."
          }
        </motion.p>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild className="bg-[#0f9ba8] hover:bg-[#0d8a96]">
            <a href="https://www.linkedin.com/in/mohammed-abbasi-a8ab80271/" target="_blank" rel="noopener" aria-label="Open LinkedIn profile">
              <Linkedin className="mr-2 h-4 w-4" />
              {"LinkedIn"}
            </a>
          </Button>
          <Button variant="outline" asChild className="border-[#0f9ba8]/30 bg-white text-slate-900 hover:bg-slate-50">
            <a href="https://github.com/yupcoding1" target="_blank" rel="noopener" aria-label="Open GitHub profile">
              <Github className="mr-2 h-4 w-4" />
              {"GitHub"}
            </a>
          </Button>
          <Button variant="ghost" asChild className="text-slate-700 hover:bg-slate-100">
            <a href="mailto:mdhuzefabbasi@gmail.com" aria-label="Email me">
              <Mail className="mr-2 h-4 w-4" />
              {"Email"}
            </a>
          </Button>
        </div>

        {/* REPLACED: the old marquee -> New Highlights strip with animated counters */}
        <HighlightsStrip />

        <div className="mt-8">
          <a href="#projects" className="group inline-flex items-center text-[#0f9ba8] hover:text-[#0d8a96]">
            {"See featured projects"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

function HighlightsStrip() {
  return (
    <div className="mt-6 w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Highlight
          icon={<Database className="h-4 w-4 text-[#0f9ba8]" aria-hidden="true" />}
          label="Docs in RAG"
          to={1000}
          suffix="+"
        />
        <Highlight
          icon={<Mails className="h-4 w-4 text-[#0f9ba8]" aria-hidden="true" />}
          label="Emails automated"
          to={500}
          suffix="+"
        />
        <Highlight
          icon={<ImageIcon className="h-4 w-4 text-[#0f9ba8]" aria-hidden="true" />}
          label="ViT images"
          to={2000}
          suffix="+"
        />
        <StaticHighlight
          icon={<GraduationCap className="h-4 w-4 text-[#0f9ba8]" aria-hidden="true" />}
          label="GPA"
          value="9.25"
        />
      </div>
    </div>
  )
}

function Highlight({
  icon,
  label,
  to = 100,
  suffix = "",
}: { icon: React.ReactNode; label: string; to?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inViewRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(inViewRef, { amount: 0.6 })

  const mv = useMotionValue(0)
  const rounded = fmTransform(mv, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      const controls = animate(mv, to, { duration: 1.2, ease: "easeOut" })
      return () => controls.stop()
    } else {
      mv.set(0)
    }
  }, [isInView, mv, to])

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`
    })
    return () => unsub()
  }, [rounded, suffix])

  return (
    <div ref={inViewRef} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/40 p-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#0f9ba8]/10 to-[#2e8b57]/10">
        {icon}
      </div>
      <div>
        <div className="text-xl font-semibold bg-gradient-to-r from-[#0f9ba8] to-[#2e8b57] bg-clip-text text-transparent">
          <span ref={ref} aria-live="polite" aria-atomic="true">
            {"0"}
          </span>
        </div>
        <div className="text-xs text-slate-600">{label}</div>
      </div>
    </div>
  )
}

function StaticHighlight({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/40 p-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#0f9ba8]/10 to-[#2e8b57]/10">
        {icon}
      </div>
      <div>
        <div className="text-xl font-semibold bg-gradient-to-r from-[#0f9ba8] to-[#2e8b57] bg-clip-text text-transparent">
          {value}
        </div>
        <div className="text-xs text-slate-600">{label}</div>
      </div>
    </div>
  )
}
