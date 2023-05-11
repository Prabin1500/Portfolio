import React from 'react'

const Contact = () => {
  return (
    <div className='w-full text-gray-300 bg-[#0a192f]'>
      <div name="contact" className='max-w-[1000px] mx-auto px-12 py-24 flex flex-col justify-center w-full h-full'>
          <form method='POST' action="https://getform.io/f/3484a47f-4a5c-44e9-ba06-e8b596dc6772" 
              className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8 font-mono'>
                  <p className='text-6xl inline text-[#08FDD8]'>Contact</p>
                  <p className='text-gray-300 py-3'>I am interested in full stack web develoopment. 
                  If you have any questions or concern, feel free to use the form.</p>
              </div>
              <input className='p-2 text-black bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 text-black bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] text-black p-2' name='message' rows="10" placeholder='Message' />
              <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send message</button>
          </form>

      </div>
    </div>
  )
}

export default Contact