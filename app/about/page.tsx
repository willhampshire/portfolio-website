"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export default function AboutPage() {
    const profilePic = '/profile.png';

    useEffect(() => {
        // Function to handle adding/removing 'noscroll' class
        const handleResize = () => {
            document.body.classList.remove('noscroll');
            // Check if screen width is less than 768px (mobile)
            //if (window.matchMedia("(min-width: 768px)").matches) {
                // Apply 'noscroll' class if in desktop mode
                // document.body.classList.add('noscroll');

            //} else {
                // Remove 'noscroll' class if in mobile mode
             //   document.body.classList.remove('noscroll');
            //}
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
        <main className="homepage">
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full max-w-4xl">

                <div className="text-left md:w-2/3 mr-8 ml-4 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About me.
                    </h1>
                    <p className="p-about text-sm md:text-md">
                        Despite having an interest in all things Science and Engineering when I was younger, I chose to
                        pursue
                        Physics, a decision driven by passion for wanting to know how things work, as well as the broad
                        range of disciplines encompassed.
                    </p>

                    <p className="p-about text-sm md:text-md">
                        Fascinated by my subject, I now study BSc Physics at the University of Sheffield.
                    </p>

                    <p className="p-about text-sm md:text-md">
                        Along with Physics, I have always had a hand in Electronics and Programming. My
                        skills reflect this, and over time has lead me towards both Data Science and Photonics. During my
                        placement year, I experienced how influential data skills can be in photonics related industry,
                        where I was able to make an
                        immediate and significant impact to multiple aspects of design and quality,
                        using Physics and Data Science.
                    </p>

                    <p className="p-about text-sm md:text-md">
                        {"When I'm not immersed in projects, I like to play Saxophone, enjoy playing squash & going to the gym."}
                    </p>

                    <p className="p-about text-sm md:text-md">
                        Thanks for taking an interest – I look forward to any future opportunities. Please feel free
                        contact me via email or on LinkedIn.
                    </p>
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
    );
}