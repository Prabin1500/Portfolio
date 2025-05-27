import { assets } from '../assets/assets';
import { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

    formData.append("access_key", "d1ea99d9-a79d-4893-a34e-b78770e8bf82");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='contact' 
      className='w-full px-[12%] py-10 mb-32 scroll-mt-20 dark:bg-none'>
        <div className='flex flex-col items-center justify-center'>
          <motion.h2 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay:0.3, duration: 1}}
            className='text-center text-5xl font-Ovo mx-auto border-b-4 border-b-orange-300 dark:text-[#08FDD8] dark:border-b-[#08FDD8]'>
            Connect with me
          </motion.h2>
          <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay:0.7, duration: 0.5}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
              I'd love to hear from you.  If you have any questions or concern, feel free to use the form below.
          </motion.p>
        </div>

        <motion.form 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay:0.9, duration: 1}}
          className='max-w-2xl mx-auto' onSubmit={onSubmit}>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input 
                  initial={{x: -50, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{delay:0.3, duration: 0.8}}
                  type='text' 
                  placeholder='Enter your name' 
                  required 
                  name='name'
                  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'/>
                
                <motion.input 
                  initial={{x: 50, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{delay:0.5, duration: 0.8}}
                  type='email' 
                  placeholder='Enter your email' 
                  required 
                  name='email'
                  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'/>
            </div>
            <motion.textarea 
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{delay:0.7, duration: 0.8}}
              rows={6} 
              placeholder='Enter your message' 
              required 
              name='message'
              className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'></motion.textarea>
            
            <motion.button 
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}
              type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2
             bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>
                Submit
                <img src={assets.right_arrow_white} alt='' className='w-4'/>
            </motion.button>
            <p className='w-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact
