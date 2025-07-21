import Image from "next/image";
import GraphitePowderImage from '@/public/friction-and-metallurgical-materials/graphite-powder.png';
import OtherMaterialsImage from '@/public/friction-and-metallurgical-materials/other-materials.png';
import Button from "../components/Button";
import Link from "next/link";

export default function FrictionAndMetallurgical() {
    return (
        <main>
            <section>
                    <div className="bg-primary-light bg-cover bg-center px-20 pt-20 pb-10">
                        <h1 className="text-primary mb-2">Friction and Metallurgical Materials</h1>
                        <p className="text-xl text-neutral-black">Insutex Industries &rarr; Friction and Metallurgical Materials</p>
                    </div>
                </section>
                <section>
                    <div className="p-20 text-lg text-center">
                        <p className="w-3/4 mx-auto">
                            We supply high-quality materials for brake pads, clutches, and metal processing — trusted by manufacturers for over 20 years.                        <br/>
                        </p>  
                    </div>
                </section>
            <section>
                <div className="flex gap-20 mb-24 px-20">
                    <div className="w-1/2 overflow-hidden rounded-lg">
                        <Image src={GraphitePowderImage} alt="Graphite powder image" className="w-full"/>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-4xl mb-6">Graphite Materials (Asbury Carbons)</h2>
                        <p className="mb-16">
                            We’re the exclusive distributor of {" "}
                            <Link href={`friction-and-metallurgical-materials/graphite-materials`}>
                                <b className="text-primary">Asbury Carbons </b>
                            </Link>
                             in Southeast Asia, a global leader in carbon materials. Their graphite is trusted for high-performance friction and foundry applications.
                        </p>
                        <h3 className="text-primary font-semibold text-xl">Types We Offer</h3>
                        <ul className="list-disc list-inside mb-12">
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
            <section>
                <div className="flex gap-20 mb-32 px-20">
                    <div className="w-1/2">
                        <h2 className="text-4xl mb-6">Other Friction & Metallurgical Materials</h2>
                        <p className="mb-16">
                            In addition to graphite, we supply a wide range of materials used in brake pads, foundry applications, and industrial processing.
                        </p>
                        <h3 className="text-primary font-semibold text-xl">Categories</h3>
                        <ul className="list-disc list-inside mb-12">
                            <li>Resins & Binders</li>
                            <li>Fibers & Reinforcements</li>
                            <li>Oxides & Sulphates</li>
                            <li>Minerals & Fillers</li>
                        </ul>
                        <Link href={`friction-and-metallurgical-materials/other-materials`}>
                            <Button bgColor="bg-primary text-neutral-white">Learn More</Button>
                        </Link>
                    </div>
                    <div className="w-1/2 overflow-hidden rounded-lg">
                        <Image src={OtherMaterialsImage} alt="Other materials image" className="w-full"/>
                    </div>
                </div>
            </section>
        </main>
    )
}