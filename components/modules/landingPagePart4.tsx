import React from 'react'
import ProjectNavCard from '../ui/projectNavCard';
import MobileProjectNavCard from '../ui/mobileProjectNavCard';
import {motion} from "framer-motion";


const LandingPagePart4 = () => {
  return (
    <div className="flex flex-col items-center md:grid md:grid-rows-[15%_85%]  w-full h-[70dvh] md:h-screen" >
      
      {/* white screen */}
      <div className="flex flex-col w-full h-full " >
        {/* desktop breakpoints */}
        <div className="hidden md:flex w-full items-center justify-center md:justify-start flex-row mt-15 md:mt-0" >
         <div className="flex flex-col items-center justify-center pt-20 md:p-20 " >
            <ProjectNavCard title={"Lockify"} link={""}/>
            <ProjectNavCard title={"Metawerse"} link={""} />
            <ProjectNavCard title={"Coffee Website"} link={""} />
            <ProjectNavCard title={"Agora-Blockchain"} link={""} />
         </div>
        </div>
        {/* mobile breakpoints */}
        <div className="grid grid-rows-[25%_25%_25%_25%] w-full h-full mt-20 " >
          
          <motion.div 
               className={`relative z-50 flex w-full h-full items-center font-inter tracking-[-3%] text-black/80 pl-[5dvw] text-2xl bg-[#f2f2f2]`}
               initial={{x:-1000}}
               whileTap={{x:0}}
                ><MobileProjectNavCard title={"Lockify"} hoverColor={"bg-[#F2F2F2]"} link={""}/></motion.div> 
          <motion.div 
               className={`relative z-50 flex w-full h-full items-center font-inter tracking-[-3%] text-black/80 pl-[5dvw] text-2xl bg-[#e9e9e9]`}
               initial={{}}
               whileTap={{}}
                ><MobileProjectNavCard title={"Metawerse"} hoverColor={"bg-[#E9E9E9]"} link={""} /></motion.div>
          <motion.div 
               className={`relative z-50 flex w-full h-full items-center font-inter tracking-[-3%] text-black/80 pl-[5dvw] text-2xl bg-[#e0e0e0]`}
               initial={{}}
               whileTap={{}}
                ><MobileProjectNavCard title={"Coffee Website"} hoverColor={"bg-[#E0E0E0]"} link={""} /></motion.div>
          <motion.div 
               className={`relative z-50 flex w-full h-full items-center font-inter tracking-[-3%] text-black/80 pl-[5dvw] text-2xl bg-[#d9d9d9]`}
               initial={{}}
               whileTap={{}}
                ><MobileProjectNavCard title={"Agora-Blockchain"} hoverColor={"bg-[#D9D9D9]"} link={""} /></motion.div>
        </div>
      </div>
    </div>
  )
}

export default LandingPagePart4;
