// ============================================================
// Verdictu — Pricing + Final CTA + Footer
// ============================================================

function Pricing() {
  const tiers = [
    {
      name: "Open",
      price: "$0",
      credits: "200",
      desc: "Anyone can try Verdictu. Local models always free.",
      lines: [
        "Bring your own local LLM",
        "Ghost mode (offline)",
        "Single workspace",
        "Public templates",
      ],
      cta: "Start free",
      ghost: true,
    },
    {
      name: "Counsel",
      price: "$29",
      cents: ".00",
      per: "/mo",
      credits: "5,000",
      desc: "Solo lawyers and small practices. Cloud + Local, no contract.",
      lines: [
        "Frontier cloud models",
        "All workflows + templates",
        "Editor with citations",
        "Up to 3 collaborators",
      ],
      cta: "Get Counsel",
    },
    {
      name: "Defense",
      price: "$79",
      cents: ".00",
      per: "/mo",
      credits: "20,000",
      desc: "Uncensored defense fine-tunes + matter-bound air gap.",
      lines: [
        "Defense fine-tune access",
        "Per-matter local-only flag",
        "Forensic export trail",
        "Up to 10 collaborators",
      ],
      cta: "Get Defense",
      featured: true,
      tag: "Most picked",
    },
    {
      name: "Firm",
      price: "Quota",
      credits: "Custom",
      desc: "Firms that don't want to be locked in. Pay for credits, top up, no annual.",
      lines: [
        "Volume credit packs",
        "Self-host or VPC",
        "SSO · audit · DLP",
        "No annual contract",
      ],
      cta: "Talk to us",
      ghost: true,
    },
  ];

  return (
    <section className="vd-section" data-screen-label="10 Pricing">
      <div className="vd-section-head">
        <div>
          <span className="vd-eyebrow">Pricing</span>
          <h2>Credits, not<br/>contracts.</h2>
        </div>
        <p className="lede">
          You pay for the work Verdictu does, in credits — never per seat, never on an annual lock-in. Top up when you need more. Firms can negotiate a quota, but never a contract that traps them. Open to anyone, not just the white-shoe firms.
        </p>
      </div>

      <div className="vd-pricing">
        <div className="vd-pricing-banner">
          <div className="left">
            <span className="pill">No contracts</span>
            <span>Unlike <s>Legora</s> and <s>Harvey</s> — anyone can sign up. No firm gate, no annual lock-in, no procurement dance.</span>
          </div>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--vd-muted)' }}>1 credit ≈ 1 cloud answer · local is free</span>
        </div>

        <div className="vd-pricing-grid">
          {tiers.map(t => (
            <div key={t.name} className={`vd-price ${t.featured ? 'is-featured' : ''}`}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="tier-name">{t.name}</span>
                {t.tag && <span className="tier-tag">{t.tag}</span>}
              </div>
              <div className="price">
                {t.price}
                {t.cents && <span className="cents">{t.cents}</span>}
                {t.per && <span className="per">{t.per}</span>}
              </div>
              <div className="credits">{t.credits}<span className="credits-label"> credits / mo</span></div>
              <p className="desc">{t.desc}</p>
              <ul className="lines">
                {t.lines.map(l => <li key={l}>{l}</li>)}
              </ul>
              <button className={`cta ${t.ghost ? 'cta--ghost' : ''}`}>{t.cta} <Icon name="arrow-right" size={13}/></button>
            </div>
          ))}
        </div>

        <div className="vd-pricing-note">
          Need more than 20k credits/mo? Buy a top-up pack any time. Custom firm quotas available — without a contract.
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="vd-final" data-screen-label="11 CTA">
      <h2>
        Open <span className="ital">counsel</span>,<br/>
        not gated <span className="ital">software</span>.
      </h2>
      <p>
        Verdictu is the legal AI you can actually try — no firm credentials, no sales call, no annual minimum. Start in your browser, or pull it onto your own machine.
      </p>
      <div className="vd-final-ctas">
        <button className="vd-final-cta">
          Start free <Icon name="arrow-right" size={14}/>
        </button>
        <button className="vd-final-cta alt">
          Download local runtime
        </button>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      head: "Product",
      links: ["Overview", "Workflows", "Templates", "Editor", "Models", "Ghost mode", "Pricing"],
    },
    {
      head: "Use cases",
      links: ["Criminal defense", "Plaintiff-side", "In-house", "Privacy & regulatory", "Litigation support", "Pro se"],
    },
    {
      head: "Resources",
      links: ["Documentation", "API reference", "Local setup guide", "Changelog", "Security & privacy"],
    },
    {
      head: "Company",
      links: ["About", "Manifesto", "Careers", "Press", "Contact"],
    },
  ];
  return (
    <footer className="vd-footer" data-screen-label="12 Footer">
      <div className="vd-footer-inner">
        <div className="vd-footer-top">
          <div className="vd-footer-brand">
            <div className="name">VERDICTU<span className="dot"></span></div>
            <p className="desc">Agentic legal AI. Local if you want, cloud if you don't, open to anyone, never a contract.</p>
          </div>
          {cols.map(c => (
            <div className="vd-footer-col" key={c.head}>
              <h5>{c.head}</h5>
              <ul>
                {c.links.map(l => <li key={l}><a>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="vd-footer-bottom">
          <div>© 2026 Verdictu — Open access. No contract required.</div>
          <div className="socials">
            <a><Icon name="instagram" size={16}/></a>
            <a><Icon name="x" size={14}/></a>
            <a><Icon name="youtube" size={16}/></a>
            <a><Icon name="linkedin" size={16}/></a>
          </div>
        </div>
      </div>
      <div className="vd-footer-mega">VERDICT<span className="ital">u.</span></div>
    </footer>
  );
}

Object.assign(window, { Pricing, FinalCTA, Footer });
