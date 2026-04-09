import Link from 'next/link';
import { notFound } from 'next/navigation';
import tools from '@/data/tools.json';

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.id,
  }));
}

export const dynamicParams = false;

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find(t => t.id === slug);
  
  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-blue-600 hover:underline text-sm">← Back to Home</Link>
        </div>
      </header>

      {/* Tool Header */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-start gap-6">
            <div className="text-7xl">{tool.logo}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold">{tool.name}</h1>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  {tool.category}
                </span>
              </div>
              <div className="text-lg text-gray-600 mb-2">
                <span className="font-semibold text-gray-900">Scenario:</span> {tool.scenario}
              </div>
              <p className="text-base text-gray-600 mb-6">{tool.description}</p>
              <div className="flex gap-4">
                <a href={tool.website} target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                  Visit Website →
                </a>
                <div className="px-6 py-3 bg-gray-100 rounded-lg">
                  <div className="text-xs text-gray-500">Pricing</div>
                  <div className="font-bold text-gray-900">{tool.pricing}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span>💡</span> Problem This Solves
          </h2>
          <p className="text-lg text-gray-700">{tool.problem}</p>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">💰 Price Comparison</h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border-2 border-green-500">
              <div className="text-sm text-gray-500 mb-2">🇨🇳 {tool.name}</div>
              <div className="text-4xl font-bold text-green-600 mb-2">{tool.pricing}</div>
              <div className="text-xs text-gray-600">Chinese AI Tool</div>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <div className="text-sm text-gray-500 mb-2">🇺🇸 {tool.usCompetitor}</div>
              <div className="text-4xl font-bold text-gray-400 mb-2">$20-60/mo</div>
              <div className="text-xs text-gray-600">US Alternative</div>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg font-bold text-xl">
              💸 {tool.priceComparison}
            </div>
          </div>
        </div>
      </section>

      {/* Real Use Case */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">📖 Real Use Case</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
          <p className="text-lg text-gray-700 italic">"{tool.useCase}"</p>
        </div>
      </section>

      {/* Best For / Avoid If */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-2">
              <span>✅</span> Best For
            </h3>
            <p className="text-gray-700 leading-relaxed">{tool.bestFor}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-red-200">
            <h3 className="text-xl font-bold mb-4 text-red-700 flex items-center gap-2">
              <span>⚠️</span> Avoid If
            </h3>
            <p className="text-gray-700 leading-relaxed">{tool.avoidIf}</p>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h3 className="text-xl font-bold mb-4">🏷️ Tags</h3>
        <div className="flex flex-wrap gap-3">
          {tool.tags.map(tag => (
            <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to try {tool.name}?</h3>
          <p className="text-lg mb-6 opacity-90">Start saving money while solving your {tool.scenario.toLowerCase()} needs</p>
          <a href={tool.website} target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Get Started Now →
          </a>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-bold mb-6">More {tool.category} Tools</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {tools
            .filter(t => t.category === tool.category && t.id !== tool.id)
            .slice(0, 2)
            .map(relatedTool => (
              <Link key={relatedTool.id} href={`/tools/${relatedTool.id}`}>
                <div className="bg-white rounded-lg p-4 border hover:shadow-lg transition cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{relatedTool.logo}</span>
                    <div>
                      <div className="font-bold">{relatedTool.name}</div>
                      <div className="text-xs text-gray-500">{relatedTool.scenario}</div>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    {relatedTool.priceComparison}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
