import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full'>
            <h1 className='text-7xl sm:text6xl font-mono my-4 text-[#ccd6f6]'>Hi,</h1>
            <h1 className='text-7xl sm:text6xl font-mono mb-4 text-[#ccd6f6]'>I'm Prabin,</h1>
            <h2 className='text-7xl sm:text-6xl font-mono text-[#ccd6f6]'>Full Stack Develper</h2>
            <p className='text-[#8892b0] font-mono py-4 max-w-[700px]'>Worked collaboratively with other students in group projects 
            as well as worked on individual coding challanges.
            Focused on building responsive full-stack web applications.
            </p>
            <div>
                <Link className='hover:font-thin' to="about" smooth={true} duration={500}>
                  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                  View Work
                  <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                  </span>
                  </button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Home