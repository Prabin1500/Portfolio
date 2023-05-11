import React from 'react'
import omagarden from '../assets/Omagarden.png';
import school from '../assets/Schooldays.png';
import recipe from '../assets/Food.png';
import kotlinApp from '../assets/kotlinapp.png';
import play from '../assets/playnLearn.png';

const Experience = () => {
  return (
    <div name='experience' className='w-full text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-12 py-24 flex flex-col justify-center w-full h-full'>
            <div className='pb-4 font-mono'>
                <p className='text-6xl inline text-[#08FDD8]'>My Portfolio</p>
                <p className='py-6'>A small gallery of projects I have done so far.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid item */}
                <div style={{backgroundImage: `url(${omagarden})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='p-4 opacity-0 group-hover:opacity-80'>
                        <span className='text-center text-1xl  text-white'>
                        A mobile application built with React Native that allows 
                        users to upload and share pictures of their beloved plants.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/anish0123/omaGarden" target="blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${school})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='p-4 opacity-0 group-hover:opacity-100'>
                        <span className='text-center text-1xl text-white'>
                            A full stack web application for uploading media and can chat with other users.
                            It is build using JS,HTML and CSS. Backend is implemented using Node and MySQL.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Prabin1500/School-days" target="blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${recipe})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='p-4 opacity-0 group-hover:opacity-100'>
                        <span className='text-center text-1xl text-white'>
                           A mobile application developed using JAVA.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Prabin1500/RecipeApp" target="blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${kotlinApp})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='p-4 opacity-0 group-hover:opacity-100'>
                        <span className='text-center text-1xl text-white'>
                            A mobile application developed using Kotlin.
                            OO design and MVVM and observer pattern.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Prabin1500/Parliament-Member-App" target="blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${play})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='p-4 opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl text-white'>
                            A child game mobile application developed using
                            Xcode with Swift programming language.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Argier96/PlayNLearn" target="blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Experience