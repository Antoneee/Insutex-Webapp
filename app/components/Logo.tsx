import Image from "next/image";
import Link from 'next/link';
import InsutexLogo from "@/public/insutex-logo.svg";

export default function Logo() {
    return (
        <div className='bg-neutral-white px-2 py-1'>
            <Link href="/" className="text-black">
                <Image src={InsutexLogo} alt="Insutex Logo"/>
            </Link>
        </div>
    );
}