import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="
        relative flex min-h-screen
        items-center overflow-hidden
        px-6 -mt-6 text-white
      "
    >
      {/* BACKGROUND MESH */}
      <div className="absolute inset-0 overflow-hidden">
        
        <div className="absolute left-[10%] top-[10%] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute right-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="absolute bottom-[5%] left-[40%] h-[250px] w-[250px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div
        className="
          relative z-10 mx-auto
          grid max-w-7xl
          items-center gap-10
          lg:grid-cols-2
        "
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="-mt-8"
        >
          {/* CENTERED BADGE */}
          <div className="mb-6 flex justify-center">
            
            <div
              className="
                inline-flex items-center gap-2
                rounded-full border border-blue-500/20
                bg-white/[0.03]
                px-5 py-2 text-sm
                text-blue-300 backdrop-blur-md
              "
            >
              <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>

              Open to Software Development Internships
            </div>
          </div>

          {/* TITLE */}
          <h1
            className="
              text-center text-5xl font-bold
              leading-[0.92]
              tracking-tight
              md:text-7xl lg:text-left
            "
          >
            Designing{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-400
                via-cyan-300
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              modern digital
            </span>

            <br />

            experiences that feel premium
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-center text-lg
              leading-relaxed text-gray-400
              md:text-xl lg:mx-0 lg:text-left
            "
          >
            Full-Stack Developer crafting scalable web applications,
            smooth frontend systems, and immersive UI experiences using
            React, Firebase, TailwindCSS, and blockchain technologies.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-8 flex flex-col
              items-center gap-4
              sm:flex-row sm:justify-center
              lg:justify-start
            "
          >
            <a
              href="#projects"
              className="
                rounded-2xl bg-blue-500
                px-8 py-4 font-medium text-white
                transition-all duration-300
                hover:scale-[1.02]
                hover:bg-blue-400
                hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]
              "
            >
              View Projects
            </a>

            <a
              href="https://github.com/CodingNIL"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-2xl border border-white/10
                bg-white/[0.03]
                px-8 py-4 font-medium
                text-white backdrop-blur-md
                transition-all duration-300
                hover:border-white/20
                hover:bg-white
                hover:text-black
              "
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative hidden lg:block"
        >
          {/* OUTER GLOW */}
          <div className="absolute inset-0 rounded-[40px] bg-blue-500/10 blur-3xl"></div>

          {/* MAIN CARD */}
          <div
            className="
              relative overflow-hidden
              rounded-[36px]
              border border-white/10
              bg-white/[0.04]
              p-8 backdrop-blur-xl
            "
          >
            {/* TOP BAR */}
            <div className="flex items-center gap-2">
              
              <div className="h-3 w-3 rounded-full bg-red-400"></div>

              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>

              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>

            {/* MOCK UI */}
            <div className="mt-8 space-y-6">
              
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
                
                <p className="text-sm text-blue-300">
                  Featured Stack
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  React + Firebase
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  
                  <p className="text-sm text-gray-400">
                    Frontend
                  </p>

                  <h4 className="mt-2 text-lg font-semibold">
                    TailwindCSS
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  
                  <p className="text-sm text-gray-400">
                    Backend
                  </p>

                  <h4 className="mt-2 text-lg font-semibold">
                    Node.js
                  </h4>
                </div>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6">
                
                <p className="text-sm text-purple-300">
                  Current Focus
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Blockchain Apps
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
