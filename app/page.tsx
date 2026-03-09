'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Sparkles, Monitor, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';

const features = [
  {
    icon: <Monitor className="h-5 w-5" />,
    title: 'Practical Everyday Use',
    text: 'Useful tools designed to make daily work, home setups, and small spaces easier to manage.',
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: 'Small Business Friendly',
    text: 'Helpful picks for sellers, home-based workers, and people who need simple everyday solutions.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Simple Useful Finds',
    text: 'A growing mix of organizers, gadgets, and practical items chosen to solve small daily problems.',
  },
];

const products = [
  {
    name: 'Desk File Organizer',
    desc: 'A compact organizer for documents, papers, and notes to keep your table looking clean and easier to manage.',
    image: '/images/file-organizer.jpg',
    link: '#',
    button: 'Coming Soon',
  },
  {
    name: 'Movable Side Organizer',
    desc: 'A larger organizer with more storage space for side-table use, suitable for home setups, work corners, or small business use.',
    image: '/images/side-organizer.jpg',
    link: '#',
    button: 'Coming Soon',
  },
  {
    name: 'Useful Everyday Picks',
    desc: 'Curated practical items that help make daily tasks, small spaces, and work areas easier to handle.',
    image: '/images/everyday-tools.jpg',
    link: 'https://collshp.com/figinow?view=storefront',
    button: 'Explore Picks',
  },
];

const reasons = [
  'Simple and practical product choices',
  'Built for everyday use',
  'Suitable for small spaces and daily routines',
  'Helpful for homes, work corners, sellers, and busy households',
];

function JuzzStoreLogo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3" y="6" width="4" height="12" fill="currentColor" />
      <rect x="10" y="6" width="4" height="12" fill="currentColor" />
      <rect x="17" y="6" width="4" height="12" fill="currentColor" />
    </svg>
  );
}

