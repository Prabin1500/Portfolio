import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/Java.png';
import C from '../assets/C++-Logo.png';
import P from '../assets/Python.png';
import sql from '../assets/SQL.png';
import git from '../assets/Git.png';
import Typescript from '../assets/typescript.png';
import Mongodb from '../assets/mongodb.png';
import Vscode from '../assets/vscode.png';
import Figma from '../assets/figma.png';
import Firebase from '../assets/firebase.png';

 const toolsData = [
    {icon: HTML, name: "HTML"},
    {icon: CSS, name: "CSS"},
    {icon: Tailwind, name: "Tailwindcss"},
    {icon: ReactImg, name: "React"},
    {icon: JavaScript, name: "JavaScript"},
    {icon: Typescript, name: "TypeScript"},
    {icon: C, name: "C++"},
    {icon: Mongodb, name: "Mongodb"},
    {icon: git, name: "git"},
    {icon: Vscode, name: "VSCode"},
    {icon: Figma, name: "Figma"},
    {icon: Java, name: "Java"},
    {icon: P, name: "Python"},
    {icon: Node, name: "Node"},
    {icon: Firebase, name: "Firebase"},
    {icon: sql, name: "SQL"},
];

const Skills = () => {
  return (
    <div id='skills' className='w-full px-[12%] py-10 mb-32 scroll-mt-20 flex flex-col items-center justify-center'>
        <h2 className='text-center text-6xl font-Ovo mx-auto dark:text-[#08FDD8] dark:border-b-[#08FDD8] border-b-4 border-b-orange-300'>Skills</h2>
        <h4 className='mt-6 text-gray-700 text-center text-xl font-Ovo dark:text-white/80'>Programming languages and tools</h4>
        <div className='shadow-lg p-4 rounded-md w-full'>
          <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-3 sm:gap-5 my-10'>
              {toolsData.map(({icon, name}, index) =>(
                  <li className='flex flex-col items-center justify-center w-24 sm:w-32 aspect-square 
                      border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                      key={index}>
                      <img src={icon} alt='Tool' className='w-5 sm:w-12' />
                      <p className='mt-3 dark:text-white'>{name}</p>
                  </li>
              ))}
          </ul>
        </div>
    </div>
  );
};

export default Skills;