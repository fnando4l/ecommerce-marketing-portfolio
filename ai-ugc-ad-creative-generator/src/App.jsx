import { useMemo, useState } from 'react';

const tabs = ['Hooks', 'UGC Script', 'Static Ads', 'Testing Matrix'];

const defaultBrief = {
  product: 'Daily Focus Gummies',
  audience: 'college students and young professionals',
  problem: 'feeling drained and unfocused during busy days',
  promise: 'clean focus without a crash',
  platform: 'TikTok + Meta',
};

function App() {
  const [brief, setBrief] = useState(defaultBrief);
  const [activeTab, setActiveTab] = useState('Hooks');

  const product = brief.product || 'the product';
  const audience = brief.audience || 'busy shoppers';
  const problem = brief.problem || 'a frustrating daily problem';
  const promise = brief.promise || 'a better result';

  const hooks = useMemo(() => [
    `If you keep ${problem}, try this before your next busy day.`,
    `I did not need more caffeine. I needed ${promise}.`,
    `This is for ${audience} who want ${promise}.`,
    `The biggest mistake people make when they feel stuck: ignoring the routine around it.`,
    `I tested ${product} for one week. Here is what changed first.`,
  ], [audience, problem, product, promise]);

  const script = [
    { scene: 'Hook', line: hooks[0] },
    { scene: 'Problem', line: `Most ${audience} are trying to push through ${problem} without changing the system.` },
    { scene: 'Product Moment', line: `That is where ${product} comes in: a simple product positioned around ${promise}.` },
    { scene: 'Proof', line: 'Show the product, show the routine, and explain the benefit in one clear sentence.' },
    { scene: 'CTA', line: `Try ${product} if you want ${promise} without overcomplicating your day.` },
  ];

  const staticAds = [
    { name: 'Problem/Solution', headline: `Still ${problem}?`, body: `${product} is positioned around ${promise}.` },
    { name: 'Benefit Stack', headline: promise, body: `Built for ${audience} who want a simpler daily routine.` },
    { name: 'Checklist', headline: 'Before You Buy', body: 'Check benefit clarity, proof, price, offer, and product fit.' },
    { name: 'Comparison', headline: 'Old Routine vs Better Routine', body: `Replace random guessing with a clear ${product} routine.` },
  ];

  const tests = [
    { variable: 'Hook', option: 'Problem hook vs promise hook', metric: 'Thumb-stop rate' },
    { variable: 'Format', option: 'Talking head vs product demo', metric: 'CTR' },
    { variable: 'Creative', option: 'UGC video vs static ad', metric: 'CPA' },
    { variable: 'Offer', option: 'Discount vs bundle', metric: 'Conversion rate' },
    { variable: 'Landing page', option: 'Product page vs advertorial', metric: 'ROAS' },
  ];

  function updateField(field, value) {
    setBrief((current) => ({ ...current, [field]: value }));
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">Portfolio Tool</p>
        <h1>AI UGC Ad Creative Generator</h1>
        <p>
          A creative strategy tool that turns a product brief into UGC hooks, a short-form video script,
          static ad concepts, and a testing matrix for ecommerce campaigns.
        </p>
      </header>

      <section className="workspace">
        <form className="input-panel">
          <h2>Creative Brief</h2>
          <label>
            Product
            <input value={brief.product} onChange={(event) => updateField('product', event.target.value)} />
          </label>
          <label>
            Target customer
            <input value={brief.audience} onChange={(event) => updateField('audience', event.target.value)} />
          </label>
          <label>
            Main problem
            <textarea value={brief.problem} onChange={(event) => updateField('problem', event.target.value)} />
          </label>
          <label>
            Product promise
            <input value={brief.promise} onChange={(event) => updateField('promise', event.target.value)} />
          </label>
          <label>
            Platform
            <input value={brief.platform} onChange={(event) => updateField('platform', event.target.value)} />
          </label>
        </form>

        <section className="generator">
          <nav className="tabs" aria-label="Creative outputs">
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

          {activeTab === 'Hooks' && (
            <article className="card">
              <p className="eyebrow">Generated Hooks</p>
              <div className="hook-list">
                {hooks.map((hook, index) => (
                  <div className="hook-row" key={hook}>
                    <strong>{String(index + 1).padStart(2, '0')}</strong>
                    <p>{hook}</p>
                  </div>
                ))}
              </div>
            </article>
          )}

          {activeTab === 'UGC Script' && (
            <article className="card">
              <p className="eyebrow">Short-Form Script</p>
              <div className="script-list">
                {script.map((item) => (
                  <div className="script-row" key={item.scene}>
                    <strong>{item.scene}</strong>
                    <p>{item.line}</p>
                  </div>
                ))}
              </div>
            </article>
          )}

          {activeTab === 'Static Ads' && (
            <article className="card">
              <p className="eyebrow">Static Ad Concepts</p>
              <div className="static-grid">
                {staticAds.map((ad) => (
                  <div className="ad-card" key={ad.name}>
                    <span>{ad.name}</span>
                    <strong>{ad.headline}</strong>
                    <p>{ad.body}</p>
                  </div>
                ))}
              </div>
            </article>
          )}

          {activeTab === 'Testing Matrix' && (
            <article className="card">
              <p className="eyebrow">Creative Testing Plan</p>
              <div className="test-table">
                {tests.map((test) => (
                  <div className="test-row" key={test.variable}>
                    <strong>{test.variable}</strong>
                    <span>{test.option}</span>
                    <p>{test.metric}</p>
                  </div>
                ))}
              </div>
            </article>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;
