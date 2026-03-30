'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Monitor,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Layers3,
  House,
  PackageCheck,
} from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';

const features = [
  {
    icon: <Monitor className="h-5 w-5" />,
    title: 'Made for Real-Life Clutter',
    text: 'From papers on the desk to daily items with no proper place, JuzzStore focuses on organizers that solve visible everyday mess.',
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: 'Helpful for Small Spaces',
    text: 'Practical organization tools for home offices, work corners, compact homes, and people who want things to feel easier to manage.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Simple, Useful, Practical',
    text: 'No overcomplicated systems. Just useful organizers and everyday solutions that help your space feel cleaner and calmer.',
  },
];

const categories = [
  {
    name: 'Desk Organization',
    desc: 'File organizers, document holders, and desk essentials that help keep your workspace clear and easier to manage.',
    image: '/images/file-organizer.jpg',
    link: '/products/desk-organizers',
    button: 'Explore Desk Organization',
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    name: 'Home Organization',
    desc: 'Storage picks for everyday corners that need a better system, from shared spaces to daily-use areas at home.',
    image: '/images/storage-organizer.jpg',
    link: '/products/home-organization',
    button: 'Explore Home Organization',
    icon: <House className="h-5 w-5" />,
  },
  {
    name: 'Simple Living',
    desc: 'Useful organization tools that make daily routines feel tidier, smoother, and easier without adding more clutter.',
    image: '/images/everyday-tools.jpg',
    link: '/products/simple-living',
    button: 'Explore Simple Living',
    icon: <PackageCheck className="h-5 w-5" />,
  },
];

const principles = [
  'Reduce visible clutter',
  'Use space better',
  'Keep daily things easy to find',
  'Make your setup easier to maintain',
];

function HeroPanel() {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl shadow-neutral-200/60">
      <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-gray-200 bg-neutral-100 md:border-b-0 md:border-r">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/messy-desk.jpg"
              alt="Messy desk with papers and scattered items"
              className="h-full w-full object-cover"
              width={1200}
              height={900}
            />
          </div>
          <div className="px-5 py-4">
            <div className="text-sm font-semibold text-red-500">Before</div>
            <p className="mt-1 text-sm leading-6 text-neutral-600">
              Papers stack up, small items spread out, and the space starts to feel harder to manage.
            </p>
          </div>
        </div>

        <div className="bg-white">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/organized-desk.jpg"
              alt="Organized desk with cleaner setup"
              className="h-full w-full object-cover"
              width={1200}
              height={900}
            />
          </div>
          <div className="px-5 py-4">
            <div className="text-sm font-semibold text-emerald-600">After</div>
            <p className="mt-1 text-sm leading-6 text-neutral-600">
              A better setup helps keep things visible, in place, and easier to handle every day.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50 p-5">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-700">
          <Sparkles className="h-4 w-4" />
          What JuzzStore helps with
        </div>
        <div className="grid gap-3">
          {principles.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm"
            >
              <span className="text-sm text-neutral-700">{item}</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function JuzzStoreWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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
            <a href="/" className="transition hover:text-gray-900">
              Home
            </a>
            <a href="/products/desk-organizers" className="transition hover:text-gray-900">
              Desk Organization
            </a>
            <a href="/products/home-organization" className="transition hover:text-gray-900">
              Home Organization
            </a>
            <a href="/products/simple-living" className="transition hover:text-gray-900">
              Simple Living
            </a>
            <a href="/about" className="transition hover:text-gray-900">
              About
            </a>
            <a href="/faq" className="transition hover:text-gray-900">
              FAQ
            </a>
            <a href="/track-order" className="transition hover:text-gray-900">
              Track Order
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 p-2 text-neutral-700 md:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm text-neutral-600">
              <a href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <a href="/products/desk-organizers" onClick={() => setMobileMenuOpen(false)}>
                Desk Organization
              </a>
              <a href="/products/home-organization" onClick={() => setMobileMenuOpen(false)}>
                Home Organization
              </a>
              <a href="/products/simple-living" onClick={() => setMobileMenuOpen(false)}>
                Simple Living
              </a>
              <a href="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="/faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <a href="/track-order" onClick={() => setMobileMenuOpen(false)}>
                Track Order
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),_transparent_30%),radial-gradient(circle_at_left,_rgba(0,0,0,0.04),_transparent_25%)]" />

          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm text-neutral-600 shadow-sm">
                Organization tools for everyday spaces
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Clear space.
                <br />
                Make daily life easier.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
                JuzzStore is built around practical organization tools that help reduce clutter,
                improve focus, and make desks, homes, and everyday setups easier to manage.
              </p>

