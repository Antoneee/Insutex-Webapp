import Image from 'next/image';
import AleasturLogo from '@/public/foundry-and-smelters/aleastur-logo.png';
import image1 from "@/public/foundry-and-smelters/aleastur/carousel/1.png";
import image2 from "@/public/foundry-and-smelters/aleastur/carousel/2.png";
import image3 from "@/public/foundry-and-smelters/aleastur/carousel/3.png";
import ImageCarousel from '@/app/components/ImageCarousel';
import Link from "next/link";
import Head from "next/head";

export default function Aleastur() {
    const images = [
        image1,
        image2,
        image3,
    ].map((image) => image.src);

    return (<>
        <main>
            <Head>
            <title>Master Alloy & Aluminium Grain Refiner Supplier Malaysia | Insutex Industries</title>
            <meta name="description" content="Insutex Industries partners with Aleastur to supply high-performance aluminium master alloys and grain refiners like AlTiB, AlTiC, 006 Ultimate™, and Supreme™ across Malaysia and Asia." />
            <meta name="keywords" content="grain refiner malaysia, aluminium master alloy supplier, AlTiB AlSr Malaysia, AlSr Stock in malaysia, aluminium grain refining malaysia, AlTiB coil stick waffle" />
            <link rel="canonical" href="https://www.insutex.my/foundry-and-smelters/aleastur" />
            <meta property="og:title" content="Aluminium Grain Refiner & Master Alloy Supplier Malaysia" />
            <meta property="og:description" content="Trusted supplier of aluminium master alloys and grain refiners from Aleastur. Discover AlTiB, AlTiC, and advanced alloys for smelting and casting." />
            <meta property="og:url" content="https://www.insutex.my/foundry-and-smelters/aleastur" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://www.insutex.my/og/aleastur-grain-refiner.jpg" />
            </Head>
            {/* Hero Section */}
            <section className="relative">
                <div className="relative bg-aleastur bg-cover bg-center py-32 md:py-52 min-h-[400px] px-10 md:px-20 mb-20">
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <div className="relative z-10 w-full">
                        <h1 className="relative text-neutral-white mt-20 z-10">Master Alloy and Grain Refiner</h1>
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
                        <Link href="/foundry-and-smelters/aleastur" className="hover:underline">
                            Master Alloy and Grain Refiner
                        </Link>
                        </p>
                        </div>
                        <div className="bg-black/45 w-full h-full absolute inset-0"></div>
                </div>
            </section>

            {/* Logo and Description Section */}
            <section>
                <div className="flex flex-col md:flex-row px-6 md:px-40 mb-10 md:mb-20 gap-8 md:gap-16">
                    <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start">
                        <Image 
                            src={AleasturLogo} 
                            alt="Aleastur logo" 
                            className="w-full max-w-xs md:max-w-none"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-base md:text-lg">
                            Within our Aluminium Division, the group currently operates two production facilities in Spain, with a third facility in Bahrain. Our plants are organized into two distinct business units, serving the aluminium industry worldwide.
                            <br/><br/>
                            We specialize in producing complex, value-added aluminium alloys tailored for various applications across the aluminium transformation chain.
                            <br/><br/>
                            Our alloys are delivered in a wide range of physical formats and dimensions, meeting the specific technical requirements of our customers and their end-use applications. Backed by extensive metallurgical expertise and stringent quality standards, we are recognized as one of the leading global operators in the specialized segments of the aluminium industry in which we operate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Carousel Section */}
            <section>
                <div className="flex px-6 md:px-40 py-10 md:py-20">
                    <div className="w-full md:w-2/3 h-64 md:h-96 mx-auto">
                        <ImageCarousel images={images} interval={7500}/>
                    </div>
                </div>
            </section>

            {/* Product Cards Section */}
            <section>
                {/* First Row - Now using grid for perfect alignment */}
                <div className="grid grid-cols-1 md:grid-cols-4 px-6 md:px-40 pt-10 md:pt-20 gap-4 mb-4">
                    {/* AlTiB Card */}
                    <div className='shadow-md flex flex-col h-full'>
                        <div className='flex h-16 md:h-20 items-center justify-center bg-primary'>
                            <h3 className='text-neutral-white font-bold text-lg md:text-xl'>AlTiB</h3>
                        </div>
                        <div className='flex-grow p-4'>
                            <p className='text-base md:text-lg'>
                                AlTiB alloys (Aluminium Titanium Boron alloys) are the most commonly used aluminium grain refiners in aluminium alloys manufacturing. Available in different Titanium/Boron ratios.
                                <br/><br/>
                                Alloys: AlTi5B1, AlTi5B0.2, AlTi3B1, Others on Request
                            </p>
                        </div>
                        <div className='h-24 md:h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-sm md:text-md'>
                            <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                            <p className='text-center md:text-lg'>Coil, Sticks, Contibar, Waffle</p>
                        </div>
                    </div>

                    {/* AlTiC Card */}
                    <div className='shadow-md flex flex-col h-full'>
                        <div className='flex h-16 md:h-20 items-center justify-center bg-primary'>
                            <h3 className='text-neutral-white font-bold text-lg md:text-xl'>AlTiC</h3>
                        </div>
                        <div className='flex-grow p-4'>
                            <p className='text-base md:text-lg'>
                                AlTiC alloys (Aluminium Titanium Carbon alloys), salts-based or metal-based, are the best alternative for those aluminium alloys where the addition of boron might be counterproductive.
                                <br/><br/>
                                Alloys: AlTi5C0.15, Others on Request
                            </p>
                        </div>
                        <div className='h-24 md:h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-sm md:text-md'>
                            <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                            <p className='text-center md:text-lg'>Coil, Sticks, Contibar, Waffle</p>
                        </div>
                    </div>

                    {/* 006 Ultimate Card */}
                    <div className='shadow-md flex flex-col h-full'>
                        <div className='flex h-16 md:h-20 items-center justify-center bg-primary'>
                            <h3 className='text-neutral-white font-bold text-lg md:text-xl'>006 Ultimate™</h3>
                        </div>
                        <div className='flex-grow p-4'>
                            <p className='text-base md:text-lg'>
                                006 Ultimate™ is the latest development in grain refiners, especially designed to achieve the highest cleanliness in aluminium alloys without compromising grain refining efficiency.
                            </p>
                        </div>
                        <div className='h-24 md:h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-sm md:text-md'>
                            <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                            <p className='text-center md:text-lg'>Coil, Sticks</p>
                        </div>
                    </div>

                    {/* Supreme Card */}
                    <div className='shadow-md flex flex-col h-full'>
                        <div className='flex h-16 md:h-20 items-center justify-center bg-primary'>
                            <h3 className='text-neutral-white font-bold text-lg md:text-xl'>Supreme™</h3>
                        </div>
                        <div className='flex-grow p-4'>
                            <p className='text-base md:text-lg'>
                                Supreme™ is ALEASTUR&apos;s High Efficiency Grain Refiner, delivering metallographic excellence and superior performance in refining applications.
                            </p>
                        </div>
                        <div className='h-24 md:h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-sm md:text-md'>
                            <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                            <p className='text-center md:text-lg'>Coil, Sticks</p>
                        </div>
                    </div>
                </div>

                {/* Second Row - Centered with 2 cards */}
                <div className="flex justify-center px-6 md:px-40 gap-4 mb-10 md:mb-20">
                    <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-0 mx-auto">
                        {/* Basic Alloy Range Card */}
                        <div className='shadow-md flex flex-col h-full'>
                            <div className='flex h-16 md:h-20 items-center justify-center bg-primary'>
                                <h3 className='text-neutral-white font-bold text-lg md:text-xl'>Basic Alloy Range</h3>
                            </div>
                            <div className='flex-grow p-4'>
                                <p className='text-base md:text-lg'>
                                    AlB, AlSr, AlCa, AlTi
                                </p>
                            </div>
                            <div className='h-24 md:h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-sm md:text-md'>
                                <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                                <p className='text-center md:text-lg'>Coil, Sticks, Contibar, Waffle</p>
                            </div>
                        </div>

                        {/* Additional Alloys Card */}
                        <div className='shadow-md flex flex-col h-full'>
                            <div className='flex h-16 md:h-20 items-center justify-center bg-primary'>
                                <h3 className='text-neutral-white font-bold text-lg md:text-xl'>Additional Alloys</h3>
                            </div>
                            <div className='flex-grow p-4'>
                                <p className='text-base md:text-lg'>
                                    AlV, AlZr, AlCu, AlCr, AlFe, AlMn, AlMg, AlNb, AlNi, AlZn, AlSi, AlSc, AlBe, AlBi, AlCd, AlCo, AlEr, AlGa, AlGe, AlHf, AlIn, AlLi, AlMo, AlPb, AlRe, AlSb, AlSn, AlTb, AlTl, AlTm, AlW, AlY, AlYb, AlDy, AlGd, AlHo, AlLa, AlNd, AlPr, AlSm, AlTh, AlTiB, AlTiC
                                </p>
                            </div>
                            <div className='h-24 md:h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-sm md:text-md'>
                                <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                                <p className='text-center md:text-lg'>Waffle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main></>
    )
}