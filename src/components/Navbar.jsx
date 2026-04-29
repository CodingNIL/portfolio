const Navbar = () => {
  return (
    <nav
      className="
        fixed top-0 z-50 w-full
        border-b border-white/10
        bg-black/30
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto flex max-w-7xl
          items-center justify-between
          px-6 py-5
        "
      >
        {/* LOGO */}
        <h1
          className="
            text-lg font-semibold tracking-wide text-white
          "
        >
          Niladri{" "}
          <span
            className="
              bg-gradient-to-r
              from-blue-400
              to-cyan-300
              bg-clip-text
              text-transparent
            "
          >
            Sarkar
          </span>
        </h1>

        {/* NAV LINKS */}
        <div
          className="
            hidden items-center gap-8
            text-sm text-gray-300 md:flex
          "
        >
          <a
            href="#about"
            className="
              transition duration-300
              hover:text-white
            "
          >
            About
          </a>

          <a
            href="#projects"
            className="
              transition duration-300
              hover:text-white
            "
          >
            Projects
          </a>

          <a
            href="#contact"
            className="
              transition duration-300
              hover:text-white
            "
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