export default function JuzzStoreWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
              <JuzzStoreLogo />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">JuzzStore</div>
              <div className="text-xs text-neutral-500">Make it Simple</div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
            <a href="#about" className="transition hover:text-gray-900">
              About
            </a>
            <a href="#features" className="transition hover:text-gray-900">
              Why JuzzStore
            </a>
            <a href="#products" className="transition hover:text-gray-900">
              Products
            </a>
            <a href="#contact" className="transition hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,0,0,0.06),_transparent_30%),radial-gradient(circle_at_left,_rgba(0,0,0,0.04),_transparent_25%)]" />
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
                Practical everyday tools that help make work, home, and daily tasks easier.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
                JuzzStore offers practical everyday tools, simple organizers, and useful gadgets designed to solve small daily problems and make everyday routines easier to manage.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <a href="https://www.tiktok.com/@sgjuzzstore" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <img src="/icons/tiktok.png" alt="TikTok" className="h-9 w-9 transition-transform hover:scale-110" />
                </a>

                <a href="https://shopee.sg/juzzstore" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <img src="/icons/shopee.png" alt="Shopee" className="h-9 w-9 transition-transform hover:scale-110" />
                </a>

                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <img src="/icons/facebook.png" alt="Facebook" className="h-9 w-9 transition-transform hover:scale-110" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center"
            >
              <div className="grid w-full max-w-xl gap-4 rounded-[2rem] border border-gray-200 bg-white p-5 shadow-xl shadow-neutral-200/60">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-3xl bg-neutral-100 p-5">
                    <div className="mb-10 h-20 rounded-2xl border border-dashed border-neutral-300 bg-white" />
                    <div className="h-3 w-16 rounded-full bg-neutral-300" />
                  </div>
                  <div className="rounded-3xl bg-emerald-600 p-5 text-white">
                    <div className="mb-10 h-20 rounded-2xl border border-white/20 bg-white/10" />
                    <div className="h-3 w-14 rounded-full bg-white/40" />
                  </div>
                  <div className="rounded-3xl bg-neutral-100 p-5">
                    <div className="mb-10 h-20 rounded-2xl border border-dashed border-neutral-300 bg-white" />
                    <div className="h-3 w-12 rounded-full bg-neutral-300" />
                  </div>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                  <div className="mb-4 flex items-center gap-3 text-sm font-medium text-neutral-700">
                    <Package className="h-4 w-4" />
                    Useful everyday solutions
                  </div>
                  <div className="grid gap-3">
                    {['File organizers', 'Everyday organizers', 'Useful compact tools'].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm"
                      >
                        <span className="text-sm text-neutral-700">{item}</span>
                        <CheckCircle2 className="h-4 w-4 text-neutral-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="grid gap-6 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div>
              <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                About JuzzStore
              </div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                Useful products for people who want everyday things to feel simpler and easier.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                JuzzStore is built around practical everyday solutions, with a current focus on organizers, useful tools, and simple products that support home setups, daily tasks, and small business routines.
          </div>
            <div className="rounded-[1.5rem] bg-emerald-600 p-6 text-white shadow-lg">
              <div className="text-sm text-white/70">Our focus</div>
              <div className="mt-3 text-2xl font-semibold">
                Simple products that solve visible daily problems.
              </div>
              <p className="mt-4 text-sm leading-6 text-white/75">
                From cluttered corners to everyday mess, JuzzStore focuses on practical improvements that make small spaces and daily routines easier to manage.
          </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-8">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
              Why JuzzStore
            </div>
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
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div className="flex flex-col justify-center">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                A Common Everyday Problem
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Mess and scattered items can make daily work feel harder.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Many people struggle with papers piling up, clutter building up, and limited space at home or work. When everything is scattered, daily tasks feel more tiring and harder to manage.
          </div>
            <div className="flex flex-col justify-center">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
                Our Solution
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Simple products that help keep everyday things in place.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                JuzzStore focuses on practical organizers and useful tools designed to keep documents, daily items, and small essentials neatly arranged so spaces stay cleaner and easier to manage.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-8 text-center">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
              Simple Everyday Transformation
            </div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
              From cluttered space to a cleaner setup.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-600">
              A simple organizer can make a big difference. Keep papers, tools, and daily essentials in one place so the space feels cleaner and easier to use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-sm font-semibold text-red-500">Before</div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
                <img src="/images/messy-desk.jpg" alt="Messy desk with scattered papers" className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 text-sm text-neutral-600">
                Papers pile up, documents get lost, and the desk feels stressful to work on.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-sm font-semibold text-emerald-600">After</div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
                <img src="/images/organized-desk.jpg" alt="Organized desk using file organizer" className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 text-sm text-neutral-600">
                Documents are neatly arranged, the workspace looks cleaner, and everything is easier
                to find.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div className="flex items-center justify-center">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100">
                <img src="/images/file-organizer.jpg" alt="File organizer product" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
                Recommended Workspace Pick
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                The Simple File Organizer for Everyday Use
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Designed for desks, home corners, and daily use, this file organizer helps keep documents, notes, and folders neatly arranged so the space stays clean and easier to manage.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li>• Keeps documents organized and visible</li>
                <li>• Saves desk space</li>
                <li>• Ideal for home use, small work areas, and simple setups</li>
                <li>• Helps maintain a cleaner desk setup</li>
              </ul>

              <div className="mt-8">
                <a href="#products"><Button className="rounded-2xl px-6 py-6 text-sm font-medium">View Product</Button></a>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Featured Direction
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Product categories for practical everyday use.
              </h3>
            </div>
            
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden rounded-[1.75rem] border-gray-200 shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{product.desc}</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="mt-5 rounded-2xl flex items-center gap-2">
                      {product.button}
                      {product.link !== '#' && <ArrowRight className="h-4 w-4" />}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-10">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Why customers may choose us
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                A practical brand for useful, simple everyday solutions.
              </h3>
            </div>
            <div className="grid gap-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-neutral-500" />
                  <span className="text-sm text-neutral-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Our Story
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Built from the need to keep daily spaces simple and practical.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                JuzzStore started from a simple everyday challenge — messy spaces, scattered items, and limited room while running an online business. Over time, it became clear that small practical tools could make a big difference in keeping daily setups more organized and easier to manage.
              </p>
              <p className="mt-4 leading-7 text-neutral-600">
                Instead of complicated systems, JuzzStore focuses on simple, useful solutions that
                help people work more comfortably and keep their daily environment tidy.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full overflow-hidden rounded-3xl bg-neutral-100">
                <img
                  src="/images/workflow-sketch.jpg"
                  alt="JuzzStore workflow sketch showing messy desk to organized workspace idea"
                  className="w-full h-[320px] object-cover"
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
                Follow JuzzStore for practical everyday ideas, useful product finds, and simple solutions that make daily life easier.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
                Follow JuzzStore across our marketplaces and social channels where we share useful everyday finds, practical tools, and new product ideas.
              </p>
              <div className="mt-8 flex items-center gap-8">
                <a href="mailto:support@juzzstore.com" className="hover:opacity-90">
                  <img src="/icons/email.png" alt="Email" className="h-9 w-9 transition-transform hover:scale-110" />
                </a>

                <a href="https://www.tiktok.com/@sgjuzzstore" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                  <img src="/icons/tiktok.png" alt="TikTok" className="h-9 w-9 transition-transform hover:scale-110" />
                </a>

                <a href="https://shopee.sg/juzzstore" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                  <img src="/icons/shopee.png" alt="Shopee" className="h-9 w-9 transition-transform hover:scale-110" />
                </a>

                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                  <img src="/icons/facebook.png" alt="Facebook" className="h-9 w-9 transition-transform hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="mx-auto max-w-7xl px-6 pb-4 text-center text-xs text-neutral-400">
        JuzzStore offers practical desk organizers, everyday workspace tools, and simple solutions for home offices, small businesses, and daily setups.
      </div>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-neutral-500">
          <div className="font-medium text-neutral-700">JuzzStore</div>
          <div className="mt-1">Make it Simple</div>
          <div className="mt-2">Singapore</div>
          <div className="mt-3 text-xs text-neutral-400">© 2026 JuzzStore. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
