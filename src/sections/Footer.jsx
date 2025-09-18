const Footer = () => {
  return (
    <footer
      className="relative z-10 py-8 px-6 text-center 
        bg-black/40 backdrop-blur-md 
        border-t border-[rgba(13,217,217,0.3)]
        overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      <p
        className="text-sm text-[rgba(13,217,217,0.8)] 
        drop-shadow-[0_0_12px_rgba(13,217,217,0.7)]"
      >
        &copy; {new Date().getFullYear()} Rune Frisch, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
