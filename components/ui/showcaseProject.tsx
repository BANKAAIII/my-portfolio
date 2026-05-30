"use client"

import { StaticImageData } from 'next/image';
import { useState } from 'react';
import React from 'react'
import agoraLandingPage from "../../public/agoraLandingPage.jpeg";
import {AnimatePresence, easeInOut, motion} from "framer-motion"
import  Image  from 'next/image';

type AnimationPhase = "initial" | "animate" | "returning" ;

const arrowSwapVariantsUp={
    initial:{
        y:0,
        transition:{
            duration:0.3,
            ease:easeInOut
        }
    },
    animate:{
        y:-40,
        transition:{
            duration:0.3,
            ease:easeInOut
        }
    },
    returning:{
        y:40,
        transition:{
            duration:0
        }
    }
  }

  const arrowSwapVariantsDown={
    initial:{
        y:0,
        opacity:1,
        transition:{
            duration:0.3,
            ease:easeInOut
        }
    },
    animate:{
        y:40,opacity:1,
        transition:{
            duration:0.3,
            ease:easeInOut
        }
    },
    returning:{
        y:-40,opacity:0,
        transition:{
            duration:0.01
        }
    }
  }


const projects : showCaseProjectsInterface[] = [
    { 
        projectNo: 1,
        name:"Agora-blockchain",
        techStack:["next.js","javaScript","tailwind"],
        shortDescription:" A decentralised voting platform utilizing blockchains ultimate power to make way for secure and confidential voting process.",
        problemStatement:"Agora required a complete interface evolution to match its powerful open-source capabilities. The platform’s core functionality was robust, but the user interface needed to be elevated to feel modern, intuitive, and highly professional.",
        solution:"Every piece of the interface had to be re-engineered to lower the barrier to entry for new users while ensuring that complex contributor workflows remained exceptionally clean, structured, and completely accessible.",
        LandingPageImage:agoraLandingPage

    },{
        projectNo: 2,
        name:"metawerse",
        techStack:["next.js","typescript","tailwind","framer-motion"],
        shortDescription:" A decentralised voting platform utilizing blockchains ultimate power to make way for secure and confidential voting process.",
        problemStatement:"Agora required a complete interface evolution to match its powerful open-source capabilities. The platform’s core functionality was robust, but the user interface needed to be elevated to feel modern, intuitive, and highly professional.",
        solution:"Every piece of the interface had to be re-engineered to lower the barrier to entry for new users while ensuring that complex contributor workflows remained exceptionally clean, structured, and completely accessible.",
        LandingPageImage:agoraLandingPage
    }
]

interface showCaseProjectsInterface{
    
         projectNo:number;
    name: string;
    techStack : string[];
    shortDescription: string;
    problemStatement: string;
    solution: string;
    LandingPageImage: StaticImageData;
   
   
}

