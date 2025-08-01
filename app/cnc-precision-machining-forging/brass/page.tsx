import FormsAvailable from "@/app/components/FormsAvailable";
import ImageCarousel from "@/app/components/ImageCarousel";
import image1 from "@/public/cnc-precision-machining-forging/brass/carousel/1.png";
import image2 from "@/public/cnc-precision-machining-forging/brass/carousel/2.png";
import image3 from "@/public/cnc-precision-machining-forging/brass/carousel/3.png";
import image4 from "@/public/cnc-precision-machining-forging/brass/carousel/4.png";
import image5 from "@/public/cnc-precision-machining-forging/brass/carousel/5.png";
import Table, { TableProps } from "@/app/components/Table";
import Link from "next/link";

export default function Brass() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ].map(image => image.src)

    const tables: TableProps[] = [
        {
            title: "Free-Cutting Alloy",
            headers: ["UNS", "JIS", "EN", "Cu", "Pb", "Fe", "Fe + Sn", "Cd", "Zn", "Others"],
            rows: [
                ["C36000", "-", "-", "60.0~63.0", "2.50~3.00", "0.35Max", "-", "-", "Rem", ""],
                ["", "C3602", "CW603N/CuZn36Pb3", "59.0~63.0", "1.80~3.70", "0.50Max", "1.0Max", "", "Rem", ""],
                ["", "C3604", "CW614N/CuZn39Pb3", "57.0~61.0", "1.80~3.70", "0.50Max", "1.0Max", "0.01Max", "Rem", ""],
            ]
        },
        {
            title: "Forging Alloy",
            headers: ["UNS", "JIS", "EN", "Cu", "Pb", "Fe", "Fe + Sn", "Cd", "Zn", "Others"],
            rows: [
                ["C37700", "C3771", "CW617N/CuZn39Pb2", "57.0~61.0", "1.00~2.50", "-", "1.0Max", "-", "Rem"]
            ]
        },
        {
            title: "High Precision Wrought Alloy",
            headers: ["UNS", "JIS", "EN", "Cu", "Pb", "Fe", "Fe + Sn", "Cd", "Zn", "Others"],
            rows: [
                ["C26000", "C2600", "CW505L/CuZn30", "", "2.50~3.00", "0.35Max", "-", "-", "Rem", ""],
                ["C27000", "C2700", "CW507L/CuZn36", "63.0~67.0", "0.05Max", "0.05Max", "-", "-", "Rem", "Al 0.02 Max\nNi 0.02 Max\n Mn 0.02 Max"],
                ["C28000", "C2800", "", "59.0~63.0", "0.10Max", "0.07Max", "", "", "Rem", ""],
            ]
        },
        {
            title: "Lead Free Brass/Gem Brass/Eco Brass",
            headers: ["UNS", "JIS", "EN", "Cu", "Pb", "Fe", "Fe + Sn", "Cd", "Zn", "Others"],
            rows: [
                ["C49260", "", "", "58.0~63.0", "0.09Max", "0.50Max", "-", "", "Rem", "Sn 0.02 Max\nSi 0.10 Max\nP 0.05~0.15\nBi 0.50~1.80"],
                ["", "C6801", "", "57.0~64.0", "0.01Max", "0.50Max", "", "", "Rem", "Sn 0.10~2.50\nP 0.20 Max\nBi 0.50~4.00"],
                ["C49340", "", "", "60.0~63.0", "0.09Max", "", "", "", "Rem", "Sn 0.50~1.50\nBi 0.50~2.00"],
                ["C69300", "", "", "75.0~77.0", "0.10Max", "0.30Max", "", "", "Rem", "Sn 0.30 Max\nAl 0.05 Max\nNi 0.20 Max\nSi 2.70~3.50\nMn 0.05 Max\nP 0.02~0.10"],
            ]
        }
    ]

    return (
        <main>
            <section>
                <div className="relative bg-brass bg-cover bg-center py-32 md:py-52 min-h-[400px] px-10 md:px-20 mb-20">
                    {/* 
                    Slightly darken background to make heading more readable.
                    If you want to adjust darkness/brightness change number in "bg-black/<NUMBER>" in div below.
                    */}
                    <div className="absolute inset-0 bg-black/45 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Brass</h1>
                    <p className="relative z-10 text-base md:text-xl text-neutral-white">
                    <Link href="/" className="hover:underline">
                        Insutex Industries
                    </Link>
                    {" "}
                    &rarr;
                    {" "}
                    <Link href="/cnc-precision-machining-forging" className="hover:underline">
                        CNC, Precision Machining, Forging
                    </Link>
                    &rarr;
                    {" "}
                    <Link href="/cnc-precision-machining-forging/brass" className="hover:underline">
                        Brass
                    </Link>
                    </p>
                </div>
            </section>
            <section>
                <div className="px-4 md:px-20 flex flex-col md:flex-row gap-10 mb-20">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <ImageCarousel images={images} interval={7500} />
                    </div>
                    <div className="w-full md:w-1/2">
                    <h2 className="mb-3">Brass</h2>
                    <p className="mb-10">
                        Brass is a durable and corrosion-resistant metal alloy made primarily of copper and zinc. Known for its excellent machinability, electrical conductivity, and attractive gold-like appearance, brass is widely used in applications such as plumbing fittings, electrical connectors, musical instruments, and decorative hardware...
                    </p>
                    <FormsAvailable forms={["Round Bar", "Flat Bar", "Hex Bar", "Tube/Pipe", "Rod", "Wire", "Ingot"]} />
                    </div>
                </div>
                </section>  
            <section>
                <div className="px-20 mb-20">
                    {tables.map((table, index) => (
                        <div key={index} className="mb-10">
                            <Table title={table.title} headers={table.headers} rows={table.rows}/>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}