import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="font-display font-semibold text-lg">🥗 Plushie</p>
          <p className="text-sm text-white/60 mt-2">
            Fresh & Healthy · Gongabu, Kathmandu
          </p>
        </div>

        <div>
          <p className="font-medium mb-2 text-sm text-white/80">Explore</p>
          <ul className="space-y-1 text-sm text-white/60">
            <li><Link to="/menu" className="hover:text-white">Order Now</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-medium mb-2 text-sm text-white/80">Hours</p>
          <p className="text-sm text-white/60">Every day · 8:00 AM – 9:00 PM</p>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-white/40 py-4">
        © {new Date().getFullYear()} Plushie Fresh & Healthy. 
      </div>
    </footer>
  );
}
