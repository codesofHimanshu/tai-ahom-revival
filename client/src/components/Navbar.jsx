import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Tai Ahom Revival</div>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/culture">Culture</NavLink>
        <NavLink to="/heritage">Heritage</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;


