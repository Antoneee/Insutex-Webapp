import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';

function NavItems() {
    return (
        <div className='flex gap-12 items-center'>
            <Link href="/">Home</Link>   
            <Link href="/products">Products & Services</Link>
            <Link href="/about">About Us</Link>
            <Button bgColor="bg-accent text-neutral-white">Contact</Button>
        </div>
    );
}


export default function Navbar() {
    return (
        <nav className="bg-white flex justify-between text-black px-10 py-4">
            <Logo />
            <NavItems />
        </nav>
    )
}