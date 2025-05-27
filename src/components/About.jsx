import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaCss3, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';
import code_icon from '../assets/code-icon.png';
import code_icon_dark from '../assets/code-icon-dark.png';

const About = ({ isDarkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisibleParagraphs = 2;

  const aboutParagraphs = [
    "I'm Prabin Dhakal, a developer with a background in mechanical engineering and a strong passion for technology and software development. After transitioning into IT, I've worked on a wide range of academic and personal projects involving web development, mobile apps, and database systems.",
    "Currently, I'm completing my Bachelor's degree in Information Technology at Metropolia University of Applied Sciences. I've built applications using Java, Kotlin, React, JavaScript, HTML/CSS, SQL, and tools like Firebase, Node.js, and Git.",
    "During my internship at Kivapix, I contributed to frontend development using React and TypeScript, and also collaborated with a startup team to bring real ideas to life. I've worked in a professional lab environment with Microsoft HoloLens, which sharpened my teamwork and quality control skills.",
    "I'm always looking to grow, whether it's through learning new technologies or building products that make a difference. I'm excited to find opportunities where I can contribute to meaningful projects, keep learning, and grow as a developer."
  ];

  const visibleParagraphs = isExpanded ? aboutParagraphs : aboutParagraphs.slice(0, maxVisibleParagraphs);

  return (
    <motion.section 
      id='about' 
      className='w-full px-5 md:px-[8%] lg:px-[12%] py-16 lg:py-28 scroll-mt-20'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div 
          className='mb-12 md:mb-16 text-center'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className='text-3xl sm:text-4xl md:text-5xl font-Ovo inline-block pb-2 border-b-4 border-b-orange-300 dark:text-[#08FDD8] dark:border-b-[#08FDD8]'
          >
            About Me
          </motion.h2>
        </motion.div>

        {/* Content Container */}
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-16'>
          {/* Text Content - Left Side */}
          <motion.div 
            className='w-full lg:w-1/2 space-y-6'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Paragraphs */}
            <div className='space-y-6'>
              {visibleParagraphs.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  className='font-Ovo text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Read More/Less Button */}
            {aboutParagraphs.length > maxVisibleParagraphs && (
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-2 text-orange-500 dark:text-[#08FDD8] font-medium mt-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {isExpanded ? 'Show Less' : 'Read More'}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            )}

            {/* Skills Cards */}
            <motion.div 
              className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { 
                  title: "Languages", 
                  description: "HTML, CSS, JavaScript, React, Next.js", 
                  icon: isDarkMode ? code_icon_dark : code_icon 
                },
                { 
                  title: "Frameworks", 
                  description: "Node.js, Express, React Native", 
                  icon: isDarkMode ? code_icon_dark : code_icon 
                },
                { 
                  title: "Experience", 
                  description: "1+ years development experience", 
                  icon: isDarkMode ? code_icon_dark : code_icon 
                },
                { 
                  title: "Education", 
                  description: "BSc in IT at Metropolia University", 
                  icon: isDarkMode ? code_icon_dark : code_icon 
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className='border-[0.55px] border-gray-400 rounded-xl p-4 md:p-6 cursor-pointer 
                      hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                      dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                  whileHover={{ y: -5 }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className='flex items-start gap-3'>
                    <img className='w-5 mt-1' src={item.icon} alt={item.title} />
                    <div>
                      <h3 className='font-semibold text-gray-800 dark:text-white'>{item.title}</h3>
                      <p className='text-sm text-gray-600 dark:text-gray-300 mt-1'>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Cube Spinner - Right Side */}
          <motion.div 
            className='w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className='relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]'>
              <div className='cubespinner animate-spin-slow'>
                <div className='face1'><FaNodeJs color='#3C873A' className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'/></div>
                <div className='face2'><FaHtml5 color='#F06529' className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'/></div>
                <div className='face3'><FaGithub color={isDarkMode ? '#f5f5f5' : '#333'} className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'/></div>
                <div className='face4'><FaJsSquare color='#EFD81D' className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'/></div>
                <div className='face5'><FaCss3 color='#28a4d9' className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'/></div>
                <div className='face6'><FaReact color='#5ed4f4' className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'/></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;