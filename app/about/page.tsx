import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    const profilePic = '/profile.png';

    return (
        <main className="flex flex-col items-center justify-center p-4 main-homepage">
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full max-w-4xl">
                <div className="text-left md:w-10/12 mr-8 ml-4 md:mb-0">
                    <h1 className="text-5xl font-bold mb-6">
                        About me.
                    </h1>
                    <p className="p-about">
                        Despite having an interest in all things Science and Engineering when I was younger, I chose to pursue
                        Physics, a decision driven by passion for wanting to know how things work, as well as the broad
                        range of disciplines encompassed.
                    </p>

                    <p className="p-about">
                        Fascinated by my subject, I now study BSc Physics at the University of Sheffield.
                    </p>

                    <p className="p-about">
                        Along with Physics, I have always had a hand in electronics and programming. My
                        skills reflect this, and over time has lead me towards Data Science and Analytics. During my
                        placement year, I experienced how influential data skills can be, where I was able to make an
                        immediate and significant impact to multiple aspects of design and quality,
                        using Physics and Data literacy.
                    </p>

                    <p className="p-about">
                        When I'm not immersed in projects, I like to play Saxophone, enjoy playing squash & going to
                        the gym.
                    </p>

                    <p className="p-about">
                        Thanks for taking an interest – I look forward to any future opportunities. Please feel free
                        contact me via email or on LinkedIn.
                    </p>
                </div>
                <div className="md:w-1/2 flex items-center justify-center md:justify-end">
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