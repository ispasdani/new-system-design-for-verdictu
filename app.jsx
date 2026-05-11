// ============================================================
// Verdictu — Main app composition
// ============================================================

function App() {
  return (
    <>
      <TopNav />
      <Hero />
      <Composer />
      <JurisdictionArticle />
      <GhostSection />
      <Workflows />
      <Templates />
      <EditorDemo />
      <Models />
      <Collab />
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
