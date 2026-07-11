# 🥗 Anisha's · Fresh & Healthy — Food Ordering UI

A single-page-feel restaurant ordering system built with **React**, **React Router**, and **Tailwind CSS**, for a food-ordering restaurant called Anisha's in Thamel, Kathmandu.

Customers pick a table, build a fully custom fruit salad gram-by-gram, add drinks and pastries, and place an order — all from one scrollable page with a sticky order tray. Staff get their own Kitchen Display and Counter Dashboard screens.

## ▶️ Running it locally

You need [Node.js](https://nodejs.org) (v18+) installed.

```bash
npm install
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:5173`).

## 🗂️ Project structure

```
src/
  assets/        (images/icons if you add any)
  components/    Small reusable UI pieces (Button, Card, Navbar, FruitSaladCard...)
  context/       CartContext.jsx - shares the order/cart across the whole app
  data/          menuData.js - all fruits, drinks, pastries, prices, calories
  layouts/       MainLayout (customer pages) and StaffLayout (staff pages)
  pages/         One file per page/route (Home, Menu, Login, ...)
  routes/        (reserved - routes currently live in App.jsx for simplicity)
  App.jsx        Defines every route/page URL
  main.jsx       The entry point that starts the whole app
```

## 🧠 How the ordering flow works (read this to understand the code)

1. **`CartContext.jsx`** holds the "shopping cart": the chosen table, the list
   of items, notes, and totals. Any component can read/update it with
   `useCart()` instead of passing props down through many layers.
2. **`menuData.js`** is pure data (no UI). Every fruit/drink/pastry lives here
   so pages just loop over arrays with `.map()` instead of hard-coding cards.
3. **`FruitSaladCard.jsx`** is the core feature: `useState` tracks how many
   grams of each fruit and which toppings are selected. Every render
   recalculates the live price/calories from that state — nothing is stored
   twice.
4. **`OrderTray.jsx`** is the sticky bottom bar. It reads from `CartContext`
   and uses `useEffect` to auto-expand and update the browser tab title
   whenever a new item is added.
5. **React Router** (`App.jsx`) maps URLs like `/menu`, `/login`, `/staff/kitchen`
   to page components, and wraps customer pages in `MainLayout` (which adds
   the Navbar/Footer/OrderTray automatically).

## ✅ Assignment requirement checklist

- **Auth UI:** `/login`, `/register`, `/forgot-password` (UI only, no backend)
- **Navigation:** responsive `Navbar`, `Footer`, and a `MobileMenu` for small screens
- **Pages (12):** Home, Menu, Login, Register, Forgot Password, About, Contact,
  Profile, Settings, Kitchen Display, Counter Dashboard, 404
- **Reusable components:** Button, Card, Modal, Hero, Testimonials, FAQ,
  DrinkCard, PastryCard, TableSelector, CategoryTabs
- **React concepts used:** functional components, props, `useState`, `useEffect`,
  Context (`useContext`), React Router, conditional rendering, list rendering
  with `.map()`, controlled forms, event handling

## 📦 Pushing this to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Anisha's food ordering UI"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Make sure the repository is set to **Public** before submitting the link.

## 🛠️ Built with

React · React Router · Tailwind CSS · Vite
