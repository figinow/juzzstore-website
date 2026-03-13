import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

export const metadata = {
  title: 'Desk Organizers | JuzzStore',
  description:
    'Explore practical desk organizers designed to keep documents, cables, stationery, and everyday workspace items neatly arranged.',
};

const deskOrganizers = [
  {
    name: 'Desk File Organizer',
    description:
      'Keep documents, folders, magazines, and small desk essentials neatly arranged in one place.',
    href: '/products/desk-organizers/desk-file-organizer',
    image: '/images/file-organizer.jpg',
  },
  {
    name: 'Cable Organizer',
    description:
      'Hide wires, chargers, and power strips neatly under the desk for a cleaner workspace.',
    href: '/products/desk-organizers/cable-organizer',
    image: '/images/cable-organizer.jpg',
  },
  {
    name: 'Drawer Organizer',
    description:
      'Sort stationery, desk tools, notes, and small essentials into cleaner sections.',
    href: '/products/desk-organizers/drawer-organizer',
    image: '/images/drawer-organizer.jpg',
  },
];

export default function DeskOrganizersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Desk Organizers
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-600 md:text-lg">
            Practical desk organizers designed to help keep documents, cables,
            stationery, and daily workspace items neatly arranged. Explore simple
            tools that make desks easier to manage at home, in the office, or in
            small work corners.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li>• Organize files, cables, and desk essentials</li>
            <li>• Suitable for home offices and small workspaces</li>
            <li>• Practical storage for cleaner desk setups</li>
            <li>• Simple tools that support better daily organization</li>
          </ul>
        </section>

        <section className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {deskOrganizers.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>

                <div className="mt-5">
                  <Button variant="outline" className="rounded-2xl">
                    View Product
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
              Discover more helpful tools to organize life.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
              Browse practical organizers and useful tools designed to make desks,
              work corners, and daily routines easier to manage.
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
        </section>
      </main>
    </div>
  );
}