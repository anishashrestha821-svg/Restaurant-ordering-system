import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import Button from "./Button.jsx";

export default function OrderTray() {
  const {
    table,
    items,
    removeItem,
    clearOrder,
    notes,
    setNotes,
    totalPrice,
    totalCalories,
  } = useCart();

  const [isExpanded, setIsExpanded] = useState(false);

  // useEffect runs some code whenever the things in its dependency
  // array ([items.length]) change. Here: every time a new item is
  // added, we automatically expand the tray so the customer notices
  // it - and we update the browser tab title too.
  useEffect(() => {
    if (items.length > 0) {
      setIsExpanded(true);
    }
    document.title =
      items.length > 0
        ? `(${items.length}) Anisha's · Your Order`
        : "Anisha's · Fresh & Healthy";
  }, [items.length]);

  // Nothing has been ordered yet -> don't show the tray at all.
  if (items.length === 0) return null;

  function handlePlaceOrder() {
    alert(
      `Order placed for Table ${table ?? "?"}!\nTotal: Rs ${totalPrice} · ${totalCalories} cal\n\n(This is a UI-only demo - no real order was sent anywhere.)`
    );
    clearOrder();
    setIsExpanded(false);
  }

  return (
    // "fixed bottom-0" + "translate-y" is what makes this slide up
    // from the bottom of the screen, above everything else (z-50).
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto bg-white border-t border-black/10 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] rounded-t-2xl sm:rounded-t-2xl">
        {/* Collapsed summary bar - always visible, tap to expand/collapse */}
        <button
          onClick={() => setIsExpanded((open) => !open)}
          className="w-full flex items-center justify-between px-4 py-3"
        >
          <span className="text-sm font-medium">
            🧺 {items.length} item{items.length > 1 ? "s" : ""} · Rs {totalPrice} ·{" "}
            {totalCalories} cal
          </span>
          <span className="text-charcoal/50 text-sm">
            {isExpanded ? "Hide ▾" : "View order ▴"}
          </span>
        </button>

        {isExpanded && (
          <div className="px-4 pb-4">
            {table && (
              <p className="text-xs text-charcoal/50 mb-2">Table {table}</p>
            )}

            {/* List of ordered items - the .map() again for a dynamic list */}
            <ul className="max-h-48 overflow-y-auto divide-y divide-black/5 mb-3">
              {items.map((item) => (
                <li key={item.id} className="py-2 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    {item.details && (
                      <p className="text-xs text-charcoal/50">{item.details}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <p className="text-sm text-charcoal/70">Rs {item.price}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-clay text-xs hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add a note for the kitchen (e.g. less sugar, no ice)..."
              className="w-full text-sm border border-black/10 rounded-xl px-3 py-2 mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-leaf/40"
              rows={2}
            />

            <Button className="w-full" onClick={handlePlaceOrder}>
              ✅ Place Order · Rs {totalPrice}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
