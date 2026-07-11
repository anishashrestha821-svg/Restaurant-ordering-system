import { TABLES } from "../data/menuData.js";
import { useCart } from "../context/CartContext.jsx";

// Renders a row of buttons: Table 1, Table 2 ... Table 12.
// Uses the shared cart context so the chosen table is remembered
// everywhere in the app (e.g. shown later in the Order Tray).
export default function TableSelector() {
  const { table, setTable } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <p className="text-sm font-medium text-charcoal/70 mb-2">
        1. Tap your table
      </p>
      {/* overflow-x-auto lets this row scroll sideways on small screens
          instead of squishing every button */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {TABLES.map((num) => {
          const isSelected = table === num;
          return (
            <button
              key={num}
              onClick={() => setTable(num)}
              className={`shrink-0 w-16 h-14 rounded-xl border font-medium text-sm transition-colors ${
                isSelected
                  ? "bg-leaf text-white border-leaf"
                  : "bg-white text-charcoal border-black/10 hover:border-leaf"
              }`}
            >
              Table {num}
            </button>
          );
        })}
      </div>
    </div>
  );
}
