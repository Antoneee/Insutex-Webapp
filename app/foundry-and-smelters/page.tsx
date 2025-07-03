import Image from "next/image";
import type { StaticImageData } from 'next/image';
import AlliedMineralLogo from '@/public/foundry-and-smelters/allied-mineral-logo.png';
import AlleasturLogo from '@/public/foundry-and-smelters/alleastur-logo.png';
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
}

function Card({img, alt, href, title, items}: CardProps) {
    return (
        <div className="p-10 w-96 bg-primary-light border-8 border-primary-medium">
            <div className="h-48 flex items-center justify-center mb-3">
                <Image className="h-auto"src={img} alt={alt}/>
            </div>
            <div className="h-48 mb-6">
                <h3 className="uppercase text-primary font-bold">
                    {title}
                </h3>
                <ul className="list-disc list-inside">
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
                <Link href={`foundry-and-smelters/${href}`}>
                    <Button bgColor="bg-primary text-neutral-white block mx-auto">Learn More</Button>
                </Link>
        </div>
    )
}

export default function FoundryAndSmelters() {
    return (
        <main>
            <section>
                    <div className="bg-primary-light bg-cover bg-center px-20 pt-20 pb-10">
                        <h1 className="text-primary mb-2">Foundry and Smelters</h1>
                        <p className="text-xl text-neutral-black">Insutex Industries &rarr; Foundry and Smelters</p>
                    </div>
                </section>
                <section>
                    <div className="p-20 text-lg text-center">
                        <p className="w-3/4 mx-auto">
                            We offer a variety of materials in different shapes and forms. If you don’t see what you’re looking for, please contact us—we’ll be happy to assist you!                        <br/>
                        </p>  
                    </div>
                </section>
            <section>
                <div className="flex flex-col gap-8 mb-32">
                    <div className="flex justify-center gap-8">
                        <Card img={AlliedMineralLogo} alt="Allied Mineral logo" href="allied-mineral" title="Allied Mineral" 
                        items={["Monolithic refractory ceramics", "Providing top quality refractories and precast shapes."]}/>

                        <Card img={AlleasturLogo} alt="Alleastur logo" href="alleastur" title="Alleastur" 
                        items={["Leading company in production of grain refiners and master alloys"]}/>

                        <Card img={AsburyLogo} alt="Asbury logo" href="asbury" title="Asbury" 
                        items={["Leading company in natural and synthetic graphite, raw materials and other carbon products"]}/>
                    </div>
                    <div className="flex justify-center gap-8">
                        <Card img={SeowonLogo} alt="Seowon logo" href="seowon" title="Seowon" 
                        items={["Brass & Bronze Ingot", "Seowon is a specialized manufacturer of non-ferrous metals"]}/>

                        <Card img={InsutexLogo} alt="Insutex logo" href="insutex" title="Insutex Industries Sdn. BhD." 
                        items={["Aluminium", "Smelter", "Consumable", "Mouldable", "Coating", "Foundry Flux"]}/>
                    </div>
                </div>
            </section>
        </main>
    )
}