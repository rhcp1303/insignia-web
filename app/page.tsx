import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="max-w-3xl mb-24">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Evidence-based policy advisory for fiscally sustainable growth
        </h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Insignia Policy Research (IPR) is an independent policy advisory firm working with governments and institutions to design rigorous, implementable economic reforms.
        </p>
        <div className="flex gap-6">
          <Link href="/contact" className="bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition">
            Engage with us
          </Link>
          <Link href="/work" className="text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-slate-50 transition">
            View our work →
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-slate-100">
        <ServiceCard
          title="Public Finance"
          items={["Medium-term fiscal frameworks", "Revenue mobilisation", "Subsidy rationalisation"]}
        />
        <ServiceCard
          title="Power Sector"
          items={["Electricity tariff design", "Demand forecasting", "Cost-to-serve analysis"]}
        />
        <ServiceCard
          title="Trade & Industry"
          items={["Tariff & NTB analysis", "Export competitiveness", "Productivity dynamics"]}
        />
        <ServiceCard
          title="Data Systems"
          items={["Administrative data pipelines", "AI forecasting tools", "Analytics dashboards"]}
        />
      </section>

      {/* Approach Section */}
      <section className="bg-slate-900 text-white rounded-2xl p-12 my-12">
        <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {['Microdata first', 'Counterfactual analysis', 'Implementation realism', 'Capability building'].map((item) => (
            <div key={item} className="border-l border-blue-500 pl-4">
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, items }: { title: string, items: string[] }) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4 text-blue-900">{title}</h3>
      <ul className="space-y-2 text-slate-600 text-sm">
        {items.map(item => <li key={item}>• {item}</li>)}
      </ul>
    </div>
  );
}