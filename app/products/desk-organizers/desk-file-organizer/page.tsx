import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';

/* SEO metadata */
export const metadata = {
  title: 'Desk File Organizer | JuzzStore',
  description:
    'A multi-layer desk file organizer designed to keep documents, magazines, notes, and small desk items neatly arranged while saving space.',
};

const highlights = [
  'Multi-layer vertical storage helps organize files, magazines, and documents neatly',
  'Top tray provides extra space for small desk essentials and daily items',
  'Bottom basket adds convenient storage for accessories and loose items',
  'Space-saving upright design helps reduce clutter on desks and workspaces',
  'Suitable for office desks, study tables, and home workspaces',
];

const useCases = [
  'A4 files and documents',
  'Magazines and notebooks',
  'Desk accessories and stationery',
  'Home office and study table organization',
];

export default function DeskFileOrganizerPage() {
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
          <div className="text-sm font-medium text-neutral-500">Desk File Organizer</div>
        </div>
      </header>

      <main>
        {/* Top section */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/desk-file-organizer.jpg"
                alt="Multi-layer desk file organizer"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Practical Workspace Organizer
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Save Desk Space with a Vertical File Organizer
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Keep documents, magazines, notebooks, and small desk essentials neatly arranged
              while saving space. Its upright design helps reduce clutter and makes daily items
              easier to see, sort, and access.
            </p>

            <p className="mt-3 text-sm text-neutral-500">
              Ideal for small desks where space is limited but clutter builds up easily.
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              Inspired by real desk setups where papers slowly pile up and space becomes limited.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Multi-layer storage
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Space-saving design
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                For files and desk items
              </div>
            </div>
          </div>
        </section>

        {/* Video + buttons */}
        <section className="mx-auto max-w-7xl px-6 pb-4 md:pb-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[380px] md:max-w-[420px] rounded-[2rem] border border-gray-200 bg-white p-3 shadow-sm">
              <div className="overflow-hidden rounded-[1.5rem] bg-black">
                <video
                  className="h-auto w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/images/desk-file-organizer.jpg"
                >
                  <source src="/videos/Desk File Organizer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://shop.juzzstore.com/products/desk-file-organizer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-2xl px-6 py-6 text-sm font-medium">
                  Upgrade Your Desk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a href="mailto:support@juzzstore.com">
                <Button variant="outline" className="rounded-2xl px-6 py-6 text-sm font-medium">
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
                A simple way to keep documents and desk essentials organized.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                This desk file organizer combines multiple angled file slots with a top tray
                and bottom basket, making it useful for both paperwork and smaller daily items.
                It helps keep papers upright, visible, and easier to reach instead of piling
                across the desk.
              </p>
              <p className="mt-4 leading-7 text-neutral-600">
                Compared with flat stacking, the vertical design helps save desk space and
                creates a cleaner, more organized setup. It works well for home offices,
                work desks, study corners, and everyday paper organization.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-gray-50 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Simple benefits
              </div>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Helps keep documents and magazines neatly arranged
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Saves desk space with upright vertical storage
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Top and bottom compartments add extra storage flexibility
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Suitable for office, home, and study use
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
                Designed to keep documents visible, reduce clutter, and save valuable desk space.
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/file-organizer-size.jpg"
                  alt="Desk file organizer size and dimensions"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/file-organizer-usage.jpg"
                  alt="Desk file organizer with documents and accessories"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/desk-file-organizer 4layer white1.jpg"
                  alt="Desk file organizer showing space-saving use"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/desk-file-organizer 6layer Black.jpg"
                  alt="Desk file organizer showing space-saving use"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/desk-file-organizer 5layer white1.jpg"
                  alt="Desk file organizer showing space-saving use"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/file-organizer-install.jpg"
                  alt="Desk file organizer showing space-saving use"
                  className="h-auto w-full object-contain"
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
                Browse practical organizers and workspace tools designed to help create
                cleaner desks, tidier spaces, and smoother everyday routines.
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