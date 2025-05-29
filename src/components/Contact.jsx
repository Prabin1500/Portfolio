import { BsArrowRight } from 'react-icons/bs'; 
import { useState } from 'react';
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { SocialIcon } from 'react-social-icons';

const Contact = ({isDarkMode}) => {
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' 
            className='w-full px-[5%] lg:px-[10%] mb-32 py-16 lg:py-28 scroll-mt-20 dark:bg-none'
        >
            <div className='flex flex-col items-center justify-center mb-16'>
                <motion.h2 
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className='text-center text-4xl md:text-5xl font-Ovo mx-auto pb-2 border-b-4 border-b-orange-300 dark:text-[#08FDD8] dark:border-b-[#08FDD8]'
                >
                    Get In Touch
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className='text-center max-w-2xl mx-auto mt-5 font-Ovo text-xl text-gray-600 dark:text-gray-300'
                >
                    Have a project in mind or want to discuss opportunities? Feel free to reach me out!
                </motion.p>
            </div>

            <div className='flex flex-col lg:flex-row gap-12'>
                {/* Contact Form - Left Side */}
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className='w-full lg:w-1/2'
                >
                    <form onSubmit={onSubmit} className='bg-white dark:bg-darkHover/20 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                            <div>
                                <label htmlFor="name" className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>Name</label>
                                <input 
                                    type='text' 
                                    id='name'
                                    placeholder='John Doe' 
                                    required 
                                    name='name'
                                    className='w-full p-3 outline-none border border-gray-300 rounded-lg bg-white dark:bg-darkHover/30 dark:border-gray-600 focus:ring-2 focus:ring-orange-300 dark:focus:ring-[#08FDD8] transition-all'
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>Email</label>
                                <input 
                                    type='email' 
                                    id='email'
                                    placeholder='john@example.com' 
                                    required 
                                    name='email'
                                    className='w-full p-3 outline-none border border-gray-300 rounded-lg bg-white dark:bg-darkHover/30 dark:border-gray-600 focus:ring-2 focus:ring-orange-300 dark:focus:ring-[#08FDD8] transition-all'
                                />
                            </div>
                        </div>
                        
                        <div className='mb-6'>
                            <label htmlFor="message" className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>Message</label>
                            <textarea 
                                id='message'
                                rows={6} 
                                placeholder='Hello, I would like to discuss...' 
                                required 
                                name='message'
                                className='w-full p-4 outline-none border border-gray-300 rounded-lg bg-white dark:bg-darkHover/30 dark:border-gray-600 focus:ring-2 focus:ring-orange-300 dark:focus:ring-[#08FDD8] transition-all'
                            ></textarea>
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            type='submit' 
                            className='py-3 px-8 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white dark:text-black rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all shadow-lg dark:from-[#08FDD8] dark:to-[#00B4B4] dark:hover:from-[#00B4B4] dark:hover:to-[#08FDD8]'
                        >
                            Send Message
                            <BsArrowRight  className={`w-4 ml-1 transition-all duration-300 hover:translate-x-1 ${isDarkMode ? 'text-black' : 'text-white'}`} />
                        </motion.button>
                        
                        {result && (
                            <p className={`mt-4 text-center ${result.includes("Successfully") ? "text-green-500" : "text-orange-500 dark:text-[#08FDD8]"}`}>
                                {result}
                            </p>
                        )}
                    </form>
                </motion.div>

                {/* Contact Info - Right Side */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='w-full lg:w-1/2'
                >
                    <div className='bg-white dark:bg-darkHover/20 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-center'>
                        <h3 className='text-2xl font-bold mb-6 text-gray-800 dark:text-white'>Contact Information</h3>
                        
                        <div className='space-y-6'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 bg-orange-100 dark:bg-[#08FDD8]/10 rounded-full'>
                                    <FiMail className='text-orange-500 dark:text-[#08FDD8] text-xl' />
                                </div>
                                <div>
                                    <h4 className='font-medium text-gray-600 dark:text-gray-300'>Email</h4>
                                    <a href="mailto:your.email@example.com" className='text-gray-800 dark:text-white hover:text-orange-500 dark:hover:text-[#08FDD8] transition-colors'>
                                        dhakalprabin7@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className='flex items-start gap-4'>
                                <div className='p-3 bg-orange-100 dark:bg-[#08FDD8]/10 rounded-full'>
                                    <FiPhone className='text-orange-500 dark:text-[#08FDD8] text-xl' />
                                </div>
                                <div>
                                    <h4 className='font-medium text-gray-600 dark:text-gray-300'>Phone</h4>
                                    <a href="tel:+1234567890" className='text-gray-800 dark:text-white hover:text-orange-500 dark:hover:text-[#08FDD8] transition-colors'>
                                        +358-449541977
                                    </a>
                                </div>
                            </div>
                            
                            <div className='flex items-start gap-4'>
                                <div className='p-3 bg-orange-100 dark:bg-[#08FDD8]/10 rounded-full'>
                                    <FiMapPin className='text-orange-500 dark:text-[#08FDD8] text-xl' />
                                </div>
                                <div>
                                    <h4 className='font-medium text-gray-600 dark:text-gray-300'>Location</h4>
                                    <p className='text-gray-800 dark:text-white'>
                                        Espoo, Finland
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className='mt-8 pt-6 border-t border-gray-200 dark:border-gray-700'>
                            <h4 className='font-medium text-gray-600 dark:text-gray-300 mb-3'>Connect with me</h4>
                            <div className='flex gap-4'>
                                {[
                                    { network: "github", url: "https://github.com/Prabin1500" },
                                    { network: "linkedin", url: "https://linkedin.com/in/prabin-dhakal7/", bgColor: "#0075B5" },
                                    { network: "instagram", url: "https://www.instagram.com/prabindhakal9/" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={social.network}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", delay: index * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="block"
                                    >
                                        <SocialIcon 
                                        network={social.network}
                                        bgColor={social.bgColor || null}
                                        fgColor="#FFFFFF"
                                        style={{ width: 40, height: 40 }}
                                        className="hover:opacity-80 transition-opacity"
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;