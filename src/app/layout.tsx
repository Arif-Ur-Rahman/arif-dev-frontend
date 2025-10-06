import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Preloader from '@/components/global-components/preloader';
import Navbar from '@/components/global-components/Navbar';
import EnhancedFooter from '@/components/global-components/Footer';
// import Preloader from '@/components/Preloader';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Personal portfolio built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader />
        <Navbar />
        <main className="pt-20"> {/* Add padding to account for fixed header */}
          {children}
        </main>
        <EnhancedFooter />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}