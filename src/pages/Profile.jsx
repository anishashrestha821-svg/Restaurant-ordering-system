import { useCart } from "../context/CartContext.jsx";
import Card from "../components/Card.jsx";

export default function Profile() {
  // Reading from the shared cart context - the SAME data the
  // OrderTray component uses, proving state is shared, not duplicated.
  const { table, items, totalPrice, totalCalories } = useCart();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="font-display font-semibold text-3xl mb-6">Profile</h1>

      <Card className="mb-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-leaf text-white flex items-center justify-center font-display font-semibold text-xl">
          A
        </div>
        <div>
          <p className="font-medium">Plushie</p>
          <p className="text-sm text-charcoal/60">plushie@example.com</p>
        </div>
      </Card>

      <Card>
        <h2 className="font-medium mb-3">Current Order</h2>
        {items.length === 0 ? (
          <p className="text-sm text-charcoal/50">You haven't added anything yet.</p>
        ) : (
          <>
            {table && <p className="text-xs text-charcoal/50 mb-2">Table {table}</p>}
            <ul className="divide-y divide-black/5">
              {items.map((item) => (
                <li key={item.id} className="py-2 flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span className="text-charcoal/60">Rs {item.price}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium mt-3">
              Total: Rs {totalPrice} · {totalCalories} cal
            </p>
          </>
        )}
      </Card>
    </div>
  );
}
