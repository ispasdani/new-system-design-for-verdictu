// ============================================================
// Verdictu — Jurisdiction Article + Ghost section
// ============================================================

function JurisdictionArticle() {
  return (
    <section className="vd-article" data-screen-label="03 Jurisdiction">
      <div className="vd-article-row">
        <h2 className="vd-article-title">JURISDICTION-<br/>FIRST<br/>ANSWERS<span style={{ color: 'var(--vd-accent)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400 }}>.</span></h2>
        <div>
          <p className="vd-article-body">
            Legal AI only stays useful when it starts with the one thing that changes everything — the jurisdiction. If your assistant doesn't ask <em>"which country, which court, which rule-set?"</em>, it will eventually produce confident nonsense. Verdictu structures every answer around jurisdiction-first thinking, so users get source-backed clarity, not generic guesswork.
          </p>
          <div className="vd-article-meta">
            <span><span className="label">Text</span>Verdictu Editorial</span>
            <span><span className="label">Date</span>18 February 2026</span>
            <span><span className="label">Read</span>6 min</span>
            <span className="badge">Product</span>
          </div>
        </div>
      </div>

      <div className="vd-article-image">
        <svg width="100%" height="100%" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="vd-img-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a16"/>
              <stop offset="100%" stopColor="#2a2722"/>
            </linearGradient>
            <radialGradient id="vd-spot" cx="65%" cy="35%" r="38%">
              <stop offset="0%" stopColor="#f4cfae" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#1a1a16" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="1200" height="380" fill="url(#vd-img-grad)"/>
          <rect width="1200" height="380" fill="url(#vd-spot)"/>
          {/* Bookshelf silhouette */}
          {Array.from({ length: 32 }).map((_, i) => (
            <rect key={i}
              x={50 + i * 35}
              y={40 + (i % 3) * 6}
              width={22 + ((i * 7) % 6)}
              height={160 - ((i * 11) % 30)}
              fill={`rgba(${30 + (i * 13) % 50},${24 + (i * 7) % 30},${18 + (i * 5) % 18},${0.6 + ((i * 17) % 30) / 100})`}
              rx="1"
            />
          ))}
          {/* Foregrounded portrait silhouette right side */}
          <g transform="translate(820,80)">
            <ellipse cx="160" cy="120" rx="120" ry="180" fill="#0a0907"/>
            <ellipse cx="160" cy="80" rx="60" ry="72" fill="#3a2a1f"/>
            <path d="M 80 200 Q 160 160 240 200 L 240 380 L 80 380 Z" fill="#0a0907"/>
            <ellipse cx="140" cy="76" rx="3" ry="2" fill="#f4cfae" opacity="0.6"/>
            <ellipse cx="178" cy="76" rx="3" ry="2" fill="#f4cfae" opacity="0.6"/>
          </g>
          {/* Caption */}
          <text x="40" y="350" fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">
            FIG. 01 — DEFENSE PREP, MATTER #VD-2025-014 — JURISDICTION LAYER ACTIVE
          </text>
        </svg>
      </div>
    </section>
  );
}

function GhostSection() {
  return (
    <section className="vd-ghost" data-screen-label="04 Ghost">
      <div className="vd-ghost-inner">
        <div className="vd-ghost-top">
          <span className="dot"></span>
          <span className="vd-eyebrow">Local-First · Air-Gapped · Ghost Mode</span>
        </div>
        <h2 className="vd-ghost-title">
          Your data never<br/>leaves <span className="ital">your machine.</span>
        </h2>

        <div className="vd-ghost-grid">
          <p className="vd-ghost-copy">
            <strong>Ghost</strong> runs the whole agentic loop — research, retrieval, drafting, review — on a local LLM you already trust. No keys, no telemetry, no inference servers. Plug-and-play with Ollama, llama.cpp, LM Studio and vLLM. Drop a model file in, and Verdictu finds it.
          </p>

          <div className="vd-ghost-modes">
            <div className="vd-mode-card is-ghost">
              <div className="name">
                <span className="ico"><Icon name="ghost" size={12} stroke={1.8}/></span>
                Ghost
              </div>
              <div className="desc">
                Full air-gap. Disable outbound network at the gateway. Use uncensored defense models if you need them.
              </div>
              <span className="tag">Local · Offline · Zero-egress</span>
            </div>
            <div className="vd-mode-card is-open">
              <div className="name">
                <span className="ico"><Icon name="ghost-open" size={12} stroke={1.8}/></span>
                Ghost Open
              </div>
              <div className="desc">
                Cloud frontier models via Verdictu's relay. Same agent loop, no logging, no training on your matter.
              </div>
              <span className="tag">Cloud · Anonymous · Encrypted</span>
            </div>
          </div>
        </div>

        <div className="vd-ghost-runtime">
          <div className="vd-ghost-runtime-head">
            <span className="led"></span>
            <span>verdictu / runtime</span>
            <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.35)' }}>offline · matter #VD-2025-014</span>
          </div>
          <div className="vd-ghost-runtime-body">
            <div>
              <div className="vd-ghost-runtime-row"><span className="key">$ </span>verdictu doctor</div>
              <div className="vd-ghost-runtime-row">→ ollama        <span className="ok">ok</span>      <span className="key">localhost:11434</span></div>
              <div className="vd-ghost-runtime-row">→ llama.cpp     <span className="ok">ok</span>      <span className="key">/usr/local/bin/llama-server</span></div>
              <div className="vd-ghost-runtime-row">→ network egress <span className="warn">blocked</span> <span className="key">firewall: vd-ghost</span></div>
              <div className="vd-ghost-runtime-row">→ index         <span className="ok">ok</span>      <span className="key">14,221 docs</span></div>
              <div className="vd-ghost-runtime-row">→ jurisdiction  <span className="ok">ok</span>      <span className="key">US-FED + US-CA</span></div>
            </div>
            <div>
              <div className="vd-ghost-runtime-row"><span className="key">models loaded</span></div>
              <div className="vd-ghost-runtime-row"><span className="v">qwen2.5-72b-instruct</span> <span className="key">42 GB · q4_K_M</span></div>
              <div className="vd-ghost-runtime-row"><span className="v">deepseek-v3-uncensored</span> <span className="key">63 GB · defense</span></div>
              <div className="vd-ghost-runtime-row"><span className="v">mistral-large-2407</span> <span className="key">68 GB · drafting</span></div>
              <div className="vd-ghost-runtime-row"><span className="v">nomic-embed-text-v1.5</span> <span className="key">embeddings</span></div>
              <div className="vd-ghost-runtime-row" style={{ marginTop: 6 }}><span className="key">→ default for matter:</span> <span className="v">qwen2.5-72b</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { JurisdictionArticle, GhostSection });
