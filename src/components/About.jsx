import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 text-white">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          mx-auto max-w-4xl rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          p-10 md:p-14
          backdrop-blur-md
        "
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
          About Me
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Building products with clean design and real impact.
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-gray-400">
          I am{" "}
          <span className="font-medium text-white">
            Niladri Sarkar
          </span>
          , a developer focused on building modern, scalable, and
          user-focused web applications.

          <br />
          <br />

          Instead of only learning theory, I actively build real-world
          projects using React, TailwindCSS, Firebase, and modern frontend
          technologies.

          <br />
          <br />

          I enjoy crafting premium UI experiences, responsive systems, and
          applications that feel smooth, fast, and intuitive.

          <br />
          <br />

          Currently, I’m strengthening my problem-solving skills through
          Data Structures & Algorithms while continuing to explore full-stack
          development and blockchain applications.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
