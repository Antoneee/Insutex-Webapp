import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';

function NavItems() {
    return (
        <div className='flex gap-12 items-center'>
            <Link href="/">Home</Link>   
            <div className="relative group">
                <button className="flex items-center gap-2 px-4 hover:text-accent focus:outline-none">
                    <span>Products & Services</span>

                    {/* Chevron icon */}
                    <svg
                        className="w-4 h-4 transition-transform duration-200 transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Dropdown content */}
                <div className="absolute w-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 invisible group-hover:visible transition-all duration-200 z-50">
                    <Link
                        href="/cnc-precision-machining-forging"
                        className="block px-4 py-2 hover:text-accent"
                    >
                        CNC, Precision Machining, Forging
                    </Link>
                    <Link
                        href="/friction-and-metallurgical-materials"
                        className="block px-4 py-2 hover:text-accent"
                    >
                        Friction and Metallurgical Materials
                    </Link>
                    <Link
                        href="/foundry-and-smelters"
                        className="block px-4 py-2 hover:text-accent"
                    >
                        Foundry and Smelters
                    </Link>
                </div>
            </div>
            <Link href="/about">About Us</Link>
            <Link href="/contact">
                <Button bgColor="bg-accent text-neutral-white">Contact</Button>
            </Link>
        </div>
    );
}


export default function Navbar() {
    return (
        <nav className="bg-white sticky top-0 z-50 flex justify-between text-black px-10 py-4 shadow">
            <Logo />
            <NavItems />
        </nav>
    )
}