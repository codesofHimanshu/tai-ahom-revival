import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-green-900 to-green-700 text-white">
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide">
          Tai Ahom Revival
        </h1>

        <p className="max-w-3xl text-lg text-green-100 leading-relaxed">
          A digital initiative dedicated to the preservation, documentation,
          and revival of the Tai Ahom civilization of Assam — its history,
          dynasties, language, culture, warfare, religion, and heritage.
        </p>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-green-800 mb-3">
            History & Dynasties
          </h3>
          <p className="text-gray-600 text-sm">
            Explore the origin of the Tai Ahoms, their migration, kings,
            administration, and resistance that shaped Assam’s history.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-green-800 mb-3">
            Culture & Lifestyle
          </h3>
          <p className="text-gray-600 text-sm">
            Learn about traditional clothing, food habits, rituals,
            festivals, and daily life of the Tai Ahom people.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-green-800 mb-3">
            Heritage & Architecture
          </h3>
          <p className="text-gray-600 text-sm">
            Discover historical monuments, burial sites, palaces, and
            architectural achievements of the Ahom era.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;


