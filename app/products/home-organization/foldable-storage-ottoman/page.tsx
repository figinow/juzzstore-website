import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';

/* SEO metadata */
export const metadata = {
  title: 'Foldable Storage Ottoman | JuzzStore',
  description:
    'A foldable storage ottoman designed to provide seating and hidden storage for blankets, toys, clothing, and everyday household items.',
};

const highlights = [
  'Foldable design saves space when not in use',
  'Large storage capacity for blankets, toys, clothes, and daily items',
  'Functions as both a storage box and a sitting stool',
  'Water-resistant surface helps with easier cleaning',
  'Padded seat design adds comfort for daily use',
];

const useCases = [
  'Bedroom and wardrobe storage',
  'Blankets, quilts, and soft items',
  'Toys and household clutter',
  'Extra seating or footrest at home',
];

export default function FoldableStorageOttomanPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/products/home-organization"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home Organization
          </a>

          <div className="text-sm font-medium text-neutral-500">
            Foldable Storage Ottoman
          </div>
        </div>
      </header>

      <main>
        {/* Top section */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/foldable-storage-ottoman.jpg"
                alt="Foldable storage ottoman"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Practical Home Organizer
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Foldable Storage Ottoman
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              A practical foldable storage ottoman designed to help keep rooms
              tidier while adding an extra seat or footrest. Its hidden storage
              space is useful for blankets, toys, clothing, and other bulky daily
              items that can easily make a room feel cluttered.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Foldable design
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Hidden storage
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Seat and storage
              </div>
            </div>
          </div>
        </section>

        {/* Video + buttons */}
        <section className="mx-auto max-w-7xl px-6 pb-4 md:pb-8">
          <div className="flex flex-col items-center">
            <iframe
              src="https://www.tiktok.com/player/v1/7387010311292751122"
              className="w-full max-w-[320px] rounded-2xl border border-gray-200"
              style={{ height: '570px' }}
              allow="fullscreen"
            />

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://vt.tiktok.com/ZS9R8QwAfc9rb-L77fq//"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-2xl px-6 py-6 text-sm font-medium">
                  Buy Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a href="mailto:support@juzzstore.com">
                <Button
                  variant="outline"
                  className="rounded-2xl px-6 py-6 text-sm font-medium"
                >
                  Ask a Question
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Features / Good for */}
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

        {/* Product overview */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Product overview
              </div>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                A simple way to add storage, seating, and cleaner organization at home.
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                This foldable storage ottoman helps store bulky household items
                such as quilts, blankets, toys, and clothing while also serving as
                a bench, footstool, or extra sitting seat. It is useful for homes
                where storage space is limited and furniture needs to serve more
                than one purpose.
              </p>

              <p className="mt-4 leading-7 text-neutral-600">
                The foldable structure makes it easier to store away when not in
                use, while the padded lid provides a more comfortable surface for
                sitting. It works well in bedrooms, living rooms, wardrobes, and
                entryway areas where clutter tends to build up.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-gray-50 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Simple benefits
              </div>

              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Helps hide bulky items and reduce visible clutter
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Adds extra seating without needing separate furniture
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Foldable design supports easier storage when unused
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Useful for bedrooms, living rooms, and wardrobe spaces
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why it stands out - max 5 images total including hero */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:p-10">
            <div className="mb-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Why it stands out
              </div>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Designed for large storage, simple setup, and practical everyday use.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/foldable-storage-ottoman-storage.jpg"
                  alt="Foldable storage ottoman versatile storage"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/foldable-storage-ottoman-steps.jpg"
                  alt="Foldable storage ottoman setup steps"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/foldable-storage-ottoman-foldable.jpg"
                  alt="Foldable storage ottoman different use cases"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/foldable-storage-ottoman-small.jpg"
                  alt="Foldable storage ottoman waterproof and padded material"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/foldable-storage-ottoman-size.jpg"
                  alt="Foldable storage ottoman size and product image"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
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
                Browse practical organizers and useful tools designed to make
                rooms, wardrobes, and everyday home spaces easier to manage.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/#categories">
                  <Button
                  variant="outline"
                  className="rounded-2xl border-white/20 bg-transparent px-6 py-6 text-sm font-medium text-white hover:bg-white/10"
                >

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
          </div>
        </section>
      </main>
    </div>
  );
}