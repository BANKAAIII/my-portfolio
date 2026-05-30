import React from 'react'
import { StaticImageData } from 'next/image'

interface landingPage3Props{
    image: StaticImageData
}

const LandingPagePart3 = () => {
  return (
    <div className="flex w-full h-screen bg-[#000000] flex-col items-center justify-center">
      <div className="flex w-[75%] h-[70%] bg-linear-to-bl from-[#9CB38D] to-[#3A2D2D] rounded-4xl" ></div>
    </div>
  )
}

export default LandingPagePart3
