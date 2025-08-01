import Image from "next/image";
import AlliedMineralLogo from '@/public/foundry-and-smelters/allied-mineral-logo.png';
import CopperAlloyCorelessFurnace from '@/public/foundry-and-smelters/allied-mineral/copper-alloy-coreless-furnace.png';
import Link from "next/link";

type HeadingBulletedListProps = {
  heading: string;
  items: string[];
};

function HeadingBulletedList({ heading, items }: HeadingBulletedListProps) {
  return (
    <>
      <h3 className="uppercase text-primary font-semibold text-xl">{heading}</h3>
      <ul className="list-disc list-inside mb-6 text-lg">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default function AlliedMineral() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative bg-allied-mineral bg-cover bg-center py-32 md:py-52 min-h-[400px] px-10 md:px-20 mb-20">
          <div className="absolute inset-0 bg-black/20 z-0" /> 
          <div className="relative z-10">
            <h1 className="relative text-neutral-white mt-20 z-10">Monolithic Refractory Ceramics</h1>
            <p className="relative z-10 text-base md:text-xl text-neutral-white">
                    <Link href="/" className="hover:underline">
                        Insutex Industries
                    </Link>
                    {" "}
                    &rarr;
                    {" "}
                    <Link href="/foundry-and-smelters" className="hover:underline">
                        Foundry and Smelters
                    </Link>
                    &rarr;
                    {" "}
                    <Link href="/foundry-and-smelters/allied-mineral" className="hover:underline">
                        Monolithic Refractory Ceramics
                    </Link>
                    </p>
          </div>
          <div className="bg-black/45 w-full h-full absolute inset-0"></div>
        </div>
      </section>

      {/* Company Description */}
      <section>
        <div className="flex flex-col md:flex-row px-6 md:px-40 mb-20 gap-8">
          <div className="md:w-1/3 flex items-center justify-center">
            <Image
              src={AlliedMineralLogo}
              alt="Allied Mineral logo"
              className="w-auto h-auto max-h-32 md:max-h-80"
            />
          </div>
          <div className="md:w-2/3 text-justify text-lg">
            <p>
              Allied Mineral Products is a world leader in the design and manufacture of monolithic refractories and precast shapes for more than 60 years. With strong sales and service teams in the foundry, aluminum, steel, heat treat/forge and industrial markets, our success is based on our dedication to Being There Worldwide with Refractory Solutions.
              <br />
              <br />
              Producing quality, consistent products is top priority at Allied and we have the products to meet your refractory needs. Our extensive product line includes innovative refractory technology and longstanding refractory alternatives.
              Allied’s focus on quality at every stage in the production process is unparalleled. A stringent raw material standard and global quality control testing before and after each batch is produced, provides customers with consistent products. We provide quick response times to any urgent request through flexible manufacturing systems at all our manufacturing facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Product + Furnace Image */}
      <section>
        <div className="flex flex-col md:flex-row px-6 md:px-40 mb-20 gap-10">
          <div className="md:w-2/5">
            <HeadingBulletedList
              heading="Products"
              items={[
                "Coreless furnace",
                "Refractory lining material",
                "Refractory maintenance material",
                "Coil cement",
              ]}
            />
            <HeadingBulletedList
              heading="Ladle"
              items={["Alumina castable", "Castable coating"]}
            />
            <HeadingBulletedList
              heading="Reverberatory furnace"
              items={["Lining castable"]}
            />
            <HeadingBulletedList
              heading="Inductor"
              items={["Refractory lining material"]}
            />
            <HeadingBulletedList
              heading="Other"
              items={[
                "Engineering design service for application of refractory material",
                "Supplying ramming machine",
              ]}
            />
          </div>
          <div className="md:w-3/5 flex justify-center">
            <Image
              src={CopperAlloyCorelessFurnace}
              alt="Copper alloy coreless furnace"
              className="w-[1000px] h-auto "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
