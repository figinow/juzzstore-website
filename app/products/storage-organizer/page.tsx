import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';

/* SEO metadata */
export const metadata = {
  title: 'Storage Organizer | JuzzStore',
  description:
    'A practical storage organizer designed to help keep everyday items neatly arranged, reduce clutter, and make spaces easier to manage.',
};

const highlights = [
  'Multi-purpose storage for everyday household and desk items',
  'Helps keep items neatly arranged and easy to access',
  'Compact design suitable for shelves, tables, and cabinets',
  'Durable material for daily use and long-term organization',
  'Suitable for home, office, and storage areas',
];

const useCases = [
  'Household items and daily essentials',
  'Desk accessories and stationery',
  'Bathroom or vanity storage',
  'Closet and shelf organization',
];

export default function StorageOrganizerPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/products/storage"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Storage
          </a>

          <div className="text-sm font-medium text-neutral-500">
            Storage Organizer
          </div>
        </div>
      </header>

      <main>

        {/* Top section */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">

          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/storage-organizer.jpg"
                alt="Storage organizer"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">

            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Practical Storage Solution
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Storage Organizer
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Keep your space neat and organized without taking up unnecessary room.
              This storage organizer helps arrange everyday items in a simple and
              practical way, making it easier to find what you need.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Multi-purpose use
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Space-saving design
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Easy organization
              </div>
            </div>

          </div>
        </section>

        {/* Video + buttons */}
        <section className="mx-auto max-w-7xl px-6 pb-4 md:pb-8">
          <div className="flex flex-col items-center">

            <iframe
              src="https://www.tiktok.com/player/v1/VIDEO_ID"
              className="w-full max-w-[320px] rounded-2xl border border-gray-200"
              style={{ height: '570px' }}
              allow="fullscreen"
            />

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="https://shop.juzzstore.com/products/storage-organizer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-2xl px-6 py-6 text-sm font-medium">
                  Continue to Checkout
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

            <p className="mt-2 text-center text-sm text-gray-500">
              🚚 Local Delivery: 2–4 Days • 🌍 Worldwide: 7–12 Days • ✔ Secure Payment
            </p>

          </div>
        </section>

        {/* Features */}
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
                A simple way to keep everyday spaces clean and organized.
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                This storage organizer helps keep items arranged neatly instead of
                being scattered across surfaces. It is suitable for storing daily
                essentials, accessories, and small household items.
              </p>

              <p className="mt-4 leading-7 text-neutral-600">
                Its compact and practical design makes it easy to place on desks,
                shelves, or cabinets while helping maintain a cleaner and more
                organized space.
              </p>

            </div>

            <div className="rounded-[1.75rem] bg-gray-50 p-6">

              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Simple benefits
              </div>

              <div className="mt-4 grid gap-4">

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Keeps items neatly stored and easy to find
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Reduces clutter in everyday spaces
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Helps create a cleaner and more organized environment
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Suitable for home, office, and personal use
                </div>

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
                Explore practical tools designed to make everyday spaces easier to manage,
                cleaner to maintain, and more organized.
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