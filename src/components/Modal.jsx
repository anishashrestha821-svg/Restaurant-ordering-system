// A simple modal (popup box).
// `isOpen` decides whether we render anything at all - this is
// "conditional rendering", one of the core React concepts.
export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Dark overlay behind the modal. Clicking it closes the modal. */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-display font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-charcoal/50 hover:text-charcoal text-xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
