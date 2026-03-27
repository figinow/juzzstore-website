'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

const tools = [
 
  {
    name: 'Bag Sealer',
    description:
      'A handy tool to help seal opened food packs more neatly and keep daily storage more organized.',
    href: '/products/everyday-useful-tools/bag-sealer',
    image: '/images/bag-sealer.jpg',
  },

];

export default function EverydayUsefulToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Everyday Useful Tools
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-600 md:text-lg">
            Practical tools designed to make simple daily tasks easier, faster,
            and less troublesome. These are useful helpers for home, kitchen,
            storage, and everyday routines — picked to keep life a little simpler.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li>• Practical tools for daily use</li>
            <li>• Simple helpers for home and kitchen routines</li>
            <li>• Useful items that save time and effort</li>
            <li>• Everyday problem-solving picks</li>
          </ul>
        </section>

        <section className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              className="overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-lg font-medium">{tool.name}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {tool.description}
                </p>

                <div className="mt-5">
                  <Button variant="outline" className="rounded-xl">
                    View Product
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] bg-emerald-600 px-8 py-10 text-white shadow-xl md:px-10 md:py-12">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
              Explore more
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Discover more helpful tools to organize life.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
              Browse practical organizers and useful tools designed to make desks,
              work corners, and daily routines easier to manage.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/#products">
                <Button className="rounded-2xl bg-white px-6 py-6 text-sm font-medium text-gray-900 hover:bg-white/90">
                  Explore Products
                </Button>
              </a>

              <a href="/">
                <Button
                  variant="outline"
                  className="rounded-2xl border-white/20 bg-transparent px-6 py-6 text-sm font-medium text-white hover:bg-white/10"
                >
                  Back to Homepage
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}