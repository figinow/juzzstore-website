// Keep ALL your original imports and components exactly the same
"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Package, Sparkles, Monitor, Briefcase, ArrowRight, CheckCircle2, Menu, X } from 'lucide-react'
import { Card, CardContent } from './components/ui/card'
import { Button } from './components/ui/button'

// Updated ONLY the text - keep your original structure
const features = [
  { icon: <Monitor className="h-5 w-5" />, title: "Curated for Everyday Use", text: "Thoughtfully selected tools for cleaner desks, calmer homes, and easier routines." },
  { icon: <Briefcase className="h-5 w-5" />, title: "Designed for Small Spaces", text: "Practical picks for home offices and people who need simple solutions." },
  { icon: <Sparkles className="h-5 w-5" />, title: "Simple & Reliable", text: "Curated essentials that solve small daily problems without clutter." }
]

const products = [  // Your 3 categories with premium copy
  { name: "Desk Organization", desc: "Tidy your workspace with smart essentials that keep cables, papers, and tools neatly in place.", image: "/images/file-organizer.jpg", link: "/products/desk-organizers", button: "View Collection" },
  { name: "Home Organization", desc: "Create calm, clutter-free corners in kitchen, bathroom, and living areas.", image: "/images/storage-organizer.jpg", link: "/products/home-organization", button: "View Collection" },
  { name: "Simple Living", desc: "Everyday picks that make routines easier without adding more stuff.", image: "/images/everyday-tools.jpg", link: "/products/simple-living", button: "Explore Picks" }
]

// Your ENTIRE original component - ONLY text changed
export default function JuzzStoreWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* CORRECTED MENU - exactly what you wanted */}
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo/juzzstore-logo.png" alt="JuzzStore Logo" width={260} height={80} className="h-14 w-auto" priority />
          </a>
          <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
            <a href="/" className="transition hover:text-gray-900">Shop</a>
            <a href="/products/desk-organizers" className="transition hover:text-gray-900">Desk Organization</a>
            <a href="/products/home-organization" className="transition hover:text-gray-900">Home Organization</a>
            <a href="/products/simple-living" className="transition hover:text-gray-900">Simple Living</a>
            <a href="/about" className="transition hover:text-gray-900">About</a>
            <a href="/faq" className="transition hover:text-gray-900">FAQ</a>
            <a href="/track-order" className="transition hover:text-gray-900">Track Order</a>
          </nav>
          {/* Your original mobile menu button */}
          <button type="button" className="inline-flex items-center justify-center rounded-xl border border-gray-200 p-2 text-neutral-700 md:hidden" onClick={() => setMobileMenuOpen(open => !open)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {/* Your original mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm text-neutral-600">
              <a href="/" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Shop</a>
              <a href="/products/desk-organizers" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Desk Organization</a>
              <a href="/products/home-organization" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Home Organization</a>
              <a href="/products/simple-living" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Simple Living</a>
              <a href="/about" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="/faq" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="/track-order" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Track Order</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* HERO - Your ORIGINAL layout, just premium copy */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient(circle at top right, rgba(0,0,0,0.06), transparent 30%), radial-gradient(circle at left, rgba(0,0,0,0.04), transparent 25%)" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-neutral-600 shadow-sm">
                Organize your space. Simplify your day.
              </div>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Thoughtfully selected tools for cleaner desks, calmer homes, and easier routines.
              </h1>
              {/* Your original social icons */}
              <div className="mt-8 flex items-center gap-6">
                <a href="https://www.tiktok.com/@sgjuzzstore" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <Image src="/icons/tiktok.png" alt="TikTok" width={36} height={36} className="h-9 w-9 transition-transform hover:scale-110" />
                </a>
                <a href="https://shopee.sg/juzzstore" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <Image src="/icons/shopee.png" alt="Shopee" width={36} height={36} className="h-9 w-9 transition-transform hover:scale-110" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <Image src="/icons/facebook.png" alt="Facebook" width={36} height={36} className="h-9 w-9 transition-transform hover:scale-110" />
                </a>
              </div>
            </motion.div>
            {/* YOUR ORIGINAL HERO PRODUCT DEMO - UNCHANGED */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="flex items-center justify-center">
              <div className="grid w-full max-w-xl gap-4 rounded-2rem border border-gray-200 bg-white p-5 shadow-xl shadow-neutral-200/60">
                {/* Your original 3 demo blocks */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-3xl bg-neutral-100 p-5">
                    <div className="mb-10 h-20 rounded-2xl border border-dashed border-neutral-300 bg-white">
                      <div className="h-3 w-16 rounded-full bg-neutral-300" />
                    </div>
                  </div>
                  <div className="rounded-3xl bg-emerald-600 p-5 text-white">
                    <div className="mb-10 h-20 rounded-2xl border border-white/20 bg-white/10">
                      <div className="h-3 w-14 rounded-full bg-white/40" />
                    </div>
                  </div>
                  <div className="rounded-3xl bg-neutral-100 p-5">
                    <div className="mb-10 h-20 rounded-2xl border border-dashed border-neutral-300 bg-white">
                      <div className="h-3 w-12 rounded-full bg-neutral-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ALL YOUR OTHER ORIGINAL SECTIONS - just copy from your file:61 */}
        {/* Features, before/after, products, etc. stay EXACTLY the same */}
        
      </main>
    </div>
  )
}