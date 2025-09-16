import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DownloadCVButton = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/soft-skill-cv.pdf";
    link.download = "Rune-Frisch-Soft-Skill-CV.pdf";
    link.click();

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileTap={{ scale: 1.05 }}
      className="cursor-pointer
    relative w-[14rem] px-4 py-3 rounded-full font-semibold text-black
    bg-[hsl(185,90%,50%)]
    shadow-[0_0_16px_4px_hsl(185,90%,50%)]
    animate-pulse-glow
    transition-transform duration-300 hover:scale-105
    flex items-center justify-center gap-2
  "
    >
      <AnimatePresence mode="wait">
        {downloaded ? (
          <motion.p
            key="downloaded"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center gap-2"
          >
            <img
              src="assets/download-file-done.svg"
              className="w-5"
              alt="download successful icon"
            />
            Soft-Skill CV Downloaded
          </motion.p>
        ) : (
          <motion.p
            key="download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <img
              src="assets/download-file.svg"
              className="w-5"
              alt="download icon"
            />
            Download Soft-Skill CV
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DownloadCVButton;
