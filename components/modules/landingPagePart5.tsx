import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from "framer-motion";

interface blogData {
    title: string;
    link: string;
}

const dummeyBlogsCarouselData: blogData[] = [
    { title: "How to build a fullstack app with NextJS and Prisma", link: "" },
    { title: "snmokdm", link: "" },
    { title: "How to build a fullstack app with NextJS and Prisma", link: "" },
    { title: "snmokdm", link: "" },
    { title: "How to build a fullstack app with NextJS and Prisma", link: "" },
    { title: "snmokdm", link: "" },
    { title: "How to build a fullstack app with NextJS and Prisma", link: "" },
    { title: "snmokdm", link: "" }
];

const mVariants: Variants = {
    animate: {
        x: [0, -1000], // Adjusted direction for standard carousel flow
        transition: {
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }
        }
    }
};
const m2Variants: Variants = {
    animate: {
        x: [0, 1000], // Adjusted direction for standard carousel flow
        transition: {
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }
        }
    }
};

const LandingPagePart5 = () => {
    // Separate controls for separate rows
    const row1Controls = useAnimation();
    const row2Controls = useAnimation();

    useEffect(() => {
        row1Controls.start("animate");
        row2Controls.start("animate");
    }, [row1Controls, row2Controls]);

    return (
        // Wrapper with overflow-hidden to clip the moving items
        <div className="flex flex-col items-center justify-center overflow-hidden w-full">
            
            {/* Row 1 */}
            <motion.div
                className="flex flex-row items-center w-max select-none"
                variants={m2Variants}
                animate={row1Controls}
            >
                {[...dummeyBlogsCarouselData, ...dummeyBlogsCarouselData].map((content, i) => (
                    <motion.div
                        key={i}
                        // Handles mouse and touch
                        onHoverStart={() => row1Controls.stop()}
                        onHoverEnd={() => row1Controls.start("animate")}
                        onTapStart={() => row1Controls.stop()}
                        onTap={() => row1Controls.start("animate")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shrink-0 w-[clamp(8.7rem,18vw,24rem)] h-[clamp(8.7rem,18vw,19.5rem)] rounded-[20px] bg-[#D6C1FD] m-4 flex items-center justify-center p-4 cursor-pointer"
                    >
                        {content.title}
                    </motion.div>
                ))}
            </motion.div>

            {/* Row 2 */}
            <motion.div
                className="flex flex-row items-center w-max select-none"
                variants={mVariants}
                animate={row2Controls}
                // Reverse direction for visual variety if desired
                style={{ scaleX: -1 }} 
            >
                {[...dummeyBlogsCarouselData, ...dummeyBlogsCarouselData].map((content, i) => (
                    <motion.div
                        key={i}
                        style={{ scaleX: -1 }} // Flip back the text
                        onHoverStart={() => row2Controls.stop()}
                        onHoverEnd={() => row2Controls.start("animate")}
                        onTapStart={() => row2Controls.stop()}
                        onTap={() => row2Controls.start("animate")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shrink-0 w-[clamp(8.7rem,18vw,24rem)] h-[clamp(8.7rem,18vw,19.5rem)] bg-[#C2FE94] rounded-[20px] m-4 flex items-center justify-center p-4 cursor-pointer"
                    >
                        {content.title}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default LandingPagePart5;