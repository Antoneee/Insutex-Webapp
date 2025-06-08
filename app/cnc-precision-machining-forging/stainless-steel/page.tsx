import FormsAvailable from "@/app/components/FormsAvailable";
import AutoImageCarousel from "@/app/components/AutoImageCarousel";
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
                <div className="relative bg-stainless-steel bg-cover bg-center p-20 mb-20">
                    {/* 
                    Slightly darken background to make heading more readable.
                    If you want to adjust darkness/brightness change number in "bg-black/<NUMBER>" in div below.
                    */}
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Stainless Steel</h1>
                </div>
            </section>
            <section>
                <div className="px-20 flex gap-x-20 mb-20">
                    <div className="w-1/2">
                        <AutoImageCarousel images={images} interval={7500}/>
                    </div>
                    <div className="w-1/2">
                        <h2 className="mb-3">Stainless Steel</h2>
                        <p className="mb-10">
                            Stainless steel is a strong, corrosion-resistant metal alloy composed primarily of iron, chromium, and other elements like nickel and molybdenum. Its resistance to rust, staining, and extreme temperatures makes it ideal for a wide range of applications, including construction, automotive, medical instruments, kitchenware, and industrial machinery. Stainless steel is valued for its durability, low maintenance, and hygienic properties, making it a preferred choice in both structural and decorative applications.
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