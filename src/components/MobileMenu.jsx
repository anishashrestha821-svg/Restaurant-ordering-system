import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Order" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/profile", label: "Profile" },
];

// Only visible on small screens (see the "md:hidden" class where
// this is used in Navbar.jsx). `onLinkClick` closes the menu after
// a link is tapped, which is good mobile UX.
export default function MobileMenu({ isOpen, onLinkClick }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-black/5 px-4 py-3 flex flex-col gap-1">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg text-sm font-medium ${
              isActive ? "bg-leaf/10 text-leaf" : "text-charcoal hover:bg-black/5"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
