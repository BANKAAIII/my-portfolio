"use client"

import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {AnimatePresence, easeInOut, motion} from 'framer-motion';
import  { useAtom } from 'jotai';
import { aboutScrollLockAtom } from '@/store/globalAtoms';

import Image from 'next/image';
import Link from 'next/link';

interface NavBarProps{
  
    children?: React.ReactNode;  // any renderable react stuff.
    open:boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar : React.FC<{children?:NavBarProps}> = ({children }) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    const [scrolled , setScrolled] = useState<boolean>(false);
    const [open,setOpen] = useState<boolean>(false);
    const [contactClicked, setContactClicked] = useState<boolean>(false);
    const [showClose,setShowClose] = useState<boolean>(false);
    
    const [aboutScrollLock, setAboutScrollLock] = useAtom(aboutScrollLockAtom);

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
   <div className={` fixed z-999 flex w-full  ${scrolled && !open? "h-22 scale-[0.95]  mt-3" : " h-30 "}  items-center justify-center transition-all duration-300 ease-in-out `} >
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
        <div className={` ${scrolled? 'bg-white/40 rounded-[50px] ': ''} grid grid-cols-3   md:w-[clamp(22rem,25vw,72rem)] h-[clamp(3rem,3.5vw,5rem)] text-[clamp(1rem,1vw,8rem)] font-inter items-center justify-center p-2 gap-x-[clamp(1rem,1.2vw,2rem)]`} >
            
            <button className={`${scrolled? "hover:scale-[1.05] duration-80":"p-3 hover:bg-black  hover:text-white "} flex   rounded-full flex-wrap   font-medium items-center justify-center `}  onClick={()=>{setOpen(!open) ; setAboutScrollLock(true) }} >About</button>
            <button className={`${scrolled? "hover:scale-[1.05] duration-80":"hover:bg-black  hover:text-white p-3"} flex flex-wrap rounded-full font-medium  items-center justify-center`} >Skills</button>
            <motion.button
             
             whileTap={{scale:0.9, boxShadow: "0px 10px 25px rgba(75, 245, 115, 0.2)" }}
             className={`${scrolled? 'hover:text-[#4BF573]' : 'bg-[#4BF573] rounded-4xl p-1 md:p-2 '} flex  flex-wrap  font-medium items-center justify-center`} ><h1>Contact</h1></motion.button>
        </div>
     </div>

