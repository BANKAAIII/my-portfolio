"use client"

import React from 'react'
import {useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

interface greetingProps{
    title:string;
    trigger:boolean
}

const greeting : React.FC<greetingProps> = ({title , trigger}) => {
    useEffect( ()=>{

    }, [trigger] );
  return <AnimatePresence>
    { trigger &&  <motion.div 
        initial={{ opacity:0 , y:-90 , scale:1 ,filter:"blur(10px)" }}
        animate={{ opacity:1, y:0 , scale:0.9, filter:"blur(0px)"   }}
        exit={{ opacity:0 , y:-100 , scale:0.95 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay:0.7}}
        className="flex pt-4 pl-6 pr-6 flex-row  font-josefin text-fluid-display font-light items-center justify-center text-white overflow-hidden" >
      {title}
    </motion.div>
    }
  </AnimatePresence>
        
 
}

export default greeting ;
