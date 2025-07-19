import Image from "next/image";
import SeowonLogo from '@/public/foundry-and-smelters/seowon-logo.png';
import image1 from "@/public/foundry-and-smelters/seowon/carousel/1.png";
import image2 from "@/public/foundry-and-smelters/seowon/carousel/2.png";
import image3 from "@/public/foundry-and-smelters/seowon/carousel/3.png";
import ImageCarousel from "@/app/components/ImageCarousel";
import Table, {TableProps} from "@/app/components/Table";

export default function Seowon() {
    const images = [
        image1,
        image2,
        image3
    ].map(image => image.src)

    const tables: TableProps[] = [
            {
                title: "Brass Ingot",
                headers: ["Type", "Cu", "Pb", "Fe", "Sn", "Al", "Ni", "Sb", "Si", "Mn", "Zn", "As", "Bi"],
                rows: [
                    ["A Grade (BS13)", "59.0 ~ 60.0", "1.0 ~ 2.0", "0.15Max", "0.15Max", "0.70Max", "0.10Max", "-", "-", "-", "Rem.", "-", "-"],
                    ["B Grade (BS38)", "60.0 ~ 61.0", "1.0 ~ 2.0", "0.35Max", "0.45Max", "0.70Max", "0.30Max", "-", "-", "-", "Rem.", "-", "-"],
                    ["C1 Grade (BS51)", "60.0 ~ 62.0", "2.5Max", "0.60Max", "0.90Max", "0.70Max", "1.0Max", "0.70Max", "0.15Max", "0.15Max", "Rem.", "-", "-"],
                    ["C2 Grade (BS52)", "60.0 ~ 62.0", "3.0Max", "0.80Max", "1.0Max", "0.70Max", "1.0Max", "0.10Max", "0.20Max", "0.20Max", "Rem.", "-", "-"],
                    ["C5 Grade (Water Meter)", "60.0 ~ 62.0", "2.5Max", "0.60Max", "0.60Max", "0.70 ~ 0.80", "0.9Max", "0.07Max", "0.07Max", "0.07Max", "Rem.", "-", "-"],
                    ["DZR (CD14)", "61.5 ~ 63.5", "1.0 ~ 1.6", "0.03 ~ 0.10", "0.03 ~ 0.10", "0.50 ~ 0.80", "0.03 ~ 0.10", "0.02Max", "0.02Max", "0.10Max", "Rem.", "0.09 ~ 0.14", "-"],
                    ["Lead Free (CB12)", "60.0 ~ 63.0", "0.05 ~ 0.10", "0.10Max", "0.10Max", "0.50 ~ 0.70", "0.10Max", "0.01Max", "0.01Max", "0.01Max", "Rem.", "0.01Max", "0.50 ~ 0.75"]
                ],
            },
            {
                title: "Bronze Ingot",
                headers: ["Type", "Cu", "Pb", "Fe", "Sn", "Al", "Ni", "Sb", "Zn", "Si", "P", "Others"],
                rows: [
                    ["BZ-10 (BC1)", "79.0 ~ 83.0", "3.0 ~ 7.0", "0.35Max", "2.0 ~ 4.0", "0.005Max", "0.80Max", "0.20Max", "8.0 ~ 12.0", "0.005Max", "0.03Max", "-"],
                    ["BZ-12 (ASTM84400)", "78.0 ~ 82.0", "6.0 ~ 8.0", "0.40Max", "2.3 ~ 3.5", "0.005Max", "1.00Max", "0.25Max", "7.0 ~ 10.0", "0.005Max", "0.02Max", "S 0.08Max"],
                    ["BZ-60 (ASTM83600)", "84.0 ~ 86.0", "4.0 ~ 6.0", "0.30Max", "4.0 ~ 6.0", "0.005Max", "1.00Max", "0.20Max", "4.0 ~ 6.0", "0.005Max", "0.05Max", "S 0.08Max"], 
                    ["BZ-70 (BC7)", "87.0 ~ 89.0", "1.5 ~ 2.5", "0.20Max", "5.5 ~ 6.5", "0.005Max", "0.80Max", "0.20Max", "3.5 ~ 4.5", "0.005Max", "-", "-"], 
                    ["LEAD FREE CZ11 (ASTM89833)", "86.0 ~ 91.0", "0.09Max", "0.30Max", "4.0 ~ 6.0", "0.005Max", "1.00Max", "0.25Max", "2.0 ~ 6.0", "0.005Max", "0.05Max", "Bi 1.70 ~ 2.70 S 0.08Max"],                                                      
                    ["NI-AL BRONZE (ASTMC95800)", "79.0Min", "0.03Max", "3.5 ~ 4.5", "-", "8.5 ~ 9.5", "4.0 ~ 5.0", "-", "-", "0.10Max", "-", "Mn 0.8 ~ 1.5"],                                                                      
                ],
            },
        ];

    return (
        <main>
            <section className="relative">
                <div className="relative bg-seowon bg-cover bg-center p-20 mb-20">
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Brass and Bronze Ingot</h1>
                    <div className="bg-black/45 w-full h-full absolute inset-0"></div>
                </div>
            </section>
            <section>
                <div className="flex px-40 mb-20">
                    <div className="w-1/5 flex items-center">
                        <Image src={SeowonLogo} alt="Seowon logo"/>
                    </div>
                    <div className="w-4/5">
                        <h2 className="text-4xl mb-4">Seowon Co., Ltd.</h2>
                        <p className="text-lg">
                            Seowon supplies high-quality brass and bronze ingots for various industrial and manufacturing applications. We ensure consistent alloy composition and purity to meet the specific requirements of our global customers. 
                            <br/>
                            <br/>
                            Backed by decades of expertise, our ingots meet international standards for strength, machinability, and durability. From marine and automotive to plumbing and electrical uses, Seowon is a trusted partner for dependable non-ferrous metal solutions
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex px-40 py-20 gap-32">
                    <div className="w-2/3">
                        <h2 className="text-4xl mb-4">High-Performance Brass & Bronze</h2>
                        <p className="text-lg">
                            Seowon supplies precision-cast brass and bronze ingots engineered for strength, machinability, and corrosion resistance. Our alloys meet international standards, making them ideal for plumbing, electrical, marine, and industrial applications.
                            <br/>
                            <br/>
                            Each batch is quality-controlled for consistency and performance. With both leaded and lead-free options available, we offer solutions for a wide range of regulatory and functional requirements.
                            <br/>
                            <br/>
                            Explore the specifications below to find the right material for your manufacturing needs.
                        </p>
                    </div>
                    <div className="w-1/3 h-96">
                        <ImageCarousel images={images} interval={7500}/>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-40 mb-20">
                    {tables.map((table, index) => (
                        <div key={index} className="mb-10">
                            <Table title={table.title} headers={table.headers} rows={table.rows}/>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}