export default function TeamPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Our Team</h1>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-blue-900">Abhishek Anand</h2>
          <p className="text-slate-500 font-medium mb-4">Founder & Principal Economist</p>
          <p className="text-slate-700 leading-relaxed mb-6">
            Abhishek Anand is a development economist specialising in public finance, power sector reform, and trade policy... [Add rest of bio]
          </p>
          <ul className="text-sm text-slate-600 space-y-1 italic">
            <li>• Former Economist, World Bank</li>
            <li>• MPA/ID, Harvard Kennedy School</li>
          </ul>
        </div>
        <div className="bg-slate-100 aspect-square rounded-lg flex items-center justify-center text-slate-400">
          [Photo]
        </div>
      </div>
    </div>
  )
}