import type { Metadata } from 'next';
import { Bayon } from 'next/font/google';

import './globals.css';
import { Navbar } from '@/components/shared/Navbar';

const bayon = Bayon({ subsets: ['latin'], weight: '400' });

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
      <body className={bayon.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
