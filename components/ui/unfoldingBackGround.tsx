import React, { useRef } from 'react'
import { useScroll, useTransform , useSpring} from 'framer-motion';



const UnfoldingBackGround = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    // starting and ending point of the animation.
    const { scrollYProgress } = useScroll({
        target:containerRef,
        offset:["start start", "end end"]
    });

    // for smooth scrolling we use framers inbuilt characterstics
    const smoothScroll = useSpring(scrollYProgress, {
        mass: 0.2,
        stiffness: 75,
        damping: 18,
        restDelta: 0.001
    });

    // map the coordinates
    const topLeftX = useTransform( smoothScroll , [0.1] , ["",""] );
    const topLeftY = useTransform( smoothScroll , [0,1] , ["",""] );

    const topRightX = useTransform( smoothScroll , [0,1] , ["",""] );
    const topRightY = useTransform( smoothScroll , [0,1] , ["",""] );

    const clipPathString = useTransform(
        [topLeftX,topLeftY,topRightX,topRightY],
        ([tlX,tlY,trX,trY])=>
            `polygon(${tlX} ${tlY} ${trX} ${trY}, 100% 100% , 0% 100%)`
    );

  return ( 
    <div ref={containerRef} className="flex w-full h-[100vw] overflow-x-hidden " >{/* this is the main container which tracks scroll from top to bottom */}
      
    </div>
    
  )
}

export default UnfoldingBackGround;