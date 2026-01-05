import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide">
        Tai Ahom Revival
      </h1>

      <ul className="flex space-x-6 text-sm font-medium">
        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link to="/history" className="hover:text-yellow-300">History</Link></li>
        <li><Link to="/culture" className="hover:text-yellow-300">Culture</Link></li>
        <li><Link to="/heritage" className="hover:text-yellow-300">Heritage</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

