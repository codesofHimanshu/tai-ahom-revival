import { useEffect, useState } from "react";
import axios from "axios";

function Heritage() {
  const [heritage, setHeritage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeritage = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/heritage");
        setHeritage(res.data);
      } catch (error) {
        console.error("Error fetching heritage data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeritage();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Heritage & Architecture
      </h1>

      {loading && <p>Loading heritage data...</p>}

      {!loading && heritage.length === 0 && (
        <p>No heritage data found.</p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {heritage.map((item) => (
          <div
            key={item._id}
            className="bg-white p-6 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold text-green-700">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              📍 {item.location}
            </p>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Heritage;
