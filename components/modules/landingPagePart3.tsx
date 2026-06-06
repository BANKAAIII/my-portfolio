import React from 'react'
import { StaticImageData } from 'next/image'
import { userDetailsAtom , projectsAtom} from '@/store/globalAtoms'
import { useAtomValue } from 'jotai'


interface landingPage3Props{
    shortDescription: string
    image: StaticImageData
}

const LandingPagePart3 = () => {

  const projects  = useAtomValue(projectsAtom);

  return (
    <div className="flex w-full h-[60dvh] bg-[#000000] flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-between w-[clamp(8rem,70vw,100rem)] h-[clamp(20rem,40vw,50rem)] bg-linear-to-bl from-[#9CB38D] to-[#3A2D2D] rounded-4xl" >
        {/* image  */}
        <div className="flex w-full h-full p-10 items-center justify-center " >

        </div>
        {/* short description */}
        <div className="flex w-full items-center justify-center text-center text-[clamp(0.7rem,1.3vw,2rem)] p-[clamp(0.8rem,2.5vw,4rem)] text-white font-inter" >{projects[0].shortDescription}</div>
      </div>
    </div>
  )
}

export default LandingPagePart3
