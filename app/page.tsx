"use client";

import Image from "next/image";
import GreetingModule from "@/components/modules/greetingModule";
import { AnimatePresence } from "framer-motion";


export default function Home() {
  return (
    <div className="relative  flex flex-col min-h-sc w-full flex-1 overflow-scroll scrollbar-none items-center justify-center bg-amber-50 ">
      <AnimatePresence>
        <GreetingModule />
      </AnimatePresence>
    </div>
  );
}
