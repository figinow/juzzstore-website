'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';

export default function EverydayPicksPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <a href="/" className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900">
            <ArrowLeft className="h-4 w-4"/>
            Back to Homepage
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12">

        <div className="rounded-3xl overflow-hidden bg-white border">
          <img
            src="/images/everyday-tools.jpg"
            alt="Useful everyday tools"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-semibold">
            Useful Everyday Picks
          </h1>

          <p className="mt-6 text-neutral-600 leading-7">
            A curated collection of practical gadgets and useful tools that
            make daily routines, home setups, and work corners easier to manage.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li>• Practical everyday gadgets</li>
            <li>• Simple tools for home and workspace</li>
            <li>• Useful items for daily routines</li>
            <li>• Curated picks from JuzzStore</li>
          </ul>

          <div className="mt-10 flex gap-4">

            <a
              href="https://collshp.com/figinow?view=storefront"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-xl px-6 py-5">
                Explore Picks
                <ArrowRight className="ml-2 h-4 w-4"/>
              </Button>
            </a>

            <a href="mailto:support@juzzstore.com">
              <Button variant="outline" className="rounded-xl px-6 py-5">
                Ask Question
              </Button>
            </a>

          </div>
        </div>

      </main>
    </div>
  );
}