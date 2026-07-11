import { useState } from "react";
import Card from "../components/Card.jsx";

// A small reusable toggle switch, defined right in this file since
// it's only used here. `checked` and `onChange` are props, just like
// a real HTML checkbox would use.
function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`w-11 h-6 rounded-full transition-colors relative ${
          checked ? "bg-leaf" : "bg-black/15"
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="font-display font-semibold text-3xl mb-6">Settings</h1>
      <Card>
        <div className="divide-y divide-black/5">
          <Toggle label="Order notifications" checked={notifications} onChange={setNotifications} />
          <Toggle label="Dark mode (coming soon)" checked={darkMode} onChange={setDarkMode} />
          <Toggle label="Marketing emails" checked={marketingEmails} onChange={setMarketingEmails} />
        </div>
      </Card>
    </div>
  );
}
