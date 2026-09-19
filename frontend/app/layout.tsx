import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Promise Hotel & Resort - Luxury Real Estate & Investment',
  description: "Modern high-end luxury real estate & investment portal for The Promise Hotel & Resort in Inani, Cox's Bazar. Featuring 125-Bigha master plan bento grid, contained hero, investment packages, and interactive advisor.",
  openGraph: {
    title: 'The Promise Hotel & Resort - Luxury Real Estate & Investment',
    description: "Modern high-end luxury real estate & investment portal for The Promise Hotel & Resort in Inani, Cox's Bazar. Featuring 125-Bigha master plan bento grid, contained hero, investment packages, and interactive advisor.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F9FA] text-[#333333] antialiased selection:bg-[#E5C378] selection:text-[#0B1B3D]">
        {children}
      </body>
    </html>
  );
}
