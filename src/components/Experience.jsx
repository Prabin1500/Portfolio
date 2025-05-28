import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import { timelineData } from '../assets/assets';

const Experience = ({ isDarkMode }) => {
  return (
    <motion.section 
      id='experience' 
      className="w-full px-5 md:px-[8%] lg:px-[12%] py-16 lg:py-28 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background elements */}
      <div className={`absolute left-0 bottom-0 w-64 h-64 rounded-full ${isDarkMode ? 'bg-[#08FDD8]/10' : 'bg-orange-300/20'} blur-3xl -z-10`}></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-Ovo inline-block pb-2 border-b-4 border-b-orange-300 dark:text-[#08FDD8] dark:border-b-[#08FDD8]"
          >
            Work Experience
          </motion.h2>
          <motion.p 
            className="mt-4 text-gray-600 dark:text-gray-300 text-lg font-Ovo"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My professional journey and contributions
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-7 md:left-7 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-600" />

          {timelineData.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex relative pb-12 last:pb-0 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 flex items-center justify-center w-14 h-14">
                <div className={`w-5 h-5 rounded-full border-4 ${isDarkMode ? 'border-[#08FDD8]' : 'border-orange-400'} bg-white dark:bg-gray-800 z-10 group-hover:scale-125 transition-transform`} />
                <div className={`absolute inset-15 rounded-full ${isDarkMode ? 'bg-[#08FDD8]/20' : 'bg-orange-400/20'} scale-0 group-hover:scale-100 transition-transform`} style={{ width: '150%', height: '150%' }} />
              </div>

              {/* Content Card */}
              <div className="flex-1 pl-16 md:pl-20">
                <motion.div  
                  className="p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <FiBriefcase className={`text-lg ${isDarkMode ? 'text-[#08FDD8]' : 'text-orange-500'}`} />
                        <h3 className="text-xl font-bold font-Ovo dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      
                      {item.company && (
                        <p className="mt-1 text-gray-700 dark:text-gray-300 font-Ovo">{item.company}</p>
                      )}
                    </div>

                    {/* Date */}
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-[#08FDD8]/10 text-[#08FDD8]' : 'bg-orange-400/10 text-orange-600'}`}>
                      <FiCalendar className="text-sm" />
                      <p className="text-sm font-medium font-Ovo">{item.duration}</p>
                    </div>
                  </div>
                  
                  {item.location && (
                    <div className="flex items-center gap-2 mt-3 text-gray-600 dark:text-gray-400">
                      <FiMapPin className="text-sm" />
                      <p className="text-sm font-Ovo">{item.location}</p>
                    </div>
                  )}
                  
                  <ul className="mt-4 space-y-3">
                    {item.tasks.map((task, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 font-Ovo text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
                      >
                        <span className={`inline-block mt-1.5 w-2 h-2 rounded-full ${isDarkMode ? 'bg-[#08FDD8]' : 'bg-orange-400'}`} />
                        <span>{task}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative element */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'} border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            <span className="font-Ovo text-gray-700 dark:text-gray-300">
              More experiences and projects to come!
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;