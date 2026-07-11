import { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";
import StaffAccessModal from "./StaffAccessModal.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Order" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/profile", label: "Profile" },
];

export default function Navbar() {
  // useState gives us a piece of memory that, when changed,
  // makes React re-render this component with the new value.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo + name */}
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-2xl">🥗</span>
          <div className="leading-tight">
            <p className="font-display font-semibold text-charcoal">Plushie</p>
            <p className="text-xs text-charcoal/60">Fresh & Healthy · Kathmandu</p>
          </div>
        </NavLink>

        {/* Desktop links - hidden on mobile via "hidden md:flex" */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-leaf/10 text-leaf"
                    : "text-charcoal hover:bg-black/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsStaffModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg border border-black/10 text-charcoal hover:bg-black/5"
          >
            ⚙ Staff
          </button>

          {/* Hamburger button - only shows on mobile ("md:hidden") */}
          <button
            className="md:hidden text-2xl px-2"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Conditional rendering: this component decides internally
          whether to show anything, based on the isOpen prop. */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onLinkClick={() => setIsMobileMenuOpen(false)}
      />

      <StaffAccessModal
        isOpen={isStaffModalOpen}
        onClose={() => setIsStaffModalOpen(false)}
      />
    </header>
  );
}
