import { JUICES, TEAS, COFFEES, PASTRIES } from "../data/menuData.js";
import TableSelector from "../components/TableSelector.jsx";
import CategoryTabs from "../components/CategoryTabs.jsx";
import FruitSaladCard from "../components/FruitSaladCard.jsx";
import DrinkCard from "../components/DrinkCard.jsx";
import PastryCard from "../components/PastryCard.jsx";

export default function Menu() {
  return (
    <div>
      <TableSelector />
      <CategoryTabs />

      <div className="max-w-6xl mx-auto px-4">
        {/* Each <section id="..."> matches a CATEGORIES id in menuData.js
            so CategoryTabs can scroll straight to it. */}
        <section id="salads" className="py-8 scroll-mt-32">
          <h2 className="font-display font-semibold text-xl mb-4">Fruit Salads</h2>
          <FruitSaladCard />
        </section>

        <section id="juices" className="py-8 scroll-mt-32">
          <h2 className="font-display font-semibold text-xl mb-4">Juices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {JUICES.map((juice) => (
              <DrinkCard key={juice.id} drink={juice} />
            ))}
          </div>
        </section>

        <section id="teas" className="py-8 scroll-mt-32">
          <h2 className="font-display font-semibold text-xl mb-4">Teas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEAS.map((tea) => (
              <DrinkCard key={tea.id} drink={tea} />
            ))}
          </div>
        </section>

        <section id="coffee" className="py-8 scroll-mt-32">
          <h2 className="font-display font-semibold text-xl mb-4">Coffee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COFFEES.map((coffee) => (
              <DrinkCard key={coffee.id} drink={coffee} />
            ))}
          </div>
        </section>

        <section id="pastries" className="py-8 scroll-mt-32">
          <h2 className="font-display font-semibold text-xl mb-4">Pastries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PASTRIES.map((pastry) => (
              <PastryCard key={pastry.id} pastry={pastry} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
