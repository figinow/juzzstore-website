'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

export default function DeskFileOrganizerPage() {
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
            src="/images/file-organizer.jpg"
            alt="Desk File Organizer"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-semibold">
            Desk File Organizer
          </h1>

          <p className="mt-6 text-neutral-600 leading-7">
            A simple multi-tier desk organizer designed to keep documents,
            magazines, papers, and everyday desk items neatly arranged.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li>• Multi-layer design for documents and magazines</li>
            <li>• Saves desk space</li>
            <li>• Keeps paperwork visible and organized</li>
            <li>• Suitable for home offices and small workspaces</li>
          </ul>

          <div className="mt-10 flex gap-4">

            <a
              href="https://shopee.sg/juzzstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-xl px-6 py-5">
                View on Shopee
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