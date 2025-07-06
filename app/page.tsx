import Image from "next/image";
import ImageCaptionItem from "./components/ImageCaptionItem";
import IconHeadingTextItem from "./components/IconHeadingTextItem";
import WhoWeAreImage from "@/public/home/who-we-are.png";
import CNCPrecisionMachiningForgingImage from "@/public/home/cnc-precision-machining-forging.png";
import FrictionMetallurgicalMaterialsImage from "@/public/home/friction-and-metallurgical-materials.png";
import FoundrySmeltersimage from "@/public/home/foundry-and-smelters.png";
import FastServiceIcon from "@/public/home/meter.svg";
import AsiaMarketIcon from "@/public/home/asia.svg";
import DirectAccessIcon from "@/public/home/conversation.svg";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <div className="bg-home bg-cover bg-center p-20">
          <div className="relative z-10">
            <h1 className="mt-20 text-neutral-white">Insutex Industries Sdn. BhD.</h1>
            <p className="text-3xl text-neutral-white">Moving Goods, Growing Partnerships</p>
          </div>
          <div className="bg-black/45 w-full h-full absolute inset-0"></div>
        </div>
      </section>
      <section>
        <div className="flex items-center gap-20 p-20">
          <div className="w-3/5">
            <Image src={WhoWeAreImage} alt="Who We Are" className="w-full h-auto object-cover"/>
          </div>
          <div className="w-2/5 text-left">
            <h2 className="uppercase mb-4">Who We Are</h2>
            <p className="text-lg mb-8">As a trusted supplier to industrial sectors, we provide essential materials and equipment for foundry, smelter, machining, and oil & gas industries, supporting projects across Asia.</p>
            <Link href="/about">
              <Button borderColor="border-primary" textColor="text-primary">About Us</Button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-primary-light px-40 py-20">
          <h2 className="uppercase text-center mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-3 gap-48 text-lg">
            <Link href="/cnc-precision-machining-forging">
              <ImageCaptionItem img={CNCPrecisionMachiningForgingImage} alt="CNC, Precision Machining, Forging" text="CNC, Precision Machining, Forging"/>
            </Link>
            <Link href="/friction-and-metallurgical-materials">
              <ImageCaptionItem img={FrictionMetallurgicalMaterialsImage} alt="Friction and Metallurgical Materials" text="Friction and Metallurgical Materials"/>
            </Link>
            <Link href="/foundry-and-smelters">
              <ImageCaptionItem img={FoundrySmeltersimage} alt="Foundry and Smelters" text="Foundry and Smelters"/>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="p-20">
          <h2 className="uppercase text-center mb-8">Company Services</h2>
          <div className="grid grid-cols-3 gap-12 text-lg">
            <IconHeadingTextItem icon={FastServiceIcon} alt="Fast Service" heading="Fast Service" text="We aim to service with consistent delivery and quick response time."/>
            <IconHeadingTextItem icon={AsiaMarketIcon} alt="Asia Market" heading="Asia Market" text="Our market consist of Malaysia, Singapore, Thailand, Indonesia, Yemen, Korea, China, India, etc."/>
            <IconHeadingTextItem icon={DirectAccessIcon} alt="Direct Access" heading="Direct Access" text="Feel free to contact us through email or phone number."/>
          </div>
        </div>
      </section>
    </main>
  );
}
