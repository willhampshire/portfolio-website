import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Button from './components/button';

const inter = Inter({ subsets: ["latin"] });
const dmserif = DM_Serif_Display({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Will Hampshire's Portfolio",
  description: "Will Hampshire, Physicist and Data Scientist.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <div className="relative min-h-screen">
          <div className="background-container">
              <div className="gradient"></div>
          </div>
          <header>
              <Link href="/" passHref>
                  <h1 className={`${dmserif.className} text-3xl`}>W.H.</h1>
              </Link>
              <nav>
                  <ul className="flex space-x-6 text-lg">

                      <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
                      <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
                      <li><Link href="/projects" className="hover:text-gray-600">Projects</Link></li>
                      <li><Button text="CV" href="/cv"/></li>
                  </ul>
              </nav>
          </header>
          <main>{children}</main>

      </div>
      </body>
      </html>
  );
}
