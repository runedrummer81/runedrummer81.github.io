import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Modern", "Engaging", "Accessible"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text relative">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium orbitron text-white drop-shadow-[0_0_5px_cyan] underline"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Rune Frisch
        </motion.h1>

        <div className="flex flex-col items-start mt-4">
          <motion.p
            className="text-5xl font-medium orbitron text-neutral-300 drop-shadow-[0_0_5px_cyan]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Multimedia Design Student
          </motion.p>

          <motion.p
            className="text-5xl font-medium orbitron text-neutral-300 drop-shadow-[0_0_5px_cyan]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Passionate About
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -5, 0], opacity: [1, 0.95, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FlipWords
                words={words}
                className="font-black text-8xl orbitron text-white glitch-neon"
              />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-4xl mt-2 font-medium orbitron text-neutral-300 drop-shadow-[0_0_5px_cyan]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Experiences
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-8 md:hidden mt-6 px-4">
        <motion.p
          className="text-4xl font-medium orbitron text-white drop-shadow-[0_0_5px_cyan] underline"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Rune Frisch
        </motion.p>

        <div className="flex flex-col space-y-4">
          <motion.p
            className="text-4xl font-black orbitron text-neutral-300 drop-shadow-[0_0_5px_cyan]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Multimedia Design Student
          </motion.p>

          <motion.p
            className="text-4xl font-medium orbitron text-neutral-300 drop-shadow-[0_0_5px_cyan]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Passionate About
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, -4, 0], opacity: [1, 0.95, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FlipWords
                words={words}
                className="font-black text-6xl orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 drop-shadow-[0_0_15px_rgba(13,217,217,0.8)] tracking-wider glitch-neon"
              />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-3xl font-black orbitron text-neutral-300 drop-shadow-[0_0_5px_cyan]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Experiences
          </motion.p>
        </div>
      </div>

      {/* Optional CSS for glitch + neon effect */}
      <style>
        {`
          .glitch-neon {
            position: relative;
            color: #00fff7;
          }
          .glitch-neon::before,
          .glitch-neon::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.7;
          }
          .glitch-neon::before { left: 2px; text-shadow: -2px 0 #ff00ff; animation: glitch1 1s infinite; }
          .glitch-neon::after { left: -2px; text-shadow: 2px 0 #00ffff; animation: glitch2 1.2s infinite; }
          @keyframes glitch1 { 0%,100%{transform:translate(0,0);}20%{transform:translate(-1px,1px);}40%{transform:translate(1px,-1px);}60%{transform:translate(-1px,-1px);}80%{transform:translate(1px,1px);} }
          @keyframes glitch2 { 0%,100%{transform:translate(0,0);}25%{transform:translate(1px,-1px);}50%{transform:translate(-1px,1px);}75%{transform:translate(1px,1px);} }
        `}
      </style>
    </div>
  );
};

export default HeroText;
