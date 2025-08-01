import Image from "next/image";
import type { StaticImageData } from 'next/image';
import AlliedMineralLogo from '@/public/foundry-and-smelters/allied-mineral-logo.png';
import AleasturLogo from '@/public/foundry-and-smelters/aleastur-logo.png';
import AsburyLogo from '@/public/foundry-and-smelters/asbury-logo.png';
import SeowonLogo from '@/public/foundry-and-smelters/seowon-logo.png';
import InsutexLogo from '@/public/foundry-and-smelters/insutex-logo.png';
import Button from "../components/Button";
import Link from "next/link";

type CardProps = {
    img: StaticImageData;
    alt: string;
    href: string;
    title: string;
    items: string[];
};

function Card({ img, alt, href, title, items }: CardProps) {
    return (
        <div className="p-10 w-96 bg-primary-light border-8 border-primary-medium flex flex-col justify-between h-full">
            <div>
                <div className="h-48 flex items-center justify-center mb-3">
                    <Image className="h-auto" src={img} alt={alt} />
                </div>
                <div className="mb-6">
                    <h3 className="uppercase text-primary font-bold">{title}</h3>
                    <div className="space-y-1">
                        {items.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <span className="text-primary font-bold text-xl leading-none mt-1">•</span>
                                <span className="text-neutral-black leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Link href={href}>
                <Button bgColor="bg-primary text-neutral-white block mx-auto">Learn More</Button>
            </Link>
        </div>
    );
}

export default function FoundryAndSmelters() {
    return (
        <main>
            {/* Hero Section */}
            <section>
                <div className="bg-primary-light bg-cover bg-center px-6 py-20 md:px-20">
                    <h1 className="text-primary mt-10 md:mt-20">Foundry and Smelters</h1>
                    <p className="text-base md:text-xl text-neutral-black">
                    <Link href="/" className="hover:underline text-primary">
                        Insutex Industries
                    </Link>
                    {" "}
                    &rarr;
                    {" "}
                    <Link href="/foundry-and-smelters" className="hover:underline text-primary">
                        Foundry and Smelters
                    </Link>
                    </p>
                </div>
                </section>

            {/* Intro Text */}
            <section>
                <div className="px-6 md:px-20 py-10 md:py-20 text-lg text-center">
                    <p className="max-w-3xl mx-auto text-base md:text-lg">
                        We offer a variety of materials in different shapes and forms. If you don’t see what you’re looking for, please contact us—we’ll be happy to assist you!
                    </p>
                </div>
            </section>

            {/* Cards Section */}
            <section>
                <div className="flex flex-col gap-8 mb-20 px-6 md:px-20">
                    
                    {/* Top 3 Cards */}
                    <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch">
                        <Card
                            img={AlliedMineralLogo}
                            alt="Allied Mineral logo"
                            href="foundry-and-smelters/allied-mineral"
                            title="Allied Mineral"
                            items={[
                                "Monolithic refractory ceramics",
                                "Providing top quality refractories and precast shapes.",
                            ]}
                        />
                        <Card
                            img={AleasturLogo}
                            alt="Aleastur logo"
                            href="foundry-and-smelters/aleastur"
                            title="Aleastur"
                            items={["Leading company in production of grain refiners and master alloys"]}
                        />
                        <Card
                            img={AsburyLogo}
                            alt="Asbury logo"
                            href="foundry-and-smelters/graphite-materials"
                            title="Asbury"
                            items={["Leading company in natural and synthetic graphite, raw materials and other carbon products"]}
                        />
                    </div>

                    {/* Bottom 2 Cards */}
                    <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch">
                        <Card
                            img={SeowonLogo}
                            alt="Seowon logo"
                            href="foundry-and-smelters/seowon"
                            title="Seowon"
                            items={["Brass & Bronze Ingot", "Seowon is a specialized manufacturer of non-ferrous metals"]}
                        />
                        <Card
                            img={InsutexLogo}
                            alt="Insutex logo"
                            href="foundry-and-smelters/insutex"
                            title="Insutex Industries Sdn. BhD."
                            items={["Aluminium", "Smelter", "Consumable", "Mouldable", "Coating", "Foundry Flux"]}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
