import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';

/* SEO metadata */
export const metadata = {
  title: 'Drawer Retractable Divider | JuzzStore',
  description:
    'A retractable drawer divider designed to create neat sections inside drawers for clothes, underwear, socks, and other small daily items.',
};

const highlights = [
  'Retractable design adjusts to different drawer sizes',
  'EVA anti-slip pads on both ends help keep the divider in place',
  'Suitable for drawers, wardrobes, kitchens, and shelves',
  'Helps create neat sections for better storage and easier access',
  'Simple installation design makes setup quick and easy',
];

const useCases = [
  'Socks and underwear drawers',
  'Clothing and wardrobe drawers',
  'Kitchen and household storage drawers',
  'Small item organization in cabinets or shelves',
];

export default function DrawerRetractableDividerPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/products/home-organization"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home Orgazization
          </a>

          <div className="text-sm font-medium text-neutral-500">
            Drawer Retractable Divider
          </div>
        </div>
      </header>

      <main>
        {/* Top section */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/drawer-retractable-divider.jpg"
                alt="Drawer retractable divider"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Practical Drawer Organizer
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Drawer Retractable Divider
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              A practical retractable drawer divider designed to create neat
              sections inside drawers for clothing, underwear, socks, and other
              small daily items. The adjustable design helps make drawer spaces
              tidier and easier to organize.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Adjustable length
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Anti-slip ends
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Easy drawer organization
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
                href="https://vt.tiktok.com/ZS9dvXM9C2T8W-YBEIv/"
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
                A simple way to make drawers tidier and easier to manage.
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                This retractable drawer divider helps split drawer space into
                cleaner sections so clothing, socks, underwear, and smaller items
                do not get mixed together. It is useful for keeping drawers more
                organized without needing permanent installation.
              </p>

              <p className="mt-4 leading-7 text-neutral-600">
                The adjustable design allows the divider to fit different drawer
                widths, while the anti-slip ends help keep it in place. It can be
                used in bedroom drawers, wardrobes, kitchen drawers, and other
                storage areas that need clearer separation.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-gray-50 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Simple benefits
              </div>

              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Helps create cleaner and more organized drawer sections
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Makes small clothing items easier to sort and access
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Adjustable size fits different drawers more flexibly
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Useful for bedroom, wardrobe, kitchen, and storage drawers
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
                Designed for flexible drawer organization and quick setup.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/drawer-retractable-divider-anti-slip.jpg"
                  alt="Drawer divider with EVA anti-slip pads"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/drawer-retractable-divider-size.jpg"
                  alt="Drawer divider short and long adjustable sizes"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/drawer-retractable-divider-drawer.jpg"
                  alt="Drawer divider used inside drawer"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/drawer-retractable-divider-storage.jpg"
                  alt="Drawer divider storage and organization example"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/drawer-retractable-divider-install.jpg"
                  alt="Drawer divider installation steps"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/drawer-retractable-divider-dimensions.jpg"
                  alt="Drawer divider dimension and usage example"
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
                drawers, wardrobes, and everyday spaces easier to manage.
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