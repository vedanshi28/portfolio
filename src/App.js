import './App.css';
import  NavBar  from './components/NavBar';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Certificates from './components/Certificates';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Education/>
      <Certificates />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
