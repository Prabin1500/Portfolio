import userImage from '../assets/UserImage.jpg'
import handIcon from '../assets/hand-icon.png'
import { motion } from "motion/react"
import downloadIcon from '../assets/download-icon.png'
import rightArrowWhite from '../assets/right-arrow-white.png'

const Home = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen scroll-mt-20 flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{scale: 0}}
        whileInView={{scale:1}}
        transition={{duration:0.8, type: 'spring', stiffness: 100}}
        >
        <img src={userImage} alt='MyImage'className='rounded-full w-32'/>
        </motion.div>
        <motion.h3 
            initial={{y: -20, opacity:0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration:0.6, delay: 0.3}}
            className='flex items-end gap-2 text-xl sm:text-xl md:text-3xl sm:mb-2 font-Ovo'>
            Hi! I am Prabin 
            <img src={handIcon} alt='HandIcon' className='w-6' />
        </motion.h3>
        <motion.h1 
            initial={{y: -30, opacity:0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration:0.8, delay: 0.5}}
            className='text-2xl sm:text-3xl lg:text-[66px] font-Ovo mb-2'>
            Full Stack Developer
        </motion.h1>
        <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity: 1}}
            transition={{duration:0.6, delay: 0.7}}
            className='max-w-3xl mx-auto font-Ovo text-base sm:text-lg md:text-xl'>
            I design and build responsive, user-focused web and mobile applications. 
            With hands-on experience in frontend and backend development, I bring ideas 
            to life using technologies like React, JavaScript, Node.js, Java, Kotlin, and SQL.
        </motion.p>
        <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity: 1}}
            transition={{duration:0.6, delay: 0.7}}
            className='max-w-3xl mx-auto font-Ovo text-base sm:text-lg md:text-xl'>
            💼 Looking for opportunities in full-stack or software development.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
                initial={{y: 30, opacity:0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration:0.6, delay: 1}}
                href='#contact'
                className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2
                dark:bg-transparent'
            >
                Contact 
                <img src={rightArrowWhite} alt='' className='w-4' /> 
            </motion.a>

            <motion.a 
                initial={{y: 30, opacity:0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration:0.6, delay: 1}}
                href='/PrabinDhakalResume.pdf' download 
                className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
            >
                My Resume 
                <img className='w-4' src={downloadIcon} alt="Download Icon" />
            </motion.a>
        </div>
    </div>
  )
}

export default Home
