import Link from 'next/link';
import Logo from "./Logo";

function FooterItems() {
    return (
        <div className='flex gap-12 items-center'>
            <Link href="/">Home</Link>   
            <Link href="/products">Products & Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-primary flex justify-between text-white px-10 py-4">
            <Logo />
            <FooterItems />
        </footer>
    )
}