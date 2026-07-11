import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`UI-only demo: would create an account for ${form.name}`);
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <Card>
        <h1 className="font-display font-semibold text-2xl mb-1">Create your account</h1>
        <p className="text-sm text-charcoal/60 mb-6">Join Anisha's to save your favorite orders.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">Full name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-black/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf/40"
              placeholder="Anisha Sharma"
            />
          </div>
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
              placeholder="At least 8 characters"
            />
          </div>

          <Button type="submit" className="w-full">Create Account</Button>
        </form>

        <p className="text-sm text-charcoal/60 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-leaf font-medium hover:underline">
            Log in
          </Link>
        </p>
      </Card>
    </div>
  );
}
