import { useEffect, useState } from "react";
import axios from "axios";

const Culture = () => {
  const [cultures, setCultures] = useState([]);

  useEffect(() => {
    const fetchCulture = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/culture"
        );
        setCultures(res.data);
      } catch (error) {
        console.error("Error fetching culture:", error);
      }
    };

    fetchCulture();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Culture & Lifestyle</h1>

      {cultures.length === 0 && (
        <p>No culture data found.</p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {cultures.map((item) => (
          <div
            key={item._id}
            className="p-6 border rounded shadow-sm bg-white"
          >
            <h2 className="text-xl font-semibold">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              Category: {item.category}
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;
