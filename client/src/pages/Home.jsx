const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <h1>Tai Ahom Revival</h1>

        <p>
          A digital initiative dedicated to the preservation, documentation,
          and revival of the Tai Ahom civilization of Assam — its history,
          dynasties, language, culture, warfare, religion, and heritage.
        </p>

        <div className="hero-divider"></div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="section">
        <div className="card-grid">
          <div className="card">
            <h3>History & Dynasties</h3>
            <span>1228 CE – 1826 CE</span>
            <p>
              Explore the origin of the Tai Ahoms, their migration,
              kings, administration, and resistance that shaped
              Assam’s political and cultural history for nearly
              600 years.
            </p>
          </div>

          <div className="card">
            <h3>Culture & Lifestyle</h3>
            <span>Traditions & Rituals</span>
            <p>
              Learn about traditional clothing, food habits,
              religious beliefs, festivals, social structure,
              and daily life of the Tai Ahom people.
            </p>
          </div>

          <div className="card">
            <h3>Heritage & Architecture</h3>
            <span>Maidams & Monuments</span>
            <p>
              Discover historical monuments, royal maidams,
              burial sites, palaces, and architectural
              achievements of the Ahom era.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;


