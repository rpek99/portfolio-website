import {
    FaGithubSquare, 
    FaTwitterSquare,
    FaLinkedin
} from 'react-icons/fa'

import { SiGmail, SiInstagram } from "react-icons/si";
import { useRouter } from 'next/router'

interface Props {}

const Footer = (props: Props) => {
    const router = useRouter()

    return(
        <div className='max-w-[1240px] mx-auto py-8 md:py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 text-gray-300' id="contact">
           <div className='text-center md:text-left'>
                <h1 className='w-full text-2xl md:text-3xl font-bold text-violet-600 pb-4 md:pb-6'>RPEK.</h1>
           </div>
           <div>
                <div className='flex justify-center md:justify-between lg:ml-48 my-2 gap-6 md:gap-0'>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/r%C3%BCstem-pek-277118149/">
                        <button className='hover:scale-125 duration-150 p-2'>
                            <FaLinkedin size={28} className="text-gray-300 hover:text-violet-600 transition-colors"/>
                        </button>
                    </a>   
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rustempek/">
                        <button type="button" className='hover:scale-125 duration-150 p-2'>
                            <SiInstagram size={28} className="text-gray-300 hover:text-violet-600 transition-colors"/>
                        </button>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/rustempk">
                        <button className='hover:scale-125 duration-150 p-2'>
                            <FaTwitterSquare size={28} className="text-gray-300 hover:text-violet-600 transition-colors"/>
                        </button>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/rpek99">
                        <button className='hover:scale-125 duration-150 p-2'>
                            <FaGithubSquare size={28} className="text-gray-300 hover:text-violet-600 transition-colors"/>
                        </button>
                    </a>
                    <a>
                        <button type="button" className='hover:scale-125 duration-150 p-2' onClick={() => router.push('mailto:rstmpk28@gmail.com')}>
                            <SiGmail size={28} className="text-gray-300 hover:text-violet-600 transition-colors"/>
                        </button>
                    </a>
                </div>
           </div>
           
        </div>
    )
}

export default Footer;