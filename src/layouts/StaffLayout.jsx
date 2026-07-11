import { Link, Outlet } from "react-router-dom";

// Staff screens are full-screen dashboards, so they get a minimal
// header instead of the customer Navbar/Footer/OrderTray.
export default function StaffLayout() {
  return (
    <div className="min-h-screen bg-charcoal text-white flex flex-col">
      <header className="flex items-center justify-between px-6 h-14 border-b border-white/10">
        <p className="font-display font-semibold">🥗 Anisha's · Staff Mode</p>
        <Link to="/" className="text-sm text-white/60 hover:text-white">
          ← Exit to customer site
        </Link>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
