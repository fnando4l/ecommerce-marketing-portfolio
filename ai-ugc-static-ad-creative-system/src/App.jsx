import { useState } from 'react';

const tabs = ['Research', 'UGC Scripts', 'Static Ads', 'Testing'];

const creativeMetrics = [
  { label: 'Angles mapped', value: '8' },
  { label: 'UGC scripts', value: '5' },
  { label: 'Static concepts', value: '5' },
  { label: 'Test hypotheses', value: '10' }
];

const competitorRows = [
  { brand: 'Competitor A', hook: 'Problem-first opener', format: 'UGC demo', insight: 'Shows pain point in first 3 seconds' },
  { brand: 'Competitor B', hook: 'Before and after', format: 'Static ad', insight: 'Clear visual contrast drives curiosity' },
  { brand: 'Competitor C', hook: 'Founder story', format: 'Talking head', insight: 'Builds trust with simple product explanation' },
  { brand: 'Competitor D', hook: 'Myth busting', format: 'UGC script', insight: 'Challenges common belief and introduces product' }
];

const scripts = [
  { name: 'Problem Hook', hook: 'If your product page is getting traffic but no sales, this is what I would fix first.', cta: 'Check the product page before spending more on ads.' },
  { name: 'Founder Style', hook: 'I built this because most ecommerce launches skip the customer journey.', cta: 'Start with the offer, then build the page.' },
  { name: 'Comparison', hook: 'Most stores show features. Better stores sell the outcome.', cta: 'Use benefits, proof, and a clear next step.' },
  { name: 'Demo', hook: 'Here is how I would structure a Shopify page for this product.', cta: 'Make every section answer a buying objection.' },
  { name: 'Mistake', hook: 'The biggest mistake new brands make is sending ads to a weak landing page.', cta: 'Fix the page before scaling traffic.' }
];

const staticAds = [
  { concept: 'Benefit Stack', visual: 'Product centered with 3 benefit callouts', angle: 'Fast comprehension' },
  { concept: 'Comparison Grid', visual: 'Old way vs better way', angle: 'Problem solving' },
  { concept: 'Review Pull Quote', visual: 'Large quote with product image', angle: 'Social proof' },
  { concept: 'Offer Card', visual: 'Bundle image with discount badge', angle: 'Conversion push' },
  { concept: 'Checklist Ad', visual: 'Launch checklist preview', angle: 'Lead magnet' }
];

const testPlan = [
  { test: 'Hook style', option: 'Problem vs desire', metric: 'Thumb-stop rate' },
  { test: 'Format', option: 'UGC vs static', metric: 'CTR' },
  { test: 'Offer', option: 'Discount vs bundle', metric: 'CPA' },
  { test: 'Proof', option: 'Review vs feature demo', metric: 'CVR' },
  { test: 'Landing page', option: 'Product page vs campaign page', metric: 'ROAS' }
];

function App() {
  const [activeTab, setActiveTab] = useState('Research');

  return (
    <main className="app">
      <header className="topbar">
        <div>
          <p className="eyebrow">Portfolio Project</p>
          <h1>AI UGC + Static Ad Creative System</h1>
          <p className="summary">
            A creative strategy dashboard for turning product research into UGC scripts, static ad concepts, and testing ideas for ecommerce campaigns.
          </p>
        </div>
        <aside className="role-card">
          <span>Role Target</span>
          <strong>Digital Marketing Coordinator</strong>
          <small>Creative strategy + ecommerce ads</small>
        </aside>
      </header>

      <section className="metrics-grid">
        {creativeMetrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </article>
        ))}
      </section>

      <section className="workspace">
        <nav className="tabs" aria-label="Creative workflow">
          {tabs.map((tab) => (
            <button
              className={activeTab === tab ? 'active' : ''}
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {activeTab === 'Research' && (
          <article className="panel">
            <p className="eyebrow">Competitor Research</p>
            <h2>Creative pattern scan</h2>
            <div className="research-grid">
              {competitorRows.map((row) => (
                <div className="research-card" key={row.brand}>
                  <span>{row.brand}</span>
                  <strong>{row.hook}</strong>
                  <p>{row.format}</p>
                  <small>{row.insight}</small>
                </div>
              ))}
            </div>
          </article>
        )}

        {activeTab === 'UGC Scripts' && (
          <article className="panel">
            <p className="eyebrow">UGC Scripts</p>
            <h2>Hook and CTA bank</h2>
            <div className="script-list">
              {scripts.map((script) => (
                <div className="script-row" key={script.name}>
                  <strong>{script.name}</strong>
                  <p>{script.hook}</p>
                  <span>{script.cta}</span>
                </div>
              ))}
            </div>
          </article>
        )}

        {activeTab === 'Static Ads' && (
          <article className="panel">
            <p className="eyebrow">Static Creative</p>
            <h2>Ad concept board</h2>
            <div className="static-grid">
              {staticAds.map((ad) => (
                <div className="ad-card" key={ad.concept}>
                  <div className="mock-visual">{ad.concept}</div>
                  <strong>{ad.visual}</strong>
                  <span>{ad.angle}</span>
                </div>
              ))}
            </div>
          </article>
        )}

        {activeTab === 'Testing' && (
          <article className="panel">
            <p className="eyebrow">Testing Matrix</p>
            <h2>Creative test plan</h2>
            <div className="test-table">
              {testPlan.map((test) => (
                <div className="test-row" key={test.test}>
                  <strong>{test.test}</strong>
                  <span>{test.option}</span>
                  <p>{test.metric}</p>
                </div>
              ))}
            </div>
          </article>
        )}
      </section>
    </main>
  );
}

export default App;
