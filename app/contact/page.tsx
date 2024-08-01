"use client";

import HyperLink from '../components/hyper';

import {useEffect} from "react";

export default function ContactPage() {
    useEffect(() => {
        // Add the 'noscroll' class to the body
        document.body.classList.add('noscroll');

        // Cleanup function to remove the 'noscroll' class when the component is unmounted
        return () => {
            document.body.classList.remove('noscroll');
        };
    }, []);


    return (
        <div className="relative z-0 flex justify-center p-4">
            <main className="w-full z-0 max-w-4xl bg-black bg-opacity-40 backdrop-blur-2xl p-6 rounded-lg shadow-lg">
                <div className="rounded-3xl p-4 md:p-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact me.</h1>

                    <div className='my-8'>
                        <HyperLink external={true}
                            href='http://linkedin.com/in/william-hampshire' text='linkedin.com/in/william-hampshire'/>
                    </div>
                    <div className='my-8'>
                        <HyperLink
                            href='mailto:w.hampshire@icloud.com?subject=Re:%20willamhampshire.com' text='w.hampshire@icloud.com'/>
                        {/* Add more ProjectUnit components as needed */}
                    </div>
                </div>
            </main>
        </div>
    );
}
