import Link from 'next/link';
import tools from '@/data/tools.json';

export default function Home() {
  const categories = [
    { name: 'General AI', icon: '🧠', desc: 'Foundation models for everyday use' },
    { name: 'Creative Design', icon: '🎨', desc: 'Images, videos, and visual content' },
    { name: 'Content Creation', icon: '✍️', desc: 'Writing, editing, and video production' },
    { name: 'Work Efficiency', icon: '⚡', desc: 'Productivity and workflow automation' }
  ];
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">🇨🇳 CN AI Tools</h1>
              <p className="text-xs text-gray-500">Scene-Driven Guide to Chinese AI</p>
            </div>
            <Link href="/compare" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              Compare Tools
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4 leading-tight">
          Scene-Driven Guide to<br/>Chinese AI
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Helping you find the right AI tool for every scenario
        </p>
        
        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="text-3xl mb-3">💰</div>
            <div className="font-bold mb-2">50-95% Cheaper</div>
            <div className="text-sm text-gray-600">Same quality, fraction of the cost</div>
          </div>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="text-3xl mb-3">🎯</div>
            <div className="font-bold mb-2">Scenario-Focused</div>
            <div className="text-sm text-gray-600">Find tools by your actual needs</div>
          </div>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="text-3xl mb-3">✅</div>
            <div className="font-bold mb-2">Real Use Cases</div>
            <div className="text-sm text-gray-600">See how others solve problems</div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 justify-center text-sm">
          <div>
            <span className="font-bold text-2xl text-blue-600">{tools.length}</span>
            <span className="text-gray-600 ml-2">Tools</span>
          </div>
          <div>
            <span className="font-bold text-2xl text-green-600">$2,000+</span>
            <span className="text-gray-600 ml-2">Avg. Annual Savings</span>
          </div>
        </div>
      </section>

      {/* Browse by Scenario */}
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <h3 className="text-3xl font-bold mb-8 text-center">Browse by Scenario</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map(cat => {
            const count = tools.filter(t => t.category === cat.name).length;
            return (
              <a key={cat.name} href={`#${cat.name.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-xl p-6 border hover:shadow-lg transition cursor-pointer">
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-bold text-lg mb-1">{cat.name}</div>
                <div className="text-sm text-gray-600 mb-3">{cat.desc}</div>
                <div className="text-xs text-blue-600 font-medium">{count} tools →</div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Tools by Category */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        {categories.map(category => {
          const categoryTools = tools.filter(t => t.category === category.name);
          if (categoryTools.length === 0) return null;
          
          return (
            <div key={category.name} id={category.name.toLowerCase().replace(' ', '-')} className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-3xl font-bold">{category.name}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {categoryTools.map(tool => (
                  <Link key={tool.id} href={`/tools/${tool.id}`}>
                    <div className="bg-white rounded-xl p-6 border hover:shadow-lg transition cursor-pointer h-full">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl">{tool.logo}</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl mb-1">{tool.name}</h4>
                          <div className="text-xs text-gray-500 mb-2">{tool.scenario}</div>
                          <div className="text-sm font-medium text-blue-600">{tool.pricing}</div>
                        </div>
                      </div>
                      
                      {/* Problem Statement */}
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                        <div className="text-xs font-bold text-yellow-800 mb-1">💡 Solves:</div>
                        <div className="text-sm text-gray-700">{tool.problem}</div>
                      </div>
                      
                      {/* Price Comparison */}
                      <div className="flex items-center justify-between text-sm mb-3">
                        <span className="text-gray-600">vs {tool.usCompetitor}</span>
                        <span className="font-bold text-green-600">{tool.priceComparison}</span>
                      </div>
                      
                      {/* Use Case Preview */}
                      <div className="text-xs text-gray-500 italic border-l-2 border-blue-200 pl-3">
                        "{tool.useCase.substring(0, 80)}..."
                      </div>
                      
                      {/* CTA */}
                      <div className="mt-4 text-blue-600 text-sm font-medium">
                        Learn more →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Save Thousands on AI Tools</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators, developers, and businesses using Chinese AI tools
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/compare" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100">
              Compare Tools
            </Link>
            <a href="https://x.com/heyxiaoye" target="_blank" 
              className="px-8 py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800">
              Follow for Updates
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3">🇨🇳 CN AI Tools</h4>
              <p className="text-sm text-gray-400">Scene-driven guide to Chinese AI tools</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Categories</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                {categories.map(cat => (
                  <li key={cat.name}>
                    <a href={`#${cat.name.toLowerCase().replace(' ', '-')}`} className="hover:text-white">
                      {cat.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Connect</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="https://x.com/heyxiaoye" className="hover:text-white">Twitter</a></li>
                <li><a href="https://youtube.com/@heyxiaoye" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>Built by <a href="https://x.com/heyxiaoye" className="text-blue-400 hover:underline">@heyxiaoye</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
