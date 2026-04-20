import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
