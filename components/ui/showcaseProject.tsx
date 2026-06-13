"use client"

import { StaticImageData } from 'next/image';
import { act, useState } from 'react';
import React from 'react'
import agoraLandingPage from "../../public/agoraLandingPage.jpeg";
import {AnimatePresence, easeInOut, motion} from "framer-motion"
import  Image  from 'next/image';
import { useAtom} from 'jotai';
import { projectsAtom } from '@/store/globalAtoms';

type AnimationPhase = "initial" | "animate" | "returning" ;

const techStackVariants ={
    initial:{
        opacity:0 , x:100
    },
    animate:{
        opacity:1, x:1
    },
    exit:{opacity:0}
}

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


interface showCaseProjectsInterface{
    
    id :string;
    title: string;
    techStack : string[];
    shortDescription: string;
    problemStatement: string;
    solution: string;
    landingPageImage: string;
    githubLink:string;
    liveLink:string;
   
   
}

const ShowcaseProject : React.FC<showCaseProjectsInterface>  = ({
    id,
    title,
    techStack,
    shortDescription,
    problemStatement,
    solution,
    landingPageImage
}) => {

  const [swapAnimation,setSwapAnimation] = useState<AnimationPhase>("initial");
    const [projects, setProjects] = useAtom(projectsAtom || null);
    const [index,setindex] = useState(0);
    const [activeProject,setActiveProject] = useState<showCaseProjectsInterface | undefined>(projects[index]);
  // project switcher

  function handleProjectSwitch() {
  setindex((prevIndex) => {
    const nextIndex = (prevIndex + 1) % projects.length;
    
    // Update the active project based on the calculated index
    setActiveProject(projects[nextIndex]);
    
    return nextIndex;
  });
}

 
  

  return (
    <motion.div className="flex flex-col items-center justify-center md:justify-start w-full   " >
        
     {/* switching projects button */}
     <div className="flex w-full  text-white flex-col md:flex-row font-inter font-light text-[clamp(1rem,1.3vw,1.4rem)] gap-5 md:gap-8 items-center justify-center md:justify-start" >
        <div className="opacity-[70%]" >0{id}/05</div>
        <motion.button
            className="flex flex-wrap items-center justify-center  rounded-full  overflow-hidden flex-row "
            onClick={ ()=>{
                if(swapAnimation === "initial"){
                    setSwapAnimation("animate");
                    handleProjectSwitch();
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
     
     <div className="flex flex-col md:flex-row items-center justify-between w-full h-full mt-[clamp(1.9rem,2vw,3rem)]" >


        {/* column 1 : showcaseTitle , project Metadata  */}
        <div className="flex w-full h-full flex-col items-center justify-between" >
            {/* showcase Title */}
            <div className="flex flex-col w-full h-full font-inter font-medium text-[clamp(1.8rem,3vw,4rem)] tracking-tight items-center justify-center" >
                <h1 className=" flex w-full text-center md:text-start flex-wrap md:ml-[clamp(2rem,6vw,10rem)]" >Project Showcase - Displaying <br/>my best projects.</h1>
            </div>
            {/* projectMetaData */}
            <div className="flex flex-row md:flex-row  items-center justify-center md:justify-between w-full  mt-[clamp(3.8rem,4vw,5rem)]" >
                <div className="flex flex-col w-full h-full items-center justify-center md:justify-start  md:w-min  " >
                    <div className="flex flex-row w-full items-center justify-center font-inter font-light md:justify-start text-[clamp(0.9rem,1vw,3rem)] mb-[clamp(0.6rem,0.8vw,2rem)] opacity-[40%]" >Project</div>
                    <motion.div variants={{techStackVariants}} initial={"initial"} animate={"animate"} exit={"exit"} transition={{duration:0.4}} className="flex flex-row w-full items-center justify-center md:justify-start text-center  md:text-start text-[clamp(1rem,1.3vw,1.5rem)]" >{activeProject?.title}</motion.div>
                </div>
                <div className="flex flex-col w-full h-full md:w-min items-center  justify-start  " >
                    <div className="flex flex-row w-full items-center justify-center font-inter font-light md:justify-start text-[clamp(0.9rem,1vw,3rem)] mb-[clamp(0.6rem,0.8vw,2rem)] opacity-[40%]" >Role</div>
                    <div className="flex flex-row w-full items-center justify-center md:justify-start text-center md:text-start text-[clamp(1rem,1.3vw,1.5rem)]" >{activeProject?.techStack[0]}</div>
                </div>
                <div className="flex flex-col w-full h-full items-center md:w-min justify-start " >
                    <div className="flex flex-row w-full items-center justify-center font-inter font-light md:justify-start text-[clamp(0.9rem,1vw,3rem)] mb-[clamp(0.6rem,0.8vw,2rem)] opacity-[40%]" >Date</div>
                    <div className="flex flex-row w-full items-center justify-center md:justify-start text-center  md:text-start text-[clamp(1rem,1.3vw,1.5rem)] " >07/06</div>
                </div>
            </div>
        </div>


        {/* techStack */}
        <div className=" flex-col w-full h-full items-end hidden md:flex">
                    <AnimatePresence>
                {
                    activeProject?.techStack.map((tech,index)=>{
                        return(
                            <motion.div
                                 variants={techStackVariants}
                                 key={`${activeProject.id}-${tech}`} 
                                 whileInView="animate"
                                 initial="initial"
                                 transition={{duration:1,ease:"easeIn"}}
                                 className="pl-[clamp(2rem,4vw,5rem)] pr-[clamp(2rem,2vw,3rem)] flex items-center justify-center m-[clamp(1rem,1.2vw,1.3rem)]  border-1 rounded-full p-1.5" >
                            {tech}
                        </motion.div>)
                    })
                }
                </AnimatePresence>
            </div>
            
     </div>
    
    
     {/* Projrct Preview */}
    </motion.div>
  )
}

export default ShowcaseProject;
