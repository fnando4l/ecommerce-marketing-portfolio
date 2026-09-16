const campaignCards = [
  { name: 'High Intent Search', goal: 'Capture buyers searching for product solutions', budget: '$35/day', kpi: 'CPA + conversion rate' },
  { name: 'Competitor Alternative', goal: 'Reach shoppers comparing similar products', budget: '$20/day', kpi: 'CTR + landing page CVR' },
  { name: 'Brand Protection', goal: 'Own branded searches after traffic grows', budget: '$10/day', kpi: 'Low CPC + assisted revenue' }
];

const keywords = [
  { keyword: 'best supplement for daily energy', intent: 'Commercial', group: 'Energy Benefits', page: 'Benefit-led landing page' },
  { keyword: 'natural focus supplement', intent: 'Product research', group: 'Focus Support', page: 'Ingredient proof section' },
  { keyword: 'healthy clothing brand basics', intent: 'Product discovery', group: 'Apparel Discovery', page: 'Collection page' },
  { keyword: 'shopify product launch checklist', intent: 'Planning', group: 'Launch Research', page: 'Lead magnet page' },
  { keyword: 'amazon product listing optimization', intent: 'Service research', group: 'Marketplace Ops', page: 'Case study page' }
];

const landingSections = [
  'Headline matching the search intent',
  'Problem and product promise',
  'Product benefit stack',
  'Proof, reviews, or trust signals',
  'Offer and CTA',
  'FAQ handling objections',
  'Tracking events and conversion goal'
];

const reportMetrics = [
  { metric: 'CTR', target: '4%+', why: 'Measures ad-message fit' },
  { metric: 'CPC', target: 'Under target CPA model', why: 'Controls traffic cost' },
  { metric: 'CVR', target: '2.5%+', why: 'Measures landing page quality' },
  { metric: 'CPA', target: 'Below margin limit', why: 'Protects profit' },
  { metric: 'ROAS', target: '2.5x+', why: 'Measures revenue efficiency' }
];

function App() {
  return (
    <main className="app">
      <header className="topbar">
        <div>
          <p className="eyebrow">Portfolio Project</p>
          <h1>Google Ads Campaign + Landing Page Plan</h1>
          <p className="summary">
            A paid search planning dashboard that connects keywords, ad groups, landing page messaging, and ecommerce performance reporting.
          </p>
        </div>
        <aside className="budget-card">
          <span>Sample monthly budget</span>
          <strong>$1,950</strong>
          <small>Split across search campaigns</small>
        </aside>
      </header>

      <section className="campaign-grid">
        {campaignCards.map((campaign) => (
          <article className="campaign-card" key={campaign.name}>
            <span>{campaign.budget}</span>
            <h2>{campaign.name}</h2>
            <p>{campaign.goal}</p>
            <strong>{campaign.kpi}</strong>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel large">
          <p className="eyebrow">Keyword Research</p>
          <h2>Intent-based keyword map</h2>
          <div className="keyword-table">
            <div className="table-head">
              <span>Keyword</span>
              <span>Intent</span>
              <span>Ad group</span>
              <span>Landing page angle</span>
            </div>
            {keywords.map((item) => (
              <div className="table-row" key={item.keyword}>
                <p>{item.keyword}</p>
                <span>{item.intent}</span>
                <span>{item.group}</span>
                <span>{item.page}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <p className="eyebrow">Ad Copy</p>
          <h2>Headline bank</h2>
          <ul className="copy-list">
            <li>Launch Your Product With A Better Store Plan</li>
            <li>Shopify + Amazon Launch Support</li>
            <li>Build A Product Page That Converts</li>
            <li>Turn Search Traffic Into Buyers</li>
            <li>Smarter Ecommerce Growth Plan</li>
          </ul>
        </article>
      </section>

      <section className="dashboard-grid bottom">
        <article className="panel">
          <p className="eyebrow">Landing Page</p>
          <h2>Conversion sections</h2>
          <div className="section-list">
            {landingSections.map((section, index) => (
              <div className="section-row" key={section}>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <span>{section}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel large">
          <p className="eyebrow">Reporting</p>
          <h2>Performance scorecard</h2>
          <div className="metric-table">
            {reportMetrics.map((item) => (
              <div className="metric-row" key={item.metric}>
                <strong>{item.metric}</strong>
                <span>{item.target}</span>
                <p>{item.why}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
