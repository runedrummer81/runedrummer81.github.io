import { motion } from "motion/react";
import CopyEmailButton from "../components/CopyEmailButton";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black text-white overflow-hidden"
    >
      {/* glowing grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,217,217,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(13,217,217,0.05)_1px,transparent_1px)] bg-[length:30px_30px] opacity-40 pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center min-h-[40vh] p-10 z-10">
        {/* headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-extrabold tracking-wide mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 drop-shadow-[0_0_20px_rgba(13,217,217,0.8)]"
        >
          Got a project or idea? Let’s connect.
        </motion.h2>

        {/* email button */}
        <CopyEmailButton />

        {/* social icons */}
        <div className="flex gap-12 justify-center mt-12">
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
              className="relative"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer 
                  rounded-full
                  shadow-[0_0_16px_rgba(13,217,217,0.6)]
                  hover:shadow-[0_0_32px_rgba(13,217,217,0.9)]
                  transition-shadow duration-300"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
