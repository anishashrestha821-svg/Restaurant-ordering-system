import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";

// This ONE component renders every juice, tea, and coffee card.
// We just pass a different `drink` object in as a prop each time
// (see Menu.jsx) - that's component reusability at work.
export default function DrinkCard({ drink }) {
  const { table, addItem } = useCart();

  // Track which size index is selected. Starts at 0 (the first size).
  const [sizeIndex, setSizeIndex] = useState(0);
  const selectedSize = drink.sizes[sizeIndex];

  function handleAdd() {
    if (!table) {
      alert("Please select your table first, at the top of the page.");
      return;
    }
    addItem({
      name: drink.name,
      details: selectedSize.label,
      price: selectedSize.price,
      calories: selectedSize.calories,
    });
  }

  return (
    <Card>
      <h4 className="font-medium">{drink.name}</h4>

      <div className="flex gap-1 flex-wrap mt-2">
        {drink.sizes.map((size, index) => (
          <button
            key={size.label}
            onClick={() => setSizeIndex(index)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              sizeIndex === index
                ? "bg-leaf text-white border-leaf"
                : "bg-white text-charcoal border-black/10 hover:border-leaf"
            }`}
          >
            {size.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mt-3">
        <p className="text-sm text-charcoal/60">
          Rs {selectedSize.price} · {selectedSize.calories} cal
        </p>
        <Button variant="secondary" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </Card>
  );
}
