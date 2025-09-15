import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const [isOpen, setIsOpen] = useState(false); // 🔹 Modal state

  const [activeAlbum, setActiveAlbum] = useState(1);

  const spotifyLinks = {
    1: "https://open.spotify.com/artist/21h3ZMAgqVovSFIqUoP3jv?si=ovagSKBPQD6EMkbQxkfi-A",
    2: "https://open.spotify.com/artist/25yCmYx78hTeQu2RD7ZAvz?si=jICn1Dn8T1a4e6tuyvHF2Q",
  };

  const youtubeLink = "https://www.youtube.com/watch?v=CWYFTknRYX0";

  // 🔹 Auto-switch albums every 5s when modal is open
  useEffect(() => {
    if (!isOpen) return; // only run when modal is open

    const interval = setInterval(() => {
      setActiveAlbum((prev) => (prev === 3 ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isOpen]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1: Profile picture */}
        <div
          className="relative flex items-end grid-default-color grid-1 cursor-pointer"
          onClick={() => setIsOpen(true)} // 🔹 Open modal when clicked
        >
          <img
            src="assets/myself1.jpg"
            alt="Picture of Rune Frisch"
            className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg">
            <p className="text-white text-2xl font-bold">
              👆 Click to learn more!
            </p>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">MY HOBBIES</p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="MUSIC"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="GAMING"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "55deg", bottom: "40%", left: "70%" }}
              text="D&D"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="FANTASY NOVELS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="HORROR MOVIES"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "54deg", top: "25%", left: "2%" }}
              text="PROGRAMMING"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "10%", left: "70%" }}
              image="assets/veggie-logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "160deg", top: "70%", left: "25%" }}
              image="assets/pokeball.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-default-black grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Denmark, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            {/* <Globe /> */}
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to get in touch with me?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
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
                  className="absolute top-4 right-4 text-neutral-400 hover:text-white"
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

                {/* Responsive flex container for modal text + image */}
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Text container fills available space */}
                  <div className="flex-1">
                    <p className="mb-4 text-neutral-300">
                      Besides being passionate about programming and studying
                      multimedia design, I also have a rich background in music.
                      I've performed over 200 gigs internationally, including
                      major festivals, and some of the songs I’ve recorded with
                      various bands have reached over a million streams.
                    </p>
                    <p className="mb-4 text-neutral-300">
                      Creativity and enthusiasm drive everything I do, whether
                      it’s writing code or composing tunes, and I love blending
                      both worlds to craft unique digital experiences.
                    </p>
                    <p className="text-neutral-300">
                      Want to hear some of my music?
                    </p>
                  </div>

                  {/* Album toggle container */}
                  <div className="flex flex-col gap-4">
                    {/* Large active media display (animated) */}
                    <div className="relative w-56 h-56 mx-auto md:mx-0">
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
                              alt={
                                activeAlbum === 1
                                  ? "album cover 1"
                                  : "album cover 2"
                              }
                              className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105"
                              draggable={false}
                            />
                          </motion.a>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Toggle thumbnails */}
                    <div className="flex gap-4 justify-center md:justify-start">
                      <img
                        onClick={() => setActiveAlbum(1)}
                        src="/assets/forever-still-cover1.jpg"
                        alt="album cover 1 thumbnail"
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-opacity ${
                          activeAlbum === 1
                            ? "opacity-100 border-2 border-indigo-400"
                            : "opacity-50"
                        } hover:opacity-100`}
                      />
                      <img
                        onClick={() => setActiveAlbum(2)}
                        src="/assets/cover-art2.jpg"
                        alt="album cover 2 thumbnail"
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-opacity ${
                          activeAlbum === 2
                            ? "opacity-100 border-2 border-indigo-400"
                            : "opacity-50"
                        } hover:opacity-100`}
                      />
                      <img
                        onClick={() => setActiveAlbum(3)}
                        src="/assets/yt-cover2.webp"
                        alt="youtube drum cover thumbnail"
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-opacity ${
                          activeAlbum === 3
                            ? "opacity-100 border-2 border-red-600"
                            : "opacity-50"
                        } hover:opacity-100`}
                      />
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
