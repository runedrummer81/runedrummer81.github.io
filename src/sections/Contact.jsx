import { motion } from "framer-motion";
import CopyEmailButton from "../components/CopyEmailButton";

const NUM_STARS = 100; // number of stars

const Contact = () => {
  return (
    <section id="contact" className="relative text-white overflow-hidden">
      {/* Hyperspace star streaks */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {[...Array(NUM_STARS)].map((_, i) => {
          const size = Math.random() * 2 + 1; // 1-3px
          const duration = Math.random() * 3 + 2; // 2-5s
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const opacity = Math.random() * 0.5 + 0.3;
          return (
            <div
              key={i}
              className="absolute bg-cyan-400 rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                opacity,
                animation: `hyperspace ${duration}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-[50vh] p-10 z-10">
        {/* headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl text-center md:text-6xl font-extrabold tracking-wide mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 drop-shadow-[0_0_25px_rgba(13,217,217,0.9)]"
        >
          Got a project or idea? Let's{" "}
          <span className="relative inline-block">
            <span className="absolute top-0 left-0 w-full h-full text-cyan-300 opacity-40 animate-[glitch1_1.2s_infinite]">
              connect
            </span>
            <span className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-30 animate-[glitch2_1.2s_infinite]">
              connect
            </span>
            <span className="relative text-cyan-100">connect</span>
          </span>
        </motion.h2>

        {/* email button */}
        <CopyEmailButton />

        {/* social icons */}
        <div className="flex gap-12 justify-center mt-20">
          {[
            {
              href: "https://www.facebook.com/rune.frisch",
              src: "/assets/logos/facebook-dark.svg",
              alt: "Facebook Logo",
            },
            {
              href: "https://www.instagram.com/runefrisch/",
              src: "/assets/logos/instagram-dark.svg",
              alt: "Instagram Logo",
            },
            {
              href: "https://www.linkedin.com/in/rune-frisch-1a5414383/",
              src: "/assets/logos/linkedin-dark.svg",
              alt: "Linkedin Logo",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="relative "
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer 
                  rounded-full
                  shadow-[0_0_50px_rgba(13,217,217,0.7)]
                  hover:shadow-[0_0_40px_rgba(13,217,217,1)]
                  transition-shadow duration-400"
              />
            </motion.a>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes hyperspace {
            0% { transform: translateX(0) scaleX(1); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateX(200vw) scaleX(3); opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
