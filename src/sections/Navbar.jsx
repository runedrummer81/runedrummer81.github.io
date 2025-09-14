import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 ">
      <li>
        <a
          className="nav-link text-neutral-400 hover:text-white transition-colors"
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="nav-link text-neutral-400 hover:text-white transition-colors"
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="nav-link text-neutral-400 hover:text-white transition-colors"
          href="#work"
        >
          Work
        </a>
      </li>
      <li>
        <a
          className="nav-link text-neutral-400 hover:text-white transition-colors"
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Rune
          </a>

          {/* Burger button (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none md:hidden"
          >
            <img
              src={
                isOpen ? "/public/assets/close.svg" : "/public/assets/menu.svg"
              }
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center md:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
