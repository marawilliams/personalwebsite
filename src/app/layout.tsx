// src/app/layout.tsx
import "./globals.css";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: "400" });


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
    <html lang="en" className={pressStart2P.className}>
      <body>{children}</body>
    </html>
  );
}