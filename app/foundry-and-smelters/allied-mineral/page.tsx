import Image from "next/image";
import AlliedMineralLogo from '@/public/foundry-and-smelters/allied-mineral-logo.png';
import CopperAlloyCorelessFurnace from '@/public/foundry-and-smelters/allied-mineral/copper-alloy-coreless-furnace.png'

type HeadingBulletedListProps = {
    heading: string;
    items: string[];
}

function HeadingBulletedList({heading, items}: HeadingBulletedListProps) {
    return (
        <>
            <h3 className="uppercase text-primary font-semibold text-lg">{heading}</h3>
            <ul className="list-disc list-inside mb-6">
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default function AlliedMineral() {
    return (
        <main>
            <section>
                <div className="relative bg-allied-mineral bg-cover bg-center p-20 mb-20">
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Monolithic Refractory Ceramics</h1>
                </div>
            </section>
                <div className="flex px-20 mb-20">
                    <div className="w-1/3 flex items-center">
                        <Image src={AlliedMineralLogo} alt="Allied Mineral logo"/>
                    </div>
                    <div className="w-2/3">
                        <p>
                            Allied Mineral Products is a world leader in the design and manufacture of monolithic refractories and precast shapes for more than 60 years. With strong sales and service teams in the foundry, aluminum, steel, heat treat/forge and industrial markets, our success is based on our dedication to Being There Worldwide with Refractory Solutions.
                            <br/>
                            <br/>
                            Producing quality, consistent products is top priority at Allied and we have the products to meet your refractory needs. Our extensive product line includes innovative refractory technology and longstanding refractory alternatives.
                            Allied’s focus on quality at every stage in the production process is unparalleled. A stringent raw material standard and global quality control testing before and after each batch is produced, provides customers with consistent products. We provide quick response times to any urgent request through flexible manufacturing systems at all our manufacturing facilities.
                        </p>
                    </div>
                </div>
            <section>
                <div className="flex px-20 mb-20">
                    <div className="w-2/5">
                        <HeadingBulletedList heading="Products" items={[
                            "Coreless furnace", 
                            "Refractory lining material", 
                            "Refractory maintenance material", 
                            "Coil cement"]}/>

                        <HeadingBulletedList heading="Ladle" items={[
                            "Alumina castable", 
                            "Castable coating"]}/>

                        <HeadingBulletedList heading="Reverberatory furnace" items={[
                            "Lining castable"]}/>
                        
                        <HeadingBulletedList heading="Inductor" items={[
                            "Refractory lining material"]}/>
                        
                        <HeadingBulletedList heading="Other" items={[
                            "Engineering design service for application of refractory material",
                            "Supplying ramming machine"]}/>
                    </div>
                    <div className="w-3/5">
                        <Image src={CopperAlloyCorelessFurnace} alt="Copper alloy coreless furnace"/>
                    </div>
                </div>
            </section>
        </main>
    );
}