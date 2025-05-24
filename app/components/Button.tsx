type ButtonProps = {
  bgColor?: string;      // Tailwind background color class, e.g. "bg-red-600"
  border? : string;
  borderColor?: string;  // Tailwind border color class, e.g. "border-red-600"
  textColor?: string;    // Tailwind text color class, e.g. "text-white"
  rounded?: string;
  fontWeight?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;    // Extra classes to pass in if needed
};

export default function Button({
    bgColor = "bg-transparent",
    border = "border-2",
    borderColor = "border-transparent",
    textColor = "text-black",
    rounded = "rounded-xl",
    fontWeight = "font-semibold",
    children,
    className = "",
}: ButtonProps) {
  return (
    <button
      className={`px-5 py-2.5 ${bgColor} ${border} ${borderColor} ${textColor} ${rounded} ${fontWeight} ${className} transition hover:opacity-90`}
    >
      {children}
    </button>
  );
}