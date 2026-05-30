import React from 'react'
import ProjectNavCard from '../ui/projectNavCard';
import {motion} from "framer-motion";


const LandingPagePart4 = () => {
  return (
    <div className="flex flex-col items-center md:grid md:grid-rows-[15%_85%] w-full min-h-screen" >
      <div className="flex w-full h-full bg-[#000000]" ></div>
      {/* white screen */}
      <div className="flex flex-col w-full h-full" >
        <div className="flex w-full items-center justify-center md:justify-start flex-row mt-15 md:mt-0" >
         <div className="flex flex-col items-center justify-center pt-20 md:p-20 " >
            <ProjectNavCard title={"Lockify"} link={""}/>
            <ProjectNavCard title={"Metawerse"} link={""} />
            <ProjectNavCard title={"Coffee Website"} link={""} />
            <ProjectNavCard title={"Agora-Blockchain"} link={""} />
         </div>
            
        </div>
      </div>
    </div>
  )
}

export default LandingPagePart4;
