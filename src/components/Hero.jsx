import { Link } from "react-router-dom";
import Button from "./Button.jsx";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-leaf/10 to-cream">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
        <p className="inline-block text-xs font-medium tracking-wide uppercase bg-white text-leaf px-3 py-1 rounded-full border border-leaf/20 mb-4">
          Thamel, Kathmandu
        </p>
        <h1 className="font-display font-semibold text-3xl sm:text-5xl leading-tight text-charcoal max-w-2xl mx-auto">
          Build your own fresh fruit salad, your way.
        </h1>
        <p className="text-charcoal/60 mt-4 max-w-md mx-auto">
          Pick your table, choose exactly how much of each fruit you want,
          and watch the calories and price update live as you go.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to="/menu">
            <Button className="px-6 py-3 text-base">Order Now</Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary" className="px-6 py-3 text-base">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
