import React from 'react'
import {motion, Variants} from "framer-motion";
import axios from "axios";
import { useState } from 'react';

const dummyGreenCarouselContent  =[
  "Fullstack Developer",
  "Automation Robotics Grad", 
  "system Design",
  "Blockchain systems",
  "DataStructures and Algorithms",
  "Fullstack Developer",
  "Automation Robotics Grad", 
  "system Design",
  "Blockchain systems",
  "DataStructures and Algorithms"
]

const LandingPagePart1 : React.FC = ()  => {

  const[greenCarouselContent , setGreenCarouselContent] = useState<[{id:number,content:string}]>([{id:1,content:""}])

  const TitleContainerVariants : Variants ={
    hidden:{opacity:0, y:-50 },
    visible:{
      opacity:1, y:0,
      transition:{
        duration:0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.2,
      }
    },
    
  }

const TitleWordsVariants : Variants = { 
    hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
    visible: { 
      opacity: 1,
      filter: "blur(0px)", 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  async function greenCarouselContentFetch(){
    
  }

  return (
    <div className=" flex w-screen min-h-screen items-center justify-start flex-col  ">
      {/* div to account for navbar space */}
      <div className="flex w-full h-30 mt-30 md:mt-0" />
      {/* hero section */}
      <div className="flex  w-full items-center justify-center md:justify-start flex-row font-inter " >
        <div className="flex w-full flex-col" >
           {/* title */}
        <motion.h1 
        variants={TitleContainerVariants}
        initial="hidden"
        animate="visible"

        className="font-bold font-inter tracking-[-0.03em] leading-tight text-[clamp(4rem,10vw,9rem)] pl-[2vw] pr-[2vw] mt-[8vw] text-center md:text-start" 
        >
          <div className="flex flex-row items-center justify-center md:justify-start gap-x-6">
            <motion.div 
          variants={TitleWordsVariants}
          >I'm</motion.div>
             <motion.div 
          variants={TitleWordsVariants}
          >Ameya</motion.div>
             </div>

          <motion.div
          variants={TitleWordsVariants}
          >Warang.</motion.div>
          </motion.h1>
        
        {/* description */}
        <motion.h2 
          className="flex w-full items-center md:items-start justify-center md:justify-start text-[clamp(1rem,2vw,5rem)] pl-[2vw] pr-[2vw] mt-8 text-center md:text-start" 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.6, ease:"easeInOut", delay:0.6}}
                    >Building fast, responsive, and scalable web experiences <br/>
          from concept to production.</motion.h2>
        </div>
      </div>

      {/* tech stack carousel */}
      <div 
      className="flex  w-full h-25 bg-[#C2FE94]  mt-30 md:mt-20 overflow-hidden " >
        <motion.div
        animate={{x: [0,"-50%"] }}
        transition={{ duration:20 , repeat:Infinity , ease: 'linear' }}
        className="flex flex-row gap-x-8 items-center text-[clamp(1rem,1vw,2.5rem)] whitespace-nowrap w-max bottom-0 "
        >
          {
            dummyGreenCarouselContent.map((content,i)=>(
              <div key={`original-${i}`} className="flex flex-row items-center  font-inter" >
               {content}
               <span className="flex flex-row items-center  aspect-square w-[clamp(1rem,0.5vw,0.8rem)] bg-black rounded-full ml-8" ></span>
              </div>
            ))
          }
          {
          dummyGreenCarouselContent.map((content, i) => (
              <div key={`dup-${i}`} className="flex flex-row items-center  font-inter">
              {content}
              <span className="flex flex-row items-center  aspect-square w-[clamp(1rem,0.5vw,0.8rem)] bg-black rounded-full ml-8"/>
            </div>
          ))
          }
        </motion.div>
      </div>
    </div>
  )
}

export default LandingPagePart1;
