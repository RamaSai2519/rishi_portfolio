import Image from "next/image"
import Link from "next/link"
import { DiscIcon as Discord, Twitter, Instagram, Twitch, Send } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/background.jpg" alt="RGV Background" fill priority className="object-cover object-center" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-6 md:p-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/rgv-logo.png" alt="RGV Logo" width={120} height={60} className="h-auto w-24" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="#project" className="text-sm uppercase tracking-widest text-gray-300 hover:text-white">
                  The Project
                </Link>
              </li>
              <li>
                <Link href="#sneak-peek" className="text-sm uppercase tracking-widest text-gray-300 hover:text-white">
                  Sneak Peek
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-sm uppercase tracking-widest text-gray-300 hover:text-white">
                  Road Map
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-sm uppercase tracking-widest text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#join"
                  className="rounded-full bg-white/10 px-6 py-2 text-sm uppercase tracking-widest text-white backdrop-blur-sm hover:bg-white/20"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </header>

        {/* Main Content */}
        <div className="flex-1"></div>

        {/* Social Media Sidebar */}
        <div className="fixed left-4 top-1/2 z-20 -translate-y-1/2 space-y-6">
          <Link href="#" className="block text-white/70 transition-all hover:text-white">
            <Discord className="h-6 w-6" />
          </Link>
          <Link href="#" className="block text-white/70 transition-all hover:text-white">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="block text-white/70 transition-all hover:text-white">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="block text-white/70 transition-all hover:text-white">
            <Twitch className="h-6 w-6" />
          </Link>
          <Link href="#" className="block text-white/70 transition-all hover:text-white">
            <Send className="h-6 w-6" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="fixed bottom-8 right-8 z-20 flex h-20 w-20 items-center justify-center">
          <div className="relative h-full w-full animate-spin-slow">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
                stroke="transparent"
              />
              <text>
                <textPath href="#circle" className="text-[8px] uppercase tracking-[0.3em] text-white/80">
                  Scroll Down • Scroll Down •
                </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L12 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M18 14L12 20L6 14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  )
}
