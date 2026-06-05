"use client";

import React, { useState } from 'react';
import GreetingModule from "@/components/modules/greetingModule";
import { AnimatePresence } from "framer-motion";
import LandingPagePart1 from "@/components/modules/landingPAgePart1";
import LandingPagePart2 from '@/components/modules/landingPagePart2';
import LandingPagePart3 from '@/components/modules/landingPagePart3';
import LandingPagePart4 from '@/components/modules/landingPagePart4';
import LandingPagePart5 from '@/components/modules/landingPagePart5';
import LandingPagePart6 from '@/components/modules/landingPagePart6';

export default function Home() {
  // Starts locked as true so greeting mounts on load
  const [scrollLock, setScrollLock] = useState<boolean>(true);
  const imagee = "/agoraLandingPage.tsx"

  return (
    <div 
      className={`relative scrollbar-none flex flex-col w-full items-center justify-center bg-[#ffffff]  ${
        scrollLock ? "h-screen overflow-hidden" : "min-h-screen overflow-y-auto"
      }`}
    >
      
      <AnimatePresence mode="wait">
        {scrollLock && (
          <GreetingModule setScrollLock={setScrollLock} scrollLock={scrollLock} />
        )}
      </AnimatePresence>
      
      {!scrollLock && (
        <div className="w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
          <LandingPagePart1 />
          <LandingPagePart2 />
          <LandingPagePart3 />
          <LandingPagePart4 />
          <LandingPagePart5 />
          <LandingPagePart6 />
        </div>
      )}
    </div>
  );
}