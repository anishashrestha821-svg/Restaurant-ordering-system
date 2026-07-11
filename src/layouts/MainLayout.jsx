import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import OrderTray from "../components/OrderTray.jsx";

// A "layout" component wraps every page with shared UI (navbar/footer)
// so we don't repeat <Navbar /> and <Footer /> in every single page file.
//
// <Outlet /> is React Router's way of saying "put the current page here".
export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* pb-32 leaves room at the bottom so the sticky OrderTray never
          covers page content/buttons */}
      <main className="flex-1 pb-32">
        <Outlet />
      </main>
      <Footer />
      <OrderTray />
    </div>
  );
}
