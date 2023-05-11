import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs' 
import Logo from '../assets/logo11.png'
import {Link} from 'react-scroll'
import CV from '../assets/CV.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick  = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a2650] text-gray-300 z-10'>
        <div>
            <img src={Logo} alt='Logo' style={{width: '60px'}} />
        </div>

        {/* menu */}
        <ul className='hidden md:flex sf-menu'>
                <li>
                    <Link className='navmenu' data-text="Home" to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='navmenu' data-text='About' to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link className='navmenu' data-text='Skills' to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link className='navmenu' data-text='Work' to="experience" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link className='navmenu' data-text='Contact' to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <div className = {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex felx-col justify-center items-center'}    >
            <ul>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/prabin-dhakal7/" target="blank">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/Prabin1500" target="blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="mailto:dhakalprabin7@gmail.com">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href={CV} type="application/pdf" target="blank">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>

                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar