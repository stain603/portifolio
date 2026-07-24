import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/ui/footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";

function App() {
  return (
    <>
      <PortfolioNavbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
