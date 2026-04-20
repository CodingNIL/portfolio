const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-lg font-semibold tracking-wide text-white">
          Niladri <span className="text-blue-500">Sarkar</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
