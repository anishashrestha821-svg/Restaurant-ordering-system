import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  // Tracks whether we've "sent" the reset link, so we can show a
  // different message - another example of conditional rendering.
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSent(true);
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <Card>
        <h1 className="font-display font-semibold text-2xl mb-1">Reset password</h1>
        <p className="text-sm text-charcoal/60 mb-6">
          Enter your email and we'll send you a reset link.
        </p>

        {isSent ? (
          <div className="bg-leaf/10 text-leafDark text-sm rounded-lg px-4 py-3">
            If an account exists for <strong>{email}</strong>, a reset link has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf/40"
                placeholder="you@example.com"
              />
            </div>
            <Button type="submit" className="w-full">Send Reset Link</Button>
          </form>
        )}

        <p className="text-sm text-charcoal/60 mt-6 text-center">
          <Link to="/login" className="text-leaf font-medium hover:underline">
            ← Back to login
          </Link>
        </p>
      </Card>
    </div>
  );
}
