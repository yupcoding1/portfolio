"use client"

import { Hero } from "@/components/sections/hero"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Achievements } from "@/components/sections/achievements"
import { Leadership } from "@/components/sections/leadership"
import { Education } from "@/components/sections/education"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useSpring } from "framer-motion"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function Page() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 })

  return (
    <main className="relative min-h-screen bg-white text-slate-900">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-emerald-500/90"
        aria-hidden="true"
      />

      {/* Background decorative blobs */}
      <div aria-hidden="true">
        <div className="pointer-events-none fixed left-[-10%] top-[-10%] z-0 h-[50vh] w-[40vw] rounded-full bg-emerald-200 blur-3xl opacity-30" />
        <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] z-0 h-[55vh] w-[45vw] rounded-full bg-sky-200 blur-3xl opacity-30" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="#hero" className="font-semibold text-slate-900">
            {"<Mohammed />"}
            <span className="sr-only">Go to top</span>
          </Link>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#experience" className="hover:text-slate-900">
              Experience
            </a>
            <a href="#projects" className="hover:text-slate-900">
              Projects
            </a>
            <a href="#skills" className="hover:text-slate-900">
              Skills
            </a>
            <a href="#education" className="hover:text-slate-900">
              Education
            </a>
            <a href="#achievements" className="hover:text-slate-900">
              Achievements
            </a>
            <a href="#leadership" className="hover:text-slate-900">
              Leadership
            </a>
          </nav>
          <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            <a href="mailto:mdhuzefabbasi@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10">
        <section id="hero" className="min-h-[92vh] scroll-mt-24">
          <Hero />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education />
        </section>

        <section id="achievements" className="scroll-mt-24">
          <Achievements />
        </section>

        <section id="leadership" className="scroll-mt-24">
          <Leadership />
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200/70 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-600 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} Mohammed Huzefa Abbasi</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/mohammed-abbasi-a8ab80271/" className="hover:text-slate-900">
              LinkedIn
            </a>
            <a href="https://github.com/yupcoding1" className="hover:text-slate-900">
              GitHub
            </a>
            <a href="mailto:mdhuzefabbasi@gmail.com" className="hover:text-slate-900">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
