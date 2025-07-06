import FormsAvailable from "@/app/components/FormsAvailable";
import ImageCarousel from "@/app/components/ImageCarousel";
import image1 from "@/public/cnc-precision-machining-forging/aluminium/carousel/1.png";
import image2 from "@/public/cnc-precision-machining-forging/aluminium/carousel/2.png";
import image3 from "@/public/cnc-precision-machining-forging/aluminium/carousel/3.png";
import image4 from "@/public/cnc-precision-machining-forging/aluminium/carousel/4.png";
import Table, { TableProps } from "@/app/components/Table";

export default function Aluminium() {
    const images = [
        image1,
        image2,
        image3,
        image4,
    ].map(image => image.src)

    const tables: TableProps[] = [
        {
            title: "Aluminum Alloys",
            headers: ["Alloy #", "Si", "Fe", "Cu", "Mn", "Mg", "Cr", "Zn", "Ti", "Others", "Al"],
            rows: [
                ["2011", "0.40Max", "0.70Max", "5.0~6.0", "-", "-", "-", "0.30Max", "-", "Pb 0.20~0.60\nBi 0.20~0.60", "Rem"],
                ["2014", "0.50~1.20", "0.70Max", "3.90~5.00", "0.40~1.20", "0.20~0.80", "0.10Max", "0.25Max", "0.15Max", "Zr + Ti 0.20Max", "Rem"],
                ["2017", "0.20~0.80", "0.70Max", "3.50~4.50", "0.40~1.0", "0.40~0.80", "0.10Max", "0.25Max", "0.15Max", "Zr + Ti 0.20Max", "Rem"],
                ["2024", "0.50Max", "0.50Max", "3.80~4.90", "0.30~0.90", "1.20~1.80", "0.10Max", "0.25Max", "0.15Max", "Zr + Ti 0.20Max", "Rem"],
                ["6061", "0.40~0.80", "0.70Max", "0.15~0.40", "0.15Max", "0.80~1.20", "0.04~0.35", "0.25Max", "0.15Max", "-", "Rem"],
                ["7075", "0.40Max", "0.50Max", "1.20~2.00", "0.30Max", "2.10~2.90", "0.18~0.28", "5.10~6.10", "0.20Max", "Zr + Ti 0.25Max", "Rem"]
            ]
        }
    ];

    return (
        <main>
            <section>
                <div className="relative bg-aluminium bg-cover bg-center p-20 mb-20">
                    {/* 
                    Slightly darken background to make heading more readable.
                    If you want to adjust darkness/brightness change number in "bg-black/<NUMBER>" in div below.
                    */}
                    <div className="absolute inset-0 bg-black/45 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Aluminium</h1>
                </div>
            </section>
            <section>
                <div className="px-20 flex gap-x-20 mb-20">
                    <div className="w-1/2">
                        <ImageCarousel images={images} interval={7500}/>
                    </div>
                    <div className="w-1/2">
                        <h2 className="mb-3">Aluminium</h2>
                        <p className="mb-10">
                            Aluminum is a lightweight, corrosion-resistant metal known for its excellent strength-to-weight ratio and versatility. It is widely used in industries such as aerospace, automotive, construction, and electronics due to its durability, conductivity, and resistance to rust. 
                            Aluminum’s malleability allows for easy shaping and fabrication, making it ideal for applications like structural components, heat exchangers, packaging, and consumer goods. Its recyclability and sustainability further enhance its value, making aluminum a preferred material across various industries.
                        </p>
                        <FormsAvailable forms={["Round Bar", "Flat Bar", "Hex Bar", "Tube/Pipe", "Rod", "Wire"]}/>
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