export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-black/5 p-4 ${className}`}
    >
      {children}
    </div>
  );
}
