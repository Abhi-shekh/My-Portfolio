import React from 'react'
import { motion } from 'framer-motion';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaInternetExplorer, FaWordpressSimple, FaReact, FaLaptop, FaGithub, FaGit, FaHtml5, FaNodeJs, FaCss3, } from "react-icons/fa";
import { SiProgress,SiTailwindcss,  SiCplusplus, SiAntdesign, SiWeb3Dotjs, SiGoogle, SiReact, SiNodedotjs, SiVisualstudiocode, SiCss3, SiJavascript, SiExpress } from "react-icons/si";


const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
    <div className=' flex flex-col w-[50%] h-auto justify-center mx-auto gap-12 mt-16'>
          <div className='flex flex-col justify-start items-center gap-8'>
            <h2 className="text-3xl md:text-4xl font-bold mx-auto">SkillSet I Have</h2>
            <div className="flex gap-10 justify-center">
              <span className="bannerIcon rounded-full h-24 w-24">
                <FaReact className=' h-10 w-10' />
              </span>
              <span className="bannerIcon rounded-full h-24 w-24">
                <FaNodeJs className=' h-10 w-10'/>
              </span>
              <span className="bannerIcon rounded-full h-24 w-24">
                <SiCplusplus className=' h-10 w-10'/>
              </span>
              <span className="bannerIcon rounded-full h-24 w-24">
                <SiTailwindcss className=' h-10 w-10'/>
              </span>
            </div>

            <div className="flex gap-10 justify-center">
              <span className="bannerIcon rounded-full h-24 w-24">
                <FaHtml5 className=' h-10 w-10'/>
              </span>
              <span className="bannerIcon rounded-full h-24 w-24">
                <SiExpress className=' h-10 w-10'/>
              </span>
              <span className="bannerIcon rounded-full h-24 w-24">
                <SiJavascript className=' h-10 w-10'/>
              </span>
              <span className="bannerIcon rounded-full h-24 w-24">
                <SiCss3 className=' h-10 w-10'/>
              </span>
            </div>
          </div>


          <div className='flex flex-col justify-start items-center gap-8'>
            <h2 className="text-3xl md:text-4xl font-bold mx-auto">Tools I Use</h2>
            <div className="flex gap-10 justify-center">
              <span className="bannerIcon rounded-full h-24 w-24">
                <FaGithub className=' h-10 w-10'/>
              </span>
              <span className="bannerIcon rounded-full h-24 w-24">
                <FaGit className=' h-10 w-10'/>
              </span>
              <span className="bannerIcon rounded-full h-24 w-24">
                <SiVisualstudiocode className=' h-10 w-10'/>
              </span>
            </div>
          </div>
    </div>
    </motion.div>
  );
}

export default Skills