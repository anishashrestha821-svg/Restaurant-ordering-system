import { CATEGORIES } from "../data/menuData.js";

export default function CategoryTabs() {
  // A plain function (not a hook) that scrolls smoothly to a section.
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="sticky top-16 z-30 bg-cream/95 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
        {/* .map() turns our CATEGORIES array into a list of buttons -
            this is the React "Lists" concept in action. Each item
            needs a unique `key` prop so React can track it. */}
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToSection(cat.id)}
            className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-white border border-black/10 text-charcoal hover:bg-leaf hover:text-white hover:border-leaf transition-colors"
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
