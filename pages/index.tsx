import type { NextPage } from 'next'
import { Element } from "react-scroll";
import About from '../components/about';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Projects from '../components/projects';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Element id="home" name='home'>
        <Hero />
      </Element>
      <Element id="about" name='about'>
        <About />
      </Element>
      <Element id="projects" name='projects'>
        <Projects />
      </Element>
      <Element id="contact" name="contact">
        <Footer />
      </Element>
    </div>
  )
}

export default Home
