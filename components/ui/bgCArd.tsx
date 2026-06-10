import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ShowcaseProject from './showcaseProject';
import { StaticImageData } from 'next/image';
import agoraLandingPage from "../../public/agoraLandingPage.jpeg";
import { projectsAtom } from '@/store/globalAtoms';
import { useAtomValue } from 'jotai';


interface showCaseProjectsInterface{
    projectNo:number;
    name: string;
    techStack : string[];
    shortDescription: string;
    problemStatement: string;
    solution: string;
    LandingPageImage: StaticImageData;
}

export default function Smooth2DCornerExpand() {

  function handleProjectSwitch(index:number,setIndex:any , totalCount :number){
    if(index > totalCount-1){
      setindex(0);
    } 
    index +=1;
    setIndex(index);
  }

  const [index,setindex] = useState(0);
  const projects = useAtomValue(projectsAtom);

  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Track the raw scroll progress through a 200vh runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. Create a smoothed version of the scroll progress using spring physics
  // mass: weight of the spring (higher = heavier/slower)
  // stiffness: speed of the snap (higher = snappier)
  // damping: friction control to stop oscillations (higher = less bouncing)
  const smoothScroll = useSpring(scrollYProgress, {
    mass: 0.2,
    stiffness: 75,
    damping: 18,
    restDelta: 0.001 // Prevents tiny background micro-jitters
  });

  // 3. Map your coordinates to the SMOOTHED scroll instead of the raw one
  const topLeftX = useTransform(smoothScroll, [0, 1], ["15%", "0%"]);
  const topLeftY = useTransform(smoothScroll, [0, 1], ["10%", "0%"]);

  const topRightX = useTransform(smoothScroll, [0, 1], ["85%", "100%"]);
  const topRightY = useTransform(smoothScroll, [0, 1], ["10%", "0%"]);

  // 4. Compile the smooth values into your clip-path string
  const clipPathString = useTransform(
    [topLeftX, topLeftY, topRightX, topRightY],
    ([tlX, tlY, trX, trY]) => 
      `polygon(${tlX} ${tlY}, ${trX} ${trY}, 100% 100%, 0% 100%)`
  );

  return (
    // Note: Runway changed to h-[200vh] so the user has physical space to scroll!
    <div ref={containerRef} className="relative w-full h-[100vh]  overflow-x-hidden">
      
      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-end">
        
        {/* The White Canvas background with smooth mask changes */}
        <motion.div 
          style={{ clipPath: clipPathString }}
          className="w-full top-0 bg-black text-white flex flex-col items-center justify-center px-[6vw] " 
        >
           <div className="flex w-full h-[clamp(14rem,18vw,20rem)] " />

           <div className="flex flex-col w-full h-full jusitfy-start" >
            {/* switching projects button */}
            <ShowcaseProject {...projects[0]}/>
           
           </div>
          
        </motion.div>

      </div>
    </div>
  );
}