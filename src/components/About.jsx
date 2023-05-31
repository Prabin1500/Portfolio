import React from 'react'
import { FaCss3, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';

const About = () => {
    return (
      <div name='about' className='w-full bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col  pb-80 px-12 py-24 justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-left pb-8 pl-4'>
              <p className='text-6xl font-mono inline text-[#08FDD8]'>
                About Me
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='font-mono'>
                <p>I am very passionate and ambitious front-end developer looking for a role in 
                  established IT company with the opportunity to work with latest technologies on challenging 
                  and diverse projects.
                </p>
                <br />
                <p>Coding, logical thinking and reading are the things that I like most.</p>
              </div>
              <div className='stage-cube-cont'>
                <div className='cubespinner'>
                  <div className='face1'>
                    <FaNodeJs color='#DD0031' />
                  </div>
                  
                  <div className='face2'>
                    <FaHtml5 color='#F06529' />
                  </div>

                  <div className='face3'>
                    <FaGithub color='#EC4D28' />
                  </div>

                  <div className='face4'>
                    <FaJsSquare color='#EFD81D'/>
                  </div>

                  <div className='face5'>
                    <FaCss3 color='#28a4d9'/>
                  </div>

                  <div className='face6'>
                    <FaReact color='#5ed4f4'/>
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>
    );
  };

export default About