import React, {useState, useEffect} from 'react'
import Typed from 'react-typed'
import {Link} from 'react-scroll'

interface Props {}

const Hero = (props: Props) => {

    return(
        <div className='text-white p-2' id="home">
           <div className='max-w-[800px] mt-[-86px] w-full h-screen mx-auto text-left flex flex-col justify-center sm: px-2'>
                <p className='text-violet-500 font-bold text-2xl my-2 mt-16'>Hi, I'm Rustem Pek</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>I'm a Full Stack Developer</h1>
                <div className='flex items-center py-2'>
                    <p className='md:h-24 md:text-5xl sx:text-4xl text-xl font-bold py-4'>
                        I have experience in
                    </p>
                    <Typed
                        className='md:h-16 md:text-5xl sx:text-4xl text-xl font-bold md:pl-4 pl-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'
                        strings={['Spring', 'React JS', 'MongoDB', 'PostgreSql', 'Solidity']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop                    
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-neutral-400'>Developed a Real Estate trading web application using Blockchain technology as a graduation project.</p>
                <Link to='projects' spy={true} smooth={true} offset={-50} duration={1000}>
                    <button className='bg-violet-700 md:w-[200px] w-[160px] rounded-md font-medium my-8 py-3 text-violet-100 hover:scale-105 duration-200 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        View Projects
                    </button>
                </Link>
           </div>
        </div>
    )
}

export default Hero;