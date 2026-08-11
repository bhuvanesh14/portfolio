import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact.jsx";
import Experiences from "./components/Experiences.jsx";
import Footer from "./components/Footer.jsx";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Tools from "./components/Tools";

function App() {
  

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Tools />
      <Experiences />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
