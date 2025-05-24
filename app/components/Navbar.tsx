import Link from 'next/link';
import Logo from './Logo';

function NavItems() {
    return (
        <div>
            <Link href="/">Home</Link>   
            <Link href="/products">Products & Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
        </div>
    );
}


export default function Navbar() {
    return (
        <nav className="bg-white flex justify-between text-black">
            <Logo />
            <NavItems />
        </nav>
    )
}