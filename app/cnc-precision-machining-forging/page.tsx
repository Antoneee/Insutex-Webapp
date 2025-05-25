import type { StaticImageData } from 'next/image';
import ImageTextOverlayCard from "../components/ImageTextOverlayCard";
import CopperImage from "@/public/cnc-precision-machining-forging/copper.png";
import BronzeImage from "@/public/cnc-precision-machining-forging/bronze.png";
import BrassImage from "@/public/cnc-precision-machining-forging/brass.png";
import StainlessSteelImage from "@/public/cnc-precision-machining-forging/stainless-steel.png";
import FreeCuttingSteelImage from "@/public/cnc-precision-machining-forging/free-cutting-steel.png";
import AluminumImage from "@/public/cnc-precision-machining-forging/aluminium.png";
import Link from "next/link";

type CNCPrecisionMachiningForgingCardProps = {
    href: string;
    backgroundImg: StaticImageData;
    alt: string;
    overlayText: string;
}

function CNCPrecisionMachiningForgingCard({
    href,
    backgroundImg,
    alt,
    overlayText
}: CNCPrecisionMachiningForgingCardProps) {
    return (
        <Link href={`/cnc-precision-machining-forging${href}`}>
            <ImageTextOverlayCard backgroundImg={backgroundImg} alt={alt} overlayText={overlayText} overlayTextClassName="uppercase text-xl text-neutral-white font-extrabold w-3/5" overlayTextPosition="bottom-left"/>
        </Link>
    )
}

export default function CNCPrecisionMachiningForging() {
    return (
        <main>
            <section>
                <div className="bg-primary-light bg-cover bg-center p-20">
                    <h1 className="text-primary mt-20">CNC, Precision Machining, Forging</h1>
                    <p className="text-3xl text-neutral-black">Moving Goods, Growing Partnerships</p>
                </div>
            </section>
            <section>
                <div className="p-20 text-lg text-center">
                    <p className="w-3/4 mx-auto">
                        We offer a variety of materials in different shapes and forms. If you don’t see what you’re looking for, please contact us—we’ll be happy to assist you!                        <br/>
                    </p>  
                </div>
            </section>
            <section>
                <div className="w-10/12 mx-auto mb-48">
                    <div className="grid grid-cols-3 gap-6">
                        <CNCPrecisionMachiningForgingCard href="/copper" backgroundImg={CopperImage} alt="Copper material" overlayText="Copper"/>
                        <CNCPrecisionMachiningForgingCard href="/bronze" backgroundImg={BronzeImage} alt="Bronze material" overlayText="Bronze"/>
                        <CNCPrecisionMachiningForgingCard href="/brass" backgroundImg={BrassImage} alt="Brass material" overlayText="Brass"/>
                        <CNCPrecisionMachiningForgingCard href="/stainless-steel" backgroundImg={StainlessSteelImage} alt="Stainless steel material" overlayText="Stainless Steel"/>
                        <CNCPrecisionMachiningForgingCard href="/free-cutting-steel" backgroundImg={FreeCuttingSteelImage} alt="Free cutting, alloy, and carbon steel material material" overlayText="Free Cutting, Alloy, & Carbon Steel"/>
                        <CNCPrecisionMachiningForgingCard href="/aluminium" backgroundImg={AluminumImage} alt="Aluminium material" overlayText="Aluminium"/>
                    </div>
                </div>
            </section>
        </main>
    )
}