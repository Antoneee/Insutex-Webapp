import ImageCarousel from "@/app/components/ImageCarousel";
import Button from "@/app/components/Button";
import image1 from "@/public/friction-and-metallurgical-materials/other-materials/carousel/1.png";
import image2 from "@/public/friction-and-metallurgical-materials/other-materials/carousel/2.png";
import image3 from "@/public/friction-and-metallurgical-materials/other-materials/carousel/3.png";
import image4 from "@/public/friction-and-metallurgical-materials/other-materials/carousel/4.png";
import image5 from "@/public/friction-and-metallurgical-materials/other-materials/carousel/5.png";
import Link from "next/link";

type HeadingBulletedListProps = {
    heading: string;
    items: string[];
}

function HeadingBulletedList({heading, items}: HeadingBulletedListProps) {
    return (
        <>
            <h3 className="text-primary font-semibold text-xl mb-2">{heading}</h3>
            <ol className="list-disc list-inside mb-6 text-lg">
                {items.map((item, i) => (
                    <li key={i}>{item}</li>                    
                ))}
            </ol>
        </>
    )
}

export default function OtherMaterials() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ].map(image => image.src)

    return (
        <main>
            <section className="relative">
                <div className="relative bg-other-materials bg-cover bg-center p-20">
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Other Friction & Metallurgical Materials</h1>
                </div>
                <div className="bg-black/45 w-full h-full absolute inset-0"></div>
            </section>
            <section>
                <div className="flex px-40 py-20 gap-32">
                    <div className="w-3/5 h-200">
                        <h2 className="text-4xl mb-4">High-Performance Friction Materials</h2>
                        <p className="text-lg">
                            With over two decades of experience, Insutex Industries Sdn. Bhd. has become a trusted supplier of high-performance minerals and chemical compounds used in friction, metallurgy, and foundry applications. We partner closely with manufacturers to ensure reliable supply, consistent quality, and tailored material solutions that meet evolving industrial needs.
                            <br/>
                            <br/>
                            Our product range includes essential materials used in the friction, metallurgy, foundry, and chemical industries, ensuring consistent quality and performance in your formulations and manufacturing processes. Whether you require fillers, reinforcements, oxides, sulfates, or specialty additives, we provide tailored solutions to meet your specific needs.
                            <br/>
                            <br/>
                            With a commitment to quality and long-term partnerships, Insutex Industries is your trusted supplier for your friction products — helping you achieve optimal performance and efficiency in your operations.
                        </p>
                    </div>
                    <div className="w-2/5 aspect-square">
                       <ImageCarousel images={images} interval={7500}/>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-40 py-20">
                    <h2 className="text-4xl mb-4">Friction Materials We Offer</h2>
                    <p className="text-lg mb-16">Explore our core material categories used in the production of friction products — from binders and reinforcements to oxides, fillers, and specialty powders, all trusted across foundry and manufacturing industries.</p>
                    <div className="flex gap-12 mb-12">
                        <div className="w-1/3">
                            <div className="bg-accent-light aspect-square w-16 flex items-center justify-center rounded-full mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 fill-accent">
                                    <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <HeadingBulletedList heading="Resin & Binders" items={[
                                "Phenolic Resin", 
                                "Friction Dust"]}/>
                        </div>

                        <div className="w-1/3">
                            <div className="bg-accent-light aspect-square w-16 flex items-center justify-center rounded-full mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 fill-accent">
                                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <HeadingBulletedList heading="Fibers & Reinforcements" items={[
                                "Steel Fiber", 
                                "Aramic Fiber",
                                "Rockwool Fiber",
                                "Wollastonite"]}/>
                        </div>

                        <div className="w-1/3">
                            <div className="bg-accent-light aspect-square w-16 flex items-center justify-center rounded-full mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 fill-accent">
                                    <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <HeadingBulletedList heading="Oxides & Sulphates" items={[
                                "Barium Sulphate", 
                                "Molybdenum Trisulphate",
                                "Iron Oxide"]}/>
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div className="w-1/3">
                            <div className="bg-accent-light aspect-square w-16 flex items-center justify-center rounded-full mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 fill-accent">
                                    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                                </svg>
                            </div>
                            <HeadingBulletedList heading="Minerals & Fillers" items={[
                                "Calcium Hydroxide (Hydrated Lime)", 
                                "Zircronium Silicate",
                                "Alumina"]}/>
                        </div>

                        <div className="w-1/3">
                            <div className="bg-accent-light aspect-square w-16 flex items-center justify-center rounded-full mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 fill-accent">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <HeadingBulletedList heading="Specialty Additive & Metallic Powders" items={[
                                "Antimony", 
                                "Iron Powder",
                                "Brass Powder"]}/>
                        </div>
                        <div className="w-1/3"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-40 pb-20 text-center">
                    <h2 className="mb-4">Ready to Source Reliable Friction Materials?</h2>
                    <p className="text-lg mb-6">Whether you're optimizing an existing formulation or developing a new one, our team can help you find the right materials for your performance needs. Contact us to discuss tailored solutions and get expert guidance.</p>
                    <Link href={`/contact`}>
                        <Button bgColor="bg-accent text-neutral-white">Contact us</Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}