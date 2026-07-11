export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-display font-semibold text-3xl mb-4">About Plushie</h1>
      <p className="text-charcoal/70 mb-4">
        Plushie is a small fresh-food counter in Gongabu Kathmandu, built
        around one idea: you know your body better than a fixed menu does.
        That's why every fruit salad here is built portion-by-portion, by you.
      </p>
      <p className="text-charcoal/70 mb-4">
        We cut every fruit to order, and you can choose exactly how much of each fruit you want. Calories and prices are shown before you order, so
        you can make the salad that's right for your body and your budget.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {[
          { title: "Fresh", desc: "Fruit is cut to order, never pre-portioned." },
          { title: "Flexible", desc: "Choose exact gram amounts of every fruit." },
          { title: "Transparent", desc: "Calories and prices shown before you order." },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-4 border border-black/5">
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-charcoal/60 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
