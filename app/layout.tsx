import BackToTop from '../components/back-to-top';
import { Analytics } from '@vercel/analytics/react'

import './globals.css';

export const metadata = {
  title: "JuzzStore",
  description: "Make it Simple",
icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <Analytics />

        <script async src="https://www.tiktok.com/embed.js"></script>
<BackToTop />
      </body>
    </html>
  );
}