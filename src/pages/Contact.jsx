import { useState } from "react";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="font-display font-semibold text-3xl mb-2">Contact Us</h1>
      <p className="text-charcoal/60 mb-8">
        Thamel, Kathmandu · Open 8:00 AM – 9:00 PM every day
      </p>

      <Card>
        {submitted ? (
          <p className="text-leafDark bg-leaf/10 rounded-lg px-4 py-3 text-sm">
            Thanks, {form.name || "there"}! We'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-black/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf/40"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border border-black/10 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-leaf/40"
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        )}
      </Card>
    </div>
  );
}
