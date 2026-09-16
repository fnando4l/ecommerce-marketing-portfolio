const launchMetrics = [
  { label: 'Launch channels', value: '2', note: 'Shopify + Amazon' },
  { label: 'Product page sections', value: '8', note: 'Full PDP flow' },
  { label: 'Listing assets', value: '12', note: 'Title, bullets, A+ ideas' },
  { label: 'Launch tasks', value: '24', note: 'Tracked by phase' }
];

const pageSections = [
  'Hero offer',
  'Benefit bullets',
  'Product story',
  'How it works',
  'Ingredients or materials',
  'Reviews',
  'FAQ',
  'Shipping and returns'
];

const launchTasks = [
  { phase: 'Research', task: 'Analyze 5 competitor product pages and Amazon listings', status: 'Complete' },
  { phase: 'Brand', task: 'Define customer, promise, offer, and product positioning', status: 'Complete' },
  { phase: 'Shopify', task: 'Build product page layout with conversion sections', status: 'Ready' },
  { phase: 'Amazon', task: 'Draft title, bullets, description, backend keywords, and image plan', status: 'Ready' },
  { phase: 'Creative', task: 'Prepare static ad angles and UGC concepts for launch traffic', status: 'Ready' },
  { phase: 'Tracking', task: 'Set launch metrics for traffic, conversion rate, CPA, and revenue', status: 'Planned' }
];

const amazonListing = [
  { asset: 'Title', detail: 'Keyword-rich title with product type, main benefit, and audience' },
  { asset: 'Bullets', detail: 'Five benefit-led bullets focused on customer outcomes' },
  { asset: 'Description', detail: 'Short product story with use case, credibility, and CTA' },
  { asset: 'A+ Content', detail: 'Comparison block, product benefit grid, brand story section' },
  { asset: 'Images', detail: 'Main image, lifestyle image, feature callouts, size or usage guide' }
];

function App() {
  return (
    <main className="app">
      <header className="topbar">
        <div>
          <p className="eyebrow">Portfolio Project</p>
          <h1>Ecommerce Brand Launch System</h1>
          <p className="summary">
            A launch dashboard for turning a consumer product idea into a Shopify and Amazon-ready brand system.
          </p>
        </div>
        <div className="profile-card">
          <span>Role Target</span>
          <strong>Ecommerce Coordinator</strong>
          <small>Marketplace + brand operations</small>
        </div>
      </header>

      <section className="metrics-grid">
        {launchMetrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.note}</small>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel large">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Brand Snapshot</p>
              <h2>Consumer product launch plan</h2>
            </div>
            <span className="pill">Launch Ready</span>
          </div>
          <div className="brand-layout">
            <div className="brand-block">
              <span>Customer</span>
              <strong>Online shoppers comparing products before buying</strong>
              <p>Positioning focuses on clear benefits, trust signals, and easy purchase decisions.</p>
            </div>
            <div className="brand-block">
              <span>Channels</span>
              <strong>Shopify storefront + Amazon marketplace</strong>
              <p>The product story is adapted for owned-store conversion and marketplace discovery.</p>
            </div>
            <div className="brand-block">
              <span>Offer</span>
              <strong>Starter offer with launch discount and bundle option</strong>
              <p>Designed to test pricing, conversion rate, average order value, and repeat customer potential.</p>
            </div>
          </div>
        </article>

        <article className="panel">
          <p className="eyebrow">Shopify PDP</p>
          <h2>Page sections</h2>
          <ul className="stack-list">
            {pageSections.map((section) => (
              <li key={section}>{section}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="dashboard-grid second">
        <article className="panel">
          <p className="eyebrow">Amazon Listing</p>
          <h2>Marketplace assets</h2>
          <div className="asset-list">
            {amazonListing.map((item) => (
              <div className="asset-row" key={item.asset}>
                <strong>{item.asset}</strong>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel large">
          <p className="eyebrow">Launch Operations</p>
          <h2>Execution checklist</h2>
          <div className="table">
            {launchTasks.map((task) => (
              <div className="table-row" key={task.task}>
                <span>{task.phase}</span>
                <p>{task.task}</p>
                <strong>{task.status}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
