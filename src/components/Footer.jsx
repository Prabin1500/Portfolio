import { assets } from '../assets/assets';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-16 mt-32 ${isDarkMode ? 'bg-darkTheme' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Email with animated envelope */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-3 px-6 py-3 rounded-full ${isDarkMode ? 'bg-darkHover' : 'bg-white'} shadow-md mb-8`}
          >
            <motion.img 
              src={assets.mailIcon} 
              alt="Email" 
              className="w-5" 
              whileHover={{ rotate: 10 }}
            />
            <a 
              href="mailto:dhakalprabin7@gmail.com" 
              className={`text-lg font-medium ${isDarkMode ? 'text-[#08FDD8]' : 'text-gray-700'}`}
            >
              dhakalprabin7@gmail.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              { network: "github", url: "https://github.com/Prabin1500" },
              { network: "linkedin", url: "https://linkedin.com/in/prabin-dhakal7/", bgColor: "#0075B5" },
              { network: "facebook", url: "https://www.facebook.com/prabin.dhakal.1654/", bgColor: "#3b5998" },
              { network: "twitter", url: "https://twitter.com/Prabindhakal6", bgColor: "#1DA1F2" },
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
          </motion.div>

          {/* Copyright and divider */}
          <div className={`w-full pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Prabin Dhakal. All rights reserved.
            </p>
            <p className={`text-center mt-2 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Crafted with ❤️ and React
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;