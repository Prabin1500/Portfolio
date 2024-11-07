import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/Java.png';
import C from '../assets/C++-Logo.png';
import P from '../assets/Python.png';
import sql from '../assets/SQL.png';
import git from '../assets/Git.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-12 p-4 flex flex-col justify-center w-full h-full '>
          <div >
              <p className='text-6xl font-mono inline text-[#08FDD8]'>Skills</p>
              <p className='py-4 font-mono'>These are the technologies I've worked with.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={C} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={P} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={sql} alt="HTML icon" />
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#384c63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={git} alt="HTML icon" />
                  <p className='my-4'>Git</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;