import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Website',
  description: 'Personal site built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
