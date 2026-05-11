// ============================================================
// Verdictu — Composer (interactive)
// Toggles: General/Legal · Cloud/Local · Citations · DeepSearch · Jurisdiction · Ghost / Ghost Open
// ============================================================

function Composer() {
  const [text, setText] = React.useState("");
  const [mode, setMode] = React.useState("Legal");      // General | Legal
  const [runtime, setRuntime] = React.useState("Local"); // Cloud | Local
  const [citations, setCitations] = React.useState(true);
  const [deepSearch, setDeepSearch] = React.useState(true);
  const [ghost, setGhost] = React.useState("Ghost");    // Ghost | Ghost Open
  const [jur, setJur] = React.useState({ flag: "🇺🇸", name: "US — Federal", code: "US-FED" });
  const [jurOpen, setJurOpen] = React.useState(false);
  const popRef = React.useRef(null);

  React.useEffect(() => {
    const onDoc = (e) => {
      if (popRef.current && !popRef.current.contains(e.target)) setJurOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const jurisdictions = [
    { flag: "🇺🇸", name: "US — Federal", code: "US-FED" },
    { flag: "🇺🇸", name: "US — California", code: "US-CA" },
    { flag: "🇺🇸", name: "US — Texas", code: "US-TX" },
    { flag: "🇬🇧", name: "UK — England & Wales", code: "UK-EW" },
    { flag: "🇪🇺", name: "European Union", code: "EU" },
    { flag: "🇨🇦", name: "Canada — Ontario", code: "CA-ON" },
    { flag: "🇦🇺", name: "Australia — NSW", code: "AU-NSW" },
    { flag: "🇩🇪", name: "Germany", code: "DE" },
    { flag: "🌐", name: "Multi-jurisdiction compare", code: "MULTI" },
  ];

  return (
    <div className="vd-composer-wrap" data-screen-label="02 Composer">
      <div className="vd-composer">
        <div className="vd-composer-meta">
          <span>Attach PDF, DOCX, DOC, TXT (max 20MB each)</span>
          <span>Files stay in your workspace · not shared externally</span>
        </div>

        <textarea
          className="vd-composer-input"
          rows={2}
          placeholder="Ask a legal question, compare documents, request a draft…"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="vd-composer-row">
          <button className="vd-chip">
            <Icon name="paperclip" size={14}/> Attach
          </button>
          <button
            className="vd-chip vd-chip--deepsearch"
            data-active={deepSearch}
            onClick={() => setDeepSearch(v => !v)}
          >
            <Icon name="search" size={14}/> DeepSearch
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: deepSearch ? '#2761c9' : '#cfcdc4', marginLeft: 2 }}></span>
          </button>

          <div style={{ position: 'relative' }} ref={popRef}>
            <button
              className="vd-chip vd-chip--jurisdiction"
              data-active={jurOpen}
              onClick={() => setJurOpen(v => !v)}
            >
              <span>{jur.flag}</span> {jur.name} <Icon name="caret" size={11}/>
            </button>
            {jurOpen && (
              <div className="vd-jur-pop">
                {jurisdictions.map(j => (
                  <div
                    key={j.code}
                    className="vd-jur-pop-row"
                    onClick={() => { setJur(j); setJurOpen(false); }}
                  >
                    <span className="flag">{j.flag}</span>
                    <span>{j.name}</span>
                    <span className="code">{j.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="spacer"></div>

          <div className="vd-seg">
            <button data-active={mode === "General"} onClick={() => setMode("General")}>
              <Icon name="chat" size={12}/> General
            </button>
            <button data-active={mode === "Legal"} onClick={() => setMode("Legal")}>
              <Icon name="scale" size={12}/> Legal
            </button>
          </div>

          <div className="vd-seg">
            <button data-active={runtime === "Cloud"} onClick={() => setRuntime("Cloud")}>
              <Icon name="cloud" size={12}/> Cloud
            </button>
            <button data-active={runtime === "Local"} onClick={() => setRuntime("Local")}>
              <Icon name="hd" size={12}/> Local
            </button>
          </div>

          <div
            className="vd-toggle-track"
            data-on={citations}
            onClick={() => setCitations(v => !v)}
            role="switch"
            aria-checked={citations}
          >
            <span className="vd-toggle-thumb"></span>
          </div>
          <span style={{ fontSize: 12.5, color: 'var(--vd-body)' }}>Citations</span>

          <button className="vd-send" disabled={!text.trim()}>
            <Icon name="arrow-up" size={14}/>
          </button>
        </div>

        <div className="vd-composer-row">
          <button
            className="vd-chip vd-chip--ghost"
            data-active={ghost === "Ghost"}
            onClick={() => setGhost("Ghost")}
          >
            <Icon name="ghost" size={14}/> Ghost
            <span style={{ fontSize: 10, color: ghost === "Ghost" ? "rgba(255,255,255,0.5)" : "var(--vd-muted)", marginLeft: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>local · offline</span>
          </button>
          <button
            className="vd-chip vd-chip--ghost"
            data-active={ghost === "Ghost Open"}
            onClick={() => setGhost("Ghost Open")}
          >
            <Icon name="ghost-open" size={14}/> Ghost Open
            <span style={{ fontSize: 10, color: ghost === "Ghost Open" ? "rgba(255,255,255,0.5)" : "var(--vd-muted)", marginLeft: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>cloud · uncensored</span>
          </button>

          <span style={{ fontSize: 12, color: 'var(--vd-muted)', marginLeft: 12, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em' }}>
            {runtime === "Local" ? "qwen2.5-72b · ollama · localhost:11434" : "claude-opus-4.5 · via Verdictu Cloud"}
          </span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Composer });
