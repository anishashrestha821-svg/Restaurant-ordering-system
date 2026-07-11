// Demo/mock stats - in a real app these would be calculated from
// orders stored in a database, usually fetched with useEffect + fetch/axios.
const STATS = [
  { label: "Orders Today", value: 42 },
  { label: "Revenue Today", value: "Rs 18,450" },
  { label: "Tables Occupied", value: "5 / 12" },
];

const RECENT_ORDERS = [
  { id: "#1042", table: 3, total: 285, status: "Preparing" },
  { id: "#1041", table: 7, total: 310, status: "Ready" },
  { id: "#1040", table: 1, total: 260, status: "New" },
  { id: "#1039", table: 9, total: 190, status: "Served" },
];

export default function CounterDashboard() {
  return (
    <div className="px-6 py-8">
      <h1 className="font-display font-semibold text-2xl mb-6">Counter Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-white/50 text-sm">{stat.label}</p>
            <p className="font-display font-semibold text-2xl mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/10 text-white/60 text-left">
            <tr>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Table</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {RECENT_ORDERS.map((order) => (
              <tr key={order.id} className="border-t border-white/10">
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">Table {order.table}</td>
                <td className="px-4 py-3">Rs {order.total}</td>
                <td className="px-4 py-3">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
