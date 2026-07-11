import { useState } from "react";

const FAQS = [
  {
    q: "Can I customize the amount of each fruit?",
    a: "Yes! On the Order page, every fruit has None / 25g / 50g / 75g buttons - pick exactly what you want.",
  },
  {
    q: "Do you show calories for every item?",
    a: "Yes, calories are shown live for salads and printed on every drink/pastry card.",
  },
  {
    q: "Can I add a note for the kitchen?",
    a: "Yes, there's a notes box in the Order Tray at the bottom of the Order page before you place your order.",
  },
];

export default function FAQ() {
  // Stores the index of the currently open question, or null if none open.
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="font-display font-semibold text-2xl text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.q} className="bg-white rounded-xl border border-black/5">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-4 py-3 flex items-center justify-between font-medium text-sm"
              >
                {faq.q}
                <span className="text-charcoal/40">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <p className="px-4 pb-4 text-sm text-charcoal/60">{faq.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
