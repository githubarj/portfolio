import './App.css'
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header'
import Home from './Components/home/Home'
import Qualification from './Components/qualification/Qualification';
import Scrollup from './Components/scrollup/Scrollup';
import Services from './Components/services/Services';
import Skills from './Components/skills/Skills';
import Testimonials from './Components/testimonials/Testimonials';
import Work from './Components/work/Work';


function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work/>
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}

export default App
