import React from 'react'
import { FaCopyright } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer>
        <div className='pb-5 text-center text-white bg-[#6E07F3]'>
            <div className='p-6 text-2xl font-mono'>
                <p>Living, learning and levelling up.</p>
            </div>

            <div className='pb-5'>
                <ul className='flex items-center flex-row justify-center'>
                    <li className='flex justify-between items-center hover:scale-110'>
                        <SocialIcon url="https://linkedin.com/in/prabin-dhakal7/" target='_blank' bgColor='#0075B5' fgColor='#FFFFFF'/>
                    </li>

                    <li className='flex justify-between items-center hover:scale-110'>
                        <a  href='https://www.facebook.com/prabin.dhakal.1654/' target='blank'>
                            <SocialIcon network="facebook" bgColor='#3333EE' fgColor='#FFFFFF'/>
                        </a>
                    </li>

                    <li className='flex justify-between items-center hover:scale-110'>
                        <a href='https://twitter.com/Prabindhakal6' target='blank'>
                            <SocialIcon network="twitter" bgColor='#00acee' fgColor='#FFFFFF'/>
                        </a>
                    </li>

                    <li className='flex justify-between items-center hover:scale-110'>
                        <a href='https://www.instagram.com/prabindhakal9/' target='blank'>
                            <SocialIcon network="instagram" fgColor='#FFFFFF'/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='text-2xl font-mono flex items-center flex-row justify-center gap-2'>
                <p>Prabin Dhakal </p>
                <p><FaCopyright /></p>
                <p>TwentyTwentythree</p>
                 
            </div>
        </div>
    </footer>
  )
}

export default Footer