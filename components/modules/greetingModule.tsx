"use client"

import React, { SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Greeting from '@/components/ui/greeting';
import { useEffect, useState } from 'react';
import { Dispatch } from 'react';

interface GreetingModuleProps{
    scrollLock: boolean;
    setScrollLock: Dispatch<SetStateAction<boolean>>;
  }

const GreetingModule : React.FC<GreetingModuleProps> = ({setScrollLock,scrollLock}) => {

  const [greeting , setGreeting] = useState<boolean>(false);

  useEffect( ()=>{
      setScrollLock(true);
      setGreeting(true);
  
   
    let timer2 = setTimeout( ()=>{
      setGreeting(false);
    },3300 );

    let unlockTimer = setTimeout(() => {
    setScrollLock(false);
  }, 3300 + 800);

    return () => {
      
      clearTimeout(timer2);
      unlockTimer && clearTimeout(unlockTimer);
    }
  } , [] );

  return (
    <AnimatePresence mode="wait"> 
     {greeting && <motion.div
      initial={{ opacity:1  }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 ,y:800 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay:0.9 }}
      className={`flex flex-col w-full overflow-hidden  h-screen items-center fixed inset-0  justify-center  z-999  font-sans dark:bg-black `} >
      
     
        <Greeting title="NAMASTE 🙏" trigger={greeting} />
      
     
    </motion.div> }
    </AnimatePresence>
  )
}

export default GreetingModule;
