import Image from "next/image";
import type { StaticImageData } from 'next/image';

type ImageTextItemProps = {
  img: StaticImageData
  alt: string
  text: string
}

export default function ImageCaptionItem({ img, alt, text }: ImageTextItemProps) {
  return (
    <div>
      <Image src={img} alt={alt} className="w-full h-auto mb-4 object-contain" />
      <p className="text-center">{text}</p>
    </div>
  )
}