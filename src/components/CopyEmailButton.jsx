import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DownloadCVButton = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    // Replace with the actual path to your soft-skill CV PDF
    const link = document.createElement("a");
    link.href = "/assets/soft-skill-cv.pdf";
    link.download = "Rune-Frisch-Soft-Skill-CV.pdf";
    link.click();

    setDownloaded(true);

    setTimeout(() => {
      setDownloaded(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[14rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {downloaded ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloaded"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
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
            className="flex items-center justify-center gap-2"
            key="download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
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
