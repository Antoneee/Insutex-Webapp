import Image from "next/image";

type IconHeadingTextItemProps = {
  icon: string
  alt: string
  heading: string
  text: string
}

/**
 * ImageTextItem component displays an image with centered text below it.
 *
 * Props:
 * - imgSrc: string — URL or path to the image source.
 * - alt: string — Alternative text for the image for accessibility.
 * - text: string — Text content displayed below the image.
 *
 * The image is centered with a fixed size, and the text is styled to be muted and centered.
 */
export default function IconHeadingTextItem({ icon, alt, heading, text }: IconHeadingTextItemProps) {
  return (
    <div className="text-center">
      <Image src={icon} alt={alt} className="mx-auto mb-6 h-24 w-24 object-contain" />
      <h3 className="text-3xl mb-4">{heading}</h3>
      <p className="text-lg">{text}</p>
    </div>
  )
}