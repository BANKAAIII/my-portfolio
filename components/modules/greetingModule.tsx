"use client"

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Greeting from '@/components/ui/greeting';
import { useEffect, useState } from 'react';


const GreetingModule : React.FC = () => {

  const [greeting , setGreeting] = useState<boolean>(false);

  useEffect( ()=>{
    let timer = setTimeout( ()=>{
      setGreeting(true);
    } , 800 );
   
    let timer2 = setTimeout( ()=>{
      setGreeting(false);
    },4000 );

    

    return () => {
      clearTimeout(timer );
      clearTimeout(timer2);
    }
  } , [] );

  return (
    <AnimatePresence>
     {greeting && <motion.div
      initial={{ opacity:1  }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 ,y:20 }}
      transition={{ duration: 0.6, ease: "easeInOut"  }}
      className="flex flex-col w-full  h-screen flex-1 items-center absolute z-10 justify-center font-sans dark:bg-black " >
      
      <div className=" flex flex-wrap overflow-hidden" >
        <Greeting title="NAMASTE 🙏" trigger={greeting} />
      </div>
     
    </motion.div> }
    </AnimatePresence>
  )
}

export default GreetingModule;
