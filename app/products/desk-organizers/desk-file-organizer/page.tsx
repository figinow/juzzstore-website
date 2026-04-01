import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';

export default function DeskFileOrganizerPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">
              Desk Organization
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Desk File Organizer
            </h1>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Keep papers, folders, magazines, and everyday desk items neatly arranged
              with a vertical organizer that helps free up valuable workspace without
              taking over your desk.
            </p>

            <div className="mt-8 space-y-3 text-sm text-neutral-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                <span>Vertical design helps save horizontal desk space</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                <span>Multiple slots for files, notebooks, and documents</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                <span>Simple, practical look for home or office use</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-full px-6">
                <Link href="https://www.juzzstore.com/products/desk-organizers">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] rounded-[2rem] border border-neutral-200 bg-neutral-50 p-3 shadow-xl">
              <div className="overflow-hidden rounded-[1.5rem] bg-black">
                <video
                  className="h-auto w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  poster="/images/desk-organizer-cover.jpg"
                >
                  <source src="/videos/desk-organizer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Section */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Space-Saving Design</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Designed to store your files vertically so your desk can feel cleaner,
                more open, and easier to work on.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Easy Everyday Use</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Great for sorting documents, letters, notebooks, and magazines in one
                convenient place for quicker access.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Clean, Simple Look</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                A practical organizer that fits nicely into home offices, study corners,
                and everyday workspaces without looking bulky.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}