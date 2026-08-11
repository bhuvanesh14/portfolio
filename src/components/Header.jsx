import { useState, useEffect } from "react";
import { portfolioData } from "../data.jsx";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md backdrop-blur-md padding">
      <nav className="container flex items-center mx-auto justify-between  text-lg text-gray-700 ">
        <div class="flex items-center gap-2 font-modern">
          <span class="font-tech font-extrabold text-3xl tracking-tighter text-blue-500">
            {portfolioData.firstName}
          </span>
          <span class="text-3xl font-light text-gray-300">/</span>
          <span class="font-light text-sm tracking-widest text-gray-400 uppercase mt-1">
            {portfolioData.lastName}
          </span>
        </div>
        <div className="hidden md:justify-center md:flex md:items-center lg:gap-x-12">
          <ul className="flex gap-6 lg:flex-row lg:gap-x-6 text-gray-300 ">
            <li>
              <a href="#" className="hover:text-blue">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue">Skills</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue">Experiences</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue">Projects</a>
            </li>
            <li>
              <a href="#contact"className="hover:text-blue" >Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden flex items-center text-gray-300">
          <p>Dark</p>
        </div>
        {/* Mobile Navigation */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded="isMobileMenuOpen"
          className="block md:hidden p-2 text-white hover:text-blue focus:outline-none"
        >
          {isMobileMenuOpen ? (
            /* Close (X) Icon */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay / Panel */}
      <div
        className={`md:hidden fixed inset-x-0  bg-slate-900 border-b border-slate-200 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-4 px-5 font-medium text-slate-700 min-h-screen">
          <a href="#"className="flex w-full min-w-0 text-blue items-baseline gap-3 border-b border-gray-500 py-3.5 font-display text-2xl font-semibold text-muted-foreground transition-colors hover:text-foreground sm:gap-4 sm:text-4xl md:py-4 md:text-5xl" onClick={closeMobileMenu}>
            Home
          </a>
          <a href="#about" className="flex w-full min-w-0 text-blue items-baseline gap-3 border-b border-gray-500 py-3.5 font-display text-2xl font-semibold text-muted-foreground transition-colors hover:text-foreground sm:gap-4 sm:text-4xl md:py-4 md:text-5xl" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#projects" className="flex w-full min-w-0 text-blue items-baseline gap-3 border-b border-gray-500 py-3.5 font-display text-2xl font-semibold text-muted-foreground transition-colors hover:text-foreground sm:gap-4 sm:text-4xl md:py-4 md:text-5xl" onClick={closeMobileMenu}>
            Skills
          </a>
          <a href="#projects" className="flex w-full min-w-0 text-blue items-baseline gap-3 border-b border-gray-500 py-3.5 font-display text-2xl font-semibold text-muted-foreground transition-colors hover:text-foreground sm:gap-4 sm:text-4xl md:py-4 md:text-5xl" onClick={closeMobileMenu}>
            Experiences
          </a>
          <a href="#projects" className="flex w-full min-w-0 text-blue items-baseline gap-3 border-b border-gray-500 py-3.5 font-display text-2xl font-semibold text-muted-foreground transition-colors hover:text-foreground sm:gap-4 sm:text-4xl md:py-4 md:text-5xl" onClick={closeMobileMenu}>
            Projects
          </a>
          <a href="#contact" className="flex w-full min-w-0 text-blue items-baseline border-b border-gray-500 gap-3 py-3.5 font-display text-2xl font-semibold text-muted-foreground transition-colors hover:text-foreground sm:gap-4 sm:text-4xl md:py-4 md:text-5xl" onClick={closeMobileMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
