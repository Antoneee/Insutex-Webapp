import FormsAvailable from "@/app/components/FormsAvailable";
import ImageCarousel from "@/app/components/ImageCarousel";
import image1 from "@/public/cnc-precision-machining-forging/copper/carousel/1.png";
import image2 from "@/public/cnc-precision-machining-forging/copper/carousel/2.png";
import image3 from "@/public/cnc-precision-machining-forging/copper/carousel/3.png";
import image4 from "@/public/cnc-precision-machining-forging/copper/carousel/4.png";
import image5 from "@/public/cnc-precision-machining-forging/copper/carousel/5.png";
import Table, { TableProps } from "@/app/components/Table";
import Link from "next/link";

export default function Copper() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ].map(image => image.src)

    const tables: TableProps[] = [
        {
            title: "Copper",
            headers: ["Grade (JIS)", "Cu"],
            rows: [
                ["C1100", "99.9min"]
            ]
        }
    ]

    return (
        <main>
            <section>
                    <div className="relative bg-copper bg-cover bg-center py-32 md:py-52 min-h-[400px] px-10 md:px-20 mb-20">
                    <div className="absolute inset-0 bg-black/45 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Copper</h1>
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
                    <Link href="/cnc-precision-machining-forging/copper" className="hover:underline">
                        Copper
                    </Link>
                    </p>
                </div>
            </section>

            <section>
                <div className="px-6 md:px-20 flex flex-col md:flex-row gap-y-10 md:gap-x-20 mb-20">
                    <div className="w-full md:w-1/2">
                        <ImageCarousel images={images} interval={7500}/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="mb-3 text-2xl font-semibold">Copper</h2>
                        <p className="mb-10 text-justify">
                            Copper is a versatile and highly conductive metal known for its excellent electrical and thermal properties. It is widely used in electrical wiring, plumbing, industrial machinery, and construction due to its durability and resistance to corrosion. 
                            Copper rods, in particular, are essential for manufacturing electrical components, grounding systems, and precision engineering applications. Their superior conductivity makes them ideal for power transmission, while their malleability allows for easy shaping and fabrication. Whether for industrial, commercial, or residential use, copper remains a fundamental material across various industries.
                        </p>
                        <FormsAvailable forms={["Round Bar", "Flat Bar", "Hex Bar", "Tube/Pipe", "Rod", "Wire" ]}/>
                    </div>
                </div>
            </section>

            <section>
                <div className="px-6 md:px-20 mb-20">
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
