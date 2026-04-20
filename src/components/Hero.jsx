import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-black relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="w-full h-full 
          bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.3),transparent_40%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl relative z-10"
      >

        <div className="inline-block mb-6 px-4 py-1.5 rounded-full 
        bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
          Open to Software Development Internships
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          I build{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            real-world web applications
          </span>
          <br />
          that people actually use
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Focused on React, Firebase, and modern frontend tools — building scalable, clean, and user-friendly products.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          
          <a
            href="#projects"
            className="bg-blue-500 px-6 py-3 rounded-xl font-medium
            hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            transition duration-300"
          >
            View My Work
          </a>

          <a
            href="https://github.com/CodingNIL"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 px-6 py-3 rounded-xl font-medium
            hover:border-white hover:bg-white hover:text-black
            transition duration-300"
          >
            GitHub
          </a>

        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
