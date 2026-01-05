import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Culture from "./pages/Culture";
import Heritage from "./pages/Heritage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/heritage" element={<Heritage />} />
      </Routes>
    </Router>
  );
}

export default App;

