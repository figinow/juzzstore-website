'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

const tools = [
  {
    name: 'Travel Organizer Bag',
    description: 'Keep your travel essentials neatly sorted and easy to access.',
    href: '/products/everyday-picks/travel-organizer-bag',
    image: '/images/travel-organizer-bag.jpg',
  },
  {
    name: 'Vacuum Compression Bag',
    description: 'Save luggage and storage space by compressing bulky items.',
    href: '/products/everyday-picks/vacuum-compression-bag',
    image: '/images/vacuum-compression-bag.jpg',
  },
  {
    name: 'Cable Organizer',
    description: 'Reduce desk clutter and keep charging cables in place.',
    href: '/products/everyday-picks/cable-organizer',
    image: '/images/cable-organizer.jpg',
  },
  {
    name: 'Drawer Divider',
    description: 'Separate small items neatly inside drawers and storage spaces.',
    href: '/products/everyday-picks/drawer-divider',
    image: '/images/drawer-divider.jpg',
  },
  {
    name: 'Bag Sealer',
    description: 'Help keep opened food packs sealed and more organized.',
    href: '/products/everyday-picks/bag-sealer',
    image: '/images/bag-sealer.jpg',
  },
];

export default function EverydayPicksPage() {
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
          <h1 className="text-4xl font-semibold">
            Helpful Tools to Organize Life
          </h1>

          <p className="mt-6 text-neutral-600 leading-7">
            Discover practical tools that make it easier to keep your home,
            workspace, and travel items organized. These handpicked picks
            support a simpler and tidier daily routine.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li>• Travel and packing organization</li>
            <li>• Desk and cable management</li>
            <li>• Drawer and storage support</li>
            <li>• Practical tools that help organize daily life</li>
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