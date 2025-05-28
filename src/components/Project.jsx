import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { workData } from '../assets/assets';

const Project = ({ isDarkMode }) => {
  return (
    <motion.section 
      id='projects' 
      className='w-full px-5 md:px-[8%] lg:px-[12%] py-16 lg:py-28 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background elements */}
      <div className={`absolute left-0 w-64 h-64 rounded-full ${isDarkMode ? 'bg-[#08FDD8]/10' : 'bg-orange-300/20'} blur-3xl -z-10`}></div>
      
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
            My Projects
          </motion.h2>
          <motion.p 
            className='max-w-2xl mx-auto mt-5 font-Ovo text-gray-600 dark:text-gray-300'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore a collection of projects showcasing my expertise in web and mobile development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {workData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow 
                    duration-300 border border-gray-200 dark:border-gray-700">
                <img 
                  src={project.bgImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100
                        transition-all duration-700 p-4 flex flex-col justify-between transform scale-0 group-hover:scale-100 origin-center">
                  <motion.p 
                    className="text-white text-sm md:text-base mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    {project.description}
                  </motion.p>

                  <hr className="border-t border-white w-full origin-left" />
                  
                  {/* Tools Used */}
                  <div className="flex flex-wrap gap-2 m-3 justify-between">
                    {project.tools.map((tool, i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full p-1.5 flex items-center justify-center"
                      >
                        <img 
                          src={tool} 
                          alt="Tool icon"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <hr className="border-t border-white w-full origin-left" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold font-Ovo text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                {/* Project Links */}
                <div className="flex gap-3 mt-4">
                  <a 
                    href={project.liveUrl} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 dark:from-[#08FDD8] dark:to-[#00B4B4] text-black rounded-lg text-sm font-medium transition-all hover:shadow-lg"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a 
                    href={project.url} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 dark:bg-[#08FDD8] transform rotate-45 origin-bottom-left translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Project;