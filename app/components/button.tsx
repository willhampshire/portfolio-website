import React from 'react';
import Link from 'next/link'; // Import Link for internal routing

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    external?: boolean; // Add this to handle external links
}

const Button: React.FC<ButtonProps> = ({ text, href, onClick, className, external }) => {
    if (href) {
        const isExternal = external === true;
        const httpHref = isExternal && !href.startsWith('http')
            ? `https://${href}`
            : href;


        return (
            <Link href={httpHref}
                    className={`border-2 border-white text-white bg-transparent rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 ${className}`}
                >
                    {text}

            </Link>
        );

    }
};

export default Button;