<div className="mt-8">
  <button
    onClick={() => {
      categoriesRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }}
    className="rounded-2xl bg-black px-6 py-4 text-sm font-medium text-white hover:opacity-90"
  >
    Explore Organization Solutions
  </button>
</div>
              <div className="mt-8 flex items-center gap-6">
                <a
                  href="https://www.tiktok.com/@sgjuzzstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Image
                    src="/icons/tiktok.png"
                    alt="TikTok"
                    className="h-9 w-9 transition-transform hover:scale-110"
                    width={36}
                    height={36}
                  />
                </a>

                <a
                  href="https://shopee.sg/juzzstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Image
                    src="/icons/shopee.png"
                    alt="Shopee"
                    className="h-9 w-9 transition-transform hover:scale-110"
                    width={36}
                    height={36}
                  />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Image
                    src="/icons/facebook.png"
                    alt="Facebook"
                    className="h-9 w-9 transition-transform hover:scale-110"
                    width={36}
                    height={36}
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center"
            >
              <HeroPanel />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="grid gap-6 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div>
              <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                About JuzzStore
              </div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                An organization-focused brand for people who want their space to feel simpler,
                clearer, and easier to manage.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                JuzzStore focuses on organizer solutions for desks, homes, and daily routines. The
                goal is not to sell random products, but to offer practical tools that help people
                create better systems for everyday life.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-emerald-600 p-6 text-white shadow-lg">
              <div className="text-sm text-white/70">What we believe</div>
              <div className="mt-3 text-2xl font-semibold">
                A clearer space can make daily life feel lighter.
              </div>
              <p className="mt-4 text-sm leading-6 text-white/80">
                Small improvements in how things are stored, sorted, and placed can make workspaces,
                corners, and routines easier to keep up with every day.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div className="flex flex-col justify-center">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                The Everyday Problem
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                It is not always a big mess. Things just slowly pile up.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Papers you still need. Daily-use items with no proper place. Small spaces that start
                off neat, then slowly become harder to manage. Not enough to fix urgently, but
                enough to feel distracting.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
                The JuzzStore Approach
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Use better organization, not more effort.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                JuzzStore focuses on organizers that help make things easier to see, easier to
                reach, and easier to keep in place so your setup stays cleaner without needing a
                complicated system.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-8">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
              Why JuzzStore
            </div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
              Practical organizers designed for real daily use.
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
                <Card className="rounded-[1.75rem] border-gray-200 shadow-sm">
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

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-10">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                The JuzzStore Organization System
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                A simpler way to organize everyday spaces.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Our direction is simple: use practical organization tools that help you manage
                clutter in a way that feels easier to maintain.
              </p>
            </div>

            <div className="grid gap-4">
              {principles.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div className="flex items-center justify-center">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100">
                <Image
                  src="/images/file-organizer.jpg"
                  alt="Desk file organizer product"
                  className="h-full w-full object-cover"
                  width={1200}
                  height={900}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
                Featured Organizer
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Desk File Organizer for a cleaner workspace
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                A practical desk organizer for documents, notes, and folders that helps keep your
                workspace clear, visible, and easier to manage day to day.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li>• Keeps papers and documents neatly arranged</li>
                <li>• Helps save desk space</li>
                <li>• Makes important items easier to see and reach</li>
                <li>• Suitable for small work areas and home setups</li>
              </ul>

              <div className="mt-8">
                <a href="/products/desk-organizers/desk-file-organizer">
                  <Button className="rounded-2xl px-6 py-6 text-sm font-medium">
                    View Product
                  </Button>
                </a>
              </div>
            </div>
          </div>
        <section
  id="categories"
  ref={categoriesRef}
  className="scroll-mt-28 mx-auto max-w-7xl px-6 py-12 md:py-16"
>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Browse by Category
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Organization solutions for different everyday spaces.
              </h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="overflow-hidden rounded-[1.75rem] border-gray-200 shadow-sm"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover"
                    width={1200}
                    height={900}
                  />
                </div>

                <CardContent className="p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{category.name}</h4>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{category.desc}</p>
                  <a href={category.link}>
                    <Button variant="outline" className="mt-5 flex items-center gap-2 rounded-2xl">
                      {category.button}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Our Story
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Built from the need to keep everyday spaces simpler and easier to manage.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                JuzzStore started from a simple everyday challenge: papers piling up, items getting
                scattered, and limited space making daily setups feel harder to manage.
              </p>
              <p className="mt-4 leading-7 text-neutral-600">
                Over time, it became clear that practical organizers and useful storage tools can
                make a real difference. That is why JuzzStore focuses on organization products that
                support cleaner desks, calmer spaces, and easier routines.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100">
                <Image
                  src="/images/workflow-sketch.jpg"
                  alt="JuzzStore workflow sketch showing messy desk to organized workspace idea"
                  className="h-full w-full object-cover"
                  width={1200}
                  height={900}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="rounded-[2rem] bg-emerald-600 px-8 py-10 text-white shadow-xl md:px-10 md:py-12">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                Stay connected
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
                Follow JuzzStore for practical organizer ideas, useful product finds, and simple
                ways to keep everyday spaces in better order.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
                Follow JuzzStore across our marketplaces and social channels where we share useful
                organizers, product ideas, and simple everyday solutions.
              </p>

              <div className="mt-8 flex items-center gap-8">
                <a href="mailto:support@juzzstore.com" className="hover:opacity-90">
                  <Image
                    src="/icons/email.png"
                    alt="Email"
                    className="h-9 w-9 transition-transform hover:scale-110"
                    width={36}
                    height={36}
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@sgjuzzstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90"
                >
                  <Image
                    src="/icons/tiktok.png"
                    alt="TikTok"
                    className="h-9 w-9 transition-transform hover:scale-110"
                    width={36}
                    height={36}
                  />
                </a>

                <a
                  href="https://shopee.sg/juzzstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90"
                >
                  <Image
                    src="/icons/shopee.png"
                    alt="Shopee"
                    className="h-9 w-9 transition-transform hover:scale-110"
                    width={36}
                    height={36}
                  />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90"
                >
                  <Image
                    src="/icons/facebook.png"
                    alt="Facebook"
                    className="h-9 w-9 transition-transform hover:scale-110"
                    width={36}
                    height={36}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="mx-auto max-w-7xl px-6 pb-4 text-center text-xs text-neutral-400">
        JuzzStore offers desk organizers, home organization tools, and simple everyday solutions
        designed to help keep spaces clear, practical, and easier to manage.
      </div>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-neutral-500">
          <div className="font-medium text-neutral-700">JuzzStore</div>
          <div className="mt-1">Make it Simple</div>
          <div className="mt-2">Singapore</div>
          <div className="mt-3">
            <a
              href="/desk-organization-guide"
              className="text-xs text-neutral-500 hover:text-neutral-800"
            >
              Desk Organization Guide
            </a>
          </div>
          <div className="mt-3 text-xs text-neutral-400">© 2026 JuzzStore. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}