import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Login() {
  // A "controlled form" means React state holds the input's value,
  // and the input just displays whatever is in that state.
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    // preventDefault stops the browser from doing a full page reload,
    // which is the default (old-school HTML) behavior of <form>.
    e.preventDefault();
    alert(`UI-only demo: would log in as ${form.email}`);
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <Card>
        <h1 className="font-display font-semibold text-2xl mb-1">Welcome back</h1>
        <p className="text-sm text-charcoal/60 mb-6">Log in to your Anisha's account.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-black/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf/40"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full border border-black/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf/40"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-xs text-leaf hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full">Log In</Button>
        </form>

        <p className="text-sm text-charcoal/60 mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-leaf font-medium hover:underline">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}
