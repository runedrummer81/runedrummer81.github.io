import { section } from "motion/react-client";
import CopyEmailButton from "../components/CopyEmailButton";

const Contact = () => {
  return (
    <section id="contact" className="bg-storm">
      <div className="flex flex-col items-center justify-center min-h-[30vh] shadow-lg p-8">
        <h2 className="text-3xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-500 to-pink-500 animate-fadeIn mb-6">
          Got a project or idea? I'm all ears!
        </h2>
        <CopyEmailButton />
        <div className="flex gap-25 justify-center mt-17">
          <img
            src="/assets/logos/facebook-dark.svg"
            alt="Facebook Logo"
            className="w-20 h-20 cursor-pointer shadow-[0_0_12px_4px_rgba(139,92,246,0.7)] hover:shadow-[0_0_24px_8px_rgba(236,72,153,0.9)] transition-shadow duration-300 rounded-full"
          />
          <img
            src="/assets/logos/instagram-dark.svg"
            alt="Instagram Logo"
            className="w-20 h-20 cursor-pointer shadow-[0_0_12px_4px_rgba(139,92,246,0.7)] hover:shadow-[0_0_24px_8px_rgba(236,72,153,0.9)] transition-shadow duration-300 rounded-full"
          />
          <img
            src="/assets/logos/linkedin-dark.svg"
            alt="Linkedin Logo"
            className="w-20 h-20 cursor-pointer shadow-[0_0_12px_4px_rgba(139,92,246,0.7)] hover:shadow-[0_0_24px_8px_rgba(236,72,153,0.9)] transition-shadow duration-300 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
