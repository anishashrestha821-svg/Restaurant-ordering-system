import { useCart } from "../context/CartContext.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";

export default function PastryCard({ pastry }) {
  const { table, addItem } = useCart();

  function handleAdd() {
    if (!table) {
      alert("Please select your table first, at the top of the page.");
      return;
    }
    addItem({
      name: pastry.name,
      details: "1 piece",
      price: pastry.price,
      calories: pastry.calories,
    });
  }

  return (
    <Card className="flex items-center justify-between">
      <div>
        <h4 className="font-medium">{pastry.name}</h4>
        <p className="text-sm text-charcoal/60">
          Rs {pastry.price} · {pastry.calories} cal
        </p>
      </div>
      <Button variant="secondary" onClick={handleAdd}>
        Add
      </Button>
    </Card>
  );
}
