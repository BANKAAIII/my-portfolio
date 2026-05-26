"use client"

import React from 'react'
import GreetingModule from "@/modules/greetingModule";

interface shellProps{
    children: React.ReactNode;  // any renderable react stuff.
}

const Shell: React.FC<shellProps> = ({children}) => {



  return (
    <div className="flex flex-col min-h-screen bg-[#000000] " >
      {children}
    </div>
  )
}

export default Shell;
