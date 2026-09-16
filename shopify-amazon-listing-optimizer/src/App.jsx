import { useMemo, useState } from 'react';

const defaultProduct = {
  name: 'Daily Focus Gummies',
  category: 'supplement',
  audience: 'busy students and young professionals',
  benefits: 'clean energy, better focus, no crash, easy daily routine',
  price: '29.99',
};

const checklist = [
  'Lead with the main benefit before listing features',
  'Use customer language instead of technical language',
  'Show the product, result, and use case in images',
  'Add objection-handling FAQ before checkout',
  'Keep the Amazon title searchable but readable',
  'Use bullets for outcomes, proof, and usage',
];

function splitBenefits(value) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 5);
}

function titleCase(value) {
  return value
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(' ');
}

function App() {
  const [product, setProduct] = useState(defaultProduct);

  const benefits = useMemo(() => splitBenefits(product.benefits), [product.benefits]);
  const score = useMemo(() => {
    const filledFields = Object.values(product).filter((value) => String(value).trim()).length;
    const benefitPoints = Math.min(benefits.length * 8, 40);
    const titlePoints = product.name.length > 8 ? 20 : 10;
    return Math.min(100, filledFields * 8 + benefitPoints + titlePoints);
  }, [benefits.length, product]);

  const primaryBenefit = benefits[0] || 'a clearer buying decision';
  const productTitle = titleCase(product.name || 'Product');
  const audience = product.audience || 'online shoppers';
  const category = product.category || 'product';

  const amazonBullets = [
    `${primaryBenefit}: Built for ${audience} who want a simple ${category} that fits into daily life.`,
    `Customer-ready positioning: Explains what the product does, who it helps, and why it matters.`,
    `Benefit-led listing copy: Highlights outcomes before features so shoppers understand the value faster.`,
    `Conversion support: Uses trust signals, FAQ ideas, and offer clarity to reduce buying hesitation.`,
    `Marketplace-ready structure: Organized for Amazon search, product comparison, and quick scanning.`,
  ];

  const keywords = [
    `${category} for ${audience}`,
    `best ${category} for ${primaryBenefit}`,
    `${productTitle.toLowerCase()} benefits`,
    `${category} routine`,
    `${category} product page`,
  ];

  function updateField(field, value) {
    setProduct((current) => ({ ...current, [field]: value }));
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">Portfolio Tool</p>
        <h1>Shopify + Amazon Listing Optimizer</h1>
        <p>
          A product listing tool that turns raw product details into Shopify page copy, Amazon listing bullets,
          SEO keywords, and an optimization score.
        </p>
      </header>

      <section className="workspace">
        <form className="input-panel">
          <h2>Product Inputs</h2>
          <label>
            Product name
            <input value={product.name} onChange={(event) => updateField('name', event.target.value)} />
          </label>
          <label>
            Category
            <input value={product.category} onChange={(event) => updateField('category', event.target.value)} />
          </label>
          <label>
            Target customer
            <input value={product.audience} onChange={(event) => updateField('audience', event.target.value)} />
          </label>
          <label>
            Benefits
            <textarea value={product.benefits} onChange={(event) => updateField('benefits', event.target.value)} />
          </label>
          <label>
            Price
            <input value={product.price} onChange={(event) => updateField('price', event.target.value)} />
          </label>
        </form>

        <section className="output-panel">
          <div className="score-card">
            <span>Listing Score</span>
            <strong>{score}</strong>
            <p>{score >= 80 ? 'Strong launch foundation' : 'Needs more customer detail'}</p>
          </div>

          <article className="card">
            <p className="eyebrow">Shopify Product Page</p>
            <h2>{productTitle}</h2>
            <p className="lead">
              Built for {audience} who want {primaryBenefit} without making the buying decision complicated.
            </p>
            <div className="tag-row">
              {benefits.map((benefit) => (
                <span key={benefit}>{benefit}</span>
              ))}
            </div>
            <p className="price">Launch price: ${product.price || '0.00'}</p>
          </article>

          <article className="card">
            <p className="eyebrow">Amazon Listing Draft</p>
            <h2>{productTitle} - {titleCase(category)} for {titleCase(audience)}</h2>
            <ul>
              {amazonBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </section>
      </section>

      <section className="grid">
        <article className="card">
          <p className="eyebrow">SEO Keyword Ideas</p>
          <div className="keyword-grid">
            {keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">Optimization Checklist</p>
          <ul>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

export default App;
