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
    description:
      "This project was the best one I have ever made and I had an amazing group bla bla bla placeholder...",
    links: [
      {
        label: "project 1",
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
    description: "Description goes here...",
    links: [
      {
        label: "project 1",
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
    description: "Description goes here...",
    links: [
      {
        label: "Reel 1",
        url: "https://www.facebook.com/reel/1507234016945031",
      },
      {
        label: "Reel 2",
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
      <h2 className="relative z-10 text-5xl font-extrabold text-left text-white mb-12">
        My Projects
      </h2>

      <img
        src="/assets/img-bg.png"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-2xl" />

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="relative rounded-3xl overflow-hidden shadow-lg group"
            style={{ "--hue": project.hue }}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
          >
            <div className="relative w-full h-160 rounded-3xl overflow-hidden">
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

            {/* name + role */}
            <div className="absolute left-6 bottom-8 text-white z-10">
              <h2 className="text-2xl font-bold">{project.name}</h2>
              <span className="block text-sm opacity-80">{project.role}</span>
            </div>

            {/* circular clip button with glow */}
            <button
              onClick={() =>
                setOpenCard(openCard === project.id ? null : project.id)
              }
              className={`absolute top-4 right-4 w-10 h-10 rounded-full grid place-items-center cursor-pointer
                text-black z-20 overflow-hidden
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
              className={`absolute inset-0 text-white p-8 backdrop-blur-md bg-black/30 flex flex-col justify-between ${
                openCard === project.id
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
            >
              <div>
                {/* Unique paragraph */}
                <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                <p className="text-sm mb-4">{project.description}</p>
                {/* Render multiple glowing buttons */}
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
          </article>
        ))}
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
