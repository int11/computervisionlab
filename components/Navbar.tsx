import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between mx-auto px-4">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <img
                            src="/computervisionlab/images/ui/hero_logo.png"
                            alt="CVL Logo"
                            className="h-12 w-auto group-hover:scale-105 transition-transform object-contain"
                        />
                    </Link>
                </div>
                <div className="flex gap-6 items-center">
                    <Link href="/people" className="text-sm font-medium transition-colors hover:text-primary">
                        People
                    </Link>
                    <Link href="/research" className="text-sm font-medium transition-colors hover:text-primary">
                        Research
                    </Link>
                    <Link href="/publications" className="text-sm font-medium transition-colors hover:text-primary">
                        Publications
                    </Link>
                    <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
