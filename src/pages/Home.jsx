import Hero from "../components/Hero.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/FAQ.jsx";

// A "page" component's job is usually just to arrange smaller
// components in order - most of the real logic lives inside them.
export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonials />
      <FAQ />
    </div>
  );
}
