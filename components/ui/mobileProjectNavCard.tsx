import React, { useState } from 'react'
import Image from 'next/image'
import {motion} from "framer-motion";

interface projectNavCardProps{
title:string;
link:string;
hoverColor:string;
}

const MobileProjectNavCard = ({ title, link, hoverColor }: projectNavCardProps) => {
  return (
    <motion.div 
      className={`relative flex w-full h-full items-center font-inter tracking-[-3%] text-black/80 text-2xl ${hoverColor} cursor-pointer`}
      whileTap={{ scale: 0.98 }}
      onTap={() => console.log("Navigating to", link)}
    >
      {/* 1. The wrapper handles the padding.
         2. The absolute overlay uses 'inset-0' to fill the wrapper 
            EXACTLY, inheriting the padding from the wrapper.
      */}
      <div className="relative flex w-full h-full items-center pl-[5dvw]">
        {title}
        
        {/* 'inset-0' makes it fill the parent 'div' exactly, 
            which includes the pl-[5dvw] padding. */}
        <motion.div 
          className="absolute inset-0 z-[70]"
          style={{ mixBlendMode: "difference" }}
          whileTap={{ backgroundColor: "#FFFFFF" }}
        />
      </div>
    </motion.div>
  );
}

export default MobileProjectNavCard;
