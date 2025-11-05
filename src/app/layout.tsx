// src/app/layout.tsx
import "./globals.css";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: "400" });


export const metadata = {
  title: 'mara williams portfolio',
  description: 'Landing Page',
  icons: {
    icon: "/assets/flowerhovered.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black"
  }
};

export const viewport = {
  themeColor: "#6C7F5B", // background color for status bar
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pressStart2P.className}>
      <body>{children}</body>
      <head>
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#6C7F5B" />
      </head>
    </html>
  );
}