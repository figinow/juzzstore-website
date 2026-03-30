import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export const metadata = {
  title: 'FAQ | JuzzStore',
  description:
    'Frequently asked questions about orders, delivery, shipping, and how JuzzStore works.',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo/juzzstore-logo.png"
              alt="JuzzStore Logo"
              width={260}
              height={80}
              className="h-14 w-auto"
              priority
            />
          </a>

          <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
            <a href="/products/desk-organizers" className="hover:text-gray-900">
              Desk Organization
            </a>
            <a href="/products/home-organization" className="hover:text-gray-900">
              Home Organization
            </a>
            <a href="/products/simple-living" className="hover:text-gray-900">
              Simple Living
            </a>
            <a href="/#our-story" className="hover:text-gray-900">
              About
            </a>
            <a href="/faq" className="font-medium text-gray-900">
              FAQ
            </a>
            <a href="/track-order" className="hover:text-gray-900">
              Track Order
            </a>
          </nav>

          <div className="md:hidden">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-2 text-sm text-neutral-700"
            >
              Home
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-600 md:text-lg">
            Answers to common questions about orders, delivery, and how JuzzStore works.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">How long does delivery take?</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Orders are typically delivered within 5–12 working days depending on the item and destination.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Do you ship internationally?</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Yes, we ship to multiple countries. Delivery time may vary based on location.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Where do your products ship from?</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Products are shipped from our fulfillment partners depending on availability and location.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Will items arrive separately?</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Some items may arrive in separate packages if they are shipped from different locations.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">How can I track my order?</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Once your order is shipped, you will receive tracking details. You can also use our Track Order page.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Can I cancel or change my order?</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Orders can be modified shortly after placing them. Please contact support as soon as possible.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">What if I receive a damaged item?</h3>
            <p className="mt-3 text-sm text-neutral-600">
              If your item arrives damaged, please contact us with photos and we will assist you with a solution.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">How can I contact support?</h3>
            <p className="mt-3 text-sm text-neutral-600">
              You can reach us at support@juzzstore.com and we will get back to you as soon as possible.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-neutral-500">
          <div className="font-medium text-neutral-700">JuzzStore</div>
          <div className="mt-1">Make it Simple</div>
          <div className="mt-2">Singapore</div>
          <div className="mt-3 text-xs text-neutral-400">© 2026 JuzzStore. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}