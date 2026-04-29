import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 pb-24 pt-12 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          group relative mx-auto
          max-w-5xl overflow-hidden
          rounded-[36px]
          border border-white/10
          bg-white/[0.03]
          p-12 text-center
          backdrop-blur-xl
        "
      >
        {/* PREMIUM GLOW */}
        <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
          
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            Let’s Connect
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Let’s Build Something Amazing Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            I’m currently open to Software Development Internships,
            collaborations, and exciting opportunities focused on
            building impactful digital experiences.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            
            <a
              href="mailto:nsarkar2006@gmail.com"
              className="
                rounded-2xl bg-blue-500
                px-8 py-4 font-medium text-white
                transition-all duration-300
                hover:bg-blue-400
                hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]
              "
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/niladri-sarkar-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-2xl border border-white/10
                bg-white/[0.03]
                px-8 py-4 font-medium text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white
                hover:text-black
              "
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
