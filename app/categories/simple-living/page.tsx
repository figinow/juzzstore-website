'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

const picks = [
  {
    name: 'Travel Organizer Bag',
    description: 'Keep your travel essentials neatly sorted and easy to access.',
    href: '/products/simple-living/travel-organizer-bag',
    image: '/images/travel-organizer-bag.jpg',
  },
  {
    name: 'Vacuum Compression Bag',
    description: 'Save luggage and storage space by compressing bulky items.',
    href: '/products/simple-living/vacuum-compression-bag',
    image: '/images/vacuum-compression-quilt.jpg',
  },
  {
    name: 'Foldable Storage Box',
    description:
      'A foldable storage box for clothes, toys, books, and everyday home organization.',
    href: '/products/simple-living/foldable-storage-box',
    image: '/images/foldable-storage-box.jpg',
  },
  {
    name: 'Foldable Storage Ottoman',
    description:
      'A foldable storage ottoman for seating, storage, and tidier rooms.',
    image: '/images/foldable-storage-ottoman.jpg',
    href: '/products/simple-living/foldable-storage-ottoman',
  },
];

export default function SimpleLivingPicksPage() {
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
            Simple Living Picks
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-600 md:text-lg">
            Practical picks designed to make everyday living simpler, cleaner,
            and easier to manage. From storage solutions to daily essentials,
            these are useful items that help keep your space and routine more
            organized without overcomplicating things.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li>• Storage solutions for home and travel</li>
            <li>• Everyday items that reduce clutter</li>
            <li>• Practical picks for a cleaner living space</li>
            <li>• Simple tools that support daily routines</li>
          </ul>
        </section>

        <section className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {item.description}
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