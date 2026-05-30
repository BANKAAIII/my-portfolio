import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ShowcaseProject from './showcaseProject';
import { StaticImageData } from 'next/image';
import agoraLandingPage from "../../public/agoraLandingPage.jpeg";

const projects : showCaseProjectsInterface[] = [
    { 
        projectNo: 1,
        name:"Agora-blockchain",
        techStack:["next.js","javaScript","tailwind"],
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

export default function Smooth2DCornerExpand() {
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
           <div className="flex w-full h-[clamp(14rem,15vw,20rem)] " />

           <div className="flex flex-col w-full h-full jusitfy-start" >
            {/* switching projects button */}
            <ShowcaseProject {...projects[0]}/>
           {/* ProjectShowcase - heading */}
           {/* Project tech stack */}

           {/* Project Metadata */}
           {/* Projrct Preview */}
           {/* All Projects navigation */}

           {/* blogs and posts carousel*/}
           {/* contact me title */}
           {/* contact form */}
           </div>
          
        </motion.div>

      </div>
    </div>
  );
}