import FormsAvailable from "@/app/components/FormsAvailable";
import ImageCarousel from "@/app/components/ImageCarousel";
import image1 from "@/public/cnc-precision-machining-forging/free-cutting-steel/carousel/1.png";
import image2 from "@/public/cnc-precision-machining-forging/free-cutting-steel/carousel/2.png";
import image3 from "@/public/cnc-precision-machining-forging/free-cutting-steel/carousel/3.png";
import image4 from "@/public/cnc-precision-machining-forging/free-cutting-steel/carousel/4.png";
import Table, { TableProps } from "@/app/components/Table";
import Link from "next/link";

export default function FreeCuttingSteel() {
    const images = [
        image1,
        image2,
        image3,
        image4,
    ].map(image => image.src)

    const tables: TableProps[] = [
        {
            title: "Free-Cutting Steel",
            headers: ["AISI", "JIS", "C", "Mn", "P", "S", "Others"],
            rows: [
                ["1215", "SUM23", "0.09Max", "0.75~1.05", "0.04~0.09", "0.26~0.35", ""],
                ["12L14", "SUM24L", "0.15Max", "0.85~1.15", "0.04~0.09", "0.26~0.35", "Pb 0.1~0.35"],
            ],
        },
        {
            title: "Alloy Steel",
            headers: ["AISI", "JIS", "C", "Mn", "P", "S", "Cr", "Si", "Mo", "Others"],
            rows: [
                ["4140", "", "0.38~0.43", "0.75~1.0", "0.035Max", "0.04Max", "0.80~1.10", "0.15~0.30", "0.15~0.25", ""],
                ["-", "SCM440", "0.38~0.43", "0.60~0.90", "0.03Max", "0.03Max", "0.90~1.20", "0.15~0.35", "0.15~0.30", "Ni 0.25Max\nCu 0.30Max"],
            ],
        },
        {
            title: "Carbon Steel",
            headers: ["AISI", "JIS", "C", "Mn", "P", "S", "Cr", "Si", "Mo", "Others"],
            rows: [
                ["-", "S10C", "0.08~0.13", "0.30~0.60", "0.03Max", "0.035Max", "0.20Max", "0.15~0.35", "-", "Ni 0.20Max\nCu 0.30Max"],
                ["-", "S20C", "0.18~0.23", "0.30~0.60", "0.03Max", "0.035Max", "0.20Max", "0.15~0.35", "-", "Ni 0.20Max\nCu 0.30Max"],
                ["-", "S45C", "0.42~0.48", "0.60~0.90", "0.03Max", "0.035Max", "0.20Max", "0.15~0.35", "-", "Ni 0.20Max\nCu 0.30Max"],
            ],
        },
    ];


    return (
        <main>
            <section>
                <div className="relative bg-free-cutting-steel bg-cover bg-center py-32 md:py-52 min-h-[400px] px-10 md:px-20 mb-20">
                    <div className="absolute inset-0 bg-black/45 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Free Cutting, Alloy, & Carbon Steel</h1>
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
                    <Link href="/cnc-precision-machining-forging/free-cutting-steel" className="hover:underline">
                        Free Cutting, Alloy, & Carbon Steel
                    </Link>
                    </p>
                </div>
                </section>

                <section>
                <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-20 px-4 md:px-20 mb-20">
                    <div className="w-full md:w-1/2">
                    <ImageCarousel images={images} interval={7500} />
                    </div>
                    <div className="w-full md:w-1/2">
                    <h2 className="mb-3 text-xl font-semibold">Free Cutting, Alloy, & Carbon Steel</h2>
                    <p className="mb-10 text-justify">
                        Free-cutting steel, also known as free-machining steel, is a type of carbon steel designed for easy machining with minimal tool wear...
                    </p>
                    <FormsAvailable forms={["Round Bar", "Flat Bar", "Hex Bar", "Tube/Pipe", "Rod", "Wire"]} />
                    </div>
                </div>
                </section>

                <section>
                <div className="px-4 md:px-20 mb-20">
                    {tables.map((table, index) => (
                    <div key={index} className="mb-10">
                        <Table title={table.title} headers={table.headers} rows={table.rows} />
                    </div>
                    ))}
                </div>
                </section>
        </main>
    );
}