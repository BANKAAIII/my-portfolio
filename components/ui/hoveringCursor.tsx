import { motion , useSpring , useMotionValue} from "framer-motion";
import { useEffect, useState, useRef } from "react";


export const HoveringCursor =() =>{

   
    const [tap,setTap]= useState<boolean>(false);
    const coordinateX = useMotionValue(-100);
    const coordinateY = useMotionValue(-100);

    const springConfig = { damping:25 , stiffness:180 };
    const smoothX = useSpring(coordinateX , springConfig);
    const smoothY = useSpring(coordinateY,springConfig);



    useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      coordinateX.set(e.clientX - 16); // Centering the cursor
      coordinateY.set(e.clientY - 16);
    };

    onmousedown= ()=> setTap(true);
    onmouseup = () => setTap(false);

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);

   
  }, []);

    return (
      <motion.div
     
      className={`hidden md:flex z-999 fixed top-0 left-0 pointer-events-none items-center  justify-center`}
      style={{
        x: smoothX,
        y: smoothY,
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "white",
        // The "reveal" effect:
        mixBlendMode: "difference", 
        // This makes the cursor invert colors of whatever is behind it
      }}
     
      animate={{scale: tap? 0.7 : 1}}
     
    />
    )
}