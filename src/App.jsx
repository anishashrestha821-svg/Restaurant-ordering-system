import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import StaffLayout from "./layouts/StaffLayout.jsx";

import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import KitchenDisplay from "./pages/KitchenDisplay.jsx";
import CounterDashboard from "./pages/CounterDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

// React Router works like this:
// <Route path="/menu" element={<Menu />} /> means
// "when the URL is /menu, show the <Menu /> component".
//
// We nest most pages inside <MainLayout> so the Navbar + Footer
// automatically wrap every customer-facing page.
// The staff pages get their OWN layout (no customer navbar).
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route element={<StaffLayout />}>
        <Route path="/staff/kitchen" element={<KitchenDisplay />} />
        <Route path="/staff/counter" element={<CounterDashboard />} />
      </Route>

      {/* The "*" path catches any URL that didn't match above -> 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
