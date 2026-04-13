const tabs = ["Definition", "Editing", "Workflow", "Access"];

function App() {
  return (
    <main className="app-shell">
      <header className="top-bar">
        <div className="brand-block">
          <p className="brand-kicker">Form Editor</p>
          <h1>Service Request Template</h1>
        </div>

        <nav aria-label="Primary sections" className="top-nav">
          {tabs.map((tab, index) => (
            <button
              aria-current={index === 0 ? "page" : undefined}
              className="top-nav__tab"
              key={tab}
              type="button"
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>
    </main>
  );
}

export default App;
