import type { NextPage } from 'next'
import { Element } from "react-scroll";
import Navbar from '@/sections/Navbar';
import About from '@/sections/About';
import Footer from '@/sections/Footer';
import Projects from '@/sections/Projects';
import Hero from '@/sections/Hero';
import Experiences from '@/sections/Experiences';
import Head from 'next/head'
import dynamic from "next/dynamic";
// const Hero = dynamic(() => import("@/sections/Hero"), { ssr: false });


const Home: NextPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Head>
        <title>Rustem Pek</title>
      </Head>
      <div className='container mx-auto flex-1 max-w-7xl'>
        <Navbar />
        <Element id="home" name='home'>
          <Hero />
        </Element>
        <Element id="about" name='about'>
          <About />
        </Element>
        <Element id="experiences" name='experiences'>
          <Experiences />
        </Element>
        {/* <Element id="projects" name='projects'>
          <Projects />
        </Element> */}
      </div>
      <Element id="contact" name="contact">
        <Footer />
      </Element>
    </div>
  )
}

export default Home
