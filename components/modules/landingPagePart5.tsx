import React from 'react'
import {motion, useAnimation, Variants} from "framer-motion";
import { useEffect } from 'react';

interface blogData{
    title: string;
    link: string;
}

const dummeyBlogsCarouselData : blogData[] =[
    {title:"How to build a fullstack app with NextJS and Prisma", link:""},
    {title:"snmokdm" , link:""},
     {title:"How to build a fullstack app with NextJS and Prisma", link:""},
    {title:"snmokdm" , link:""},
     {title:"How to build a fullstack app with NextJS and Prisma", link:""},
    {title:"snmokdm" , link:""},
     {title:"How to build a fullstack app with NextJS and Prisma", link:""},
    {title:"snmokdm" , link:""}
]

   


    const mVariants : Variants ={
        animate:{
            x: [0,1000],
            transition:{
                x:{
                    repeat: Infinity,
                    repeatType:"loop",
                    duration: 20,
                    ease:"linear",
                    
                }
            }
        }
    }
     const mVariants2 : Variants ={
        animate:{
            x: [0,-1000],
            transition:{
                x:{
                    repeat: Infinity,
                    repeatType:"loop",
                    duration: 20,
                    ease:"linear"
                }
            }
        }
    }

const LandingPagePart5 = () => {
     const controls = useAnimation();

    useEffect( ()=>{
        controls.start("animate");
    } ,[controls])

  return (
    <div className="flex  flex-col items-center justify-center " >
        <motion.div
  // 1. Add "w-max" so the container is exactly as wide as its content
  // 2. Remove "overflow-hidden" from this inner motion.div 
  //    and move it to a wrapper div outside it.
  className="flex flex-row items-center w-max cursor-pointer"
  variants={mVariants}
  animate={controls}
 
>
  {[...dummeyBlogsCarouselData, ...dummeyBlogsCarouselData].map((content, i) => (
    <motion.div 
     onMouseEnter={()=>{
    controls.stop();
  }}
  onMouseLeave={()=>{
    controls.start("animate");
  }}
  whileHover={{scale:1.1}}
      key={i} 
      className="shrink-0 w-[clamp(8.7rem,18vw,24rem)] h-[clamp(8.7rem,18vw,19.5rem)] rounded-[20px] bg-[#D6C1FD] m-4 flex items-center justify-center p-4"
    >
      {content.title}
    </motion.div>
  ))}
  
</motion.div>
<motion.div
  // 1. Add "w-max" so the container is exactly as wide as its content
  // 2. Remove "overflow-hidden" from this inner motion.div 
  //    and move it to a wrapper div outside it.
  className="flex flex-row items-center w-max cursor-pointer"
  variants={mVariants2}
  animate={controls}
 
>
  {[...dummeyBlogsCarouselData, ...dummeyBlogsCarouselData].map((content, i) => (
    <motion.div 
     onMouseEnter={()=>{
    controls.stop();
  }}
  onMouseLeave={()=>{
    controls.start("animate");
  }}
  whileHover={{scale:1.1}}
      key={i} 
      className=" shrink-0 w-[clamp(8.7rem,18vw,24rem)] h-[clamp(8.7rem,18vw,19.5rem)] bg-[#C2FE94] rounded-[20px] m-4 flex items-center justify-center p-4"
    >
      {content.title}
    </motion.div>
  ))}
  
</motion.div>
    </div>
   
  )
}

export default LandingPagePart5
