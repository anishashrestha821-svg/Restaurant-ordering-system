const REVIEWS = [
  { name: "Sujata R.", text: "Being able to control exactly how much mango goes in is amazing. My salad, my rules!", rating: 5 },
  { name: "Bikash T.", text: "Loved that I could see the calories before ordering. Great for tracking my diet.", rating: 5 },
  { name: "Menuka S.", text: "The ordering screen is so simple, even my grandmother could use it.", rating: 4 },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="font-display font-semibold text-2xl text-center mb-8">
        What our guests say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {REVIEWS.map((review) => (
          <div key={review.name} className="bg-white rounded-2xl p-5 border border-black/5">
            <p className="text-amber-500 text-sm mb-2">{"★".repeat(review.rating)}</p>
            <p className="text-sm text-charcoal/70 mb-3">"{review.text}"</p>
            <p className="text-sm font-medium">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
