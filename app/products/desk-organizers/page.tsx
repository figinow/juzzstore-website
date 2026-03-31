import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

export const metadata = {
  title: 'Desk Organizers | JuzzStore',
  description:
    'Discover premium desk organization solutions from JuzzStore. Explore space-saving desk organizers designed to keep files, stationery, cables, and everyday essentials neatly arranged.',
};

const deskOrganizers = [
  {
    name: 'Desk & Space Organization',
    description:
      'A vertical storage solution designed to keep documents, folders, magazines, and daily desk essentials neatly arranged without taking up too much surface space.',
    href: '/products/desk-organizers/desk-file-organizer',
    image: '/images/file-organizer.jpg',
  },
  {
    name: 'Cable Organizer',
    description:
      'Keep wires, chargers, and power strips tucked away neatly for a cleaner, more polished workspace.',
    href: '/products/desk-organizers/cable-organizer',
    image: '/images/cable-organizer.jpg',
  },
  {
    name: 'Drawer Organizer',
    description:
      'Create tidy sections for stationery, notes, desk tools, and small daily essentials so everything is easier to find.',
    href: '/products/desk-organizers/drawer-organizer',
    image: '/images/drawer-organizer.jpg',
  },
  {
    name: 'Desk Cup Holder',
    description:
      'Free up valuable desk space by keeping your drink securely placed at the side of your workstation.',
    image: '/images/desk-cup-holder.jpg',
    href: '/products/desk-organizers/desk-cup-holder',
  },
  {
    name: 'Stackable Drawer Organizer',
    description:
      'Organize stationery, cosmetics, and smaller items neatly with stackable drawers that help maximise vertical storage.',
    image: '/images/stackable-drawer-organizer.jpg',
    href: '/products/desk-organizers/stackable-drawer-organizer',
  },
  {
    name: 'Foldable Multi-Layer Storage Organizer',
    description:
      'A flexible multi-layer organizer that helps keep supplies neatly stored while allowing you to save space when needed.',
    href: '/products/desk-organizers/foldable-organizer',
    image: '/images/foldable-organizer-1.jpg',
  },
  {
    name: 'Storage Organizer',
    description:
      'A practical storage solution for keeping everyday desk items, supplies, and small accessories in a neater, more organised setup.',
    href: '/products/desk-organizers/storage-organizer',
    image: '/images/storage-organizer.jpg',
  },
];

export default function DeskOrganizersPage() {
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
            Desk Organization
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-600 md:text-lg">
            A well-organized desk does more than improve appearance — it helps
            create a calmer, more efficient way to work. At JuzzStore, our desk
            organization collection is curated for practical everyday use,
            helping you keep files, stationery, cables, and workspace essentials
            neatly arranged without adding unnecessary bulk.
          </p>

          <p className="mt-4 text-base leading-7 text-neutral-600 md:text-lg">
            Whether you are working from home, setting up a small office corner,
            or simply trying to keep your desk clearer and easier to manage,
            these organizers are selected to bring structure, save space, and
            support a cleaner workflow.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li>• Space-saving solutions for cleaner desk setups</li>
            <li>• Helps keep files, stationery, and essentials neatly arranged</li>
            <li>• Suitable for home offices, study desks, and compact workspaces</li>
            <li>• Practical organization tools designed for everyday use</li>
          </ul>
        </section>

        <section className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {deskOrganizers.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
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
              Organize your desk with more clarity and less clutter.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
              Discover practical organizers thoughtfully selected to help you
              create a workspace that feels cleaner, more efficient, and easier
              to maintain every day.
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