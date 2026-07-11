
export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
}) {
  const base =
    "px-4 py-2 rounded-xl font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

  // Different look depending on the "variant" prop.
  const variants = {
    primary: "bg-leaf text-white hover:bg-leafDark",
    secondary: "bg-white text-leaf border border-leaf hover:bg-leaf/10",
    ghost: "bg-transparent text-charcoal hover:bg-black/5",
    danger: "bg-clay text-white hover:bg-clay/90",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
