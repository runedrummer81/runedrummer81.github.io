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
      <AuroraBackground />
      <div className="max-w-screen-sm md:max-w-6xl mx-auto">
        <h2 className="z-10 text-3xl sm:text-5xl font-extrabold text-left text-white mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          {/* Grid 1: Profile picture */}
          <div
            className="relative flex items-end grid-default-color grid-1 cursor-pointer rounded-lg overflow-hidden
              bg-[hsl(185,90%,50%)]
              shadow-[0_0_10px_3px_hsl(185,90%,50%)]
              animate-pulse-glow"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="assets/myself1.jpg"
              alt="Picture of Rune Frisch"
              className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg">
              <p className="text-white text-2xl font-bold">
                👆 Click to learn more!
              </p>
            </div>
          </div>

          {/* Grid 2: Hobbies */}
          <div className="grid-default-color grid-2">
            <div
              ref={grid2Container}
              className="flex flex-col md:flex-row items-center justify-center w-full h-full relative"
            >
              <p className="text-3xl md:text-5xl text-gray-500 mb-4 md:mb-0">
                MY HOBBIES
              </p>
              <Card
                style={{ rotate: "30deg", top: "10%", left: "70%" }}
                image="assets/veggie-logo.png"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "1deg", top: "64%", left: "5%" }}
                image="assets/logos/world-of-warcraft-logo.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "1deg", top: "14%", left: "15%" }}
                image="assets/logos/twenty-dice.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "1deg", top: "64%", left: "80%" }}
                image="assets/logos/helldivers2-logo.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "160deg", top: "70%", left: "25%" }}
                image="assets/pokeball.png"
                containerRef={grid2Container}
              />
            </div>
          </div>

          {/* Grid 3: Time zone */}
          <div className="grid-default-black grid-3 flex items-center justify-center md:justify-start p-4 md:p-0">
            <div className="z-10 w-full md:w-1/2">
              <p className="headtext text-2xl md:text-4xl">Time Zone</p>
              <p className="subtext text-sm md:text-base">
                I'm based in Denmark, and open to remote work worldwide
              </p>
            </div>
            <figure className="hidden md:block absolute left-[30%] top-[10%]">
              {/* <Globe /> */}
            </figure>
          </div>

          {/* Grid 4: Personality test */}
          <div className="grid-special-color grid-4 flex flex-col items-center justify-center gap-4 p-4">
            <h2 className="text-center font-bold text-2xl md:text-3xl">
              Want to know me a bit better?
            </h2>
            <p className="text-sm md:text-base">
              I’ve taken a personality test through Praice
            </p>
            <CopyEmailButton />
          </div>

          {/* Grid 5: Tools */}
          <div
            className="flex flex-wrap grid-default-color grid-5 relative items-start md:items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className={`z-10 w-full md:w-1/2 transition-opacity ${
                hovered ? "opacity-0" : "opacity-100"
              }`}
            >
              <p className="text-3xl md:text-5xl mb-2">Tools</p>
              <p className="headtext text-sm md:text-base">
                I bring ideas to life using versatile frameworks and languages.
              </p>
            </div>

            <p
              className={`absolute top-10 left-1/2 transform -translate-x-1/2 text-2xl md:text-xl font-bold transition-opacity pointer-events-none ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              Weapons of choice
            </p>

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

            <div
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 transition-opacity hidden md:block ${
                hovered ? "opacity-0" : "opacity-100"
              }`}
              style={{ width: "0%", height: "80%" }}
            >
              <Frameworks />
            </div>
          </div>
        </div>
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
              <div className="relative bg-neutral-900 text-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 overflow-y-auto max-h-[80vh]">
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 
             text-neutral-400 hover:text-white 
             w-10 h-10 flex items-center justify-center 
             text-2xl rounded-full hover:bg-neutral-800 transition"
                  onClick={() => setIsOpen(false)}
                >
                  ✖
                </button>

                <h2 className="text-3xl font-bold mb-4">About Me</h2>

                <img
                  src="/assets/svartsot1.jpg"
                  alt="band image"
                  className="w-full md:w-auto md:max-w-full rounded-lg mb-6 object-cover mx-auto"
                />

                {/* Modal text content */}
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Text container */}
                  <div className="flex-1 space-y-4">
                    <p className="text-neutral-300 text-sm md:text-base">
                      I’m passionate about programming and multimedia design,
                      with a strong background in music. I’ve performed over 200
                      gigs worldwide and some of my recordings have millions of
                      streams.
                    </p>
                    <p className="text-neutral-300 text-sm md:text-base">
                      Creativity drives everything I do, whether coding or
                      composing, and I love blending both worlds to craft unique
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
