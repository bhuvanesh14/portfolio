import { portfolioData } from "../data.jsx";

function Header() {
  return (
    <header className=" top-0 z-50 bg-white shadow-md py-4 padding">
      <nav className="container flex items-center mx-auto justify-between py-4 md:py-0  text-lg text-gray-700 ">
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
          <ul className="flex gap-6 lg:flex-row lg:gap-x-6">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <p>Dark</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