const ShowcaseProject : React.FC<showCaseProjectsInterface>  = ({
    projectNo,
    name,
    techStack,
    shortDescription,
    problemStatement,
    solution,
    LandingPageImage
}) => {

  const [swapAnimation,setSwapAnimation] = useState<AnimationPhase>("initial");

  // project switcher
  

  return (
    <div className="flex flex-col items-center justify-center md:justify-start  w-full h-[clamp-(1.5rem,2.5vw,3rem)]  " >
     {/* switching projects button */}
     <div className="flex w-full  text-white font-inter font-light text-[clamp(1rem,1.3vw,1.4rem)] gap-5 md:gap-8 items-center justify-center md:justify-start" >
        <div className="opacity-[70%]" >0{projectNo}/05</div>
        <motion.button
            className="flex flex-wrap items-center justify-center  rounded-full  overflow-hidden flex-row "
            onClick={ ()=>{
                if(swapAnimation === "initial"){
                    setSwapAnimation("animate");
                }
            } }
        >   
            
            <motion.div
            variants={arrowSwapVariantsUp}
            animate={swapAnimation}
            onAnimationComplete={()=>{
                if(swapAnimation === "animate"){
                    setSwapAnimation("returning")
                    setTimeout(()=>{
                        setSwapAnimation("initial")
                    },20);
                }
            }}
            className="flex flex-wrap items-center justify-center "
                ><Image
                width={30}
                height={30}
                src={"/arrow.png"}
                alt={""}
                className="flex w-[clamp(1.5rem,1.5vw,3rem)] aspect-square"
            /></motion.div>
            <motion.div
            variants={arrowSwapVariantsDown}
            animate={swapAnimation}

            
            className="flex flex-wrap items-center justify-center  "
                ><Image
                width={30}
                height={30}
                src={"/arrow.png"}
                alt={""}
                className="flex rotate-180 w-[clamp(1.5rem,1.5vw,3rem)] aspect-square"
            /></motion.div>
            
         </motion.button>
     </div>
     {/* ProjectShowcase - heading */}
     <div className="grid grid-col md:grid-cols-[70%_30%] w-full h-[clamp(10rem,13vw,16rem)] mt-[clamp(1rem,2vw,3rem)]" >
            <div className="flex flex-col w-full h-full font-inter font-medium text-[clamp(1.8rem,3vw,4rem)] tracking-tight items-center justify-center" >
                <h1 className=" flex w-full text-center md:text-start flex-wrap md:ml-[clamp(2rem,6vw,10rem)]" >Project Showcase - Displaying <br/>my best projects.</h1>
            </div>
            {/* Project tech stack */}
            <div className="flex-col w-full h-full items-end hidden md:flex">
                {
                    techStack.map((tech,index)=>{
                        return <motion.div
                                 key={index} 
                                 whileInView={{opacity:1,x:0}}
                                 initial={{opacity:0,x:100}}
                                 transition={{duration:1.2,ease:"easeIn"}}
                                 className="pl-[clamp(2rem,4vw,5rem)] pr-[clamp(2rem,2vw,3rem)] flex items-center justify-center m-[clamp(1rem,1.2vw,1.3rem)]  border-1 rounded-full p-1.5" >
                            {tech}
                        </motion.div>
                    })
                }
            </div>
     </div>
    
     {/* Project Metadata */}
     <div className="flex grid-rows-[33.3%_33.3%_33.3%] md:flex-row  items-center justify-center md:justify-start w-full  mt-[clamp(3.8rem,4vw,5rem)] p-[clamp(1rem,1.5vw,3rem)] gap-[clamp(5rem,8vw,12rem)]" >
      <div className="flex flex-col w-full h-full items-center justify-center md:justify-start  md:w-min  " >
        <div className="flex flex-row w-full items-center justify-center font-inter font-light md:justify-start text-[clamp(1rem,1vw,3rem)] mb-[clamp(0.6rem,0.8vw,2rem)] opacity-[40%]" >Project</div>
        <div className="flex flex-row w-full items-center justify-center md:justify-start text-center  md:text-start text-[clamp(1.2rem,1.3vw,1.5rem)]" >{name}</div>
      </div>
      <div className="flex flex-col w-full h-full md:w-min items-center  justify-start  " >
        <div className="flex flex-row w-full items-center justify-center font-inter font-light md:justify-start text-[clamp(1rem,1vw,3rem)] mb-[clamp(0.6rem,0.8vw,2rem)] opacity-[40%]" >Role</div>
        <div className="flex flex-row w-full items-center justify-center md:justify-start text-center md:text-start text-[clamp(1.2rem,1.3vw,1.5rem)]" >FullStack</div>
      </div>
      <div className="flex flex-col w-full h-full items-center md:w-min justify-start " >
        <div className="flex flex-row w-full items-center justify-center font-inter font-light md:justify-start text-[clamp(1rem,1vw,3rem)] mb-[clamp(0.6rem,0.8vw,2rem)] opacity-[40%]" >Date</div>
        <div className="flex flex-row w-full items-center justify-center md:justify-start text-center  md:text-start text-[clamp(1.2rem,1.3vw,1.5rem)] " >07/06</div>
      </div>
      
     </div>
     {/* Projrct Preview */}
    </div>
  )
}

export default ShowcaseProject;
