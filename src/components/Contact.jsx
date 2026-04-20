import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-black text-white text-center">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        
        <h2 className="text-3xl md:text-4xl font-semibold">
          Let’s Build Something Together
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          I’m currently open to Software Development Internships and collaborations.
          If you're working on something interesting or hiring, feel free to reach out.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          
          <a
            href="mailto:nsarkar2006@gmail.com"
            className="bg-blue-500 px-6 py-3 rounded-xl font-medium
            hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
            transition duration-300"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/niladri-sarkar-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 px-6 py-3 rounded-xl font-medium
            hover:border-white hover:bg-white hover:text-black
            transition duration-300"
          >
            LinkedIn
          </a>

        </div>

      </motion.div>

    </section>
  );
};

export default Contact;
