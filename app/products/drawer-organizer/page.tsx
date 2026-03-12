import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';

/* SEO metadata */
export const metadata = {
  title: 'Drawer Organizer | JuzzStore',
  description:
    'A multi-layer desktop drawer organizer designed to keep stationery, notes, makeup and everyday small items neatly arranged.',
};

const highlights = [
  'Multi-layer storage with drawers and top compartments',
  'Helps keep stationery, makeup, office tools, and small items neatly arranged',
  'Wide drawer design can hold A4-sized paper',
  'Waterproof and dustproof PP material for easier maintenance',
  'Suitable for desk, study table, vanity, or office use',
];

const useCases = [
  'Stationery and office tools',
  'Notes, calculator, and notebooks',
  'Makeup and small vanity items',
  'Daily accessories and small essentials',
];

export default function DrawerOrganizerPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </a>
          <div className="text-sm font-medium text-neutral-500">Drawer Organizer</div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/drawer-organizer.jpg"
                alt="Multi-layer desktop drawer organizer"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Practical Desktop Organizer
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Multi-Layer Desktop Drawer Organizer
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              A practical desktop organizer designed to keep stationery, office tools,
              notes, makeup, and everyday small items neatly arranged and easier to reach.
              The top tray keeps frequently used items visible, while the drawers help
              keep smaller things tidy and out of sight.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Multi-layer storage
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Top tray + drawers
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Fits A4 paper
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <iframe
                src="https://www.tiktok.com/player/v1/7455556033352699154"
                className="w-full max-w-[320px] rounded-2xl border border-gray-200"
                style={{ height: '570px' }}
                allow="fullscreen"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://vt.tiktok.com/ZS9dqeg6snKqd-Tjtx0/"
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
                A simple way to keep desks, study tables, and dressing tables more organized.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                This organizer combines a top open tray with multiple pull-out drawers, making it
                useful for both visible daily essentials and smaller items you want to keep neatly
                stored. It works well for office tools, notes, accessories, and small household
                items that can easily clutter a desk.
              </p>
              <p className="mt-4 leading-7 text-neutral-600">
                Compared with basic open trays, the drawer-style layout helps separate items more
                clearly and gives a cleaner look while still keeping things easy to access.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-gray-50 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Simple benefits
              </div>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Keeps everyday desk items more neatly arranged
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Pull-out drawers help store smaller things out of sight
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Wide design can store larger papers like A4
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Suitable for office, study, or vanity use
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
                Designed for capacity, easy access, and everyday convenience.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
  <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
    <img
      src="/images/drawer-organizer-a4.jpg"
      alt="Drawer organizer fits A4 paper"
      className="w-full h-auto object-contain"
    />
  </div>

  <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
    <img
      src="/images/drawer-organizer-pull.jpg"
      alt="Drawer organizer smooth pulling drawer"
      className="w-full h-auto object-contain"
    />
  </div>

  <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
    <img
      src="/images/drawer-organizer-capacity.jpg"
      alt="Drawer organizer high capacity desktop setup"
      className="w-full h-auto object-contain"
    />
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
                Browse practical tools and organizing ideas designed to make desks, work corners,
                and daily life easier to manage.
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