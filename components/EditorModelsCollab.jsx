// ============================================================
// Verdictu — Editor + Models + Collab
// ============================================================

function EditorDemo() {
  return (
    <section className="vd-section" data-screen-label="07 Editor">
      <div className="vd-section-head">
        <div>
          <span className="vd-eyebrow">Editor</span>
          <h2>An editor that<br/>cites as it writes.</h2>
        </div>
        <p className="lede">
          Verdictu's editor is a real text surface — not a chat transcript. Inline AI completion, contextual citations from your matter, and tracked changes alongside human collaborators. Press <code className="vd-mono">⌘K</code> on any sentence to ask the agent to refine it.
        </p>
      </div>

      <div className="vd-editor-wrap">
        <div className="vd-editor">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="vd-editor-toolbar">
              <button className="btn-tool">B</button>
              <button className="btn-tool" style={{ fontStyle: 'italic' }}>I</button>
              <button className="btn-tool" style={{ textDecoration: 'underline' }}>U</button>
              <span className="sep"></span>
              <button className="btn-tool">H1</button>
              <button className="btn-tool">H2</button>
              <button className="btn-tool">¶</button>
              <span className="sep"></span>
              <button className="btn-tool">§</button>
              <button className="btn-tool">¶¶</button>
              <button className="btn-tool">⌗</button>
              <div className="right">
                <span style={{ fontSize: 11, color: 'var(--vd-muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em' }}>matter · #VD-2025-014</span>
                <div className="users">
                  <span className="avatar" style={{ background: '#f54e00' }}>EM</span>
                  <span className="avatar" style={{ background: '#2761c9' }}>JR</span>
                  <span className="avatar" style={{ background: '#6f5494' }}>AK</span>
                </div>
              </div>
            </div>
            <div className="vd-editor-doc">
              <h1 className="vd-editor-h1">Memorandum in support of motion to suppress</h1>
              <div className="vd-editor-meta">DRAFT v0.4 · US-CA · last edit 6 min ago · 2 collaborators online</div>
              <p>
                On the night of November 14, 2025, officers of the SFPD effected a warrantless entry into the residence of Mr.&nbsp;C.&nbsp;Reyes at 2204 Folsom St.<span className="cite">[1]</span> The entry was not preceded by exigent circumstances within the meaning of <em>Brigham City v. Stuart</em>, 547 U.S. 398 (2006).<span className="cite">[2]</span>
              </p>
              <p>
                The government's reliance on consent must be evaluated against the record. As the Court held in <em>Schneckloth v. Bustamonte</em>, 412 U.S. 218 (1973), consent <span className="ai-suggest">must be voluntary, not the product of duress or coercion, express or implied</span>.<span className="cite">[3]</span> Here, Mr.&nbsp;Reyes was confronted by four uniformed officers at the doorway at 11:47 p.m.<span className="cursor-mark">EM · live</span>
              </p>
              <p style={{ color: 'var(--vd-muted)' }}>
                Continue with timeline contradictions surfaced from the body-cam transcript at 11:43–11:49…
              </p>
            </div>
          </div>

          <aside className="vd-editor-side">
            <div className="head">Citations · live</div>
            <div className="vd-side-card">
              <div className="src">[1] body-cam-22Q4.mp4 · 11:47:08</div>
              <div className="quote">"Officer M. — door knocked, no announcement, push entry on visual."</div>
              <div className="actions">
                <button className="vd-side-action">Open</button>
                <button className="vd-side-action primary">Insert</button>
              </div>
            </div>
            <div className="vd-side-card">
              <div className="src">[2] Brigham City v. Stuart, 547 U.S. 398</div>
              <div className="quote">"…law enforcement officers may enter a home without a warrant to render emergency assistance…"</div>
              <div className="actions">
                <button className="vd-side-action">Open</button>
                <button className="vd-side-action primary">Insert</button>
              </div>
            </div>
            <div className="vd-side-card">
              <div className="src">[3] Schneckloth v. Bustamonte, 412 U.S. 218</div>
              <div className="quote">"Voluntariness is a question of fact to be determined from the totality of all the circumstances."</div>
            </div>

            <div className="vd-ai-prompt">
              <span className="badge">⌘K</span>
              <span>Tighten the duress argument with on-point 9th Cir. cases.</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Models() {
  const models = [
    { name: "Claude Opus 4.5",        tag: "cloud",   ctx: "1M tok", price: "$3 / 1M in",      defense: false },
    { name: "GPT-5",                   tag: "cloud",  ctx: "1M tok", price: "$2 / 1M in",      defense: false },
    { name: "Gemini 2.5 Pro",          tag: "cloud",  ctx: "2M tok", price: "$1.5 / 1M in",    defense: false },
    { name: "DeepSeek V3 (uncensored)", tag: "local", ctx: "128k",   price: "free · local",     defense: true  },
    { name: "Qwen 2.5 72B Instruct",   tag: "local",  ctx: "128k",   price: "free · local",     defense: false },
    { name: "Mistral Large 2407",      tag: "local",  ctx: "128k",   price: "free · local",     defense: false },
    { name: "Llama 3.3 70B (Eric Hartford fork)", tag: "local", ctx: "128k", price: "free · local", defense: true },
    { name: "Verdictu Counsel (fine-tune)", tag: "cloud", ctx: "256k", price: "incl. all plans", defense: true },
  ];
  return (
    <section className="vd-section" data-screen-label="08 Models">
      <div className="vd-section-head">
        <div>
          <span className="vd-eyebrow">Models</span>
          <h2>Pick your weapon.<br/>Censored or not.</h2>
        </div>
        <p className="lede">
          Plug in any local model through Ollama, vLLM, llama.cpp or LM Studio — or use Verdictu's cloud relay for frontier models. For defense work where mainstream models refuse to engage, we surface uncensored, defense-oriented fine-tunes you can run on-prem.
        </p>
      </div>

      <div className="vd-models">
        <div className="vd-model-callout">
          <h3>Why uncensored matters for defense.</h3>
          <p>
            Mainstream cloud models refuse legitimate defense work — describing a weapon's mechanism for a chain-of-custody motion, articulating a co-defendant's argument, or analyzing a controlled-substance schedule for a sentencing memo. We give you the choice.
          </p>
          <div className="features">
            <div className="row"><span className="dot"></span> Defense fine-tunes vetted for refusal-rate</div>
            <div className="row"><span className="dot"></span> Per-matter model overrides</div>
            <div className="row"><span className="dot"></span> Side-by-side response comparison</div>
            <div className="row"><span className="dot"></span> Local-only flag stops a matter from ever calling out</div>
          </div>
        </div>

        <div className="vd-model-table">
          <div className="vd-model-row head">
            <span>Model</span>
            <span>Runtime</span>
            <span>Context</span>
            <span>Price</span>
          </div>
          {models.map(m => (
            <div key={m.name} className="vd-model-row">
              <span className="name">
                {m.name}
                {m.defense && <span className="badge badge--unc">defense</span>}
              </span>
              <span>
                <span className={`badge ${m.tag === 'local' ? 'badge--local' : 'badge--cloud'}`}>{m.tag}</span>
              </span>
              <span className="ctx">{m.ctx}</span>
              <span className="right">{m.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collab() {
  return (
    <section className="vd-section" data-screen-label="09 Collab">
      <div className="vd-section-head">
        <div>
          <span className="vd-eyebrow">Collaboration</span>
          <h2>Two lawyers, one<br/>document, zero merge hell.</h2>
        </div>
        <p className="lede">
          Multiplayer editing with live cursors, presence and per-paragraph comments. Pair-draft with a colleague while the agent watches the matter, suggests citations, and flags contradictions in real time.
        </p>
      </div>

      <div className="vd-collab">
        <div className="vd-collab-card">
          <div className="vd-collab-grid">
            <div>
              <div className="vd-collab-doc">
                <div className="line">III. <span className="selection">Consent was neither voluntary nor unequivocal</span> within the</div>
                <div className="line">meaning of <em>Schneckloth v. Bustamonte</em>. The record shows that</div>
                <div className="line">Mr.&nbsp;Reyes was confronted at the threshold by four uniformed</div>
                <div className="line">officers at 11:47 p.m., body-cam audio confirming that the</div>
                <div className="line"><span className="selection-b">word "consent" was never used by the responding officer</span>.</div>
                <div className="line ghost">Insert exhibit A — body-cam transcript, 11:46:32–11:48:04.</div>
                <div className="line">The Ninth Circuit has held repeatedly that the burden of</div>
                <div className="line">proving consent rests on the government…</div>

                <div className="cursor-flag a">Emma · ¶ III</div>
                <div className="cursor-flag b">Jules · ¶ V</div>
              </div>

              <div className="vd-presence-row">
                <span className="av" style={{ background: '#f54e00' }}>EM</span>
                <span className="av" style={{ background: '#2761c9' }}>JR</span>
                <span className="av" style={{ background: '#6f5494' }}>AK</span>
                <span>Emma, Jules and Aki are in this document.</span>
                <span className="live"><span className="dot"></span> LIVE</span>
              </div>
            </div>

            <div>
              <span className="vd-eyebrow">Comment thread · ¶ III</span>
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div className="vd-side-card" style={{ background: 'var(--vd-soft)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span className="av" style={{ width: 22, height: 22, background: '#2761c9', borderRadius: '50%', color: 'white', fontSize: 9, fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>JR</span>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>Jules R.</span>
                    <span style={{ fontSize: 11, color: 'var(--vd-muted)', marginLeft: 'auto' }}>2m ago</span>
                  </div>
                  <div className="quote">Should we lean on <em>Bumper v. North Carolina</em> here? The submission-to-authority argument is cleaner with that on the record.</div>
                </div>
                <div className="vd-side-card" style={{ background: 'rgba(245,78,0,0.04)', borderColor: '#f7d5c1' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span className="av" style={{ width: 22, height: 22, background: '#1a1a16', borderRadius: '50%', color: 'white', fontSize: 9, fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>V</span>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>Verdictu <span style={{ fontSize: 9, background: '#f54e00', color: 'white', padding: '2px 5px', borderRadius: 4, marginLeft: 4, letterSpacing: '0.12em' }}>AGENT</span></span>
                    <span style={{ fontSize: 11, color: 'var(--vd-muted)', marginLeft: 'auto' }}>just now</span>
                  </div>
                  <div className="quote">Adding <em>Bumper</em>, 391 U.S. 543, with parallel passage on color-of-authority. Also surfaced <em>U.S. v. Patayan Soriano</em> (9th Cir. 2004) — want it inserted as a string-cite?</div>
                  <div className="actions">
                    <button className="vd-side-action">Dismiss</button>
                    <button className="vd-side-action primary">Insert both</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { EditorDemo, Models, Collab });
