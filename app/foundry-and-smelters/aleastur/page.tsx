import Image from 'next/image';
import AleasturLogo from '@/public/foundry-and-smelters/aleastur-logo.png';
import image1 from "@/public/foundry-and-smelters/aleastur/carousel/1.png";
import image2 from "@/public/foundry-and-smelters/aleastur/carousel/2.png";
import image3 from "@/public/foundry-and-smelters/aleastur/carousel/3.png";
import ImageCarousel from '@/app/components/ImageCarousel';

export default function Aleastur() {
    const images = [
        image1,
        image2,
        image3,
    ].map((image) => image.src);


    return (
        <main>
            <section className="relative">
                <div className="relative bg-aleastur bg-cover bg-center px-40 py-20 mb-20">
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <h1 className="relative text-neutral-white mt-20 z-10">Master Alloy and Grain Refiner</h1>
                    <div className="bg-black/45 w-full h-full absolute inset-0"></div>
                </div>
            </section>
            <section>
                <div className="flex px-40 mb-20">
                    <div className="w-1/3 flex items-center">
                        <Image src={AleasturLogo} alt="Aleastur logo"/>
                    </div>
                    <div className="w-2/3">
                        <p className="text-lg">
                            Within our Aluminium Division, the group currently operates two production facilities in Spain, with a third facility in Bahrain. Our plants are organized into two distinct business units, serving the aluminium industry worldwide.
                            <br/>
                            <br/>
                            We specialize in producing complex, value-added aluminium alloys tailored for various applications across the aluminium transformation chain.
                            <br/>
                            <br/>
                            Our alloys are delivered in a wide range of physical formats and dimensions, meeting the specific technical requirements of our customers and their end-use applications. Backed by extensive metallurgical expertise and stringent quality standards, we are recognized as one of the leading global operators in the specialized segments of the aluminium industry in which we operate.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex px-40 py-20 gap-32">
                    <div className="w-2/3 h-96 mx-auto">
                        <ImageCarousel images={images} interval={7500}/>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex px-40 pt-20 gap-4 mb-4">
                    <div className='w-1/4 shadow-md flex flex-col'>
                        <div className='flex h-20 items-center justify-center bg-primary'>
                            <h3 className='text-neutral-white font-bold text-xl'>AlTiB</h3>
                        </div>
                        <p className='text-lg p-4 h-104'>
                            AlTiB alloys (Aluminium Titanium Boron alloys) are the most commonly used aluminium grain refiners in aluminium alloys manufacturing. Available in different Titanium/Boron ratios. The selection of ratio between Titanium and Boron depends on several factors such as desired grain size, production process conditions, and percentage of recycled aluminium used in the alloy.
                            <br/>
                            <br/>
                            Alloys: AlTi5B1, AlTi5B0.2, AlTi3B1, Others on Request
                        </p>
                        <div className='h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-md mt-auto'>
                            <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                            <p className='text-center'>
                                Coil, Sticks, Contibar, Waffle
                            </p>
                        </div>
                    </div>
                    <div className='w-1/4 shadow-md flex flex-col'>
                        <div className='flex h-20 items-center justify-center bg-primary'>
                            <h3 className='text-neutral-white font-bold text-xl'>AlTiC</h3>
                        </div>
                        <p className='text-lg p-4 h-104'>
                            AlTiC alloys (Aluminium Titanium Carbon alloys), salts-based or metal-based, are the best alternative for those aluminium alloys where the addition of boron might be counterproductive, such as some 5000 and 7000 series alloys and EC grade alloys.
                            <br/>
                            <br/>
                            Alloys: AlTi5C0.15, Others on Request
                        </p>
                        <div className='h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-md mt-auto'>
                            <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                            <p className='text-center'>
                                Coil, Sticks, Contibar, Waffle
                            </p>
                        </div>
                    </div>
                    <div className='w-1/4 shadow-md flex flex-col'>
                        <div className='flex h-20 items-center justify-center bg-primary'>
                            <h3 className='text-neutral-white font-bold text-xl'>006 Ultimate™</h3>
                        </div>
                        <p className='text-lg p-4 h-104'>
                            006 Ultimate™ is the latest development in grain refiners, especially designed to achieve the highest cleanliness in aluminium alloys without compromising grain refining efficiency.
                        </p>
                        <div className='h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-md mt-auto'>
                            <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                            <p className='text-center'>
                                Coil, Sticks
                            </p>
                        </div>
                    </div>
                    <div className='w-1/4 shadow-md flex flex-col'>
                        <div className='flex h-20 items-center justify-center bg-primary'>
                            <h3 className='text-neutral-white font-bold text-xl'>Supreme™</h3>
                        </div>
                        <p className='text-lg p-4 h-104'>
                            Supreme™ is ALEASTUR&apos;s High Efficiency Grain Refiner, delivering metallographic excellence and superior performance in refining applications.
                        </p>
                        <div className='h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-md mt-auto'>
                            <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                            <p className='text-center'>
                                Coil, Sticks
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex px-40 gap-4 justify-center mb-20">
                    <div className='w-1/4'></div>
                    <div className='w-1/4 shadow-md flex flex-col'>
                        <div className='flex h-20 items-center justify-center bg-primary'>
                            <h3 className='text-neutral-white font-bold text-xl'>Basic Alloy Range</h3>
                        </div>
                        <p className='text-lg p-4 h-104'>
                            AlB, AlSr, AlCa, AlTi
                        </p>
                        <div className='h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-md mt-auto'>
                            <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                            <p className='text-center'>
                                Coil, Sticks, Contibar, Waffle
                            </p>
                        </div>
                    </div>
                    <div className='w-1/4 shadow-md flex flex-col'>
                        <div className='flex h-20 items-center justify-center bg-primary'>
                            <h3 className='text-neutral-white font-bold text-xl'>Additional Alloys</h3>
                        </div>
                        <p className='text-lg p-4 h-104'>
                            AlV, AlZr, AlCu, AlCr, AlFe, AlMn, AlMg, AlNb, AlNi, AlZn, AlSi, AlSc, AlBe, AlBi, AlCd, AlCo, AlEr, AlGa, AlGe, AlHf, AlIn, AlLi, AlMo, AlPb, AlRe, AlSb, AlSn, AlTb, AlTl, AlTm, AlW, AlY, AlYb, AlDy, AlGd, AlHo, AlLa, AlNd, AlPr, AlSm, AlTh, AlTiB, AlTiC
                        </p>
                        <div className='h-28 bg-primary-light flex flex-col items-center justify-center p-4 text-md mt-auto'>
                            <h4 className='text-center font-semibold text-primary'>Forms Available</h4>
                            <p className='text-center'>
                                Waffle
                            </p>
                        </div>
                    </div>
                    <div className='w-1/4'></div>
                </div>
            </section>
        </main>
    )
}
