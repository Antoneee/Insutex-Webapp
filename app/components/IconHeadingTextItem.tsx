import Image from "next/image";

// Properties that this component expects to receive.
// - `icon`: required path or URL to the icon image
// - `alt`: required alternative text for screen readers and accessibility
// - `heading`: optional text shown as a title under the icon
// - `text`: optional descriptive text shown under the heading
type IconHeadingTextItemProps = {
  icon: string
  alt: string
  heading?: string
  text?: string
}

/**
 * IconHeadingTextItem Component
 * -----------------------------
 * It shows an icon/image at the top, followed by an optional heading and a short message.
 * 
 * VISUAL LAYOUT:
 *  [ Icon Image ]
 *  [ Heading    ]
 *  [ Text       ]
 */
export default function IconHeadingTextItem({ icon, alt, heading, text }: IconHeadingTextItemProps) {
  return (
    <div className="text-center whitespace-pre-line">
      {/* Image at the top of the item */}
      <Image src={icon} alt={alt} className="mx-auto mb-6 h-24 w-24 object-contain" />

      {/* Heading (title) text below the icon, if provided */}
      {heading && <h3 className="text-3xl mb-4">{heading}</h3>}

      {/* Optional description or supporting text below the heading */}
      {text && <p className="text-lg">{text}</p>}
    </div>
  )
}