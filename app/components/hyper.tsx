// components/Hyperlink.tsx
import Link from 'next/link';

interface HyperlinkProps {
    href: string;
    text: string;
    className?: string; // Optional className for additional styling
    external?: boolean;
}

const Hyperlink: React.FC<HyperlinkProps> = ({ href, text, className,
                                                 external }) => {
    const isExternal = external === true

    const httpHref = isExternal && !href.startsWith('http')
        ? `https://${href}`
        : href;

    if (isExternal) {
        return (
            <a
                href={httpHref}
                className={`hyper ${className}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
        );

    } else
    {
        return (
            <Link href={href}>
                <a className={`hyper ${className}`}>{text}</a>
            </Link>
        );
    };
};

export default Hyperlink;
