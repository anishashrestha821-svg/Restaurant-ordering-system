import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <p className="text-6xl mb-4">🍉</p>
      <h1 className="font-display font-semibold text-3xl mb-2">Page not found</h1>
      <p className="text-charcoal/60 mb-6">
        This page doesn't exist - maybe it got eaten. Let's get you back to the menu.
      </p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
