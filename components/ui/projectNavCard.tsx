import React, { useState } from 'react'
import Image from 'next/image'
import {motion} from "framer-motion";

interface projectNavCardProps{
title:string;
link:string;
}

const ProjectNavCard = ({title,link}:projectNavCardProps) => {
  const [hover,setHover] = useState<boolean>(false);
  const [press,setPress] = useState<boolean>(false);
  return (
    <div className="flex flex-col md:flex-col cursor-pointer rounded-4xl  md:bg-transparent items-center justify-center md:justify-start w-[clamp(18rem,27vw,40rem)] h-[clamp(5rem,6vw,12rem)] m-5 " >
      {/* title */}
      <motion.div 
        className={` grid bg-black/10 md:bg-transparent  rounded-4xl flex-row items-center justify-center md:grid-cols-[80%_20%] w-full h-[80%]  `}
       
        onHoverStart={()=>{
              setHover(true);
            }}
            onHoverEnd={()=>{
              setHover(false);
            }}
            >
        <div className="flex flex-col items-start font-inter text-[clamp(1.5rem,2vw,2.2rem)] justify-center md:justify-end w-full h-full  " >{title}</div>
        
        <div 
        className="hidden md:flex w-full items-center justify-center h-full overflow-hidden"
              >
            <motion.div
            initial={{x:-100}}
            animate={hover?{x:0}:{}}
            className="flex w-full h-full"
            >
              <Image src={"/blackArrow.png"} alt={""} width={100} height={100} className="flex rotate-90 p-[clamp(1rem,1vw,2rem)]" />
            </motion.div>

        </div>
      </motion.div>
      <motion.div 
  // 1. Changed parent to relative so absolute elements anchor correctly
  // 2. Added explicit height (h-2) so percentage spans don't collapse
  className="hidden md:flex relative w-full h-[clamp(0.1rem,0.3vw,0.4rem)] items-center justify-center overflow-hidden bg-black/30 rounded-full" 
>
  {/* Base Track Layer */}
  <span className="absolute inset-0 z-10 w-full h-full" />
  
  {/* 🚀 Active Slider Bar Layer */}
  <motion.span 
    initial={{ x: "100%" }} // Starts hidden out the right side
    animate={hover ? { x: 0 } : { x: "-100%" }} // Slides out the left side
    transition={{ duration: 0.2, ease: "easeInOut" }}
    // Removed conflicting h-2 and inset properties, using full inheritance instead
    className="absolute inset-0 z-20 w-full h-full bg-black" 
  />
</motion.div>
    </div>
  )
}

export default ProjectNavCard;
