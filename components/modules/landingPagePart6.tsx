import React from 'react'
import{ motion }from "framer-motion";
import Image from 'next/image';

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
            <div className=" hidden md:flex h-full items-center justify-center font-inter font-semibold text-[#bcbcbc] tracking-[-1] text-[clamp(2rem,2.1vw,2.25rem)] pl-10" > Follow Me</div>
            <div 
                className="flex flex-row h-full items-center justify-center gap-x-2 md:gap-x-4 md:pr-10"
            >
                <div><Image width={90} height={90} src={"/github.png"} alt={""} className="flex h-full aspect-square p-4 md:p-2 invert-100"/></div>
                <div><Image width={90} height={90} src={"/discord.png"} alt={""} className="flex h-full aspect-square p-4 md:p-2 "/></div>
                <div><Image width={90} height={90} src={"/twitter.png"} alt={""} className="flex h-full aspect-square p-4 md:p-2 "/></div>
                <div><Image width={90} height={90} src={"/email.png"} alt={""} className="flex h-full aspect-square p-4 md:p-2 invert-100"/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPagePart6
