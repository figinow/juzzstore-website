'use client';

import Script from "next/script";
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

export default function DrawerOrganizerPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4"/>
            Back to Homepage
          </a>
        </div>
      </header>


      {/* main */}
      <main className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12">


        {/* product image */}
        <div className="rounded-3xl overflow-hidden bg-white border">
          <img
            src="/images/drawer-organizer.jpg"
            alt="Drawer Organizer"
            className="w-full h-full object-cover"
          />
        </div>


        {/* product info */}
        <div>

          <h1 className="text-4xl font-semibold">
            Drawer Organizer
          </h1>

          <p className="mt-6 text-neutral-600 leading-7">
            A simple adjustable drawer organizer that helps keep everyday items,
            stationery, and small tools neatly arranged inside drawers.
          </p>


          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li>• Expandable divider design</li>
            <li>• Helps organize cluttered drawers</li>
            <li>• Suitable for desk drawers, kitchen drawers, and storage cabinets</li>
            <li>• Easy setup and adjustable layout</li>
          </ul>


          {/* tiktok video */}
          <div className="mt-10">

            <h3 className="text-xl font-semibold mb-4">
              See it in action
            </h3>

            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@krisctk/video/7455556033352699154"
              data-video-id="7455556033352699154"
              style={{ maxWidth: '605px', minWidth: '325px' }}
            >
              <section></section>
            </blockquote>

          </div>


          {/* buttons */}
          <div className="mt-10 flex gap-4">

            <a
              href="https://collshp.com/figinow?view=storefront"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-xl px-6 py-5">
                View Product
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


      {/* TikTok embed script */}
      <Script async src="https://www.tiktok.com/embed.js"></Script>

    </div>
  );
}