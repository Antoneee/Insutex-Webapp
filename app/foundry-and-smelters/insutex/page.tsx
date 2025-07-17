import Image from "next/image";
import MoldableImage from "@/public/foundry-and-smelters/insutex/moldable.png"
import CoatingImage from "@/public/foundry-and-smelters/insutex/coating.png"
import FoundryFluxesmage from "@/public/foundry-and-smelters/insutex/foundry-fluxes.png"
import MagnesiumIngotsImage from "@/public/foundry-and-smelters/insutex/magnesium-ingots.png"
import Link from "next/link";

export default function Insutex() {
    return (
        <main>
            <section className="relative">
                <div className="relative bg-insutex bg-cover bg-center p-20 mb-10">
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Aluminium Smelter Consumable</h1>
                    <div className="bg-black/45 w-full h-full absolute inset-0"></div>
                </div>
            </section>
            <section>
                <div className="px-20 mb-10 text-md text-primary">
                    <span>
                        <Link href={"/"}>Insutex Industries</Link>
                    </span>
                    {" "}&rarr;{" "}
                    <span>
                        <Link href={"/foundry-and-smelters"}>Foundry and Smelters</Link>
                    </span>
                    {" "}&rarr;{" "}
                    <span>
                        <Link href={"/foundry-and-smelters/insutex"}>Aluminium Smelter Consumable</Link>
                    </span>
                </div>
            </section>
            <section>
                <div className="flex gap-20 mb-24 px-20">
                    <div className="w-1/2 overflow-hidden rounded-lg">
                        <Image src={MoldableImage} alt="Moldable image" className="w-full h-full"/>
                    </div>
                    <div className="w-1/2 text-lg">
                        <h2 className="text-4xl mb-6">Moldable</h2>
                        <p className="mb-8">
                            Used extensively in the aluminium industry, our ceramic fibrous viscous paste is engineered for sealing, insulating, and protecting equipment exposed to extreme temperatures and molten metal.
                        </p>
                        <h3 className="text-primary font-semibold text-xl">Applications</h3>
                        <ul className="list-disc list-inside mb-4">
                            <li>Launders</li>
                            <li>Furnace doors</li>
                            <li>Tundish systems</li>
                            <li>Insulation lining repairs</li>
                        </ul>
                        <h3 className="text-primary font-semibold text-xl">Key Benefits</h3>
                        <ul className="list-disc list-inside">
                            <li>High thermal resistance</li>
                            <li>Excellent adhesion and mechanical strength</li>
                            <li>Minimizes heat loss and metal leakage</li>
                            <li>Prevents contamination during aluminium processing</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex gap-20 mb-20 p-20 bg-primary-light">
                    <div className="w-1/2 text-lg">
                        <h2 className="text-4xl mb-6">Protective Coatings</h2>
                        <p className="mb-8">
                            Our specialised coatings shield aluminium smelter equipment from corrosion, erosion, and chemical attack caused by molten aluminium and slags.
                        </p>
                        <h3 className="text-primary font-semibold text-xl">Applications</h3>
                        <ul className="list-disc list-inside mb-4">
                            <li>Pots</li>
                            <li>Launders</li>
                            <li>Furnace components</li>
                        </ul>
                        <h3 className="text-primary font-semibold text-xl">Key Benefits</h3>
                        <ul className="list-disc list-inside">
                            <li>Forms a protective barrier against metal penetration</li>
                            <li>Enhances thermal efficiency (reflects or retains heat)</li>
                            <li>Extends equipment lifespan</li>
                            <li>Improves metal purity and operational safety</li>
                        </ul>
                    </div>
                    <div className="w-1/2 overflow-hidden rounded-lg shadow-xl">
                        <Image src={CoatingImage} alt="Coating image" className="w-full h-full"/>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex gap-20 mb-24 px-20">
                    <div className="w-1/2 overflow-hidden rounded-lg">
                        <Image src={FoundryFluxesmage} alt="Foundry fluxes image" className="w-full h-full"/>
                    </div>
                    <div className="w-1/2 text-lg">
                        <h2 className="text-4xl mb-6">Foundry Fluxes</h2>
                        <p className="mb-8">
                            Essential in aluminium melting, our fluxes are formulated to remove impurities, prevent oxidation, and enhance metal quality.
                        </p>
                        <h3 className="text-primary font-semibold text-xl">Types</h3>
                        <ul className="list-disc list-inside mb-4">
                            <li>Drossing</li>
                            <li>Covering</li>
                            <li>Refining</li>
                            <li>Deslagging</li>
                        </ul>
                        <h3 className="text-primary font-semibold text-xl">Key Benefits</h3>
                        <ul className="list-disc list-inside">
                            <li>Promotes separation of dross and impurities</li>
                            <li>Reduces gas absorption during melting and holding</li>
                            <li>Improves metal cleanliness, consistency, and castability</li>
                            <li>Supports efficient and stable operations</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex gap-20 p-20 bg-primary-light">
                    <div className="w-1/2 text-lg">
                        <h2 className="text-4xl mb-6">Magnesium Ingots (99%)</h2>
                        <p className="mb-8">
                            High-purity magnesium is a crucial additive in aluminium smelting and alloying processes, enhancing both material properties and refining outcomes.
                        </p>
                        <h3 className="text-primary font-semibold text-xl">Applications</h3>
                        <ul className="list-disc list-inside mb-4">
                            <li>Alloying to enhance strength, corrosion resistance, and weldability</li>
                            <li>Refining agent for removing calcium and lithium</li>
                            <li>Microstructure modification for better casting performance</li>
                        </ul>
                        <h3 className="text-primary font-semibold text-xl">Key Benefits</h3>
                        <ul className="list-disc list-inside">
                            <li>Ensures consistent alloy quality</li>
                            <li>Minimizes contamination</li>
                            <li>Reliable performance in demanding smelting conditions</li>
                        </ul>
                    </div>
                    <div className="w-1/2 overflow-hidden rounded-lg">
                        <Image src={MagnesiumIngotsImage} alt="Magnesium ingots image" className="w-full h-full"/>
                    </div>
                </div>
            </section>
        </main>
    )
}