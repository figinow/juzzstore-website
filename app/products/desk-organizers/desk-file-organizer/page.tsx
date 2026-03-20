import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';

/* SEO metadata */
export const metadata = {
  title: 'Desk File Organizer | JuzzStore',
  description:
    'A vertical desk file organizer designed to keep documents, folders, and papers neatly arranged and easy to access.',
};

const highlights = [
  'Vertical storage design helps save desk space',
  'Multiple compartments for sorting documents and files',
  'Open structure allows quick access to important papers',
  'Stable and sturdy build for daily office use',
  'Suitable for home, office, and study environments',
];

const useCases = [
  'Office documents and paperwork',
  'School notes and folders',
  'Bills and important letters',
  'Daily documents for easy access',
];

export default function DeskFileOrganizerPage() {
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
            File Organizer
          </div>
        </div>
      </header>

      <main>

        {/* Top section */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">

          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/desk-file-organizer.jpg"
                alt="Desk file organizer"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">

            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Practical Desk Organizer
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Desk File Organizer
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Keep your documents neatly arranged and easy to find. This desk file
              organizer helps sort papers, folders, and files into clear sections,
              making your workspace more organized and efficient.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Vertical storage
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Multi compartments
              </div>

              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Easy access
              </div>
            </div>

          </div>
        </section>

        {/* Video + buttons */}
        <section className="mx-auto max-w-7xl px-6 pb-4 md:pb-8">

          <div className="flex flex-col items-center">

            <iframe
              src="https://www.tiktok.com/player/v1/your-video-id"
              className="w-full max-w-[320px] rounded-2xl border border-gray-200"
              style={{ height: '570px' }}
              allow="fullscreen"
            />

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="https://shop.juzzstore.com/products/desk-file-organizer"
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
              🌍 Worldwide Shipping • 7–12 Days Delivery • ✔ Secure Payment
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
                A simple way to keep documents organized and within reach.
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                This desk file organizer helps keep documents, folders, and
                paperwork neatly arranged in separate sections instead of
                piling up on your desk.
              </p>

              <p className="mt-4 leading-7 text-neutral-600">
                Its vertical design makes it easier to sort documents by category
                while keeping everything visible and accessible whenever needed.
              </p>

            </div>

            <div className="rounded-[1.75rem] bg-gray-50 p-6">

              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Simple benefits
              </div>

              <div className="mt-4 grid gap-4">

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Keeps documents neatly organized
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Reduces clutter on desks and workspaces
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Helps improve workspace efficiency
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Suitable for home, office, and study use
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
                Explore practical organizers and useful tools designed to help
                create cleaner desks and more organized everyday spaces.
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