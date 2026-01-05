function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Tai Ahom Revival. All rights reserved.
        </p>
        <p className="mt-2 text-green-300">
          Preserving the legacy, culture, and history of the Tai Ahom civilization.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
