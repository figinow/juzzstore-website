import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';

/* SEO metadata */
export const metadata = {
  title: 'Foldable Multi-Layer Storage Organizer | JuzzStore',
  description:
    'A foldable multi-layer storage organizer designed to keep everyday items neat, visible, and easy to access without making your space look cluttered.',
};

const highlights = [
  'Foldable design for easy setup and storage',
  'Multi-layer structure to keep items separated neatly',
  'Transparent front panels for quick visibility',
  'Stackable design to maximize vertical space',
  'Clean look that fits desk, vanity, or home spaces',
];

const useCases = [
  'Desk and stationery organization',
  'Skincare and beauty storage',
  'Small daily essentials',
  'Keeping cluttered spaces neat and simple',
];

export default function FoldableStorageOrganizerPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/products/desk-organizers"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Desk & Space Organization
          </a>
          <div className="text-sm font-medium text-neutral-500">
            Foldable Storage Organizer
          </div>
        </div>
      </header>

      <main>
        {/* Top Section */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/foldable-organizer-1.jpg"
                alt="Foldable multi-layer storage organizer"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Simple Storage Upgrade
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Foldable Multi-Layer Storage Organizer
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              When small things start piling up, the whole space feels messy.
              This organizer helps keep everything in one place — neat, visible,
              and easy to manage without overcomplicating your setup.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Foldable
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Stackable
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Clear front panels
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Visual + CTA Section (replace video) */}
        <section className="mx-auto max-w-7xl px-6 pb-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white p-4">
              <img
                src="/images/foldable-organizer-2.jpg"
                alt="Foldable organizer setup"
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="mt-6 max-w-md text-center text-neutral-600">
              Keep everything in place — without making your space look crowded.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://shop.juzzstore.com/products/foldable-storage-organizer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-2xl px-6 py-6 text-sm font-medium">
                  Continue To Checkout
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

            <p className="mt-3 text-center text-sm text-gray-500">
              🇸🇬 SG Delivery: 2–4 Days • 🌍 Worldwide: 7–12 Days • ✔ Secure Payment
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 py-4 md:py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Key features</h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Good for</h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                {useCases.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
                Browse practical organizers and workspace tools designed to help create
                cleaner desks, tidier spaces, and smoother everyday routines.
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