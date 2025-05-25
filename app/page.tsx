import Image from "next/image";
import WhoWeAreImage from "@/public/home/who-we-are.png";
import Button from "./components/Button";

export default function Home() {
  return (
    <main>
      <section>
        <div className="bg-hero bg-cover bg-center p-20">
          <h1 className="text-neutral-white mt-20">Insutex Industries Sdn. BhD.</h1>
          <p className="text-3xl text-neutral-white">Moving Goods, Growing Partnerships</p>
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
            <Button borderColor="border-primary" textColor="text-primary">About Us</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
