import Link from 'next/link';
import Logo from "./Logo";

function FooterItems() {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-center">
            <Link href="/">Home</Link>
            <Link href="/products">Products & Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-primary text-white px-6 py-6 md:px-10 md:py-8">
            <div className="flex flex-col md:flex-row md:justify-between items-center w-full text-center md:text-left">
                <Logo />
                <FooterItems />
            </div>
        </footer>
    );
}
