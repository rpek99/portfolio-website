import { useEffect, useRef } from "react";
import {Link} from 'react-scroll'

const HeroText = () => {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && typedRef.current) {
            const Typed = require('typed.js');
            const typed = new Typed(typedRef.current, {
                strings: [
                    'Scalable', 
                    'Secure', 
                    'Reliable', 
                    'Real-time', 
                    'Resilient', 
                    'Automated', 
                    'Modular',  
                    'Clean'
                ],
                typeSpeed: 120,
                backSpeed: 140,
                loop: true,
                showCursor: false
            });

            return () => {
                typed.destroy();
            };
        }
    }, []);

  return (
    <div className='max-w-[810px] mt-[-86px] w-full h-screen mx-auto text-left flex flex-col justify-center sm: px-2'>
        <p className='text-violet-500 font-bold text-2xl my-2 mt-16'>Hi, I&apos;m Rustem Pek</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>I&apos;m a Full Stack Developer</h1>
        <div className='flex items-center py-2'>
            <p className='md:h-24 md:text-5xl sx:text-4xl text-xl font-bold py-4'>
                I build products that are
            </p>
            <span
                ref={typedRef}
                className='md:h-16 md:text-5xl sx:text-4xl text-xl font-bold md:pl-4 pl-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'
            />
        </div>
        <p className='md:text-2xl text-xl font-poppins text-neutral-400'>
            Built a blockchain-powered Web3 real estate trading app that ensured reliable and transparent digital property exchanges, developed as my capstone project.
        </p>
   </div>
  );
};

export default HeroText;
