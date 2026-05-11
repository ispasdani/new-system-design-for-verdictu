// ============================================================
// Verdictu — Workflows + Templates
// ============================================================

function Workflows() {
  const [active, setActive] = React.useState(0);
  const workflows = [
    {
      name: "Defense theory builder",
      meta: "12 steps · criminal · uncensored OK",
      steps: [
        { kind: "thinking", n: "01", title: "Read & cluster case file", out: "ingested 47 PDFs · 2,118 pages" },
        { kind: "grep", n: "02", title: "Extract prior statements", out: "found 9 witness transcripts" },
        { kind: "read", n: "03", title: "Cross-check contradictions", out: "3 timeline conflicts · 2 phys. impossibilities" },
        { kind: "edit", n: "04", title: "Surface case-law parallels", out: "People v. Marrero (NY) · State v. Cole (TX)" },
        { kind: "done", n: "05", title: "Draft defense memo", out: "1,420 words · 14 cites · ready for review" },
      ],
    },
    {
      name: "Contract risk review",
      meta: "8 steps · commercial · jurisdiction-aware",
      steps: [
        { kind: "thinking", n: "01", title: "Parse contract structure", out: "26 clauses · MSA + 3 SOWs" },
        { kind: "grep", n: "02", title: "Flag non-standard language", out: "5 deviations from your playbook" },
        { kind: "read", n: "03", title: "Apply jurisdiction overlay", out: "US-CA: §1.8 unenforceable · UK-EW: §4.2 ambiguous" },
        { kind: "edit", n: "04", title: "Propose redlines", out: "12 markup suggestions · with rationale" },
        { kind: "done", n: "05", title: "Export tracked .docx", out: "→ /workspace/contracts/acme-v3-redlined.docx" },
      ],
    },
    {
      name: "Demand letter drafter",
      meta: "5 steps · plaintiff-side · templated",
      steps: [
        { kind: "thinking", n: "01", title: "Intake facts from transcript", out: "8 events · 4 parties · 1 incident date" },
        { kind: "grep", n: "02", title: "Match statutory framework", out: "Cal. Civ. Code §1714 · UCL §17200" },
        { kind: "read", n: "03", title: "Build damages model", out: "special + general · $84,200 base" },
        { kind: "edit", n: "04", title: "Draft with firm voice", out: "tone: firm but invitational · 2 pages" },
        { kind: "done", n: "05", title: "Attach exhibits index", out: "Ex. A–F · ready to send" },
      ],
    },
    {
      name: "Discovery request builder",
      meta: "6 steps · evidentiary · evidence-locker",
      steps: [
        { kind: "thinking", n: "01", title: "Read pleading + answer", out: "complaint 12 ct. · answer 8 def." },
        { kind: "grep", n: "02", title: "Identify factual gaps", out: "14 facts contested · 6 unverified" },
        { kind: "read", n: "03", title: "Build interrogatories", out: "22 questions · jurisdictional limit ok" },
        { kind: "edit", n: "04", title: "Build RFP & RFA list", out: "RFP × 31 · RFA × 12" },
        { kind: "done", n: "05", title: "Compile in court format", out: "FRCP 33/34/36 compliant · ready" },
      ],
    },
    {
      name: "Regulatory comparison",
      meta: "Multi-jurisdiction · CCPA/GDPR/PIPL",
      steps: [
        { kind: "thinking", n: "01", title: "Select jurisdictions", out: "US-CA · EU · CN" },
        { kind: "grep", n: "02", title: "Pull current statutory text", out: "3 jurisdictions · last updated this week" },
        { kind: "read", n: "03", title: "Map control surfaces", out: "consent · DSAR · cross-border · DPIA" },
        { kind: "edit", n: "04", title: "Generate matrix", out: "12 rows × 3 cols · with cites" },
        { kind: "done", n: "05", title: "Annotate gaps & overlaps", out: "exec summary + 4-pager" },
      ],
    },
  ];
  const w = workflows[active];
  return (
    <section className="vd-section" data-screen-label="05 Workflows">
      <div className="vd-section-head">
        <div>
          <span className="vd-eyebrow">Workflows</span>
          <h2>The agent runs the<br/>playbook, not just the prompt.</h2>
        </div>
        <p className="lede">
          Verdictu Workflows are multi-step legal procedures encoded once and run a thousand times. Use the curated library, fork the templates, or write your own in our simple step DSL — chaining retrieval, analysis, drafting and review.
        </p>
      </div>

      <div className="vd-workflows">
        <div className="vd-workflow-list">
          {workflows.map((wf, i) => (
            <div
              key={wf.name}
              className="vd-workflow-row"
              data-active={i === active}
              onClick={() => setActive(i)}
            >
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1 }}>
                <div className="name">{wf.name}</div>
                <div className="meta">{wf.meta}</div>
              </div>
              <span className="arrow"><Icon name="arrow-right" size={14}/></span>
            </div>
          ))}
        </div>

        <div className="vd-workflow-detail">
          <div className="vd-workflow-detail-head">
            <span className="name">{w.name}</span>
            <span>workflow.run · last run 14m ago · 100% success</span>
          </div>
          <div className="vd-workflow-detail-body">
            <div className="vd-workflow-steps">
              {w.steps.map(s => (
                <div key={s.n} className={`vd-workflow-step is-${s.kind}`}>
                  <span className="num">{s.n}</span>
                  <div>
                    <div className="title">{s.title}</div>
                    <div className="out">→ {s.out}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Templates() {
  const items = [
    { ico: "§", title: "NDA — mutual, US-CA", desc: "Two-way confidentiality with carve-outs for residuals, no auto-renewal." , by: "verdictu/std", uses: "12.4k" },
    { ico: "¶", title: "Cease & desist — IP", desc: "Tone-tuned for trademark and copyright infringement, jurisdiction overlay." , by: "verdictu/std", uses: "8.1k" },
    { ico: "⌘", title: "Motion to suppress", desc: "4th Amendment scaffold with case-law slots ready for matter context.", by: "@def_firm", uses: "3.2k" },
    { ico: "§§", title: "GDPR DPIA template", desc: "Article 35 DPIA with EDPB-aligned scoring and risk thresholds.", by: "@privacy_eu", uses: "5.7k" },
    { ico: "⊕", title: "Discovery RFP set", desc: "FRCP 34 starter for commercial disputes, with proportionality language." , by: "verdictu/std", uses: "4.4k" },
    { ico: "✶", title: "Demand letter, firm-side", desc: "Two-pager, statute slot, exhibits index. Customizable voice profile.", by: "@plaintiff_co", uses: "9.0k" },
    { ico: "≡", title: "Privacy policy v3", desc: "CCPA + GDPR + LGPD compatible, with do-not-sell defaults and DSAR endpoints.", by: "verdictu/std", uses: "11.2k" },
    { ico: "+", title: "Create your own", desc: "Start from a blank workflow or fork an existing one. Share it back if you want.", by: "you", uses: "" },
  ];
  return (
    <section className="vd-section" data-screen-label="06 Templates">
      <div className="vd-section-head">
        <div>
          <span className="vd-eyebrow">Templates</span>
          <h2>Build it once.<br/>Reuse it everywhere.</h2>
        </div>
        <p className="lede">
          A library of clauses, motion shells, demand letters and policy frameworks — curated by Verdictu and contributed by working lawyers. Anything you build can stay private to your workspace, or be published to the community.
        </p>
      </div>

      <div className="vd-templates">
        {items.map((t, i) => (
          <div key={i} className={`vd-template-card ${i === items.length - 1 ? 'is-create' : ''}`}>
            <div className="ico">{t.ico}</div>
            <h4>{t.title}</h4>
            <p>{t.desc}</p>
            <div className="footer">
              <span className="by">{t.by}</span>
              {t.uses && <span>{t.uses} runs</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Workflows, Templates });
