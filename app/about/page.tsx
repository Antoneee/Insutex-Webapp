import Image from "next/image";
import HistoryImage from "@/public/about/history.png";

export default function About() {
    return (
        <main>
            <section>
                <div className="bg-about bg-cover bg-center p-20 text-center">
                    <h1 className="text-neutral-white my-10">About Us</h1>
                </div>
            </section>
            <section>
                <div className="p-20 text-lg text-center">
                    <p className="w-3/4 mx-auto">
                        Insutex Industries Sdn. Bhd. specializes in the distribution of a wide range of industrial materials, including graphites, cokes, aluminum master alloys, brass/bronze/copper rods and ingots, fluxes, refractories, and more.
                        <br/>
                        <br/>
                        Through our Insutex connections, we primarily serve countries across South and Southeast Asia, delivering reliable and efficient solutions tailored to meet the needs of diverse industries.
                    </p>  
                </div>
            </section>
            <section>
                <div className="p-20 text-lg text-center bg-primary-light">
                    <p className="w-3/4 mx-auto">
                    Our mission is to enhance our customers’ competitiveness by consistently providing the right products at reasonable prices—backed by dependable delivery and exceptional service. We take pride in our flexibility, fast response times, and proactive approach, which have become the hallmarks of our reputation.
                    <br/>
                    <br/>
                    In addition to outstanding customer service, we are committed to offering high-quality products that meet precise specifications. All items are regularly tested and verified by manufacturers to ensure quality and consistency. We also offer custom-made solutions to meet specific customer requirements, ensuring a perfect fit for each application.
                    </p>  
                </div>
            </section>
            <section>
                <div className="p-20 flex flex-col items-center">
                    <h2 className="uppercase text-center mb-8">History</h2>
                    <Image src={HistoryImage} alt="Insutex History"/>
                </div>
            </section>
        </main>
    );
}