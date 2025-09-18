import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/DownloadButton";
import { Frameworks } from "../components/Frameworks";
import AuroraBackground from "../components/AuroraBackground";

const About = () => {
  const grid2Container = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(1);
  const [hovered, setHovered] = useState(false);

  const spotifyLinks = {
    1: "https://open.spotify.com/artist/21h3ZMAgqVovSFIqUoP3jv?si=ovagSKBPQD6EMkbQxkfi-A",
    2: "https://open.spotify.com/artist/25yCmYx78hTeQu2RD7ZAvz?si=jICn1Dn8T1a4e6tuyvHF2Q",
  };

  const youtubeLink = "https://www.youtube.com/watch?v=CWYFTknRYX0";

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setActiveAlbum((prev) => (prev === 3 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section id="about" className="relative pt-20 pb-10 px-4 sm:px-6">
      {/* Full-width gradient overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-64 bg-gradient-to-b from-black via-black/50 to-transparent z-0"></div>
      <AuroraBackground />

      <div className="relative z-10 max-w-screen-sm md:max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-left bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 drop-shadow-[0_0_20px_rgba(13,217,217,0.8)] mb-12">
          About Me
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12"
        >
          {/* Grid 1: Profile picture */}
          <div
            className="relative flex items-end grid-default-color grid-1 cursor-pointer rounded-lg overflow-hidden
             bg-[hsl(185,90%,50%)]
             shadow-[0_0_10px_3px_rgba(13,217,217,0.3)]
             transition-shadow duration-300
             hover:shadow-[0_0_20px_8px_rgba(13,217,217,0.6)]"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="assets/myself1.jpg"
              alt="Picture of Rune Frisch"
              className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            {/* Overlay with glitching text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg">
              <p className="relative text-cyan-400 font-mono text-4xl sm:text-5xl font-extrabold tracking-widest drop-shadow-[0_0_25px_rgba(13,217,217,0.9)]">
                {/* glitch layers */}
                <span className="absolute orbitron top-0 left-0 w-full h-full text-cyan-300 opacity-70 animate-[glitch1_1.2s_infinite]">
                  ACCESS PROFILE
                </span>
                <span className="absolute orbitron top-0 left-0 w-full h-full text-cyan-500 opacity-60 animate-[glitch2_1.2s_infinite]">
                  ACCESS PROFILE
                </span>
                <span className="relative orbitron">ACCESS PROFILE</span>

                {/* sci-fi scanline overlay */}
                <span className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(13,217,217,0.08)_2px,rgba(13,217,217,0.08)_4px)] animate-[scanlines_2s_linear_infinite] pointer-events-none" />
              </p>
            </div>
          </div>

          <div className="grid-default-color grid-2 relative">
            <div
              ref={grid2Container}
              className="flex flex-col md:flex-row items-center justify-center w-full h-full relative
      rounded-lg border-2 border-cyan-400/40 shadow-[0_0_20px_rgba(13,217,217,0.5)]
      bg-black/20 backdrop-blur-md overflow-hidden"
            >
              {/* Glitchy title */}
              <p className="relative text-3xl md:text-5xl font-extrabold mb-4 md:mb-0 text-gray-500">
                <span className="absolute top-0 left-0 w-full h-full text-cyan-300 opacity-70 animate-[glitch1_1s_infinite]">
                  MY HOBBIES
                </span>
                <span className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-60 animate-[glitch2_1s_infinite]">
                  MY HOBBIES
                </span>
                <span className="relative">MY HOBBIES</span>
              </p>

              {/* Optional scanlines / holographic effect */}
              <span className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(13,217,217,0.05)_2px,rgba(13,217,217,0.05)_4px)] animate-[scanlines_2s_linear_infinite]" />

              {/* Draggable Cards */}
              {(() => {
                const cards = [
                  { image: "assets/logos/world-of-warcraft-logo.svg" },
                  { image: "assets/logos/d20-dice.svg" },
                  { image: "assets/logos/helldivers2-logo.svg" },
                  { image: "assets/pokeball.png" },
                  { image: "assets/book.svg" },
                  { image: "assets/leaf.svg" },
                  { image: "assets/cat.svg" },
                  { image: "assets/playstation.svg" },
                ];

                const positions = [];

                const getRandomPosition = () => {
                  let top, left;
                  let attempts = 0;

                  do {
                    top = Math.random() * 80 + 5; // top between 5% and 85%
                    left = Math.random() * 80 + 5; // left between 5% and 85%
                    attempts++;
                  } while (
                    positions.some(
                      (pos) =>
                        Math.abs(pos.top - top) < 15 &&
                        Math.abs(pos.left - left) < 15
                    ) &&
                    attempts < 100
                  );

                  positions.push({ top, left });
                  return { top, left };
                };

                return cards.map((card, i) => {
                  const { top, left } = getRandomPosition();
                  const rotate = Math.floor(Math.random() * 60) - 30; // random rotation -30° to +30°
                  return (
                    <Card
                      key={i}
                      style={{
                        rotate: `${rotate}deg`,
                        top: `${top}%`,
                        left: `${left}%`,
                      }}
                      image={card.image}
                      containerRef={grid2Container}
                      className="rounded-full overflow-hidden"
                    />
                  );
                });
              })()}
            </div>
          </div>

          {/* Grid 3: Digital storm / multi-directional character streams */}
          <div className="grid-default-black grid-3 relative flex items-center justify-center md:justify-start p-4 overflow-hidden">
            {/* Main glitchy title */}
            <div className="z-10 w-full md:w-1/2">
              <p className="relative text-3xl md:text-5xl font-bold mb-2">
                <span className="absolute top-0 left-0 w-full h-full text-cyan-300 opacity-70 animate-[glitch1_1s_infinite]">
                  Time Zone
                </span>
                <span className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-60 animate-[glitch2_1s_infinite]">
                  Time Zone
                </span>
                <span className="relative">Time Zone</span>
              </p>
              <p className="relative text-sm md:text-base">
                <span
                  className="absolute text-2xl top-0 left-0 w-full h-full text-cyan-300 opacity-70 animate-[glitch1_1s_infinite]"
                  style={{ animationDelay: "0s" }}
                >
                  Living and coding from Aarhus, <strong>Denmark</strong>.
                </span>
                <span
                  className="absolute text-2xl top-0 left-0 w-full h-full text-cyan-400 opacity-60 animate-[glitch2_1s_infinite]"
                  style={{ animationDelay: "0.2s" }}
                >
                  Living and coding from Aarhus, <strong>Denmark</strong>.
                </span>
                <span className="relative text-2xl text-gray-300">
                  Living and coding from Aarhus, <strong>Denmark</strong>.
                </span>
              </p>
            </div>

            {/* Multi-directional digital storm */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(40)].map((_, i) => {
                const directions = [
                  "top-to-bottom",
                  "bottom-to-top",
                  "left-to-right",
                  "right-to-left",
                ];
                const dir =
                  directions[Math.floor(Math.random() * directions.length)];
                return (
                  <span
                    key={i}
                    className={`absolute text-cyan-400 font-mono text-xs md:text-sm opacity-60 animate-${dir}`}
                    style={{
                      left:
                        dir.includes("left") || dir.includes("right")
                          ? `${-10 + Math.random() * 120}%`
                          : `${Math.random() * 100}%`,
                      top:
                        dir.includes("top") || dir.includes("bottom")
                          ? `${-10 + Math.random() * 120}%`
                          : `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${2 + Math.random() * 5}s`,
                    }}
                  >
                    {Array.from(
                      { length: 3 + Math.floor(Math.random() * 3) },
                      () =>
                        String.fromCharCode(33 + Math.floor(Math.random() * 94))
                    ).join("")}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Grid 4: Personality test */}
          <div
            className="grid-special-color grid-4 relative flex flex-col items-center justify-center gap-4 p-6
    rounded-lg border-2 border-cyan-400/40 shadow-[0_0_20px_rgba(13,217,217,0.5)]
    bg-black/20 backdrop-blur-md overflow-hidden"
          >
            {/* Glitchy title */}
            <h2 className="relative text-center font-bold text-2xl md:text-3xl">
              <span className="absolute top-0 left-0 w-full h-full text-cyan-300 opacity-70 animate-[glitch1_1s_infinite]">
                Curious about me?
              </span>
              <span className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-60 animate-[glitch2_1s_infinite]">
                Curious about me?
              </span>
              <span className="relative">Curious about me?</span>
            </h2>

            {/* Optional scanlines / holographic overlay */}
            <span className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(13,217,217,0.05)_2px,rgba(13,217,217,0.05)_4px)] animate-[scanlines_2s_linear_infinite]" />

            {/* Description */}
            <p className="relative z-10 text-sm md:text-base text-center">
              {/* Glitch layers */}
              <span className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-70 animate-[glitch1_1.2s_infinite]">
                I've taken a personality test with Praice, download the results
              </span>
              <span className="absolute top-0 left-0 w-full h-full text-cyan-500 opacity-60 animate-[glitch2_1.2s_infinite]">
                I've taken a personality test with Praice, download the results
              </span>
              <span className="relative text-gray-200">
                I've taken a personality test with Praice, download the results
              </span>
            </p>

            {/* Interactive button */}
            <div className="relative z-10">
              <CopyEmailButton />
            </div>
          </div>

          {/* Grid 5: Tools */}
          <div
            className="flex flex-wrap grid-default-color grid-5 relative items-start md:items-center
    rounded-lg p-6 border-2 border-cyan-400/40 shadow-[0_0_20px_rgba(13,217,217,0.5)]
    bg-black/20 backdrop-blur-md overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Glitchy main title */}
            <div
              className={`relative z-10 w-full md:w-1/2 mb-4 md:mb-0 transition-opacity duration-300 ${
                hovered ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <p className="relative text-3xl md:text-5xl font-bold mb-2">
                <span className="absolute top-0 left-0 w-full h-full text-cyan-300 opacity-70 animate-[glitch1_1s_infinite]">
                  Tools
                </span>
                <span className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-60 animate-[glitch2_1s_infinite]">
                  Tools
                </span>
                <span className="relative">Tools</span>
              </p>
              <p className="headtext text-sm md:text-base hidden md:block text-gray-300">
                I bring ideas to life using versatile frameworks and languages.
              </p>
            </div>

            {/* Glitchy hover subtitle */}
            <p
              className={`absolute top-10 left-1/2 transform -translate-x-1/2 text-2xl md:text-xl font-bold transition-opacity pointer-events-none z-20 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="absolute top-0 left-0 w-full h-full text-cyan-300 opacity-70 animate-[glitch1_1s_infinite]">
                Weapons of choice
              </span>
              <span className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-60 animate-[glitch2_1s_infinite]">
                Weapons of choice
              </span>
              <span className="relative">Weapons of choice</span>
            </p>

            {/* Tools icons */}
            <div
              key={hovered ? "hovered" : "idle"}
              className={`absolute top-32 md:top-28 left-1/2 transform -translate-x-1/2 grid grid-cols-4 md:grid-cols-8 grid-rows-2 gap-6 md:gap-10 pointer-events-none w-full md:w-160 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {[
                "/assets/logos/css3.svg",
                "/assets/logos/html5.svg",
                "/assets/logos/javascript.svg",
                "/assets/logos/react.svg",
                "/assets/logos/github.svg",
                "/assets/logos/tailwindcss.svg",
                "/assets/logos/visualstudiocode.svg",
                "/assets/logos/figma-icon.svg",
                "/assets/logos/visualstudiocode.svg",
                "/assets/logos/davinci-resolve-12.svg",
                "/assets/logos/audacity-icon.svg",
                "/assets/logos/adobe-illustrator-icon.svg",
                "/assets/logos/adobe-after-effects-icon.svg",
                "/assets/logos/adobe-photoshop-icon.svg",
                "/assets/logos/adobe-dimension-icon.svg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="logo"
                  style={{ animationDelay: `${i * 0.03}s` }}
                  className="w-10 md:w-12 h-10 md:h-12 opacity-0 fade-in"
                />
              ))}
            </div>

            {/* Optional holographic / scanline overlay */}
            <span className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(13,217,217,0.05)_2px,rgba(13,217,217,0.05)_4px)] animate-[scanlines_2s_linear_infinite]" />
            {/* Original Frameworks component (kept intact) */}
            <div
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 transition-opacity  ${
                hovered ? "opacity-0" : "opacity-100"
              }`}
              style={{ width: "0%", height: "80%" }}
            >
              <Frameworks />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🔹 Modal (Pop-up) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div
                className="relative rounded-2xl max-w-2xl w-full p-8 overflow-y-auto max-h-[80vh] 
      bg-black/70 backdrop-blur-md 
      border border-cyan-400/40 
      shadow-[0_0_30px_rgba(13,217,217,0.7)]"
              >
                {/* glowing border animation */}
                <span className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50 animate-[glowPulse_3s_ease-in-out_infinite] pointer-events-none"></span>

                {/* subtle scanline overlay */}
                <span className="absolute inset-0 rounded-2xl bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(13,217,217,0.08)_2px,rgba(13,217,217,0.08)_4px)] animate-[scanlines_2s_linear_infinite] pointer-events-none"></span>

                {/* Close button */}
                <button
                  className="absolute top-4 right-4 
             z-50   /* ensure it's on top of everything */
             text-cyan-400 hover:text-white 
             w-12 h-12 flex items-center justify-center 
             text-2xl rounded-full hover:bg-cyan-500/20 
             transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                >
                  ✖
                </button>

                {/* modal inner content */}
                <h2 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 drop-shadow-[0_0_15px_rgba(13,217,217,0.7)]">
                  About Me
                </h2>

                <img
                  src="/assets/svartsot1.jpg"
                  alt="band image"
                  className="w-full md:w-auto md:max-w-full rounded-lg mb-6 object-cover mx-auto"
                />

                {/* Modal text content */}
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Text container */}
                  <div className="flex-1 space-y-4">
                    <p className="text-cyan-300 text-sm md:text-base font-medium tracking-wide drop-shadow-[0_0_5px_cyan]">
                      Beyond my passion for programming and multimedia design, I
                      have a solid background in music. I've played over 200
                      gigs with different bands, and some of my recordings have
                      reached millions of streams.
                    </p>
                    <p className="text-cyan-300 text-sm md:text-base font-medium tracking-wide drop-shadow-[0_0_5px_cyan]">
                      Creativity drives everything I do, whether coding or
                      composing. I love blending both worlds to craft unique
                      digital experiences.
                    </p>

                    {/* Socials */}
                    <div className="mt-2">
                      <p className="text-neutral-300 font-semibold mb-1">
                        My Socials:
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="https://www.instagram.com/runefrisch/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/logos/instagram.svg"
                            alt="Instagram"
                            className="w-7 h-7"
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/rune.frisch"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/logos/facebook.svg"
                            alt="Facebook"
                            className="w-7 h-7"
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/rune-frisch-1a5414383/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/logos/linkedin.svg"
                            alt="LinkedIn"
                            className="w-7 h-7"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Album / Media container */}
                  <div className="flex flex-col gap-4 w-full md:w-56">
                    <div className="relative w-full h-56 mx-auto md:mx-0">
                      <AnimatePresence mode="wait">
                        {activeAlbum === 3 ? (
                          <motion.a
                            key="yt"
                            href={youtubeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.45 }}
                            className="absolute inset-0"
                          >
                            <motion.img
                              src="/assets/yt-cover2.webp"
                              alt="Drum Cover on YouTube"
                              className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105"
                              draggable={false}
                            />
                          </motion.a>
                        ) : (
                          <motion.a
                            key={`sp-${activeAlbum}`}
                            href={spotifyLinks[activeAlbum]}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.45 }}
                            className="absolute inset-0"
                          >
                            <motion.img
                              src={
                                activeAlbum === 1
                                  ? "/assets/forever-still-cover1.jpg"
                                  : "/assets/cover-art2.jpg"
                              }
                              alt={`album cover ${activeAlbum}`}
                              className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105"
                              draggable={false}
                            />
                          </motion.a>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Toggle thumbnails */}
                    <div className="flex gap-3 justify-center md:justify-start">
                      {[1, 2, 3].map((i) => {
                        const src =
                          i === 1
                            ? "/assets/forever-still-cover1.jpg"
                            : i === 2
                            ? "/assets/cover-art2.jpg"
                            : "/assets/yt-cover2.webp";
                        const borderColor =
                          i === 3 ? "border-red-600" : "border-indigo-400";
                        return (
                          <img
                            key={i}
                            onClick={() => setActiveAlbum(i)}
                            src={src}
                            alt={`thumbnail ${i}`}
                            className={`w-12 h-12 object-cover rounded-lg cursor-pointer transition-opacity ${
                              activeAlbum === i
                                ? `opacity-100 border-2 ${borderColor}`
                                : "opacity-50"
                            } hover:opacity-100`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* rest of modal content (if any) */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
