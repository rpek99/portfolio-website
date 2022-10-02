import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

interface Props {}

const Navbar = (props: Props) => {

    const [nav, setNav] = useState(false);
    const [navColor, setNavColor] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const changeNavbarBg = () => {
        if(window.scrollY >= 80){
            setNavColor(true)
        }
        else {
            setNavColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNavbarBg);
      }, []);


    return (
        <div className={navColor ? 'sticky top-0 z-50 w-full bg-neutral-800 ease-in-out duration-300' : 'sticky top-0 z-50 w-full bg-transparent ease-in-out duration-300'}>
            <div className='flex justify-between items-center h-[70px] max-w-[1240px] mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-violet-500'>RPEK.</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4 rounded-md text-[18px] hover:scale-110 hover:text-violet-400 '>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>
                            <button >Home</button> 
                        </Link>
                    </li>
                    <li className='p-4 rounded-md text-[18px] hover:scale-110 hover:text-violet-400'>
                        <Link to='about' spy={true} smooth={true} offset={-150} duration={600}>
                            <button>About</button>
                        </Link>
                    </li>
                    <li className='p-4 rounded-md text-[18px] hover:scale-110 hover:text-violet-400'>
                        <Link to='projects' spy={true} smooth={true} offset={-50} duration={800}>
                            <button>Projects</button>
                        </Link>
                    </li>
                    <li className='p-4 rounded-md text-[18px] hover:scale-110 hover:text-violet-400'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={1500}>
                            <button>Contact</button>
                        </Link>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <button><AiOutlineClose size={20} /></button> : <button><AiOutlineMenu size={20} /></button>}      
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-neutral-800 bg-neutral-900 ease-in-out duration-500 block md:hidden' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-violet-600 m-4'>RPEK.</h1>
                    <ul className='p-4 font-bold'>
                        <li className='p-4 border-b border-gray-600 hover:scale-110 hover:text-violet-400'>
                            <Link to='home' spy={true} smooth={true} offset={-100} duration={1000}>
                                <button>Home</button>
                            </Link>
                        </li>
                        <li className='p-4 border-b border-gray-600 hover:scale-110 hover:text-violet-400'>
                            <Link to='about' spy={true} smooth={true} offset={-20} duration={1000}>
                                <button>About</button>
                            </Link>
                        </li> 
                        <li className='p-4 border-b border-gray-600 hover:scale-110 hover:text-violet-400'>
                            <Link to='projects' spy={true} smooth={true} offset={-100} duration={1000}>
                                <button>Projects</button>
                            </Link>
                        </li>
                        <li className='p-4 hover:scale-110 hover:text-violet-400'>
                            <Link to='contact' spy={true} smooth={true} offset={-100} duration={1000}>
                                <button >Contact</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;