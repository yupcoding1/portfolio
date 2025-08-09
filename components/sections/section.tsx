"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({
  children,
  className,
  delay = 0,
  label,
}: {
  children: ReactNode
  className?: string
  delay?: number
  label?: string
}) {
  return (
    <div className={cn("relative w-full py-16 md:py-24", className)} aria-label={label}>
      <motion.div
        className="mx-auto max-w-6xl px-4 md:px-6"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        viewport={{ once: false, amount: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
