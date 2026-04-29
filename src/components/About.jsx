import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cpu,
  Server,
  Boxes,
  Layers,
  Globe,
  Flame,
} from "lucide-react";

const icons = [
  Code2,
  Server,
  Database,
  Flame,
  Cpu,
  Globe,
  Layers,
  Boxes,
];

// 🔥 CLEAN RESPONSIVE RADIUS (NO WINDOW FLICKER)
const getRadius = () => {
  if (typeof window === "undefined") return 140;

  const w = window.innerWidth;

  if (w < 640) return 105;   // mobile
  if (w < 1024) return 140;  // tablet
  return 185;               // desktop (FIXED PREMIUM SPACING)
};

const stats = [
  { value: "03+", label: "Projects Built" },
  { value: "Full-Stack", label: "Development" },
  { value: "DSA", label: "Problem Solving" },
  { value: "Scalable", label: "Systems" },
];

const About = () => {
  const radius = getRadius();

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute left-[10%] top-[15%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-[5%] top-[30%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="mt-12 space-y-7 text-base md:text-lg leading-relaxed text-gray-400">
              <p>
                I’m{" "}
                <span className="text-white font-medium">
                  Niladri Sarkar
                </span>
                , a software developer focused on building scalable systems and
                modern applications.
              </p>

              <p>
                I work across frontend, backend, APIs, databases, and system design
                with a strong focus on real-world architecture and performance.
              </p>

              <p>
                My goal is to build reliable, maintainable, and efficient software
                systems that solve meaningful problems.
              </p>
            </div>
          </motion.div>

          {/* RIGHT ORBIT */}
          <div className="relative mx-auto h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]">

            {/* CENTER */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-blue-300">
                  Technologies
                </p>
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">
                  & Tools
                </h3>
              </div>
            </div>

            {/* ORBIT WRAPPER */}
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">

              {icons.map((Icon, i) => {
                const angle = (i / icons.length) * (2 * Math.PI);

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="
                        flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center
                        rounded-full border border-white/10
                        bg-white/[0.04] text-blue-300
                        backdrop-blur-xl
                        transition
                        will-change-transform
                      "
                    >
                      <Icon size={20} />
                    </motion.div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-20 grid gap-5 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
              </div>

              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  {s.label}
                </p>
                <h3 className="mt-4 text-3xl font-bold text-white">
                  {s.value}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
