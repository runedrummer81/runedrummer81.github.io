import { useState } from "react";
import { motion } from "framer-motion";

function Navigation() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <ul className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8">
      {links.map((link, i) => (
        <motion.li
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <a
            className="nav-link text-neutral-400 hover:text-cyan-400 transition-colors tracking-wide uppercase"
            href={link.href}
          >
            {link.label}
          </a>
          {/* glowing underline */}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
        </motion.li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed inset-x-0 z-20 w-full 
                backdrop-blur-lg 
                bg-black/40 
                border-b border-[rgba(13,217,217,0.3)] 
                shadow-[0_0_12px_rgba(13,217,217,0.2)]"
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-extrabold tracking-wider 
             text-[rgb(13,217,217)] 
             drop-shadow-[0_0_16px_rgba(13,217,217,0.8)] 
             hover:text-white transition"
          >
            Rune Frisch
          </a>

          {/* Burger button (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-cyan-400 hover:text-white focus:outline-none md:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-7 h-7"
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
          className="block overflow-hidden text-center md:hidden 
             backdrop-blur-lg 
             bg-black/60 
             border-t border-[rgba(13,217,217,0.3)] 
             shadow-[0_0_12px_rgba(13,217,217,0.25)]"
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
