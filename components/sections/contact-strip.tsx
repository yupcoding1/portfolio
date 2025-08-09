"use client"

import { Mail, Phone } from "lucide-react"

export function ContactStrip() {
  return (
    <div className="pointer-events-auto fixed bottom-3 right-3 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur md:bottom-6 md:right-6">
      <a href="mailto:mdhuzefabbasi@gmail.com" className="flex items-center gap-1 hover:text-white">
        <Mail className="h-3.5 w-3.5" />
        {"mdhuzefabbasi@gmail.com"}
      </a>
      <span className="text-white/30">{"•"}</span>
      <a href="tel:+918767474441" className="flex items-center gap-1 hover:text-white" aria-label="Call 8767474441">
        <Phone className="h-3.5 w-3.5" />
        {"+91 8767474441"}
      </a>
    </div>
  )
}
