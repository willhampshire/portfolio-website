"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    const profilePic = '/profile.png';

    useEffect(() => {
        // Add the 'noscroll' class to the body
        document.body.classList.add('noscroll');

        // Cleanup function to remove the 'noscroll' class when the component is unmounted
        return () => {
            document.body.classList.remove('noscroll');
        };
    }, []);

    return (
        <main className="flex flex-col items-center justify-center p-4 main-homepage">
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full max-w-4xl">
                <div className="text-left md:w-2/3 mr-8 ml-4 mb-8 md:mb-0">
                    <p className="text-lg mb-2">Hi, I'm</p>
                    <h2 className="text-5xl mb-4">William Hampshire.</h2>
                    <p className="text-xl mb-12">Physicist. Specialised in data science & coding.</p>

                    <Link href="/projects" passHref>
                        <button
                            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg
              hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                            See Projects.
                        </button>
                    </Link>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end">
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
    );
}
