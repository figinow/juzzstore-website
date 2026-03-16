import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';

/* SEO metadata */
export const metadata = {
  title: 'Desk Cup Holder | JuzzStore',
  description:
    'A rotatable clamp-on desk cup holder designed to keep coffee cups, bottles, and drink containers secure while saving desk space.',
};

const highlights = [
  'Clamp-on design fits desk thickness from 1mm to 63mm without drilling',
  'Rotatable structure allows the cup holder to turn away when not in use',
  'Three adjustable height positions support different setup needs',
  'Large diameter design fits coffee cups, bottles, glass cups, and tumblers',
  'Made with metal and premium ABS materials for sturdy everyday use',
];

const useCases = [
  'Office desks and workstations',
  'Home office and study desks',
  'Coffee cups, tumblers, and water bottles',
  'Small desk setups where space matters',
];

export default function DeskCupHolderPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/products/desk-organizers"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Desk Organizers
          </a>

          <div className="text-sm font-medium text-neutral-500">
            Desk Cup Holder
          </div>
        </div>
      </header>

      <main>
        {/* Top section */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/desk-cup-holder.jpg"
                alt="Clamp-on desk cup holder"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Practical Desk Organizer
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Rotatable Clamp-On Desk Cup Holder
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              A practical desk cup holder designed to keep drinks secure beside
              your table while freeing up desk space. Its clamp-on design helps
              reduce the chance of cups being knocked over, while the rotatable
              structure makes it easy to use or hide when not needed.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Clamp-on installation
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Rotatable design
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Space-saving desk use
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
                href="https://vt.tiktok.com/ZS9RRgHvhsJCY-9mtnU/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-2xl px-6 py-6 text-sm font-medium">
                  View Product
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
                A simple way to keep drinks off the desk and reduce accidental spills.
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                This clamp-on desk cup holder attaches to the edge of a table and
                creates a dedicated place for drinks without taking up valuable
                tabletop space. It helps reduce the chance of cups being knocked
                over by pets, hands, or daily desk movement.
              </p>

              <p className="mt-4 leading-7 text-neutral-600">
                The rotatable design allows the holder to swing outward for use
                and rotate inward when not needed. Its adjustable clamp fits a
                range of table thicknesses, making it suitable for desks, study
                tables, and other work surfaces without drilling holes.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-gray-50 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Simple benefits
              </div>

              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Keeps drinks secure beside the desk instead of on top
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Helps reduce spills and protect desk surfaces
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Saves tabletop space for work and daily tasks
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Fits coffee cups, tumblers, bottles, and more
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
                Designed for safer desk use, flexible positioning, and compact space-saving.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/desk-cup-holder-product.jpg"
                  alt="Desk cup holder rotatable design"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/desk-cup-holder-rotatable.jpg"
                  alt="Desk cup holder for different cup types"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/desk-cup-holder-usage.jpg"
                  alt="Desk cup holder product image"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/desk-cup-holder-protection.jpg"
                  alt="Desk cup holder size and dimensions"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/desk-cup-holder-height.jpg"
                  alt="Desk cup holder adjustable height positions"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/desk-cup-holder-size.jpg"
                  alt="Desk cup holder helps prevent accidental spills"
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
                Discover more desk organizers for cleaner and smarter workspaces.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
                Browse practical desk tools and organizers designed to make
                workstations, study desks, and everyday setups easier to manage.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/products/desk-organizers">
                  <Button className="rounded-2xl bg-white px-6 py-6 text-sm font-medium text-gray-900 hover:bg-white/90">
                    Explore Desk Organizers
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