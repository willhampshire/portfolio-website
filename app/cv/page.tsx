"use client";

import {useEffect, useState} from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const options = [
    { name: 'Data', url: '/CV_WH_data.pdf' },
    { name: 'Physics', url: '/CV_WH_physics.pdf' }

];

export default function CVPage() {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = selectedOption.url;
        link.download = `${selectedOption.url.slice(1)}`;
        link.click();
    };

    useEffect(() => {
        // Add the 'noscroll' class to the body
        document.body.classList.add('noscroll');

        // Cleanup function to remove the 'noscroll' class when the component is unmounted
        return () => {
            document.body.classList.remove('noscroll');
        };
    }, []);

    return (
        <div className="flex justify-center p-4">
            <main className="w-full max-w-4xl bg-black bg-opacity-40 backdrop-blur-2xl p-6 rounded-lg shadow-lg">
                <div className="rounded-3xl p-4 md:p-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Download my CV.</h1>
                    <p className="mb-6 text-gray-300">Please select CV.</p>

                    <div className="w-36 mb-4">
                        <Listbox value={selectedOption} onChange={setSelectedOption}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white text-black
                                py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500
                                focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm
                                focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500">
                                    <span className="block truncate">{selectedOption.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {options.map((option, optionIdx) => (
                                            <Listbox.Option
                                                key={optionIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                        active ? 'bg-blue-200 text-blue-900' : 'text-black'
                                                    }`
                                                }
                                                value={option}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${
                                                                selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                        >
                                                            {option.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900">
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>

                    <button onClick={handleDownload} className="text-sm md:text-lg bg-blue-500 hover:bg-blue-700 my-4 text-white font-bold
                    py-2 px-4 rounded">
                        Download.
                    </button>
                </div>
            </main>
        </div>
    );
}

interface CheckIconProps extends React.SVGProps<SVGSVGElement> {}
// You'll need to import this or install @heroicons/react
function CheckIcon(props: CheckIconProps) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
