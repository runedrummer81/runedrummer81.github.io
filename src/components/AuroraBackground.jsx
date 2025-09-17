// AuroraBackground.jsx
import { motion } from "framer-motion";

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen -z-50 overflow-hidden bg-black">
      {/* Layer 1 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(0,255,255,0.3), transparent 70%)",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Layer 2 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 60%, rgba(255,0,255,0.25), transparent 70%)",
        }}
        animate={{
          backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Layer 3 (soft violet fog) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 80%, rgba(128,0,255,0.15), transparent 80%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
