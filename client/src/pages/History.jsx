import { useEffect, useState } from "react";
import { fetchDynasties } from "../services/api";

function History() {
  const [dynasties, setDynasties] = useState([]);

  useEffect(() => {
    fetchDynasties().then((data) => {
      setDynasties(data);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ahom Dynasty</h1>

      {dynasties.map((d) => (
        <div key={d._id} style={{ marginTop: "20px" }}>
          <h2>{d.name}</h2>
          <p><b>Period:</b> {d.period}</p>
          <p><b>Founder:</b> {d.founder}</p>
          <p><b>Capital:</b> {d.capital}</p>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  );
}

export default History;

