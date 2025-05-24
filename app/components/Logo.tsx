import Image from "next/image";
import Link from 'next/link';
import InsutexLogo from "@/public/insutex-logo.svg";

export default function Logo() {
    return (
        <Link href="/" className="text-black">
            <Image src={InsutexLogo} alt="alt"/>
        </Link>
    );
}