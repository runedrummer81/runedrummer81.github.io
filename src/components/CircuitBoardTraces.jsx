import { motion } from "framer-motion";

const CircuitBoardTraces = () => {
  const randomAnim = (length, reverse = false) => ({
    strokeDasharray: length,
    strokeDashoffset: reverse ? [0, length] : [length, 0],
    transition: {
      duration: 3 + Math.random() * 4, // 3–7s
      delay: Math.random() * 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  });

  return (
    <div className="absolute inset-0 -z-50 overflow-hidden bg-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        viewBox="0 0 1000 800"
      >
        <defs>
          {/* Neon glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background faint grid */}
        {Array.from({ length: 20 }).map((_, i) => (
          <path
            key={`v-${i}`}
            d={`M ${i * 50} 0 V 800`}
            stroke="rgba(0,255,200,0.07)"
            strokeWidth="1"
            fill="none"
          />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <path
            key={`h-${i}`}
            d={`M 0 ${i * 50} H 1000`}
            stroke="rgba(255,0,200,0.05)"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Animated glowing traces */}
        <motion.path
          d="M 150 100 V 300 H 400 V 600"
          stroke="#00fff7"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          animate={randomAnim(600)}
        />
        <motion.path
          d="M 200 700 L 500 400 L 800 600"
          stroke="#ff00ff"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          animate={randomAnim(700, true)}
        />
        <motion.path
          d="M 600 100 V 250 H 500 V 400 H 650 V 700"
          stroke="#39ff14"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          animate={randomAnim(800)}
        />
        <motion.path
          d="M 50 500 H 300 V 650 H 900"
          stroke="#00fff7"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          animate={randomAnim(850, true)}
        />
        <motion.path
          d="M 700 200 V 350 H 850 V 500 H 950"
          stroke="#ff00ff"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          animate={randomAnim(600)}
        />

        {/* Pulsing nodes at intersections */}
        {[
          { x: 150, y: 100, color: "#00fff7" },
          { x: 500, y: 400, color: "#ff00ff" },
          { x: 650, y: 700, color: "#39ff14" },
          { x: 300, y: 650, color: "#00fff7" },
          { x: 850, y: 500, color: "#ff00ff" },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="6"
            fill={node.color}
            filter="url(#glow)"
            animate={{
              opacity: [0.4, 1, 0.4],
              r: [4, 7, 4],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default CircuitBoardTraces;
