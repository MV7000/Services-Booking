import type { Metadata } from 'next';
import './globals.css';

import NextAuthSessionProvider from './provider';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { Toaster } from '@/components/ui/sonner';
import SmoothScrolling from '@/app/functions/SmoothScrolling';
import { ScrollUpButton } from '@/components/ScrollUpButton/ScrollUpButton';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Services APP',
  description: 'My first project on NEXT JS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang='en'>
      <body>
        <NextAuthSessionProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <SmoothScrolling>{children}</SmoothScrolling>
            <Toaster />
            <Footer />
            <ScrollUpButton />
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
