import React, { useState } from 'react'
import Image from 'next/image'
import {motion} from "framer-motion";

interface projectNavCardProps{
title:string;
link:string;
hoverColor:string;
}

const MobileProjectNavCard = ({title,link,hoverColor}:projectNavCardProps) => {
  const [hover,setHover] = useState<boolean>(false);
  const [press,setPress] = useState<boolean>(false);
  return (
    <motion.div 
     className={`relative z-50 flex w-full h-full items-center font-inter tracking-[-3%] text-black/80 pl-[5dvw] text-2xl ${hoverColor}`}
     initial={{}}
     whileTap={{}}
      >
    <div className="absolute z-60 flex w-full h-full items-center font-inter tracking-[-3%] text-black/80 pl-[5dvw] text-2xl" >
        {title}
    </div>
    </motion.div>
  )
}

export default MobileProjectNavCard;
