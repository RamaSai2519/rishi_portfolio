"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 p-8 backdrop-blur-sm">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center">
            <ul className="flex flex-col items-center gap-8">
              <li>
                <Link
                  href="#project"
                  className="text-xl uppercase tracking-widest text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  The Project
                </Link>
              </li>
              <li>
                <Link
                  href="#sneak-peek"
                  className="text-xl uppercase tracking-widest text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Sneak Peek
                </Link>
              </li>
              <li>
                <Link
                  href="#roadmap"
                  className="text-xl uppercase tracking-widest text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Road Map
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="text-xl uppercase tracking-widest text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#join"
                  className="rounded-full bg-white/10 px-8 py-3 text-xl uppercase tracking-widest text-white backdrop-blur-sm hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
