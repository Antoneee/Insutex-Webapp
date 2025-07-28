import FormsAvailable from "@/app/components/FormsAvailable";
import ImageCarousel from "@/app/components/ImageCarousel";
import image1 from "@/public/cnc-precision-machining-forging/stainless-steel/carousel/1.png";
import image2 from "@/public/cnc-precision-machining-forging/stainless-steel/carousel/2.png";
import image3 from "@/public/cnc-precision-machining-forging/stainless-steel/carousel/3.png";
import image4 from "@/public/cnc-precision-machining-forging/stainless-steel/carousel/4.png";
import image5 from "@/public/cnc-precision-machining-forging/stainless-steel/carousel/5.png";
import Table, { TableProps } from "@/app/components/Table";

export default function StainlessSteel() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ].map(image => image.src)

    const tables: TableProps[] = [
        {
            title: "Austenitic Grade Stainless Steel",
            headers: ["JIS", "C", "Si", "Mn", "P", "S", "Ni", "Cr", "Mo", "Others"],
            rows: [
                ["SUS 303", "0.15Max", "1.0Max", "2.0Max", "0.20Max", "0.15Min", "8.0~10.0", "17.0~19.0", "0.60Max", ""],
                ["SUS 303Cu", "0.15Max", "1.0Max", "3.0Max", "0.20Max", "0.15Min", "8.0~10.0", "17.0~19.0", "0.60Max", "Cu 1.5~3.5"],
                ["SUS 304", "0.08Max", "1.0Max", "2.0Max", "0.045Max", "0.30Max", "8.0~10.5", "18.0~20.0", "-", ""],
            ],
        },
        {
            title: "Ferritic Grade Stainless Steel",
            headers: ["JIS", "C", "Si", "Mn", "P", "S", "Ni", "Cr", "Mo", "Others"],
            rows: [
                ["SUS 430", "0.12Max", "0.75Max", "1.0Max", "0.04Max", "0.03Max", "-", "16.0~18.0", "-", ""],
                ["SUS 430F", "0.12Max", "1.0Max", "1.25Max", "0.06Max", "0.15Max", "-", "16.0~18.0", "0.60Max", ""],
            ],
        },
        {
            title: "Martensitic Grade Stainless Steel",
            headers: ["JIS", "C", "Si", "Mn", "P", "S", "Ni", "Cr", "Mo", "Others"],
            rows: [
                ["SUS 416", "0.15Max", "1.0Max", "1.25Max", "0.06Max", "0.15Max", "0.60Max", "12.0~14.0", "0.60Max", ""],
                ["SUS 420F", "0.26~0.40", "1.0Max", "1.25Max", "0.06Max", "0.15Max", "0.60Max", "12.0~14.0", "0.60Max", ""],
                ["SUS 440C", "0.95~1.2", "1.0Max", "1.0Max", "0.04Max", "0.03Max", "0.60Max", "16.0~18.0", "0.75Max", ""],
            ],
        },
    ];


    return (
        <main>
            <section>
                <div className="relative bg-stainless-steel bg-cover bg-center px-4 py-20 md:px-20 mb-20">
                <div className="absolute inset-0 bg-black/45 z-0" />
                <h1 className="relative text-neutral-white z-10 text-2xl md:text-4xl text-center mt-10 md:mt-20">Stainless Steel</h1>
                </div>
            </section>

            <section>
                <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-20 px-4 md:px-20 mb-20">
                <div className="w-full md:w-1/2">
                    <ImageCarousel images={images} interval={7500} />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="mb-3 text-xl md:text-2xl font-semibold">Stainless Steel</h2>
                    <p className="mb-10 text-justify">
                    Stainless steel is a strong, corrosion-resistant metal alloy composed primarily of iron, chromium, and other elements like nickel and molybdenum...
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