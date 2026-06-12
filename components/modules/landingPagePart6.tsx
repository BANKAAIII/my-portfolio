import React from 'react'
import{ motion }from "framer-motion";

const LandingPagePart6 = () => {
  return (
    <div className="flex flex-col w-full pt-[30vw] pb-[30vw] md:pt-0 md:pb-0 md:min-h-screen  items-center justify-center " > 
      <div className="flex w-full items-center justify-center font-inter tracking-[-3] font-semibold text-[clamp(2rem,5vw,6rem)]" >Let's Work Together.</div>
      <div className="flex w-full items-center justify-center font-inter  tracking-[-1] text-[clamp(0.9rem,2vw,2.25rem)] text-[#565656] text-center" >Integrating Advanced technologies and Ideas together to turn dreamy idea’s into reality</div>
      
      <div className="flex w-full gap-x-[clamp(1.75rem,3.1vw,3.25rem)] mt-[clamp(1.75rem,3.1vw,3.25rem)] mb-[clamp(1.75rem,3.1vw,3.25rem)]  flex-row items-center justify-center h-[clamp(2rem,3vw,3.25rem)]" >
        <motion.button
            className="flex h-full w-[clamp(6.25rem,10vw,12.5rem)] bg-black rounded-[20px] text-white items-center justify-center  text-[clamp(0.75rem,1.3vw,2rem)] font-inter tracking-[-1] cursor-pointer select-none"    
            whileTap={{backgroundColor:"#ffffff", webkitTextFillColor:"#000000" , border:2 , borderBlockColor:"#000000"}}    
        >
            Hire Me
        </motion.button>
        <motion.button
            className="flex h-full w-[clamp(6.25rem,10vw,12.5rem)] border-2 rounded-[20px] border-dashed items-center justify-center  text-[clamp(0.75rem,1.3vw,2rem)] font-inter tracking-[-1] select-none"   
            whileTap={{backgroundColor:"#000000", webkitTextFillColor:"#ffffff"}}     
        >
            Email
        </motion.button>
      </div>

      <div className="flex w-full items-center justify-center " >
        <div className="flex w-[clamp(16.81rem,50vw,66.8rem)] bg-[#acacac]/30 rounded-[10px] h-[clamp(2.68rem,8vw,9.81rem)] items-center justify-center md:justify-between" >
            {/* hidden when < mdscreens */}
            <div className=" hidden md:flex items-center justify-center font-inter font-semibold text-[#bcbcbc] tracking-[-2] text-[clamp(2rem,2.1vw,2.25rem)] pl-10" > Follow Me</div>
            <div 
                className="flex flex-row items-center justify-center gap-x-10 md:pr-10"
            >
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPagePart6
