import { useState } from "react";

// Demo data representing tickets that would normally come from a
// real backend/database. Kept local to this page since it's just
// for the staff-facing demo screen.
const INITIAL_ORDERS = [
  { id: 1, table: 3, items: ["Custom Fruit Salad", "Green Tea"], status: "New" },
  { id: 2, table: 7, items: ["Mango Juice (500ml)", "Butter Croissant"], status: "Preparing" },
  { id: 3, table: 1, items: ["Custom Fruit Salad", "Latte (350ml)"], status: "New" },
];

const STATUS_FLOW = ["New", "Preparing", "Ready"];

const STATUS_STYLES = {
  New: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  Preparing: "bg-sky-500/20 text-sky-300 border-sky-500/40",
  Ready: "bg-leaf/20 text-leaf border-leaf/40",
};

export default function KitchenDisplay() {
  const [orders, setOrders] = useState(INITIAL_ORDERS);

  function advanceStatus(orderId) {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id !== orderId) return order;
        const currentIndex = STATUS_FLOW.indexOf(order.status);
        const nextStatus = STATUS_FLOW[currentIndex + 1] ?? order.status;
        return { ...order, status: nextStatus };
      })
    );
  }

  return (
    <div className="px-6 py-8">
      <h1 className="font-display font-semibold text-2xl mb-6">Kitchen Display</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-medium">Table {order.table}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${STATUS_STYLES[order.status]}`}
              >
                {order.status}
              </span>
            </div>

            <ul className="text-sm text-white/70 space-y-1 mb-4">
              {order.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            {order.status !== "Ready" ? (
              <button
                onClick={() => advanceStatus(order.id)}
                className="w-full text-sm font-medium bg-leaf text-white rounded-lg py-2 hover:bg-leafDark"
              >
                Mark as{" "}
                {STATUS_FLOW[STATUS_FLOW.indexOf(order.status) + 1]}
              </button>
            ) : (
              <p className="text-center text-xs text-white/40">Ready for pickup</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
