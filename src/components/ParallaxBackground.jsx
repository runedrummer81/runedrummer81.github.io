import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 ">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />

        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
        <div
          className="relative h-screen bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/your-image.jpg')" }}
        ></div>
        {/* -------------------------
            2. Thin cyan pulsing line
        ------------------------- */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center pointer-events-none z-20">
          <div className="w-3/4 h-1 bg-cyan-400/40 animate-pulse shadow-[0_0_16px_rgba(13,217,217,0.5)] rounded" />
        </div>

        {/* Transmission box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute bottom-25 left-1/2 transform -translate-x-1/2 px-6 py-4 border border-[rgba(13,217,217,0.6)] rounded-lg
             text-cyan-400 text-xl md:text-2xl font-mono tracking-wider
             bg-black/20 backdrop-blur-md shadow-[0_0_20px_rgba(13,217,217,0.7)]
             z-20 flex items-center justify-center space-x-3 overflow-hidden w-max
             whitespace-nowrap"
        >
          {/* Glitching pulse dot */}
          <span className="animate-pulse">⬤</span>

          {/* Glitch text */}
          <span className="relative">
            <span className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-70 animate-[glitch1_1s_infinite]">
              Transmission incoming — scroll
            </span>
            <span className="absolute top-0 left-0 w-full h-full text-cyan-300 opacity-50 animate-[glitch2_1s_infinite]">
              Transmission incoming — scroll
            </span>
            <span className="relative">Transmission incoming — scroll</span>
          </span>

          {/* Optional flicker scanlines */}
          <span className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(13,217,217,0.05) 2px,rgba(13,217,217,0.05) 4px)] animate-[scanlines_1s_linear_infinite]" />
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
