function Navbar() {
  return (
    <nav className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide">
        Tai Ahom Revival
      </h1>

      <ul className="flex space-x-6 text-sm font-medium">
        <li className="hover:text-yellow-300 cursor-pointer">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer">History</li>
        <li className="hover:text-yellow-300 cursor-pointer">Culture</li>
        <li className="hover:text-yellow-300 cursor-pointer">Heritage</li>
      </ul>
    </nav>
  );
}

export default Navbar;
