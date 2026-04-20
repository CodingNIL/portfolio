import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black text-white">
      
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-semibold text-center">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-14">
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                {project.description}
              </p>

              <p className="mt-4 text-xs text-gray-500">
                {project.tech.join(" • ")}
              </p>

              <div className="mt-6 flex gap-4">
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-sm bg-white/5 border border-white/10 text-gray-300 hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-sm bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition"
                >
                  Live Demo
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