    <AnimatePresence mode="wait"> 
    {
        open && (
           
            <motion.div 
            className="z-980 fixed inset-0 items-center flex flex-row justify-center md:justify-end top-0  w-screen min-h-screen " 
            initial={{ opacity:0  }}
            animate={{ opacity:1 }}
            exit={{ opacity:0  }}
            transition={{duration:0.6, ease:easeInOut, delay:0.2}}
            >    
                
                {/* transperent part */}
                <div className={`hidden md:flex w-[40vw] pointer-events-auto overscroll-contain   scrollbar-none items-center justify-end bg-black/50 flex-row h-screen `} onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}  >
                    {
                        showClose && (
                            <div className="flex flex-row items-center justify-center w-[20vw] min-h-screen  " >
                                {/* closingButton */}
                            <motion.div 
                            initial={{opacity:0 , x:70}} 
                            animate={{opacity:1, x:0}} 
                            exit={{opacity:0 , x:70 }} 
                            transition={{duration:0.2, ease:"easeInOut"}}
                            className="flex items-center justify-center  w-[8vw] h-[8vw] rounded-full bg-black/30 text-[clamp(4rem,5vw,10rem)]   text-white  cursor-pointer" onClick={()=>{
                                setOpen(false)
                                setShowClose(false);
                                setAboutScrollLock(false);
                                
                             }} >
                                x
                            </motion.div>
                            </div>
                        )
                    }
                </div>
                {/* slidingDiv */}
               
                <motion.div 
                    className="flex items-center justify-start flex-col  w-screen md:w-[60vw] overflow-y-auto h-screen bg-[#ffffff]"
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
                                setAboutScrollLock(false);
                             }}
                    >Close</button>
                 </div>

                    {/* content */}
                    <div className="flex flex-col w-full items-center justify-start " >
                        {/* paragraph 1 */}
                        <div className="flex w-full flex-row items-center justify-center lg:text-start text-center md:justify-start font-inter text-[clamp(1rem,1.8vw,2rem)] pt-[clamp(2rem,3vw,6rem)] pl-[clamp(2rem,3vw,6rem)] pr-[clamp(2rem,3vw,6rem)]" >A focused Full Stack engineer based out of the vibrant landscapes of Mumbai, India.</div>
                        {/* paragraph 2 */}
                        <div className="flex w-full flex-row items-center justify-center lg:text-start text-center md:justify-start font-inter text-[clamp(1rem,1.8vw,2rem)] pt-[clamp(2rem,3vw,6rem)] pl-[clamp(2rem,3vw,6rem)] pr-[clamp(2rem,3vw,6rem)]" >I build layouts remotely and collaborate across open-source ecosystems. This focused autonomy is my secret weapon for writing clean, modular code that scales seamlessly across screens.</div>
                        {/* title & paragraph 1 */} 
                        <div className="flex flex-col w-full font-inter items-center" >
                            {/* head line  */}
                            <div className="flex w-full items-center justify-center lg:justify-start text-center lg:text-start font-medium text-[clamp(1.4rem,2.5vw,3rem)] pt-[clamp(2rem,3vw,6rem)] pl-[clamp(2rem,3vw,6rem)] pr-[clamp(2rem,3vw,6rem)]" >Creating Delightful Experiences</div>
                            {/* sub lines */}
                            <div className="flex w-full items-center justify-center lg:justify-start text-center lg:text-start font-light text-[clamp(1rem,1.5vw,2rem)] pt-[clamp(0.7rem,1vw,2rem)] pl-[clamp(2rem,3vw,6rem)] pr-[clamp(2rem,3vw,6rem)]" >To me, delightful experiences mean raw performance. I thrive on transforming complex Figma concepts into instant-loading, production-ready interfaces where every transition feels completely fluid.</div>
                        </div>
                        {/* title & paragraph 2 */} 
                        <div className="flex flex-col w-full font-inter items-center" >
                            {/* head line  */}
                            <div className="flex w-full items-center justify-center lg:justify-start text-center lg:text-start font-medium text-[clamp(1.4rem,2.5vw,3rem)] pt-[clamp(2rem,3vw,6rem)] pl-[clamp(2rem,3vw,6rem)] pr-[clamp(2rem,3vw,6rem)]" >Making an Impact</div>
                            {/* sub lines */}
                            <div className="flex w-full items-center justify-center lg:justify-start text-center lg:text-start font-light text-[clamp(1rem,1.5vw,2rem)] pt-[clamp(0.7rem,1vw,2rem)] pl-[clamp(2rem,3vw,6rem)] pr-[clamp(2rem,3vw,6rem)]" >I believe great web engineering is invisible—it just works flawlessly. My goal is to partner with design-driven teams to craft sleek, highly optimized web applications that elevate the modern user experience.</div>
                        </div>
                        {/* title & paragraph 3 */} 
                        <div className="flex flex-col w-full font-inter items-center" >
                            {/* head line  */}
                            <div className="flex w-full items-center justify-center lg:justify-start text-center lg:text-start font-medium text-[clamp(1.4rem,2.5vw,3rem)] pt-[clamp(2rem,3vw,6rem)] pl-[clamp(2rem,3vw,6rem)] pr-[clamp(2rem,3vw,6rem)]" >My Journey & Next Steps</div>
                            {/* sub lines */}
                            <div className="flex w-full items-center justify-center lg:justify-start text-center lg:text-start font-light text-[clamp(1rem,1.5vw,2rem)] pt-[clamp(0.7rem,1vw,2rem)] pl-[clamp(2rem,3vw,6rem)] pr-[clamp(2rem,3vw,6rem)]" >I’m constantly expanding my technical horizon—moving from solid backend systems and cryptographic protocols to global open-source ecosystems.I’m actively looking for full-time opportunities and Internships.</div>
                        </div>

                        {/* lets connect line  */}
                        <div className="flesx flex-col w-full items-center font-inter" >
                             <div className="text-gray-800 flex w-full items-center justify-center lg:justify-start text-center lg:text-start text-[clamp(1rem,1.1vw,3rem)]  pt-[clamp(1rem,3vw,6rem)] pl-[clamp(2rem,3vw,6rem)] pr-[clamp(2rem,3vw,6rem)]" >Let’s connect and make something awesome together!</div>
                        </div>
                        
                        {/* book call button */}
                        <div className="flesx flex-col w-full items-center font-inter justify-center md:justify-start " >
                              <motion.button
                                         className="flex h-[clamp(2rem,2.8vw,4rem)] w-[clamp(4.25rem,9vw,12rem)] bg-black rounded-full text-white items-center justify-center  text-[clamp(0.75rem,1.1vw,1.5rem)] font-inter tracking-[-1] cursor-pointer select-none  mt-[clamp(2rem,3vw,6rem)] ml-[clamp(2rem,3vw,6rem)] mr-[clamp(2rem,3vw,6rem)]"    
                                         whileTap={{backgroundColor:"#ffffff", webkitTextFillColor:"#000000" , border:2 , borderBlockColor:"#000000"}}    
                                     >
                                         Hire Me
                                     </motion.button>
                        </div>

                        {/* links */}
                        <div className="flesx flex-row w-full items-center font-inter pl-[clamp(2rem,3vw,6rem)] pr-[clamp(2rem,3vw,6rem)] pt-[clamp(1rem,3vw,6rem)] justify-center pb-[clamp(1rem,3vw,6rem)]" >
                             <div className="text-gray-800 flex w-full flex-row items-center justify-center lg:justify-start text-center lg:text-start text-[clamp(1rem,1.1vw,3rem)]  gap-[clamp(0.75rem,1.1vw,1.5rem)] underline-offset-2 underline" >
                                <Link className="text-center cursor-pointer"
                                    href="https://github.com/BANKAIII"
                                >Github</Link>
                                 <Link className="text-center cursor-pointer"
                                    href="https://github.com/BANKAIII"
                                >Twitter</Link>
                                 <Link className="text-center cursor-pointer hidden md:flex"
                                    href="https://github.com/BANKAIII"
                                >Medium</Link>
                                 <Link className="text-center cursor-pointer hidden md:flex"
                                    href="https://github.com/BANKAIII"
                                >Vercel</Link>
                                 <Link className="text-center cursor-pointer"
                                    href="https://github.com/BANKAIII"
                                >Resume</Link>
                                 <Link className="text-center cursor-pointer"
                                    href="https://github.com/BANKAIII"
                                >My Email</Link>
                             </div>
                        </div>

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
