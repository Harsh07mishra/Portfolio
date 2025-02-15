import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsCanvas from "./components/Stars";
import Experience from "./components/Experience";
import CanvasCursor from "./components/CanvasCursor";

function App() {
  return (
    <ThemeProvider>
      {/* Add the CanvasCursor here so it’s available on every page */}
      <CanvasCursor />
      <div className="relative w-screen h-screen z-10">
        <Home />
        <StarsCanvas />
      </div>
      <div className="relative z-0 body">
        <Navbar />
        <About />
        <Experience />
        <TechStack />
        <Service />
        <Work />
        <div className="relative mt-24 pb-28">{/* <Testimonial /> */}</div>
        <div className="contact mb-80">
          <Contact />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
