"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Package, Sparkles, Monitor, Briefcase, ArrowRight, CheckCircle2, Menu, X } from 'lucide-react'
import { Card, CardContent } from './components/ui/card'
import { Button } from './components/ui/button'

// Updated features array with premium copy
const features = [
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Curated for Everyday Use",
    text: "Thoughtfully selected tools designed to make daily work, home setups, and small spaces easier to manage."
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Designed for Small Spaces",
    text: "Practical picks for home-based workers and people who need simple, space-saving solutions."
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Simple & Reliable",
    text: "A curated mix of organizers and essentials chosen to solve small daily problems."
  }
]

// Updated products array with premium categories
const products = [
  {
    name: "Desk Organization",
    desc: "Tidy your workspace with smart essentials that keep cables, papers, and tools neatly in place.",
    image: "/images/file-organizer.jpg",
    link: "/products/desk-organizers",
    button: "View Collection"
  },
  {
    name: "Home Organization",
    desc: "Create calm, clutter-free corners in the kitchen, bathroom, and living areas.",
    image: "/images/storage-organizer.jpg", 
    link: "/products/home-organization",
    button: "View Collection"
  },
  {
    name: "Simple Living",
    desc: "Everyday picks that make routines easier without adding more stuff.",
    image: "/images/everyday-tools.jpg",
    link: "/products/simple-living",
    button: "Explore Picks"
  }
]

// Updated reasons array
const reasons = [
  "Simple and practical product choices",
  "Built for everyday use",
  "Suitable for small spaces and daily routines",
  "Helpful for homes, work corners, and busy households"
]

function JuzzStoreLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="4" height="12" fill="currentColor" />
      <rect x="10" y="6" width="4" height="12" fill="currentColor" />
      <rect x="17" y="6" width="4" height="12" fill="currentColor" />
    </svg>
  )
}

export default function JuzzStoreWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header - Updated menu labels */}
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="/" className="flex items-center gap-3">
            <Image 
              src="/logo/juzzstore-logo.png" 
              alt="JuzzStore Logo" 
              width={260} 
              height={80} 
              className="h-14 w-auto" 
              priority 
            />
          </a>
          <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
            <a href="/about" className="transition hover:text-gray-900">About</a>
            <a href="/#features" className="transition hover:text-gray-900">Why JuzzStore</a>
            <a href="/products" className="transition hover:text-gray-900">Shop</a>
            <a href="/contact" className="transition hover:text-gray-900">Contact</a>
          </nav>
          <button 
            type="button" 
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 p-2 text-neutral-700 md:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(open => !open)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm text-neutral-600">
              <a href="/about" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="/#features" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Why JuzzStore</a>
              <a href="/products" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Shop</a>
              <a href="/contact" className="transition hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero - Updated premium copy */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient(circle at top right, rgba(0,0,0,0.06), transparent 30%), radial-gradient(circle at left, rgba(0,0,0,0.04), transparent 25%)" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-neutral-600 shadow-sm">
                Practical tools for everyday use
              </div>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Organize your space. Simplify your day.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
                Thoughtfully selected tools for cleaner desks, calmer homes, and easier everyday routines.
              </p>
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

            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center"
            >
              <div className="grid w-full max-w-xl gap-4 rounded-2rem border border-gray-200 bg-white p-5 shadow-xl shadow-neutral-200/60">
                {/* Your existing demo animation */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Keep your existing demo content */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features section - Updated */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-8">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">Why JuzzStore</div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
              Practical tools designed for real everyday use.
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <Card className="rounded-1.75rem border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{feature.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Category tiles section - New */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-8 text-center">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">Shop by Collection</div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
              Curated essentials for organized living
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden rounded-1.75rem border-gray-200 shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={1200} 
                    height={900}
                    className="h-full w-full object-cover" 
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{product.desc}</p>
                  {product.link ? (
                    <Button 
                      variant="outline" 
                      className="mt-5 rounded-2xl flex items-center gap-2"
                      asChild
                    >
                      <a href={product.link} target={product.link.startsWith('http') ? '_blank' : undefined} rel={product.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {product.button}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" className="mt-5 rounded-2xl opacity-60 cursor-default disabled">
                      {product.button}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Problem/Solution section - Updated */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-2rem border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div className="flex flex-col justify-center">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">A Common Everyday Problem</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Mess and scattered items can make daily work feel harder.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Many people struggle with papers piling up, clutter building up, and limited space at home or work. 
                When everything is scattered, daily tasks feel more tiring and harder to manage.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">Our Solution</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Simple products that help keep everyday things in place.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Juzzstore focuses on practical organizers and useful tools designed to keep documents, daily items, 
                and small essentials neatly arranged so spaces stay cleaner and easier to manage.
              </p>
            </div>
          </div>
        </section>

        {/* Before/After section - Keep existing */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-8 text-center">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">Simple Everyday Transformation</div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
              From cluttered space to a cleaner setup.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-600">
              A simple organizer can make a big difference. Keep papers, tools, and daily essentials in one place 
              so the space feels cleaner and easier to use.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Your existing before/after content */}
          </div>
        </section>

        {/* Brand story section - Updated */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-2rem border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">Our Story</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Built from the need to keep daily spaces simple and practical.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                JuzzStore started from a simple everyday challenge: messy spaces, scattered items, and limited room 
                while running an online business. Over time, it became clear that small practical tools could make a 
                big difference in keeping daily setups more organized and easier to manage.
              </p>
              <p className="mt-4 leading-7 text-neutral-600">
                Instead of complicated systems, JuzzStore focuses on simple, useful solutions that help people work 
                more comfortably and keep their daily environment tidy.
              </p>
            </div>
            <div className="flex items-center justify-center">
              {/* Your existing workflow image */}
            </div>
          </div>
        </section>

        {/* Footer - Keep existing */}
        <footer className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-neutral-500">
            <div className="font-medium text-neutral-700">JuzzStore</div>
            <div className="mt-1">Make it Simple</div>
            <div className="mt-2">Singapore</div>
            <div className="mt-3">
              <a href="/desk-organization-guide" className="text-xs text-neutral-500 hover:text-neutral-800">
                Desk Organization Guide
              </a>
            </div>
            <div className="mt-3 text-xs text-neutral-400">
              © 2026 JuzzStore. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}