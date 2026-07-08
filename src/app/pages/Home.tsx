import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Awards from "../components/Awards";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import LifestyleSlider from "../components/LifestyleSlider";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Awards />
      <Projects />
      <Skills />
      <Tools />
      <LifestyleSlider />
      <Contact />
    </div>
  );
};

export default Home;
