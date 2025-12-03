import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Suncity Solar | Powering Bharat\'s Future',
    template: '%s | Suncity Solar',
  },
  description:
    'Reliable, high-quality solar solutions made in Bharat — empowering homes, businesses, farms, and industries toward an energy-independent and sustainable future.',
  keywords: ['solar panels', 'solar energy', 'Suncity Solar', 'renewable energy India', 'solar systems for home'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
