import userImage from '../assets/UserImage.jpg'
import handIcon from '../assets/hand-icon.png'
import { motion } from "motion/react"
import downloadIcon from '../assets/download-icon.png'
import rightArrowWhite from '../assets/right-arrow-white.png'
import resume from '../assets/Resume-prabin.pdf'
import { useState } from 'react'
import { FiFileText, FiDownload, FiEye } from "react-icons/fi"

const Header = () => {

    const [showModal, setShowModal] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = resume; 
        link.click();
        setShowModal(false);
    };

    const handlePreview = () => {
        window.open(resume, '_blank');
        setShowModal(false);
    };

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen scroll-mt-20 flex flex-col items-center justify-center gap-4'>
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className='relative'
        >
            <img 
                src={userImage} 
                alt='MyImage'
                className='rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-white/20 shadow-xl'
            />
            <motion.div 
                className='absolute inset-0 rounded-full border-4 border-transparent'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
            ></motion.div>
        </motion.div>
        <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col items-center'
        >
            <div className='flex items-end gap-2 text-xl sm:text-2xl md:text-3xl font-Ovo'>
                <span>Hi! I'm Prabin</span>
                <motion.img 
                    src={handIcon} 
                    alt='HandIcon' 
                    className='w-6'
                    animate={{ rotate: [0, 20, -10, 20, 0] }}
                    transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3
                    }}
                />
            </div>
                
            {/* Title with gradient text */}
            <motion.h1 
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-2xl sm:text-3xl lg:text-5xl font-bold font-Ovo my-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400'
            >
                Full Stack Developer
            </motion.h1>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='max-w-3xl mx-auto text-center space-y-4'
        >
            <p className='font-Ovo text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed'>
                I design and build responsive, user-focused web and mobile applications. 
                With expertise in both frontend and backend development, I transform ideas 
                into reality using modern technologies.
            </p>
            <p className='font-Ovo text-lg md:text-xl text-gray-600 dark:text-gray-400'>
                💼 Currently seeking new opportunities in software development
            </p>
        </motion.div>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
                initial={{y: 30, opacity:0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration:0.6, delay: 1}}
                href='#contact'
                className='px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-Ovo flex items-center gap-2 shadow-lg hover:shadow-xl transition-all'
            >
                Contact 
                <img src={rightArrowWhite} alt='' className='w-4' /> 
            </motion.a>

            <motion.a 
                initial={{y: 30, opacity:0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration:0.6, delay: 1}}
                onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                }}
                className='px-8 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 font-Ovo flex items-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer'
            >
                My Resume 
            </motion.a>
            {showModal && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-md w-full mx-4 border border-gray-200 dark:border-gray-700 shadow-2xl"
                >
                    <div className="text-center mb-6">
                    <FiFileText className="mx-auto text-4xl text-blue-500 mb-3" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        View Resume
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Choose how you'd like to access the resume
                    </p>
                    </div>

                    <div className="flex flex-col gap-3">
                    <motion.button
                        onClick={handleDownload}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-[1.02] shadow-lg"
                    >
                        <FiDownload className="text-lg" />
                        <span className="font-semibold">Download PDF</span>
                    </motion.button>

                    <motion.button
                        onClick={handlePreview}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-gray-700/50 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-all transform hover:scale-[1.02]"
                    >
                        <FiEye className="text-lg" />
                        <span className="font-semibold">Preview in Browser</span>
                    </motion.button>

                    <motion.button
                        onClick={() => setShowModal(false)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors font-medium"
                    >
                        Maybe Later
                    </motion.button>
                    </div>
            </motion.div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Header
