// src/app/layout.tsx

export const metadata = {
  title: 'mara williams portfolio',
  description: 'Landing Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}