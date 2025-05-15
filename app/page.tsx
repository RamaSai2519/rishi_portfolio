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
            <h1 className="text-2xl font-bold text-white">
              RISHI
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="#project" className="text-sm uppercase tracking-widest text-gray-300 hover:text-white">
                  The Project
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </header>

        {/* Social Media Sidebar */}
        <div className="fixed top-0 z-10 flex h-screen flex-col justify-center space-y-10 border-r-2 border-white p-4 bg-white/10 backdrop-blur-md">
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
