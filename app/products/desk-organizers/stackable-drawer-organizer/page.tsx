import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';

/* SEO metadata */
export const metadata = {
  title: 'Stackable Drawer Organizer | JuzzStore',
  description:
    'A compact stackable drawer organizer designed to keep stationery, cosmetics, and small items neatly stored and easy to access.',
};

const highlights = [
  'Stackable design helps save space while increasing storage capacity',
  'Transparent drawers allow quick visibility of stored items',
  'Multiple drawer sizes suitable for different small items',
  'Stable stacking structure keeps drawers aligned securely',
  'Compact design fits desks, shelves, and dressing tables',
];

const useCases = [
  'Stationery and office supplies',
  'Cosmetics and skincare items',
  'Accessories and small personal items',
  'Craft materials and hobby items',
];

export default function StackableDrawerOrganizerPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/products/desk-organizers"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Desk Organizers
          </a>

          <div className="text-sm font-medium text-neutral-500">
            Drawer Organizer
          </div>
        </div>
      </header>

      <main>
        {/* Top section */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/stackable-drawer-organizer.jpg"
                alt="Stackable drawer organizer"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Practical Desk Organizer
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Stackable Drawer Organizer
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Keep your desk and small items neatly organized without taking up too much space.
              This stackable drawer organizer helps you store everyday essentials while keeping
              them visible and easy to access.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Stackable design
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Transparent drawers
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Space saving
              </div>
            </div>
          </div>
        </section>

        {/* Video + buttons */}
        <section className="mx-auto max-w-7xl px-6 pb-4 md:pb-8">
          <div className="flex flex-col items-center">
            <iframe
              src="https://www.tiktok.com/player/v1/7430852456029916424"
              className="w-full max-w-[320px] rounded-2xl border border-gray-200"
              style={{ height: '570px' }}
              allow="fullscreen"
            />

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://shop.juzzstore.com/products/desk-storage-drawers-stackable-drawer-organizer"
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

        {/* Features / Good for */}
        <section className="mx-auto max-w-7xl px-6 py-4 md:py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">
                Key features
              </h2>

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
              <h2 className="text-lg font-semibold">
                Good for
              </h2>

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
                A simple way to keep small items organized and within reach.
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                This stackable drawer organizer is designed to help keep small items like
                stationery, cosmetics, accessories, and everyday essentials neatly arranged
                in one place instead of scattered across your desk or drawers.
              </p>

              <p className="mt-4 leading-7 text-neutral-600">
                With its transparent drawers and stackable design, it makes it easier to
                organize items by category while keeping everything visible and easy to find
                whenever you need them.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-gray-50 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Simple benefits
              </div>

              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Keeps small items neatly stored and easy to access
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Reduces clutter on desks and storage areas
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Helps create a cleaner and more organized space
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Suitable for work desks, dressing tables, and shelves
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why it stands out */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:p-10">
            <div className="mb-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Why it stands out
              </div>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                Designed to keep everyday essentials organized in a clean and simple way.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/stackable-drawer-organizer-uses.jpg"
                  alt="Stackable drawer organizer in use"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/stackable-drawer-organizer.jpg"
                  alt="Close-up of transparent stackable drawer organizer"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/stackable-drawer-organizer-display.jpg"
                  alt="Drawer organizer storing small everyday items"
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
                Explore practical organizers and useful tools designed to help create
                cleaner desks, neater spaces, and smoother everyday routines.
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