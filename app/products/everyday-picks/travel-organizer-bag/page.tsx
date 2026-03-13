import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';

/* SEO metadata */
export const metadata = {
  title: 'Travel Organizer Bag | JuzzStore',
  description:
    'A foldable travel organizer bag designed to keep clothes, toiletries, and small travel essentials neatly sorted inside luggage.',
};

const highlights = [
  'Multiple compartments help separate clothing, toiletries, and small travel items',
  'Foldable design makes it easy to pack away when not in use',
  'Hanging style allows easier access inside luggage or when unpacking',
  'Smooth zipper and buckle details support convenient everyday use',
  'Suitable for travel, short trips, gym use, and simple daily organization',
];

const useCases = [
  'Clothes and underwear',
  'Toiletries and cosmetics',
  'Travel essentials and small accessories',
  'Short trips, vacations, and gym packing',
];

export default function TravelOrganizerBagPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/products/everyday-picks"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Helpful Tools
          </a>
          <div className="text-sm font-medium text-neutral-500">Travel Organizer Bag</div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/travel-organizer-bag.jpg"
                alt="Foldable travel organizer bag"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Practical Travel Organizer
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Foldable Travel Organizer Bag
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              A practical travel organizer bag designed to keep clothing, toiletries,
              and small essentials neatly sorted inside your luggage. Its foldable
              structure and multiple storage sections make packing easier while helping
              your suitcase stay cleaner and more organized.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Foldable design
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Multi-compartment storage
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Easy travel packing
              </div>
           
</div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://vt.tiktok.com/ZS9d73mfwwBpd-tpkPx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-2xl px-6 py-6 text-sm font-medium">
                  View Product
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a href="mailto:support@juzzstore.com">
                <Button variant="outline" className="rounded-2xl px-6 py-6 text-sm font-medium">
                  Ask a Question
                </Button>
              </a>
            </div>
          </div>
        </section>
<section className="mx-auto max-w-7xl px-6 pb-4 md:pb-8">
  <div className="flex justify-center">
    <iframe
      src="https://www.tiktok.com/player/v1/7579940829402336519"
      className="w-full max-w-[320px] rounded-2xl border border-gray-200"
      style={{ height: '570px' }}
      allow="fullscreen"
    />
  </div>
</section>
        <section className="mx-auto max-w-7xl px-6 py-4 md:py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Key features</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Good for</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
                {useCases.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Product overview
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                A simple travel storage bag that helps keep luggage better organized.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                This travel organizer bag uses multiple compartments to separate
                clothing, underwear, socks, toiletries, and smaller travel items.
                Instead of mixing everything together in one suitcase compartment,
                it helps keep essentials grouped and easier to find.
              </p>
              <p className="mt-4 leading-7 text-neutral-600">
                The foldable structure makes it easy to carry and pack, while the
                hanging-style layout helps with quick access when travelling. It is
                suitable for vacations, short trips, business travel, gym use, or
                simple daily packing needs.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-gray-50 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Simple benefits
              </div>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Helps keep luggage cleaner and more organized
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Makes clothes and essentials easier to separate and find
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Foldable design saves space when not in use
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Useful for travel, gym, and short trip packing
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:p-10">
            <div className="mb-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Why it stands out
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Designed for cleaner packing, easier access, and better travel organization.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/travel-organizer-before-after.jpg"
                  alt="Before and after using travel organizer bag"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/travel-organizer-layout.jpg"
                  alt="Travel organizer bag compartment layout"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/travel-organizer-pack.jpg"
                  alt="Travel organizer bag inside luggage"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/travel-organizer-details.jpg"
                  alt="Travel organizer bag handle zipper and buckle details"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/travel-organizer-size.jpg"
                  alt="Travel organizer bag size and folded view"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-16">
          <div className="rounded-[2rem] bg-emerald-600 px-8 py-10 text-white shadow-xl md:px-10 md:py-12">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                Explore more
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
                Discover more helpful tools to organize life.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
                Browse practical travel tools, organizers, and useful everyday picks
                designed to make packing and daily routines easier to manage.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/products/everyday-picks">
                  <Button className="rounded-2xl bg-white px-6 py-6 text-sm font-medium text-gray-900 hover:bg-white/90">
                    Explore Helpful Tools
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
          </div>
        </section>
      </main>
    </div>
  );
}