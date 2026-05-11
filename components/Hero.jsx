// ============================================================
// Verdictu — TopNav + Hero (wordmark + ticker + suggestion chips)
// ============================================================

function Icon({ name, size = 16, stroke = 1.6 }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "caret": return <svg {...props}><path d="M6 9l6 6 6-6"/></svg>;
    case "minus": return <svg {...props}><path d="M5 12h14"/></svg>;
    case "instagram": return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>;
    case "x": return <svg {...props}><path d="M4 4l16 16M20 4L4 20"/></svg>;
    case "youtube": return <svg {...props}><rect x="2.5" y="6" width="19" height="12" rx="3"/><path d="M11 9l4 3-4 3z" fill="currentColor"/></svg>;
    case "linkedin": return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7.5v.5M12 17v-4a2 2 0 014 0v4M12 11v6"/></svg>;
    case "paperclip": return <svg {...props}><path d="M21 12.5l-8.5 8.5a5 5 0 01-7-7l9-9a3.5 3.5 0 015 5l-9 9a2 2 0 01-2.8-2.8l8-8"/></svg>;
    case "search": return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>;
    case "globe": return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>;
    case "scale": return <svg {...props}><path d="M12 3v18M5 7h14M5 7l-3 7a4 4 0 008 0zM19 7l-3 7a4 4 0 008 0z"/></svg>;
    case "cloud": return <svg {...props}><path d="M7 18a5 5 0 010-10 6 6 0 0111.5 1.5A4 4 0 0117 18z"/></svg>;
    case "hd": return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9v6M11 9v6M7 12h4M15 9v6h2a2 2 0 002-2v-2a2 2 0 00-2-2z"/></svg>;
    case "chat": return <svg {...props}><path d="M21 15a3 3 0 01-3 3H9l-5 4V6a3 3 0 013-3h12a3 3 0 013 3z"/></svg>;
    case "ghost": return <svg {...props}><path d="M5 11a7 7 0 0114 0v9l-2-1.5L15 20l-2-1.5L11 20l-2-1.5L7 20l-2-1.5z"/><circle cx="9.5" cy="11" r="0.6" fill="currentColor"/><circle cx="14.5" cy="11" r="0.6" fill="currentColor"/></svg>;
    case "ghost-open": return <svg {...props}><path d="M5 11a7 7 0 0114 0v9l-2-1.5L15 20l-2-1.5L11 20l-2-1.5L7 20l-2-1.5z"/><path d="M9.5 11h.01M14.5 11h.01M9 14h6"/></svg>;
    case "arrow-up": return <svg {...props}><path d="M12 19V5M5 12l7-7 7 7"/></svg>;
    case "sparkle": return <svg {...props}><path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/></svg>;
    case "plus": return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "arrow-right": return <svg {...props}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
    default: return null;
  }
}

function TopNav() {
  const links = [
    { label: "Products", caret: true },
    { label: "Pricing" },
    { label: "Workflows" },
    { label: "Articles" },
    { label: "About" },
  ];
  return (
    <header className="vd-nav">
      <div className="vd-nav-inner">
        <a className="vd-brand">
          VERDICTU<span className="vd-brand-dot"></span>
        </a>
        <nav className="vd-nav-menu">
          {links.map(l => (
            <a key={l.label} className="vd-nav-link">
              {l.label}
              {l.caret && <span className="caret"><Icon name="caret" size={11}/></span>}
            </a>
          ))}
        </nav>
        <div className="vd-nav-right">
          <a className="vd-nav-icon"><Icon name="minus" size={16}/></a>
          <a className="vd-nav-icon"><Icon name="instagram" size={16}/></a>
          <a className="vd-nav-icon"><Icon name="x" size={14}/></a>
          <a className="vd-nav-icon"><Icon name="youtube" size={16}/></a>
          <a className="vd-nav-icon"><Icon name="linkedin" size={16}/></a>
        </div>
      </div>
    </header>
  );
}

function NewsTicker() {
  const items = [
    "Verdictu v2.4 — local model gateway adds DeepSeek-V3 and Mistral Large 2407",
    "Ghost mode now ships zero-network defaults for matter-bound work",
    "New jurisdiction packs: NSW, EU AI Act commentary, Ontario Rules of Civil Procedure",
    "Founder note — why we don't lock anyone into an annual contract",
    "Verdictu Editor enters multi-cursor beta, with citation-tracked collaboration",
    "Templates marketplace opens — share clauses, demand letters, motion shells",
  ];
  // Repeat for seamless marquee
  const loop = [...items, ...items];
  return (
    <div className="vd-ticker">
      <span className="vd-ticker-label">News ticker +++</span>
      <div className="vd-ticker-track">
        {loop.map((t, i) => (
          <span key={i}>
            {t}
            <span className="sep">+++</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SuggestionChips() {
  const chips = [
    { ico: "📑", text: "Summarize this clause in plain English." },
    { ico: "⚖️", text: "Cross-check witness statements for contradictions." },
    { ico: "📜", text: "Draft a cease-and-desist for unauthorized use." },
    { ico: "🛡️", text: "Build a defense theory from these case notes." },
    { ico: "🌐", text: "Compare GDPR and CCPA on automated decisioning." },
    { ico: "📎", text: "Generate a discovery request list from these emails." },
    { ico: "🧾", text: "Reconstruct the contract timeline." },
  ];
  return (
    <div className="vd-suggest">
      {chips.map((c, i) => (
        <button key={i} className="vd-suggest-chip">
          <span className="ico">{c.ico}</span>
          {c.text}
        </button>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="vd-hero" data-screen-label="01 Hero">
      <h1 className="vd-hero-wordmark">
        LAW <span className="amp">&amp;</span> CLARITY
      </h1>
      <div className="vd-hero-sub">
        <div className="vd-hero-sub-left">
          ISSUE 014 &nbsp;·&nbsp; OPEN ACCESS &nbsp;·&nbsp; EST. 2025
        </div>
        <div className="vd-hero-sub-right">
          Verdictu is an agentic legal AI that researches, defends and drafts —
          on your machine if you want, on the cloud if you'd rather. No
          contract, no firm gate, no surveillance.
        </div>
      </div>
      <NewsTicker />
      <SuggestionChips />
    </section>
  );
}

Object.assign(window, { Icon, TopNav, Hero });
