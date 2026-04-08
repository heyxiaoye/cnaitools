import Link from 'next/link';
import comparisons from '@/data/comparisons.json';

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/" className="text-blue-600 hover:underline text-sm">← Back to Home</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">🇨🇳 vs 🇺🇸 AI Tool Comparisons</h1>
        <p className="text-xl text-gray-600">Head-to-head comparisons to help you decide</p>
      </section>

      {/* Comparisons */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="space-y-8">
          {comparisons.map(comp => (
            <div key={comp.id} className="bg-white rounded-xl border overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 px-8 py-6">
                <h2 className="text-2xl font-bold">{comp.title}</h2>
                <p className="text-gray-600 mt-2">Winner: <span className="font-bold">{comp.winner}</span></p>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {Object.entries(comp.comparison).map(([key, value]: [string, any]) => (
                    <div key={key} className="border rounded-lg p-4">
                      <h3 className="font-bold mb-3 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                      <div className="space-y-2">
                        <div className={`flex items-center justify-between ${value.winner === 'china' ? 'text-green-600 font-bold' : 'text-gray-600'}`}>
                          <span>🇨🇳 China:</span>
                          <span>{value.china}</span>
                        </div>
                        <div className={`flex items-center justify-between ${value.winner === 'us' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
                          <span>🇺🇸 US:</span>
                          <span>{value.us}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-bold mb-2">📝 Verdict</h3>
                  <p className="text-gray-700">{comp.verdict}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
