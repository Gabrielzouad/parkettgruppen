import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';

import './globals.css';
import { Navbar } from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const oswald = Oswald({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Parkettgruppen',
  description:
    'Vi leverer og monterer alle typer parkett. Vi har et utallig utvalg av typer og treslag, fra veletablerte produsenter som Tarkett, Boen og Gunreben. Vi har også et stort utvalg av motiver, kompassroser og spesialkomponenter til gulv.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={oswald.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
