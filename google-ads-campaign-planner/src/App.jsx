import { useMemo, useState } from 'react';

const defaultCampaign = {
  product: 'Daily Focus Gummies',
  monthlyBudget: 1800,
  averageOrderValue: 45,
  targetCpa: 18,
  goal: 'Drive profitable ecommerce sales',
};

const split = [
  { campaign: 'High Intent Search', percent: 45, purpose: 'Capture buyers searching for direct solutions' },
  { campaign: 'Competitor + Alternatives', percent: 20, purpose: 'Reach shoppers comparing similar products' },
  { campaign: 'Shopping / PMax Test', percent: 25, purpose: 'Test product-led traffic and feed-based discovery' },
  { campaign: 'Brand Protection', percent: 10, purpose: 'Own branded searches after awareness grows' },
];

function money(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

function App() {
  const [campaign, setCampaign] = useState(defaultCampaign);

  const monthlyBudget = Number(campaign.monthlyBudget) || 0;
  const averageOrderValue = Number(campaign.averageOrderValue) || 0;
  const targetCpa = Number(campaign.targetCpa) || 1;

  const plan = useMemo(() => {
    const dailyBudget = monthlyBudget / 30;
    const targetConversions = monthlyBudget / targetCpa;
    const targetRevenue = targetConversions * averageOrderValue;
    const targetRoas = monthlyBudget > 0 ? targetRevenue / monthlyBudget : 0;
    return { dailyBudget, targetConversions, targetRevenue, targetRoas };
  }, [averageOrderValue, monthlyBudget, targetCpa]);

  const product = campaign.product || 'Product';
  const keywordGroups = [
    [`best ${product.toLowerCase()}`, `${product.toLowerCase()} reviews`, `buy ${product.toLowerCase()}`],
    [`${product.toLowerCase()} alternative`, `${product.toLowerCase()} vs competitor`, `${product.toLowerCase()} comparison`],
    [`${product.toLowerCase()} benefits`, `${product.toLowerCase()} for focus`, `${product.toLowerCase()} routine`],
  ];

  const headlines = [
    `Shop ${product} Today`,
    `Try ${product} For Daily Support`,
    `${product} Built For Busy Routines`,
    `Simple Product. Clear Benefits.`,
    `Upgrade Your Daily Routine`,
  ];

  function updateField(field, value) {
    setCampaign((current) => ({ ...current, [field]: value }));
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">Portfolio Tool</p>
        <h1>Google Ads Campaign Planner</h1>
        <p>
          A paid search planning tool that turns a product, budget, and target CPA into campaign structure,
          keyword groups, ad copy, landing page priorities, and KPI targets.
        </p>
      </header>

      <section className="workspace">
        <form className="input-panel">
          <h2>Campaign Inputs</h2>
          <label>
            Product
            <input value={campaign.product} onChange={(event) => updateField('product', event.target.value)} />
          </label>
          <label>
            Monthly budget
            <input type="number" value={campaign.monthlyBudget} onChange={(event) => updateField('monthlyBudget', event.target.value)} />
          </label>
          <label>
            Average order value
            <input type="number" value={campaign.averageOrderValue} onChange={(event) => updateField('averageOrderValue', event.target.value)} />
          </label>
          <label>
            Target CPA
            <input type="number" value={campaign.targetCpa} onChange={(event) => updateField('targetCpa', event.target.value)} />
          </label>
          <label>
            Campaign goal
            <textarea value={campaign.goal} onChange={(event) => updateField('goal', event.target.value)} />
          </label>
        </form>

        <section className="output-panel">
          <div className="metrics-grid">
            <article className="metric-card">
              <span>Daily budget</span>
              <strong>{money(plan.dailyBudget)}</strong>
            </article>
            <article className="metric-card">
              <span>Target conversions</span>
              <strong>{Math.round(plan.targetConversions)}</strong>
            </article>
            <article className="metric-card">
              <span>Target revenue</span>
              <strong>{money(plan.targetRevenue)}</strong>
            </article>
            <article className="metric-card">
              <span>Target ROAS</span>
              <strong>{plan.targetRoas.toFixed(1)}x</strong>
            </article>
          </div>

          <article className="card">
            <p className="eyebrow">Budget Split</p>
            <div className="split-grid">
              {split.map((item) => (
                <div className="split-row" key={item.campaign}>
                  <strong>{item.campaign}</strong>
                  <span>{money(monthlyBudget * (item.percent / 100))}</span>
                  <p>{item.purpose}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>

      <section className="grid">
        <article className="card">
          <p className="eyebrow">Keyword Groups</p>
          {keywordGroups.map((group, index) => (
            <div className="keyword-group" key={group.join('-')}>
              <strong>Ad Group {index + 1}</strong>
              <div>
                {group.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </div>
          ))}
        </article>

        <article className="card">
          <p className="eyebrow">Ad Copy Bank</p>
          <ul>
            {headlines.map((headline) => (
              <li key={headline}>{headline}</li>
            ))}
          </ul>
          <p className="description">
            Description: {product} helps shoppers solve a clear problem with a simple offer and landing page built for conversion.
          </p>
        </article>

        <article className="card wide">
          <p className="eyebrow">Landing Page Priorities</p>
          <div className="priority-grid">
            <span>Match search intent in the headline</span>
            <span>Show product benefits before details</span>
            <span>Add proof near the first CTA</span>
            <span>Answer price, trust, and usage objections</span>
            <span>Track add-to-cart and purchase events</span>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
