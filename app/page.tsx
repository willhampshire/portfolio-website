"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
    const profilePic = '/profile.png';

    useEffect(() => {
        document.title = "Will Hampshire";
        // Function to handle adding/removing 'noscroll' class
        const handleResize = () => {
            // Check if screen width is less than 768px (mobile)
            if (window.matchMedia("(min-width: 768px)").matches) {
                // Apply 'noscroll' class if in desktop mode
                document.body.classList.add('noscroll');
            } else {
                // Remove 'noscroll' class if in mobile mode
                document.body.classList.remove('noscroll');
            }
        };

        // Add event listener for screen resize
        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.classList.remove('noscroll');
        };
    }, []);

    return (
        <>
            <main className="homepage">
            <div className="flex my-auto flex-col md:flex-row items-center md:items-center justify-between w-full max-w-4xl">
                <div className="text-left mr-auto md:mr-8 md:w-2/3 ml-4 my-8">
                    <p className="text-md md:text-lg mb-4 md:mb-2">{"Hi, I'm"}</p>
                    <h2 className="text-4xl md:text-5xl mb-4">William Hampshire.</h2>
                    <p className="text-md md:text-xl mb-8 md:mb-12">Physicist. Specialised in data science.</p>

                    <Link href="/projects" passHref>
                        <button
                            className="text-md md:text-lg px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg
              hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                            See Projects.
                        </button>
                    </Link>
                </div>

                <div className="w-full md:w-1/2 m-4 p-4 flex items-center justify-start md:justify-end">
                    <Image
                        src={profilePic}
                        alt="Will Hampshire"
                        width={300}
                        height={300}
                        className="rounded-2xl"
                    />
                </div>
            </div>
        </main>
        </>
    );
}
