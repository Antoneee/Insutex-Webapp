import Image from "next/image";
import AsburyLogo from '@/public/friction-and-metallurgical-materials/graphite-materials/asbury-logo.png';
import Link from "next/link";
import Button from "@/app/components/Button";

type HeadingNumberedListProps = {
    heading: string;
    items: string[];
}

function HeadingNumberedList({heading, items}: HeadingNumberedListProps) {
    return (
        <>
            <h3 className="text-primary font-semibold text-2xl mb-4">{heading}</h3>
            <ol className="list-inside mb-6">
                {items.map((item, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-primary">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        <li>{item}</li>
                    </div>
                    
                ))}
            </ol>
        </>
    )
}

export default function GraphiteMaterials() {
    return (
        <main>
            <section>
                <div className="relative bg-graphite-materials bg-cover bg-center p-20">
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Graphite Materials</h1>
                </div>
            </section>
            <section>
                <div className="flex px-40 py-20 gap-32">
                    <div className="w-1/3 flex items-center">
                        <Image src={AsburyLogo} alt="Asbury logo" className="w-full object-contain"/>
                    </div>
                    <div className="w-2/3 text-lg">
                        <p>
                            Asbury Carbons is a 130+ year-old company with a proud legacy dating back to 1895. Over the decades, we have earned our place as the leading global supplier of engineered materials, particularly to the friction industry. Our success is built on an extensive and ever-evolving product line, strong marketing channels, dedicated sales and engineering teams, and advanced technical capabilities — all aimed at meeting and exceeding the needs of our customers around the world.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-40 py-20 text-center bg-primary-light">
                    <h2 className="mb-8">Insutex Industries Sdn. Bhd. – Your Trusted Partner in South-East Asia</h2>
                    <div className="text-lg">
                        <p>
                            For over 20 years, Insutex Industries Sdn. Bhd. has proudly represented Asbury Carbons as its official agent in Malaysia and the surrounding region. With deep industry knowledge and a strong commitment to service, Insutex acts as the bridge between Asbury’s global expertise and the local market’s unique needs. We provide comprehensive solutions for customers in the friction, foundry, metallurgy, and other industrial sectors, offering top-quality materials backed by reliable technical support and responsive customer service.
                            <br/>
                            <br/>
                            Together, Asbury and Insutex deliver world-class materials, technical innovation, and dependable support — helping you drive performance, reliability, and excellence in your applications.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-40 py-20">
                    <h2 className="mb-8">Why Graphite?</h2>
                    <p className="text-lg mb-16">
                        Graphite is an incredibly versatile material with a wide range of applications across multiple industries. Known for its excellent thermal conductivity, lubricity, and chemical stability, graphite is used in sectors such as oil and gas, aerospace, metallurgy, electronics, and renewable energy. From lubricants and gaskets to batteries and high-temperature components, its unique properties make it essential in both traditional and advanced technologies.
                    </p>
                    <div className="flex">
                        <div className="w-1/2">
                            <div className="bg-accent-light aspect-square w-16 flex items-center justify-center rounded-lg mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 fill-accent">
                                    <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <HeadingNumberedList heading="Industries That Use Graphite" items={[
                                "Plastic, Polymers, Elastomers & Composite", 
                                "Flame Retardants", 
                                "Friction",
                                "Graphene Manufacturers",
                                "Lubrication",
                                "Oil, Gas, and Pipeline",
                                "Welding Rods",
                                "Filtration",
                                "Metal Casting",
                                "Batteries",
                                "Powder Metallurgy",
                                "Engineered Materials",
                                "Inks, Paints & Coatings",
                                "Graphite in the Arts",]}/>
                        </div>
                        <div className="w-1/2">
                            <div className="bg-accent-light aspect-square w-16 flex items-center justify-center rounded-lg mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 fill-accent">
                                    <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
                                </svg>
                            </div>
                            <HeadingNumberedList heading="What We Offer" items={[
                                "Graphite",
                                "Edge Functionalized Graphene",
                                "Coke",
                                "Other Carbons",
                                "Lubricants and Coatings",
                                "CarboRay",]}/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-40 pb-20 text-center">
                    <h2 className="mb-4">Custom Graphite Solutions for Your Needs</h2>
                    <p className="text-lg mb-6">We tailor graphite and carbon materials to meet your specific technical requirements. Reach out to discuss your application needs.</p>
                    <Link href={`/contact`}>
                        <Button bgColor="bg-accent text-neutral-white">Contact us</Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}