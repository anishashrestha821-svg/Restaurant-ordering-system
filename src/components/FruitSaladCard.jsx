import { useState } from "react";
import { FRUITS, PORTION_OPTIONS, TOPPINGS, SALAD_BASE } from "../data/menuData.js";
import { useCart } from "../context/CartContext.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";

export default function FruitSaladCard() {
  const { table, addItem } = useCart();

  // `portions` remembers how many grams of EACH fruit were picked.
  // Shape: { apple: 25, banana: 0, mango: 50, ... }
  // We start every fruit at 0 (None).
  const [portions, setPortions] = useState(
    Object.fromEntries(FRUITS.map((fruit) => [fruit.id, 0]))
  );

  // `toppings` remembers which toppings are turned on.
  // Shape: { honey: true, chia: false, ... }
  const [toppings, setToppings] = useState(
    Object.fromEntries(TOPPINGS.map((t) => [t.id, false]))
  );

  function setPortion(fruitId, grams) {
    // We copy the old object with { ...portions } and only change
    // the one key that was clicked - never mutate state directly.
    setPortions((prev) => ({ ...prev, [fruitId]: grams }));
  }

  function toggleTopping(toppingId) {
    setToppings((prev) => ({ ...prev, [toppingId]: !prev[toppingId] }));
  }

  // --- Live totals, recalculated on every render from current state ---
  let calories = SALAD_BASE.calories;
  let price = SALAD_BASE.price;
  const chosenFruits = [];

  FRUITS.forEach((fruit) => {
    const grams = portions[fruit.id];
    if (grams > 0) {
      const units = grams / 25; // how many 25g portions
      calories += fruit.caloriesPer25g * units;
      price += fruit.pricePer25g * units;
      chosenFruits.push(`${fruit.name} (${grams}g)`);
    }
  });

  const chosenToppings = [];
  TOPPINGS.forEach((topping) => {
    if (toppings[topping.id]) {
      calories += topping.calories;
      price += topping.price;
      chosenToppings.push(topping.name);
    }
  });

  const hasAnyFruit = chosenFruits.length > 0;

  function handleAddToOrder() {
    if (!table) {
      alert("Please select your table first, at the top of the page.");
      return;
    }
    if (!hasAnyFruit) {
      alert("Pick at least one fruit for your salad.");
      return;
    }

    const detailsParts = [...chosenFruits];
    if (chosenToppings.length > 0) {
      detailsParts.push(`Toppings: ${chosenToppings.join(", ")}`);
    }

    addItem({
      name: "Custom Fruit Salad",
      details: detailsParts.join(" · "),
      price,
      calories,
    });

    // Reset the builder so it's ready for the next salad.
    setPortions(Object.fromEntries(FRUITS.map((fruit) => [fruit.id, 0])));
    setToppings(Object.fromEntries(TOPPINGS.map((t) => [t.id, false])));
  }

  return (
    <Card className="max-w-2xl">
      <h3 className="font-display font-semibold text-lg mb-1">
        Build Your Fruit Salad 🍓
      </h3>
      <p className="text-sm text-charcoal/60 mb-4">
        Pick a portion of each fruit you want, then add your favorite toppings.
      </p>

      {/* --- Fruits list --- */}
      <div className="divide-y divide-black/5">
        {FRUITS.map((fruit) => (
          <div key={fruit.id} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="font-medium text-sm">{fruit.name}</p>
            <div className="flex gap-1 flex-wrap">
              {PORTION_OPTIONS.map((option) => {
                const isSelected = portions[fruit.id] === option.grams;
                return (
                  <button
                    key={option.label}
                    onClick={() => setPortion(fruit.id, option.grams)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      isSelected
                        ? "bg-leaf text-white border-leaf"
                        : "bg-white text-charcoal border-black/10 hover:border-leaf"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* --- Toppings grid --- */}
      <p className="text-sm font-medium mt-5 mb-2">Toppings</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {TOPPINGS.map((topping) => {
          const isSelected = toppings[topping.id];
          return (
            <button
              key={topping.id}
              onClick={() => toggleTopping(topping.id)}
              className={`px-3 py-2 rounded-lg text-xs font-medium border text-left transition-colors ${
                isSelected
                  ? "bg-clay/10 text-clay border-clay"
                  : "bg-white text-charcoal border-black/10 hover:border-clay"
              }`}
            >
              {topping.name}
              <span className="block text-[10px] text-charcoal/50">
                +{topping.calories} cal · Rs {topping.price}
              </span>
            </button>
          );
        })}
      </div>

      {/* --- Live totals + add button --- */}
      <div className="mt-5 flex items-center justify-between bg-cream rounded-xl px-4 py-3">
        <div>
          <p className="text-xs text-charcoal/60">Live total</p>
          <p className="font-display font-semibold">
            Rs {price} · {calories} cal
          </p>
        </div>
        <Button onClick={handleAddToOrder}>Add to Order</Button>
      </div>
    </Card>
  );
}
