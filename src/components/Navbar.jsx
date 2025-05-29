import React, { useEffect, useRef, useState } from 'react';
import arrowIcon from '../assets/arrow-icon.png';
import arrow_icon_dark from '../assets/arrow-icon-dark.png';
import bgheader from '../assets/header-bg-color.png';
import moonIcon from '../assets/moon_icon.png';
import sunIcon from '../assets/sun_icon.png';
import menuWhite from '../assets/menu-white.png';
import menuBlack from '../assets/menu-black.png';
import closeWhite from '../assets/close-white.png';
import closeBlack from '../assets/close-black.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs' 
import resume from '../assets/Resume-prabin.pdf';
import { Link } from 'react-scroll';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
    const handleScroll = () => {
        const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
        const offset = 100; // height of navbar + some buffer

        for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
            setActiveSection(id);
            break;
            }
        }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load

    return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect (() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50){
                setIsScroll(true)
            }else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <img src={bgheader} alt='header-bg' className='w-full' />
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[4%] py-4 flex items-center justify-between z-50 
        ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
                <a href='#' className='cursor-pointer'>
                    <svg 
                        width="180" 
                        height="60" 
                        viewBox="0 0 300 80" 
                        className="name-svg"
                        style={{ overflow: 'visible' }}
                    >
                        <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            style={{
                                fontFamily: "'Allura', cursive",
                                fontSize: '4rem',
                                fill: isDarkMode ? '#ffffff' : '#2F4F4F',
                                fontWeight: 'normal',
                                letterSpacing: '1px',
                                transition: 'fill 0.3s ease'
                            }}
                        >
                            Prabin.
                        </text>
                    </svg>
                </a>
        <ul className={`hidden md:flex items-center gap-2 lg:gap-6 rounded-full 
            px-6 py-3 ${isScroll ? '' : 'bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
            {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;
                return (
                    <li key={item}>
                        <Link
                            to={`${id}`}
                            smooth={true} 
                            duration={500}
                            className={`font-Ovo px-3 py-1 rounded-md transition-all duration-300
                                ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4' : 'hover:text-blue-500 dark:hover:text-blue-400 hover:scale-105'}`}
                        >
                            {item}
                        </Link>
                    </li>
                );
            })}
        </ul>
        <div className='flex items-center gap-4'>
            <button onClick={() => setIsDarkMode(prev => !prev)}>
                <img src={isDarkMode ? sunIcon : moonIcon}  alt='MoonIcon' className='w-6'/>
            </button>
            <a href='#contact' className='hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full ml-4 font-Ovo bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl'>
                Contact 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </a>
            <button className='block md:hidden ml-3' onClick={openMenu}>
                <img src={isDarkMode ? menuWhite : menuBlack}  alt='HamburgerMenu' className='w-6'/>
            </button>
        </div>

        {/* -- ----- Mobile Menu ----- -- */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-2 py-20 px-6 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/95 dark:bg-darkTheme/95 backdrop-blur-lg transition-transform duration-500 ease-in-out'>
            <button onClick={closeMenu} className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                    <a 
                        onClick={closeMenu}
                        href={`#${item.toLowerCase()}`}
                        className="block px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-Ovo"
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
        </nav>
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
            <ul className='space-y-0.5'>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 rounded-lg'>
                    <a className='flex justify-between items-center w-full text-white font-Ovo gap-2'
                    href="https://www.linkedin.com/in/prabin-dhakal7/" target="_blank">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-lg'>
                    <a className='flex justify-between items-center w-full text-white  font-Ovo gap-2'
                    href="https://github.com/Prabin1500" target="_blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-lg'>
                    <a className='flex justify-between items-center w-full text-white font-Ovo'
                    href={resume}  target="_blank" rel="noopener noreferrer">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>

                </li>
            </ul>
            
        </div>
    </>
  )
}

export default Navbar
