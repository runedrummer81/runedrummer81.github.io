import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { video } from "motion/react-client";

const projects = [
  {
    id: 1,
    name: "Moderkagens Mission",
    role: "Exam-project 2. semester",
    video: "/assets/project-showcase.mp4",
    img: "/assets/moderkagens-mission-forside.png",
    color: "cyan",
    hue: 185,
    description: (
      <>
        <p className="mb-4 text-1xl leading-relaxed text-white dark:text-gray-200">
          For our exam project, we worked with{" "}
          <span className="font-semibold">Steeno Museum</span> in Aarhus on
          their exhibition <span className="italic">Den Oversete Krop</span>,
          aiming to engage a younger audience.
        </p>

        <p className="mb-4 text-1xl leading-relaxed text-white dark:text-gray-200">
          We created <span className="font-semibold">Moderkagens Mission</span>,
          a game where players become the placenta and complete three levels:
          choosing nourishment, excreting waste, and protecting the baby from
          infections.
        </p>

        <p className="mb-4 text-1xl leading-relaxed text-white dark:text-gray-200">
          A scoreboard shows performance, combining learning with fun,
          interactive storytelling. Designed for{" "}
          <span className="font-semibold">1600x1000 screens</span>.
        </p>
      </>
    ),
    links: [
      {
        label: "View Project",
        url: "https://moderkagens-mission.jvalbjorn.dk/",
      },
    ],
  },
  {
    id: 2,
    name: "Responsive web",
    role: "non-exam project 1. semester",
    img: "/assets/brudekjoler-project.png",
    video: "/assets/brudekjole-project.mp4",
    color: "cyan",
    hue: 185,
    description: (
      <>
        <p className="mb-4 text-lg leading-relaxed text-white dark:text-gray-200">
          This project introduced me to the fundamentals of{" "}
          <span className="font-semibold">Responsive Web Design</span>. At this
          early stage of my studies, I focused on adapting layouts to different
          screen sizes using just{" "}
          <span className="font-semibold">HTML and CSS</span>.
        </p>

        <p className="mb-4 text-lg leading-relaxed text-white dark:text-gray-200">
          I learned how to structure content flexibly and create designs that
          work across devices, laying the foundation for more advanced web
          development projects later in my education.
        </p>
      </>
    ),
    links: [
      {
        label: "View Project",
        url: "https://responsiveweb.luciskroder.dk/index.html",
      },
    ],
  },
  {
    id: 3,
    name: "SoMe",
    role: "For the band Svartsot",
    video: "/assets/svartsot-reel2.mp4",
    img: "/assets/some-cover.png",
    color: "cyan",
    hue: 185,
    description: (
      <>
        <p className="mb-4 text-lg leading-relaxed text-white dark:text-gray-200">
          I've been creating social media content for the band{" "}
          <span className="font-semibold">Svartsot</span>, including editing
          studio reels, concert highlights, and behind-the-scenes videos from
          their latest album recordings.
        </p>

        <p className="mb-4 text-lg leading-relaxed text-white dark:text-gray-200">
          My work focuses on crafting engaging visuals that capture the energy
          of the band’s performances and studio sessions, helping them share
          their story and connect with fans online.
        </p>
      </>
    ),
    links: [
      {
        label: "Example 1",
        url: "https://www.facebook.com/reel/1507234016945031",
      },
      {
        label: "Example 2",
        url: "https://www.facebook.com/reel/1411666526562408",
      },
    ],
  },
];

const Projects = () => {
  const [openCard, setOpenCard] = useState(null);
  const videoRefs = useRef({}); // store refs for each video

  const handleMouseEnter = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch(() => {}); // autoPlay might require this for some browsers
    }
  };

  const handleMouseLeave = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="projects" className="relative pt-10 pb-20">
      <h2 className="relative z-10 text-5xl font-extrabold text-left bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 drop-shadow-[0_0_20px_rgba(13,217,217,0.8)] mb-12 max-w-6xl mx-auto px-6">
        My Projects
      </h2>

      <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-cyan-300/20 via-purple-300/20 to-pink-300/20 pointer-events-none animate-pulse-slow"></div>
      {/* 3 project cards */}
      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="relative rounded-3xl overflow-hidden shadow-lg group"
            style={{ "--hue": project.hue }}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-96 sm:h-160 rounded-3xl overflow-hidden">
              {/* project image */}
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-opacity duration-500 sm:group-hover:opacity-0"
              />

              {/* Video */}
              {project.video && (
                <video
                  ref={(el) => (videoRefs.current[project.id] = el)}
                  src={project.video}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 hidden sm:block"
                  muted
                  loop
                  playsInline
                />
              )}
            </div>

            {/* shadow gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />

            {/* bottom title + role (hide when info panel is open) */}
            <div
              className={`absolute left-6 bottom-8 text-white z-10 transition-opacity duration-300 ${
                openCard === project.id ? "opacity-0" : "opacity-100"
              }`}
            >
              <h2 className="text-2xl font-bold">{project.name}</h2>
              <span className="block text-sm opacity-80">{project.role}</span>
            </div>

            {/* circular clip button with glow */}
            <button
              onClick={() =>
                setOpenCard(openCard === project.id ? null : project.id)
              }
              className={`absolute top-4 right-4 w-10 h-10 rounded-full grid place-items-center cursor-pointer
        text-black z-10 overflow-hidden
        transition-transform duration-500
        ${openCard === project.id ? "-rotate-45" : ""}
        bg-[hsl(var(--hue),90%,50%)]
        shadow-[0_0_16px_4px_hsl(var(--hue),90%,50%)]
        animate-[pulse-glow_2s_ease-in-out_infinite]
      `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z" />
              </svg>
            </button>

            {/* info panel with animation */}
            <motion.div
              initial={false}
              animate={{
                clipPath:
                  openCard === project.id
                    ? "circle(150% at 50% 50%)"
                    : "circle(8px at 88% 9%)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute inset-0 text-white p-8 backdrop-blur-md bg-black/30 flex flex-col justify-between overflow-y-auto max-h-full ${
                openCard === project.id
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
            >
              <div>
                {/* info panel title (always visible) */}
                <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                <div className="text-sm sm:text-base md:text-base mb-4">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.links?.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-md font-semibold text-black
                bg-[hsl(var(--hue),90%,50%)]
                shadow-[0_0_16px_4px_hsl(var(--hue),90%,50%)]
                transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_24px_8px_hsl(var(--hue),90%,50%)]
              `}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>

      {/* Chef Claude Project Showcase */}
      <div className="relative mt-20 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 3D tilted video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="relative"
        >
          <div style={{ perspective: "2000px" }}>
            <div
              style={{ transform: "rotateY(30deg) rotateX(20deg) scale(0.7)" }}
              className="rounded-3xl shadow-2xl overflow-hidden
                 w-full max-w-md md:max-w-lg mx-auto"
            >
              <video
                src="/assets/improved-chef-claude.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Text description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Chef Claude - Scrimba</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Chef-Claude is a recipe generator I built as part of Scrimba's React
            State course within the Learn React program. The project focuses on
            creating a clean, user-friendly interface while exploring API
            handling and React state management.
          </p>
          <ul className="list-disc list-inside space-y-1 text-lg pb-8">
            <li>
              Hands-on <strong>React state</strong> practice
            </li>
            <li>
              <strong>API fetching</strong> and handling
            </li>
            <li>
              Clean, <strong>user-friendly UI</strong>
            </li>
            <li>
              Blending <strong>design with functionality</strong>
            </li>
          </ul>
          <a
            href="https://scrimba.com/learn-react-c0e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-black
        bg-cyan-400 shadow-[0_0_16px_4px_rgba(34,211,238,0.7)]
        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_24px_8px_rgba(34,211,238,0.7)]"
          >
            View Course
          </a>
        </motion.div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 16px 4px hsl(var(--hue),90%,50%); }
            50% { box-shadow: 0 0 24px 8px hsl(var(--hue),90%,50%); }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
