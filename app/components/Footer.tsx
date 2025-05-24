import Link from 'next/link';
import Logo from "./Logo";

function FooterItems() {
    return (
        <div>
            <Link href="/">Home</Link>   
            <Link href="/products">Products & Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-white flex justify-between text-black">
            <Logo />
            <FooterItems />
        </footer>
    )
}