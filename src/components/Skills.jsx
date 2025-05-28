import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/Java.png';
import C from '../assets/C++-Logo.png';
import P from '../assets/Python.png';
import sql from '../assets/SQL.png';
import git from '../assets/Git.png';
import Typescript from '../assets/typescript.png';
import Mongodb from '../assets/mongodb.png';
import Vscode from '../assets/vscode.png';
import Figma from '../assets/figma.png';
import Firebase from '../assets/firebase.png';

const toolsData = [
  { icon: HTML, name: "HTML" },
  { icon: CSS, name: "CSS" },
  { icon: Tailwind, name: "Tailwind" },
  { icon: ReactImg, name: "React" },
  { icon: JavaScript, name: "JavaScript" },
  { icon: Typescript, name: "TypeScript" },
  { icon: C, name: "C++" },
  { icon: Mongodb, name: "MongoDB" },
  { icon: git, name: "Git" },
  { icon: Vscode, name: "VSCode" },
  { icon: Figma, name: "Figma" },
  { icon: Java, name: "Java" },
  { icon: P, name: "Python" },
  { icon: Node, name: "Node.js" },
  { icon: Firebase, name: "Firebase" },
  { icon: sql, name: "SQL" },
];

const Skills = ({ isDarkMode }) => {
  return (
    <motion.section 
      id='skills' 
      className='w-full px-5 md:px-[8%] lg:px-[12%] py-16 lg:py-28 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background elements */}
      <div className={`absolute right-0 top-1/3 w-64 h-64 rounded-full ${isDarkMode ? 'bg-[#08FDD8]/10' : 'bg-orange-300/20'} blur-3xl -z-10`}></div>

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
            My Skills
          </motion.h2>
          <motion.p 
            className='mt-6 text-gray-600 dark:text-gray-300 text-lg md:text-xl font-Ovo'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 sm:gap-6'>
            {toolsData.map(({ icon, name }, index) => (
              <motion.li
                key={index}
                className='flex flex-col items-center justify-center p-4 sm:p-5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-3'>
                  <img 
                    src={icon} 
                    alt={name} 
                    className='w-full h-full object-contain'
                  />
                </div>
                <p className='text-sm sm:text-base font-medium text-center text-gray-700 dark:text-gray-200'>
                  {name}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className='mt-12 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className='inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-sm border border-gray-200 dark:border-gray-700'>
            <FiCode className='text-orange-500 dark:text-[#08FDD8] text-xl' />
            <span className='font-Ovo text-gray-700 dark:text-gray-300'>
              And many more tools in my developer toolkit
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;