import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Condensed } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  weight: '300'
});

export const metadata: Metadata = {
  title: 'OGGO•LLC | Industrial Steel Manufacturing & Services',
  description: 'Kosovo-based steel manufacturing company specializing in galvanizing, welding, and steel parts for cable cars, shipyards, harbors, and cargo transport across Europe.',
  keywords: 'steel manufacturing, galvanizing, welding, Kosovo, Europe, cable cars, shipyards, harbors, ports, cargo transport',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoCondensed.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}