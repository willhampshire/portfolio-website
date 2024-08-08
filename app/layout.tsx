"use client";

import { useState } from 'react';
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Button from './components/button';
import { FaBars, FaTimes } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });
const dmserif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="relative min-h-screen">
            <div className="background-container -z-40">
                <div className="gradient"></div>
                <div className="mobile-gradient"></div>
            </div>
            <header className="flex items-center z-40 p-4 bg-opacity-50 backdrop-blur-md drop-shadow-2xl relative">
                <Link href="/" passHref>
                    <h1 className={`text-3xl cursor-pointer items-center justify-center text-white`}>W.H.</h1>
                </Link>
                <nav className="flex items-center z-40">
                    <div className="md:hidden position-relative z-40 flex items-center">
                        <ul className={`flex-col z-40 absolute top-16 left-0 right-0 bg-opacity-40 backdrop-blur-sm 
                        p-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:static md:bg-transparent 
                        md:backdrop-blur md:space-y-0 md:space-x-6 text-lg border-y b-2 border-white border-opacity-50`}>
                            <li><Link href="/" className="navbar-text text-white" onClick={closeMenu}>Home</Link></li>
                            <li><Link href="/about" className="navbar-text text-white" onClick={closeMenu}>About</Link></li>
                            <li><Link href="/projects" className="navbar-text text-white" onClick={closeMenu}>Projects</Link></li>
                            <li><Link href="/contact" className="navbar-text text-white" onClick={closeMenu}>Contact</Link></li>
                            <li><Link href="/cv" className="navbar-text text-white" onClick={closeMenu}>CV</Link></li>
                        </ul>
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-400"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                    <ul className="hidden md:flex space-x-6 text-lg">
                        <li><Link href="/" className="navbar-text text-white">Home</Link></li>
                        <li><Link href="/about" className="navbar-text text-white">About</Link></li>
                        <li><Link href="/projects" className="navbar-text text-white">Projects</Link></li>
                        <li><Link href="/contact" className="navbar-text text-white">Contact</Link></li>
                        <li><Button text="CV" href="/cv"/></li>
                    </ul>
                </nav>
            </header>
            {children}
        </div>
        </body>
        </html>
    );
}
