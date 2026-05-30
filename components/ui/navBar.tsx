"use client"

import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {AnimatePresence, easeInOut, motion} from 'framer-motion';

import Image from 'next/image';

interface NavBarProps{
  
    children?: React.ReactNode;  // any renderable react stuff.
    open:boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar : React.FC<{children?:NavBarProps}> = ({children }) => {

    const [scrolled , setScrolled] = useState<boolean>(false);
    const [open,setOpen] = useState<boolean>(false);
    const [contactClicked, setContactClicked] = useState<boolean>(false);
    const [showClose,setShowClose] = useState<boolean>(false);
    

    useEffect( ()=>{
        function handleScroll():void {
            if(window.scrollY > 20){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, [] );

    const handleHoverIn = () => {
        setShowClose(true);
       
        }
    
    const handleHoverOut = () => {
        setShowClose(false);
        
        }


  return(
    <>
   <div className={` fixed z-998 flex w-full  ${scrolled && !open? "h-22 scale-[0.95]  mt-3" : " h-30 "}  items-center justify-center transition-all duration-300 ease-in-out `} >
     {/* main Div */}
     <div className={` flex flex-row w-full items-center justify-center md:justify-between   md:p-2 md:pl-[1vw] md:pr-6  h-24`} >
        
        {/* profilePicture && admin button*/}  
        <div className="hidden md:flex w-[clamp(4rem,30vw,25rem)] h-full  items-center justify-start" >   
           {/* pfp */}
           <div className="flex  ml-[1vw] mr-4 h-full aspect-square  rounded-full" >
            
           </div>
           {/* name */}
           <div className={` ${scrolled?"hidden":"flex"} mr-4  w-full h-full items-center justify-start text-[clamp(1rem,1.2vw,5rem)]`} >
            SoftwareDeveloper
           </div>

        </div>

        {/* navigation */}
        <div className={` ${scrolled? 'bg-white/40 rounded-[50px] ': ''} grid grid-cols-3  w-full md:w-[clamp(22rem,11vw,32rem)]  text-[clamp(1rem,1.2vw,8rem)] font-inter items-center justify-center p-3 md:p-6 gap-x-[clamp(2rem,1vw,8rem)]`} >
            
            <button className={`${scrolled? "hover:scale-[1.05] duration-80":"p-3 hover:bg-black  hover:text-white "} flex   rounded-full flex-wrap   font-medium items-center justify-center `}  onClick={()=>setOpen(!open)} >About</button>
            <button className={`${scrolled? "hover:scale-[1.05] duration-80":"hover:bg-black  hover:text-white p-3"} flex flex-wrap rounded-full font-medium  items-center justify-center`} >Skills</button>
            <motion.button
             
             className={`${scrolled? 'hover:text-[#4BF573]' : 'bg-[#4BF573] rounded-4xl   p-2'} flex  flex-wrap  font-medium items-center justify-center`} >Contact</motion.button>
        </div>
     </div>

    <AnimatePresence mode="wait"> 
    {
        open && (
           
            <motion.div 
            className="z-999 fixed inset-0 items-center flex flex-row justify-center md:justify-end top-0  w-screen min-h-screen " 
            initial={{ opacity:0  }}
            animate={{ opacity:1 }}
            exit={{ opacity:0  }}
            transition={{duration:0.6, ease:easeInOut, delay:0.2}}
            >    
                {/* closing button */}
                <div className={`hidden md:flex w-[40vw] items-center justify-end bg-black/50 flex-row h-full `} onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
                    {
                        showClose && (
                            <div className="flex flex-row items-center justify-center w-[20vw] min-h-screen  " >
                            <motion.div 
                            initial={{opacity:0 , x:70}} 
                            animate={{opacity:1, x:0}} 
                            exit={{opacity:0 , x:70 }} 
                            transition={{duration:0.2, ease:"easeInOut"}}
                            className="flex items-center justify-center  w-[8vw] h-[8vw] rounded-full bg-black/30 text-[clamp(4rem,5vw,10rem)]   text-white  cursor-pointer" onClick={()=>{
                                setOpen(false)
                                setShowClose(false);
                             }} >
                                x
                            </motion.div>
                            </div>
                        )
                    }
                </div>
                {/* slidingDiv */}
               
                <motion.div 
                    className="flex items-center justify-start flex-col w-screen md:w-[60vw] min-h-screen bg-[#ffffff]"
                    initial={{ opacity:1,x:"100%" }}
                    animate={{ opacity:1, x:"0%"}}
                    exit={{ x:"100%" }}
                    transition={{duration:0.6, ease:easeInOut}}
                    >
                    
                 {/* navigation to close  */}
                 <div className="flex flex-row items-center justify-center md:justify-between  w-full h-[8vh] mt-[6vh] " >
                    {/* pfp */}
                    <div className="md:block h-full aspect-square bg-amber-700/10 rounded-full hidden ml-[4vh]" ></div>
                    {/* closing button */}
                    <button
                        className="flex border items-center justify-center text-[clamp(1rem,1vw,1.5rem)] border-black  rounded-full w-[clamp(7rem,6vw,13rem)] h-[clamp(2.5rem,2vw,10rem)] md:mr-[4vh]"
                        onClick={()=>{
                                setOpen(false)
                                setShowClose(false);
                             }}
                    >Close</button>
                 </div>
                </motion.div>
                
            </motion.div>
            
        )
       
    }
     </AnimatePresence>
    </div>
    </>
  )
}

export default NavBar;
