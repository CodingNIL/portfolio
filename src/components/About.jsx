import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black text-white">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        
        <h2 className="text-3xl font-semibold">
          About Me
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          I am <span className="text-white font-medium">Niladri Sarkar</span>, a developer focused on building clean, scalable, and user-focused web applications.

          <br /><br />

          Instead of only learning theory, I actively build real projects using React, Tailwind, and Firebase — working on features like authentication systems and responsive interfaces.

          <br /><br />

          I’m currently improving my problem-solving skills through Data Structures & Algorithms while continuing to build real-world applications.

          <br /><br />

          My goal is to build impactful products that solve real problems and deliver smooth user experiences.
        </p>

      </motion.div>

    </section>
  );
};

export default About;
