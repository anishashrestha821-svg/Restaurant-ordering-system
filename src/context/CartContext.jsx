import { createContext, useContext, useState } from "react";

// STEP 1: create the context "box".
const CartContext = createContext(null);

// STEP 2: a custom hook so other files can just do `const cart = useCart()`
// instead of importing useContext + CartContext every time.
export function useCart() {
  return useContext(CartContext);
}

// STEP 3: the Provider component. Anything wrapped inside <CartProvider>
// (in our case, the WHOLE app, see main.jsx) can read/update this state.
export function CartProvider({ children }) {
  // Which table the customer is sitting at. null = not chosen yet.
  const [table, setTable] = useState(null);

  // The list of items the customer has added so far.
  // Each item looks like:
  // { id, name, details, price, calories, qty }
  const [items, setItems] = useState([]);

  // A short note the customer can attach to the whole order (e.g. "no ice").
  const [notes, setNotes] = useState("");

  // Adds a new item to the tray. We give every item a unique id using
  // Date.now() so React can tell items in the list apart.
  function addItem(newItem) {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now() }]);
  }

  function removeItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function clearOrder() {
    setItems([]);
    setNotes("");
  }

  // These are just calculated from `items` every render -
  // no need to store them in separate state.
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const totalCalories = items.reduce((sum, item) => sum + item.calories, 0);

  // Everything inside `value` becomes available to any component
  // that calls useCart().
  const value = {
    table,
    setTable,
    items,
    addItem,
    removeItem,
    clearOrder,
    notes,
    setNotes,
    totalPrice,
    totalCalories,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
