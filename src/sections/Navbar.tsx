import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

interface Props {}

const Navbar = (props: Props) => {

    // const [nav, setNav] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // const handleNav = () => {
    //     setNav(!nav);
    // }


    const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
    }

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, [isMobile]);

    return (
        <div className="navbar navbar-iosfix w-full">
            <div className={`navbar ${
                (!isMobile) ? 'fixed top-0 z-50 w-full ease-in-out duration-300 inset-x-0 backdrop-blur-lg bg-primary/40' : 
                'relative z-50 w-full bg-primary/40 ease-in-out duration-300'
            }`}>
                <div className='flex justify-between items-center h-[50px] max-w-[1240px] mx-auto px-4 text-white'>
                    <button className="focus:outline-none">
                        <h1 className='w-full text-3xl font-bold text-violet-500'>RPEK.</h1>
                    </button>
                    <ul className='hidden md:flex font-poppins'>
                        <li className='p-4 rounded-md text-[18px] hover:scale-110 hover:text-violet-500 ease-in-out duration-200'>
                            <Link to='home' spy={true} smooth={true} offset={-100} duration={400}>
                                <button className="focus:outline-none">Home</button> 
                            </Link>
                        </li>
                        <li className='p-4 rounded-md text-[18px] hover:scale-110 hover:text-violet-500 ease-in-out duration-200'>
                            <Link to='about' spy={true} smooth={true} offset={-30} duration={400}>
                                <button className="focus:outline-none">About</button>
                            </Link>
                        </li>
                        <li className='p-4 rounded-md text-[18px] hover:scale-110 hover:text-violet-500 ease-in-out duration-200'>
                            <Link to='experiences' spy={true} smooth={true} offset={-50} duration={400}>
                                <button className="focus:outline-none">Experience</button>
                            </Link>
                        </li>
                        <li className='p-4 rounded-md text-[18px] hover:scale-110 hover:text-violet-500 ease-in-out duration-200'>
                            <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                                <button className="focus:outline-none">Contact</button>
                            </Link>
                        </li>
                    </ul>
                    {/* <div onClick={handleNav} className='block md:hidden'>
                        {nav ? <button className="focus:outline-none"><AiOutlineClose size={20} /></button> : <button className="focus:outline-none"><AiOutlineMenu size={20} /></button>}      
                    </div> */}
                    {/* <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-neutral-800 bg-neutral-900 ease-in-out duration-500 block md:hidden' : 'fixed left-[-100%]'}>
                        <h1 className='w-full text-3xl font-bold text-violet-600 m-4'>RPEK.</h1>
                        <ul className='p-4 font-poppins text-xl'>
                            <li className='p-4 border-b border-gray-600 hover:scale-110 hover:text-violet-500 ease-in-out duration-200'>
                                <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>
                                    <button className="focus:outline-none">Home</button>
                                </Link>
                            </li>
                            <li className='p-4 border-b border-gray-600 hover:scale-110 hover:text-violet-500 ease-in-out duration-200'>
                                <Link to='about' spy={true} smooth={true} offset={-20} duration={500}>
                                    <button className="focus:outline-none">About</button>
                                </Link>
                            </li> 
                            <li className='p-4 border-b border-gray-600 hover:scale-110 hover:text-violet-500 ease-in-out duration-200'>
                                <Link to='experiences' spy={true} smooth={true} offset={-100} duration={500}>
                                    <button className="focus:outline-none">Experience</button>
                                </Link>
                            </li>
                            <li className='p-4 hover:scale-110 hover:text-violet-500 ease-in-out duration-200'>
                                <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                                    <button className="focus:outline-none">Contact</button>
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar;