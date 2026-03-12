import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';

export const metadata = {
  title: 'Simple Desk Organization Guide | JuzzStore',
  description:
    'A simple guide to organizing your desk using practical tools that help manage documents, cables, and everyday items more efficiently.',
};

export default function DeskOrganizationGuide() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </a>

          <div className="text-sm font-medium text-neutral-500">
            Desk Organization Guide
          </div>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-16">

          <div className="max-w-3xl">

            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-neutral-600">
              Simple Workspace Tips
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              A Simple Guide to Organizing Your Desk
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              A cluttered desk can make daily work feel more stressful. Papers pile
              up, cables become tangled, and small items slowly take over your
              workspace.
            </p>

            <p className="mt-4 text-lg leading-8 text-neutral-600">
              With a few simple organizing tools, it becomes much easier to keep
              documents visible, cables tidy, and your desk space cleaner and more
              comfortable to use.
            </p>

          </div>
        </section>

        {/* Problem Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">

          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-3">

            <div>
              <h3 className="text-lg font-semibold">
                Problem 1: Papers everywhere
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Documents, letters, and magazines can quickly pile up on a desk.
                When everything is stacked flat, it becomes harder to find the
                document you need.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Problem 2: Cable mess
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Chargers, power strips, and device cables often create clutter
                under the desk. Tangled wires make cleaning and managing devices
                more difficult.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Problem 3: Small items everywhere
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Pens, USB drives, small tools, and daily accessories slowly fill
                the workspace and make the desk feel crowded.
              </p>
            </div>

          </div>

        </section>

        {/* Solutions Section */}
        <section className="mx-auto max-w-7xl px-6 py-16">

          <div className="mb-8">

            <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
              Simple Solutions
            </div>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Practical tools that help organize your desk
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* File Organizer */}
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-lg font-semibold">
                Desk File Organizer
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                A vertical file organizer helps keep documents, magazines, and
                papers neatly arranged so they are easy to see and access without
                stacking everything on the desk.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Keeps papers organized
                </li>

                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Saves desk space
                </li>

                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Easy to access documents
                </li>
              </ul>

              <a href="/products/desk-file-organizer">
                <Button className="mt-6 rounded-2xl px-6 py-5 text-sm font-medium">
                  View Organizer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

            </div>

            {/* Cable Organizer */}
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-lg font-semibold">
                Cable Organizer Tray
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                An under-desk cable tray keeps power strips and cables hidden
                below the desk, helping reduce cable clutter and making the
                workspace cleaner.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Hides cable clutter
                </li>

                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Keeps wires organized
                </li>

                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Frees desk space
                </li>
              </ul>

              <a href="/products/everyday-picks/cable-organizer">
                <Button className="mt-6 rounded-2xl px-6 py-5 text-sm font-medium">
                  View Cable Organizer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

            </div>

            {/* Storage Organizer */}
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-lg font-semibold">
                Storage Organizer
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Storage organizers help keep everyday items grouped together so
                desks, drawers, and shelves stay tidy and easier to manage.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Groups small items
                </li>

                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Reduces desk clutter
                </li>

                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Flexible storage use
                </li>
              </ul>

              <a href="/products/storage-organizer">
                <Button className="mt-6 rounded-2xl px-6 py-5 text-sm font-medium">
                  View Storage Organizer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-16">

          <div className="rounded-[2rem] bg-emerald-600 px-8 py-10 text-white shadow-xl">

            <h3 className="text-2xl font-semibold md:text-3xl">
              Simple tools can make everyday spaces easier to manage.
            </h3>

            <p className="mt-3 max-w-xl text-sm text-white/80">
              Explore practical organizers and useful tools designed to keep
              desks, workspaces, and everyday environments cleaner and easier
              to use.
            </p>

            <div className="mt-6">
              <a href="/products/everyday-picks">
                <Button className="rounded-2xl bg-white px-6 py-5 text-sm font-medium text-gray-900 hover:bg-white/90">
                  Explore Helpful Tools
                </Button>
              </a>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}