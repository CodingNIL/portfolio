import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      
      {/* GLOBAL PREMIUM BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        
        {/* MAIN GRADIENT LAYER */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.14),transparent_35%)]
          "
        />

        {/* BLUE ORB */}
        <div
          className="
            absolute
            left-[-10%]
            top-[0%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-blue-500/20
            blur-[140px]
          "
        />

        {/* PURPLE ORB */}
        <div
          className="
            absolute
            right-[-10%]
            top-[20%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-purple-500/20
            blur-[140px]
          "
        />

        {/* CYAN ORB */}
        <div
          className="
            absolute
            bottom-[-15%]
            left-[20%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-cyan-400/15
            blur-[140px]
          "
        />

        {/* EXTRA SOFT GLOW */}
        <div
          className="
            absolute
            left-[40%]
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-400/10
            blur-[120px]
          "
        />

        {/* GRID OVERLAY */}
        <div
          className="
            absolute inset-0
            opacity-[0.04]
            [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      {/* CONTENT */}
      <Navbar />

      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
