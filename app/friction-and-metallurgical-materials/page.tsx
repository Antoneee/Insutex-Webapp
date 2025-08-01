import Image from "next/image";
import GraphitePowderImage from '@/public/friction-and-metallurgical-materials/graphite-powder.png';
import OtherMaterialsImage from '@/public/friction-and-metallurgical-materials/other-materials.png';
import Button from "../components/Button";
import Link from "next/link";

export default function FrictionAndMetallurgical() {
    return (
        <main>
            {/* Hero section */}
            <section>
                <div className="bg-primary-light bg-cover bg-center px-6 py-20 md:px-20">
                    <h1 className="text-primary mt-10 md:mt-20">Friction and Metallurgical Materials</h1>
                    <p className="text-base md:text-xl text-neutral-black">
                    <Link href="/" className="hover:underline text-primary">
                        Insutex Industries
                    </Link>
                    {" "}
                    &rarr;
                    {" "}
                    <Link href="/friction-and-metallurgical-materials" className="hover:underline text-primary">
                        Friction and Metallurgical Materials
                    </Link>
                    </p>
                </div>
            </section>

            {/* Intro section */}
            <section>
                <div className="px-4 md:px-20 py-10 text-lg text-center">
                    <p className="max-w-3xl mx-auto">
                        We supply high-quality materials for brake pads, clutches, and metal processing — trusted by manufacturers for over 20 years.
                    </p>
                </div>
            </section>

            {/* Graphite Materials section */}
            <section>
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-24 px-4 md:px-20">
                    <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                        <Image src={GraphitePowderImage} alt="Graphite powder image" className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-4xl mb-6">Graphite Materials (Asbury Carbons)</h2>
                        <p className="mb-6 md:mb-16">
                            We’re the exclusive distributor of{" "}
                            <Link href={`friction-and-metallurgical-materials/graphite-materials`}>
                                <b className="text-primary">Asbury Carbons</b>
                            </Link>{" "}
                            in Southeast Asia, a global leader in carbon materials. Their graphite is trusted for high-performance friction and foundry applications.
                        </p>
                        <h3 className="text-primary font-semibold text-lg md:text-xl">Types We Offer</h3>
                        <ul className="list-disc list-inside mb-8 md:mb-12">
                            <li>Amorphous</li>
                            <li>Natural Flake</li>
                            <li>Synthetic</li>
                            <li>Specialty Cokes</li>
                            <li>More available on request</li>
                        </ul>
                        <Link href={`friction-and-metallurgical-materials/graphite-materials`}>
                            <Button bgColor="bg-primary text-neutral-white">Learn More</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Other Materials section */}
            <section>
                <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 mb-32 px-4 md:px-20">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-4xl mb-6">Other Friction & Metallurgical Materials</h2>
                        <p className="mb-6 md:mb-16">
                            In addition to graphite, we supply a wide range of materials used in brake pads, foundry applications, and industrial processing.
                        </p>
                        <h3 className="text-primary font-semibold text-lg md:text-xl">Categories</h3>
                        <ul className="list-disc list-inside mb-8 md:mb-12">
                            <li>Resins & Binders</li>
                            <li>Fibers & Reinforcements</li>
                            <li>Oxides & Sulphates</li>
                            <li>Minerals & Fillers</li>
                        </ul>
                        <Link href={`friction-and-metallurgical-materials/other-materials`}>
                            <Button bgColor="bg-primary text-neutral-white">Learn More</Button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                        <Image src={OtherMaterialsImage} alt="Other materials image" className="w-full h-auto" />
                    </div>
                </div>
            </section>
        </main>
    );
}
