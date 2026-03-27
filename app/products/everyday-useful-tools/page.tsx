'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

const tools = [
  {
    name: 'Garlic Chopper Tool',
    description:
      'A simple kitchen helper for chopping garlic, ginger, chilli, and other small ingredients with less mess and less effort.',
    href: '/products/everyday-useful-tools/garlic-chopper-tool',
    image: '/images/garlic-tool.jpg',
  },
  {
    name: 'Bag Sealer',
    description:
      'A handy tool to help seal opened food packs more neatly and keep daily storage more organized.',
    href: '/products/everyday-useful-tools/bag-sealer',
    image: '/images/bag-sealer.jpg',
  },
  {
    name: 'Mini Heat Sealer',
    description:
      'A compact everyday tool that helps reseal plastic bags quickly for simpler food storage.',
    href: '/products/everyday-useful-tools/mini-heat-sealer',
    image: '/images/mini-heat-sealer.jpg',
  },
  {
    name: 'Cordless Vacuum Pump',
    description:
      'A useful tool for quickly compressing storage bags and saving space with less manual effort.',
    href: '/products/everyday-useful-tools/cordless-vacuum-pump',
    image: '/images/cordless-vacuum-pump.jpg',
  },
  {
    name: 'Portable Cleaning Brush',
    description:
      'A practical helper for cleaning small corners, gaps, and hard-to-reach areas more easily.',
    href: '/products/everyday-useful-tools/portable-cleaning-brush',
    image: '/images/portable-cleaning-brush.jpg',
  },
  {
    name: 'Multi-Purpose Kitchen Tool',
    description:
      'A simple daily-use tool designed to make basic kitchen tasks quicker and easier to handle.',
    href: '/products/everyday-useful-tools/multi-purpose-kitchen-tool',
    image: '/images/multi-purpose-kitchen-tool.jpg',
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
      </main>
    </div>
  );
}