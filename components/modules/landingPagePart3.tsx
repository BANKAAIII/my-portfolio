import React from 'react'
import { StaticImageData } from 'next/image'
import { userDetailsAtom , projectsAtom} from '@/store/globalAtoms'
import { useAtomValue } from 'jotai'
import  Image  from 'next/image'


interface landingPage3Props{
    shortDescription: string
    image: StaticImageData
}

const LandingPagePart3 = () => {

  const projects  = useAtomValue(projectsAtom);

  return (
    <div className="flex w-full min-h-[100dvh] bg-[#000000] flex-col items-center justify-center  pb-[clamp(5rem,8vw,13rem)]">
      <div className="flex flex-col items-center justify-center w-[clamp(10rem,70vw,200rem)] bg-linear-to-bl from-[#9CB38D] to-[#3A2D2D] rounded-4xl" >
        {/* image  */}
        <div className="flex w-full h-full p-4  md:p-10 items-center justify-center " >
          <Image width={1000} height={1000} src={"/agoraMobileSample.png"} alt={""}  className="rounded-2xl flex w-full h-full"/>
        </div>
        {/* short description */}
        <div className="flex w-full items-center justify-center text-center text-[clamp(0.7rem,1.3vw,1.8rem)] p-[clamp(1.5rem,3vw,6rem)] text-white font-inter" >{projects[0].shortDescription}</div>
      </div>
    </div>
  )
}

export default LandingPagePart3
