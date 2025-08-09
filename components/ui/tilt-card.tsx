"use client"

import type React from "react"

import { useMotionValue, useTransform, motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function TiltCard({
  children,
  className,
  intensity = 20,
}: {
  children: ReactNode
  className?: string
  intensity?: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  return (
    <motion.div
      className={cn("group relative will-change-transform [perspective:1000px]", className)}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  )
}
