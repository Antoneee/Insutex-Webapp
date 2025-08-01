import ImageCarousel from "@/app/components/ImageCarousel";
import image1 from "@/public/cnc-precision-machining-forging/bronze/carousel/1.png";
import image2 from "@/public/cnc-precision-machining-forging/bronze/carousel/2.png";
import image3 from "@/public/cnc-precision-machining-forging/bronze/carousel/3.png";
import image4 from "@/public/cnc-precision-machining-forging/bronze/carousel/4.png";
import image5 from "@/public/cnc-precision-machining-forging/bronze/carousel/5.png";
import FormsAvailable from "@/app/components/FormsAvailable";
import Table, { TableProps } from "@/app/components/Table";
import Link from "next/link";

export default function Bronze() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ].map(image => image.src)

    const tables: TableProps[] = [
        {
            title: "Bronze Casting",
            headers: ["Grade", "Cu", "Pb", "Sn", "Fe", "Ni", "P", "Zn"],
            rows: [
                ["C5191", "Rem", "0.05Max", "5.0~7.0", "0.10Max", "0.30Max", "0.03~0.35", ""],
                ["C5441", "Rem", "3.0~4.0", "3.5~4.5", "0.10Max", "", "0.01~0.5", "1.5~4.5"],
            ]
        }
    ]

    return (
        <main>
            <section>
                <div className="relative bg-bronze bg-cover bg-center py-32 md:py-52 min-h-[400px] px-10 md:px-20 mb-20">
                    {/* 
                    Slightly darken background to make heading more readable.
                    If you want to adjust darkness/brightness change number in "bg-black/<NUMBER>" in div below.
                    */}
                    <div className="absolute inset-0 bg-black/45 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Bronze</h1>
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
                    <Link href="/cnc-precision-machining-forging/bronze" className="hover:underline">
                        Bronze
                    </Link>
                    </p>
                </div>
            </section>
            <section>
                <div className="px-4 md:px-20 flex flex-col md:flex-row gap-10 mb-20">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <ImageCarousel images={images} interval={7500}/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="mb-3">Bronze</h2>
                        <p className="mb-10">
                            Bronze is a durable and corrosion-resistant metal alloy made primarily of copper and tin. Known for its excellent strength, wear resistance, and distinctive reddish-brown appearance, bronze is widely used in applications such as bearings, bushings, marine hardware, sculptures, and musical instruments. Its resistance to corrosion—especially in saltwater environments—and low metal-on-metal friction make it ideal for industrial and artistic uses. Whether for engineering, commercial, or creative purposes, bronze remains a highly versatile and dependable material.
                        </p>
                        <FormsAvailable forms={["Round Bar", "Flat Bar", "Hex Bar", "Tube/Pipe", "Rod", "Wire", "Ingot"]}/>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-4 md:px-20 mb-20">
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
