// ---------------------------------------------------------------
// MENU DATA
// Keeping all the "content" in one plain JavaScript file (instead of
// hard-coding it inside components) means:
//   - Components stay small and only handle DISPLAY logic.
//   - Updating a price or adding a fruit means editing ONE file.
// This is a very common beginner-friendly pattern called
// "separating data from UI".
// ---------------------------------------------------------------

// Each fruit has calories + price PER 25g PORTION.
// A salad portion button (None / 25g / 50g / 75g) is really just
// "0, 1, 2 or 3 portions" of that fruit, so we multiply by portions.
export const FRUITS = [
  { id: "apple", name: "Apple", caloriesPer25g: 13, pricePer25g: 15 },
  { id: "banana", name: "Banana", caloriesPer25g: 22, pricePer25g: 12 },
  { id: "mango", name: "Mango", caloriesPer25g: 15, pricePer25g: 20 },
  { id: "papaya", name: "Papaya", caloriesPer25g: 10, pricePer25g: 12 },
  { id: "pineapple", name: "Pineapple", caloriesPer25g: 12, pricePer25g: 15 },
  { id: "watermelon", name: "Watermelon", caloriesPer25g: 8, pricePer25g: 10 },
  { id: "pomegranate", name: "Pomegranate", caloriesPer25g: 20, pricePer25g: 25 },
  { id: "grapes", name: "Grapes", caloriesPer25g: 17, pricePer25g: 18 },
  { id: "kiwi", name: "Kiwi", caloriesPer25g: 15, pricePer25g: 22 },
  { id: "orange", name: "Orange", caloriesPer25g: 12, pricePer25g: 14 },
];

// Portion sizes shown as buttons on every fruit row.
// "grams: 0" means the fruit is left out of the salad.
export const PORTION_OPTIONS = [
  { label: "None", grams: 0 },
  { label: "25g", grams: 25 },
  { label: "50g", grams: 50 },
  { label: "75g", grams: 75 },
];

export const TOPPINGS = [
  { id: "honey", name: "Honey", calories: 22, price: 20 },
  { id: "chia", name: "Chia Seeds", calories: 18, price: 25 },
  { id: "granola", name: "Granola", calories: 45, price: 30 },
  { id: "peanuts", name: "Crushed Peanuts", calories: 40, price: 20 },
  { id: "yogurt", name: "Yogurt Drizzle", calories: 30, price: 25 },
  { id: "mint", name: "Mint Leaves", calories: 2, price: 10 },
];

// Base price/calories every fruit-salad bowl starts at (the bowl itself,
// before any fruit or topping is added).
export const SALAD_BASE = { price: 60, calories: 10 };

// Drinks are simpler: each one has a few fixed sizes to choose from.
export const JUICES = [
  {
    id: "orange-juice",
    name: "Fresh Orange Juice",
    sizes: [
      { label: "250ml", price: 90, calories: 110 },
      { label: "350ml", price: 120, calories: 150 },
      { label: "500ml", price: 160, calories: 210 },
    ],
  },
  {
    id: "watermelon-juice",
    name: "Watermelon Juice",
    sizes: [
      { label: "250ml", price: 80, calories: 90 },
      { label: "350ml", price: 110, calories: 125 },
      { label: "500ml", price: 150, calories: 175 },
    ],
  },
  {
    id: "mixed-fruit-juice",
    name: "Mixed Fruit Juice",
    sizes: [
      { label: "250ml", price: 100, calories: 130 },
      { label: "350ml", price: 130, calories: 175 },
      { label: "500ml", price: 170, calories: 240 },
    ],
  },
  {
    id: "mango-juice",
    name: "Mango Juice",
    sizes: [
      { label: "250ml", price: 100, calories: 140 },
      { label: "350ml", price: 130, calories: 185 },
      { label: "500ml", price: 170, calories: 250 },
    ],
  },
];

export const TEAS = [
  {
    id: "green-tea",
    name: "Green Tea",
    sizes: [
      { label: "250ml", price: 60, calories: 2 },
      { label: "350ml", price: 80, calories: 3 },
    ],
  },
  {
    id: "lemon-tea",
    name: "Lemon Tea",
    sizes: [
      { label: "250ml", price: 60, calories: 15 },
      { label: "350ml", price: 80, calories: 20 },
    ],
  },
  {
    id: "masala-tea",
    name: "Masala Tea",
    sizes: [
      { label: "250ml", price: 70, calories: 60 },
      { label: "350ml", price: 90, calories: 85 },
    ],
  },
  {
    id: "peach-iced-tea",
    name: "Peach Iced Tea",
    sizes: [
      { label: "250ml", price: 90, calories: 95 },
      { label: "350ml", price: 120, calories: 130 },
    ],
  },
];

export const COFFEES = [
  {
    id: "espresso",
    name: "Espresso",
    sizes: [{ label: "250ml", price: 90, calories: 5 }],
  },
  {
    id: "americano",
    name: "Americano",
    sizes: [
      { label: "250ml", price: 100, calories: 10 },
      { label: "350ml", price: 120, calories: 15 },
    ],
  },
  {
    id: "latte",
    name: "Latte",
    sizes: [
      { label: "250ml", price: 130, calories: 150 },
      { label: "350ml", price: 150, calories: 190 },
    ],
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    sizes: [
      { label: "250ml", price: 130, calories: 140 },
      { label: "350ml", price: 150, calories: 180 },
    ],
  },
];

export const PASTRIES = [
  { id: "croissant", name: "Butter Croissant", price: 110, calories: 270 },
  { id: "muffin", name: "Blueberry Muffin", price: 120, calories: 320 },
  { id: "banana-bread", name: "Banana Bread Slice", price: 100, calories: 290 },
  { id: "cheesecake", name: "Cheesecake Slice", price: 180, calories: 400 },
  { id: "cinnamon-roll", name: "Cinnamon Roll", price: 140, calories: 340 },
];

// Categories used by the sticky tab bar. The "target" matches the id
// of the <section id="..."> we scroll to when a tab is clicked.
export const CATEGORIES = [
  { id: "salads", label: "Fruit Salads" },
  { id: "juices", label: "Juices" },
  { id: "teas", label: "Teas" },
  { id: "coffee", label: "Coffee" },
  { id: "pastries", label: "Pastries" },
];

export const TABLES = Array.from({ length: 12 }, (_, i) => i + 1);
