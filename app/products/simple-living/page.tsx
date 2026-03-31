import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

export const metadata = {
  title: 'Simple Living | JuzzStore',
  description:
    'Discover practical simple living solutions from JuzzStore. Explore useful organizers and space-saving essentials designed to keep daily life cleaner, lighter, and easier to manage.',
};

const picks = [
  {
    name: 'Travel Organizer Bag',
    description:
      'Keep clothing, toiletries, and travel essentials neatly sorted so packing feels easier and every trip stays more organized.',
    href: '/products/simple-living/travel-organizer-bag',
    image: '/images/travel-organizer-bag.jpg',
  },
  {
    name: 'Vacuum Compression Bag',
    description:
      'Save luggage and storage space by compressing bulky clothing, bedding, and soft items into a more manageable size.',
    href: '/products/simple-living/vacuum-compression-bag',
    image: '/images/vacuum-compression-quilt.jpg',
  },
];

export default function SimpleLivingPage() {
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
            Simple Living
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-600 md:text-lg">
            Simple living is not about having less for the sake of it — it is
            about choosing practical items that make daily life easier to manage.
            At JuzzStore, this collection focuses on useful essentials that help
            reduce clutter, save space, and support a cleaner, more organized
            routine.
          </p>

          <p className="mt-4 text-base leading-7 text-neutral-600 md:text-lg">
            From travel organization to smart storage solutions, these products
            are selected to bring more ease, flexibility, and order into the way
            you live, pack, and store everyday necessities.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li>• Practical solutions for home, storage, and travel</li>
            <li>• Helps reduce clutter and save valuable space</li>
            <li>• Useful essentials for easier everyday living</li>
            <li>• Designed to support a cleaner and more organized routine</li>
          </ul>
        </section>

        <section className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {item.description}
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
              Make daily living feel lighter, simpler, and more organized.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
              Discover practical essentials thoughtfully selected to help you
              save space, stay organized, and bring more ease into everyday
              routines.
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