"use client"

import React from 'react'
import { Provider } from 'jotai';
import { HoveringCursor } from '../ui/hoveringCursor';

interface shellProps{
    children: React.ReactNode;  // any renderable react stuff.
}

const Shell: React.FC<shellProps> = ({children}) => {
  
  return (
    <Provider>
      <div className="flex flex-col min-h-screen bg-[#000000] " >
        <HoveringCursor/>
      {children}
    </div>
    </Provider>
    
  )
}

export default Shell;
