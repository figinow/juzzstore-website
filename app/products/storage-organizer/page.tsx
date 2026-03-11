'use client';

import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';

const highlights = [
  'Transparent design makes stored items easier to see at a glance',
  'Foldable structure helps save space when not in use',
  'Stackable design helps organize vertically',
  'Side opening door gives easier access without opening from the top',
  'Bottom pulley / wheel design helps move the box more easily',
];

const useCases = [
  'Clothes and folded laundry',
  'Blankets and bedding',
  'Toys and household items',
  'Books, snacks, or daily storage items',
];

export default function StorageOrganizerPage() {
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
          <div className="text-sm font-medium text-neutral-500">Storage Organizer</div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-center rounded-[1.5rem] bg-neutral-100 p-4">
              <img
                src="/images/storage-organizer.jpg"
                alt="Foldable transparent storage organizer"
                className="max-h-[520px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              Practical Home Storage Pick
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Foldable Transparent Storage Organizer
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              A practical foldable storage organizer designed to keep household items neatly arranged
              while saving space. The transparent design makes it easier to see what is stored inside,
              while the stackable structure helps organize vertically.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Transparent design
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Foldable storage box
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Stackable and movable
              </div>
            </div>
<div className="mt-12 flex justify-center">
  <iframe
    src="https://www.tiktok.com/player/v1/7416864309034142983"
    className="w-full max-w-[380px] rounded-2xl border border-gray-200"
    style={{ height: '675px' }}
    allow="fullscreen"
  />
</div></div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://vt.tiktok.com/ZS9dbVSqcUhGo-rrrFG/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-2xl px-6 py-6 text-sm font-medium">
                  View on TikTok
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
                A simple storage box that makes household organization easier.
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Unlike traditional solid storage boxes, this organizer uses transparent panels so the
                contents are easier to identify without opening every container. This helps reduce the
                time spent searching for things.
              </p>
              <p className="mt-4 leading-7 text-neutral-600">
                The side opening design makes access more convenient, while the foldable structure
                helps save space when the organizer is not in use. It is suitable for bedrooms,
                living rooms, balconies, and general home storage corners.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-gray-50 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Simple benefits
              </div>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Easier to see stored items through the transparent panels
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Side opening access helps you reach things without removing the lid
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Foldable design saves space when not in use
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm">
                  Wheels help move stacked storage more easily
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
                Designed for visibility, access, and space saving.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/storage-organizer-side-opening.jpg"
                  alt="Storage organizer side opening access"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/storage-organizer-movable.jpg"
                  alt="Storage organizer pulley wheel design"
                  className="w-full h-auto object-contain"
                />
              </div>
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
                Discover more practical organizers and useful everyday picks.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
                Browse simple products and storage ideas designed to make home, work, and daily life
                easier to manage.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://collshp.com/figinow?view=storefront"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-2xl bg-white px-6 py-6 text-sm font-medium text-gray-900 hover:bg-white/90">
                    Explore Useful Picks
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