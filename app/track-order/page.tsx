import Image from 'next/image';

export const metadata = {
  title: 'Track Order | JuzzStore',
  description:
    'Track your JuzzStore order using your tracking number.',
};

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}
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
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-16">

        <section className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Track Your Order
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-600">
            Enter your tracking number below to check your delivery status.
          </p>
        </section>

        {/* Tracking Box */}
        <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <p className="text-sm text-neutral-600">
            After your order is shipped, you will receive a tracking number via email.
          </p>

          <div className="mt-6">
            <a
              href="https://www.17track.net/en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Track with 17TRACK
            </a>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-neutral-500">
          <div className="font-medium text-neutral-700">JuzzStore</div>
          <div className="mt-1">Make it Simple</div>
          <div className="mt-2">Singapore</div>
        </div>
      </footer>

    </div>
  );
}