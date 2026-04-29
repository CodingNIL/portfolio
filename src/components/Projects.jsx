import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";

const featuredProject = {
  title: "Blockchain Certificate Verification System",

  description:
    "A blockchain-powered certificate verification platform with QR validation, secure record verification, tamper-proof authentication, and a premium modern interface focused on trust and scalability.",

  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Blockchain",
    "TailwindCSS",
  ],

  github: "https://github.com/YOUR_GITHUB",

  live: "#",

  image:
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop",
};

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden pt-32 pb-14 text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-400">
            Portfolio Showcase
          </p>

          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            A curated collection of modern web applications,
            premium UI systems, and scalable frontend experiences.
          </p>
        </motion.div>

        {/* FEATURED PROJECT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            group relative mt-24
            overflow-hidden rounded-[36px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
          "
        >
          {/* GLOW */}
          <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
            
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>
          </div>

          <div className="grid lg:grid-cols-2">
            
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="
                  h-full w-full object-cover
                  transition duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>

            {/* CONTENT */}
            <div className="relative flex flex-col justify-center p-10 md:p-14">
              
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                Featured Project
              </p>

              <h3 className="text-4xl font-bold leading-tight md:text-5xl">
                {featuredProject.title}
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                {featuredProject.description}
              </p>

              {/* TECH */}
              <div className="mt-8 flex flex-wrap gap-3">
                {featuredProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/[0.04]
                      px-4 py-2
                      text-sm text-gray-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-2xl border border-white/10
                    bg-white/[0.04]
                    px-6 py-3 text-sm font-medium
                    text-white transition-all duration-300
                    hover:bg-white hover:text-black
                  "
                >
                  GitHub
                </a>

                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-2xl bg-blue-500
                    px-6 py-3 text-sm font-medium
                    text-white transition-all duration-300
                    hover:bg-blue-400
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
                  "
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OTHER PROJECTS */}
        <div className="mt-32">
          
          <div className="mb-14 flex items-end justify-between">
            
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                Additional Work
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                More Creations
              </h3>
            </div>

            {/* NAV BUTTONS */}
            <div className="hidden gap-3 md:flex">
              
              <button
                onClick={prevSlide}
                className="
                  rounded-2xl border border-white/10
                  bg-white/[0.03]
                  p-4 text-white
                  transition-all duration-300
                  hover:border-blue-500/30
                  hover:bg-blue-500/10
                "
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={nextSlide}
                className="
                  rounded-2xl border border-white/10
                  bg-white/[0.03]
                  p-4 text-white
                  transition-all duration-300
                  hover:border-blue-500/30
                  hover:bg-blue-500/10
                "
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* SLIDESHOW */}
          <div className="relative flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              
              <motion.div
                key={current}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                  y: -30,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  group relative
                  w-full max-w-4xl
                  overflow-hidden
                  rounded-[32px]
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                "
              >
                {/* PREMIUM GLOW */}
                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                  
                  <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"></div>

                  <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl"></div>
                </div>

                <div className="grid md:grid-cols-2">
                  
                  {/* IMAGE */}
                  <div className="relative h-[320px] overflow-hidden md:h-full">
                    
                    <img
                      src={projects[current].image}
                      alt={projects[current].title}
                      className="
                        h-full w-full object-cover
                        transition duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative flex flex-col justify-center p-10">
                    
                    <div
                      className="
                        mb-5 inline-flex w-fit
                        rounded-full border border-blue-500/20
                        bg-blue-500/10
                        px-3 py-1 text-xs text-blue-300
                      "
                    >
                      UI Project
                    </div>

                    <h4
                      className="
                        text-4xl font-bold
                        tracking-tight
                        transition duration-300
                        group-hover:text-blue-300
                      "
                    >
                      {projects[current].title}
                    </h4>

                    <p className="mt-5 leading-relaxed text-gray-400">
                      {projects[current].description}
                    </p>

                    {/* TECH */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {projects[current].tech.map((tech, i) => (
                        <span
                          key={i}
                          className="
                            rounded-full
                            border border-white/10
                            bg-white/[0.04]
                            px-3 py-1 text-xs text-gray-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-10 flex gap-3">
                      
                      <a
                        href={projects[current].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          rounded-xl border border-white/10
                          bg-white/[0.04]
                          px-5 py-2.5 text-sm
                          text-gray-300 transition-all duration-300
                          hover:bg-white hover:text-black
                        "
                      >
                        GitHub
                      </a>

                      <a
                        href={projects[current].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          rounded-xl bg-blue-500
                          px-5 py-2.5 text-sm text-white
                          transition-all duration-300
                          hover:bg-blue-400
                          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
                        "
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DOTS */}
          <div className="mt-10 flex justify-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  h-2.5 rounded-full transition-all duration-300
                  ${
                    current === index
                      ? "w-10 bg-blue-400"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
