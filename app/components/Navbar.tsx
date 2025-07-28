'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';
import { Menu, X } from 'lucide-react';

function NavItems({ isMobile = false }: { isMobile?: boolean }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const linkClass = "block px-4 py-2 hover:text-accent";

    return (
        <div className={`${isMobile ? 'flex flex-col gap-2 text-center' : 'flex gap-12 items-center'}`}>
            <Link href="/" className={linkClass}>Home</Link>

            <div className={`relative ${isMobile ? 'text-center' : ''}`}>
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 px-4 hover:text-accent focus:outline-none w-full justify-center"
                >
                    <span>Products & Services</span>
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 transform ${dropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Dropdown */}
                <div
                    className={`absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-300 ease-in-out transform ${
                        dropdownOpen
                            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                >
                    <Link
                        href="/cnc-precision-machining-forging"
                        className={linkClass}
                        onClick={() => setDropdownOpen(false)}
                    >
                        CNC, Precision Machining, Forging
                    </Link>
                    <Link
                        href="/friction-and-metallurgical-materials"
                        className={linkClass}
                        onClick={() => setDropdownOpen(false)}
                    >
                        Friction and Metallurgical Materials
                    </Link>
                    <Link
                        href="/foundry-and-smelters"
                        className={linkClass}
                        onClick={() => setDropdownOpen(false)}
                    >
                        Foundry and Smelters
                    </Link>
                </div>
            </div>

            <Link href="/about" className={linkClass}>About Us</Link>
            <Link href="/contact" className="px-4">
                <Button bgColor="bg-accent text-white">Contact</Button>
            </Link>
        </div>
    );
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-50 shadow px-6 py-4">
            <div className="flex items-center justify-between">
                <Logo />
                {/* Hamburger icon for mobile */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* Desktop nav */}
                <div className="hidden md:flex">
                    <NavItems />
                </div>
            </div>

            {/* Mobile nav */}
            <div
                className={`mt-4 md:hidden transform transition-all duration-300 ease-in-out origin-top ${
                    menuOpen ? 'opacity-100 scale-100 max-h-[500px]' : 'opacity-0 scale-95 max-h-0 overflow-hidden'
                }`}
            >
                <NavItems isMobile />
            </div>
        </nav>
    );
}
