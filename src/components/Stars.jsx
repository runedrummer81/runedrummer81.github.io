import { motion } from "framer-motion";

const Stars = ({ count = 80 }) => {
  // Define some star colors (white, bluish, yellowish)
  const starColors = [
    "rgba(255,255,255,1)", // pure white
    "rgba(200,220,255,1)", // bluish white
    "rgba(255,240,200,1)", // warm yellow
  ];

  // Generate random star data
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100, // percentage
    left: Math.random() * 100, // percentage
    size: Math.random() * 2 + 2, // 2px–4px (slightly larger for visibility)
    delay: Math.random() * 5, // random animation delay
    color: starColors[Math.floor(Math.random() * starColors.length)],
  }));

  return (
    <div className="absolute inset-0 -z-50 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 4}px ${star.size / 2}px ${
              star.color
            }`, // glow
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.3, 1], // twinkle scaling
          }}
          transition={{
            duration: 2 + Math.random() * 2, // 2–4s twinkle
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
