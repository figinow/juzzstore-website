import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

export const metadata = {
  title: 'Home Organization | JuzzStore',
  description:
    'Discover practical home organization solutions from JuzzStore. Explore space-saving storage and organizing tools designed to keep everyday items neatly arranged.',
};

const tools = [
  {
    name: 'Drawer Retractable Divider',
    description:
      'Create cleaner drawer sections for clothing, accessories, and daily essentials with an adjustable divider designed for more flexible organization.',
    href: '/products/home-organization/drawer-retractable-divider',
    image: '/images/drawer-retractable-divider.jpg',
  },
  {
    name: 'Foldable Storage Box',
    description:
      'A practical foldable storage box for keeping clothes, toys, books, and everyday household items neatly stored when not in use.',
    href: '/products/home-organization/foldable-storage-box',
    image: '/images/foldable-storage-box.jpg',
  },
  {
    name: 'Foldable Storage Ottoman',
    description:
      'A versatile home organizer that combines hidden storage with extra seating, helping rooms feel tidier without sacrificing function.',
    image: '/images/foldable-storage-ottoman.jpg',
    href: '/products/home-organization/foldable-storage-ottoman',
  },
];

export default function HomeOrganizationPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <a
            href="/#categories"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-neutral-600 transition hover:bg-gray-100 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Category
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Home Organization
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-600 md:text-lg">
            A well-organized home creates more than just a tidy appearance — it
            makes daily living feel smoother, calmer, and easier to manage. At
            JuzzStore, our home organization collection is selected to help you
            keep everyday items neatly arranged while making better use of your
            space.
          </p>

          <p className="mt-4 text-base leading-7 text-neutral-600 md:text-lg">
            From storage solutions to practical organizers, these products are
            chosen for real homes and real routines — helping reduce clutter,
            improve accessibility, and bring more order into the spaces you use
            every day.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li>• Practical storage for tidier everyday spaces</li>
            <li>• Helps reduce clutter and improve home organization</li>
            <li>• Suitable for bedrooms, living areas, and daily household use</li>
            <li>• Simple solutions designed for easier living</li>
          </ul>
        </section>

        <section className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              className="overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-lg font-medium">{tool.name}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {tool.description}
                </p>

                <div className="mt-5">
                  <Button variant="outline" className="rounded-xl">
                    View Details
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] bg-emerald-600 px-8 py-10 text-white shadow-xl md:px-10 md:py-12">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
              Explore more
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Bring more order and ease into your home.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
              Discover practical home organization tools thoughtfully selected
              to help your space feel cleaner, calmer, and easier to manage
              every day.
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
        </section>
      </main>
    </div>
  );
}