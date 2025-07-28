import type { StaticImageData } from 'next/image';
import ImageTextOverlayCard from "../components/ImageTextOverlayCard";
import CopperCardImage from "@/public/cnc-precision-machining-forging/copper-card.png";
import BronzeCardImage from "@/public/cnc-precision-machining-forging/bronze-card.png";
import BrassCardImage from "@/public/cnc-precision-machining-forging/brass-card.png";
import StainlessSteelCardImage from "@/public/cnc-precision-machining-forging/stainless-steel-card.png";
import FreeCuttingSteelCardImage from "@/public/cnc-precision-machining-forging/free-cutting-steel-card.png";
import AluminiumCardImage from "@/public/cnc-precision-machining-forging/aluminium-card.png";
import Link from "next/link";

type CNCPrecisionMachiningForgingCardProps = {
  href: string;
  backgroundImg: StaticImageData;
  alt: string;
  overlayText: string;
};

function CNCPrecisionMachiningForgingCard({
  href,
  backgroundImg,
  alt,
  overlayText,
}: CNCPrecisionMachiningForgingCardProps) {
  return (
    <Link href={`/cnc-precision-machining-forging${href}`}>
      <ImageTextOverlayCard
        backgroundImg={backgroundImg}
        alt={alt}
        overlayText={overlayText}
        overlayTextClassName="uppercase text-xl text-neutral-white font-extrabold w-3/5"
        overlayTextPosition="bottom-left"
      />
    </Link>
  );
}

export default function CNCPrecisionMachiningForging() {
  return (
    <main>
      <section>
        <div className="bg-primary-light bg-cover bg-center px-6 py-20 md:px-20">
          <h1 className="text-primary mt-10 md:mt-20">CNC, Precision Machining, Forging</h1>
          <p className="text-2xl md:text-3xl text-neutral-black">
            Moving Goods, Growing Partnerships
          </p>
        </div>
      </section>

      <section>
        <div className="px-6 py-12 md:p-20 text-lg text-center">
          <p className="w-full md:w-3/4 mx-auto">
            We offer a variety of materials in different shapes and forms. If you don’t see what you’re looking for, please contact us—we’ll be happy to assist you!
          </p>
        </div>
      </section>

      <section>
        <div className="w-11/12 mx-auto mb-24 md:mb-48">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CNCPrecisionMachiningForgingCard href="/copper" backgroundImg={CopperCardImage} alt="Copper material" overlayText="Copper" />
            <CNCPrecisionMachiningForgingCard href="/bronze" backgroundImg={BronzeCardImage} alt="Bronze material" overlayText="Bronze" />
            <CNCPrecisionMachiningForgingCard href="/brass" backgroundImg={BrassCardImage} alt="Brass material" overlayText="Brass" />
            <CNCPrecisionMachiningForgingCard href="/stainless-steel" backgroundImg={StainlessSteelCardImage} alt="Stainless steel material" overlayText="Stainless Steel" />
            <CNCPrecisionMachiningForgingCard href="/free-cutting-steel" backgroundImg={FreeCuttingSteelCardImage} alt="Free cutting, alloy, and carbon steel material" overlayText="Free Cutting, Alloy, & Carbon Steel" />
            <CNCPrecisionMachiningForgingCard href="/aluminium" backgroundImg={AluminiumCardImage} alt="Aluminium material" overlayText="Aluminium" />
          </div>
        </div>
      </section>
    </main>
  );
}
