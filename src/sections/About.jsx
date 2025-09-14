import { useRef } from "react";
import Card from "../components/Card";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="coding-example"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, my name is Rune Frisch</p>
            <p className="subtext">
              PLACEHOLDER TEXT: over the last 4 years, I've developed my blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              and web applications
            </p>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
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
        <div className="grid-default-black grid-3"></div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4"></div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
