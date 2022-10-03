import {
    FaGithubSquare, 
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin
} from 'react-icons/fa'

import { SiGmail } from "react-icons/si";
import { useRouter } from 'next/router'

interface Props {}

const Footer = (props: Props) => {
    const router = useRouter()

    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-300' id="contact">
           <div>
                <h1 className='w-full text-3xl font-bold text-violet-600 pb-6'>RPEK.</h1>
           </div>
           <div>
                <div className='flex justify-between lg:ml-48 my-2'>
                    <a target="_blank" href="https://www.linkedin.com/in/r%C3%BCstem-pek-277118149/">
                        <button className='hover:scale-125 duration-150'>
                            <FaLinkedin size={30}/>
                        </button>
                    </a>   
                    <a target="_blank" href="https://twitter.com/rustempk">
                        <button className='hover:scale-125 duration-150'>
                            <FaTwitterSquare size={30}/>
                        </button>
                    </a>
                    <a target="_blank" href="https://github.com/rpek99">
                        <button className='hover:scale-125 duration-150'>
                            <FaGithubSquare size={30}/>
                        </button>
                    </a>
                    <a>
                        <button type="button" className='hover:scale-125 duration-150' onClick={() => router.push('mailto:rstmpk28@gmail.com')}>
                            <SiGmail size={30}/>
                        </button>
                    </a>
                </div>
           </div>
           
        </div>
    )
}

export default Footer;