import { atom } from "jotai";
import {atomWithStorage} from "jotai/utils";

interface userDetails{
    name:string,
    email:string
}

interface projects{
    id:string,
    title:string,
    shortDescription:string,
    techStack:string[],
    problemStatement:string,
    solution:string,
    landingPageImage : string,
    githubLink:string,
    liveLink:string
}

export const aboutScrollLockAtom = atomWithStorage<boolean>('aboutScrollLock',false);

export const userDetailsAtom = atomWithStorage<userDetails>('userDetails',{
    name:"Ameya Warang",
    email:"ameyawarang450@gmail.com"
});

export const projectsAtom = atomWithStorage<projects[]>('projects',[
   { 
        id:"1",
        title:"Agora-blockchain",
        techStack:["next.js","javaScript","tailwind"],
        shortDescription:" A decentralised voting platform utilizing blockchains ultimate power to make way for secure and confidential voting process.",
        problemStatement:"Agora required a complete interface evolution to match its powerful open-source capabilities. The platform’s core functionality was robust, but the user interface needed to be elevated to feel modern, intuitive, and highly professional.",
        solution:"Every piece of the interface had to be re-engineered to lower the barrier to entry for new users while ensuring that complex contributor workflows remained exceptionally clean, structured, and completely accessible.",
        landingPageImage:"agoraLandingPage",
        githubLink:"",
        liveLink:""

    },
    { 
        id:"2",
        title:"Metawerse",
        techStack:["next.js","javaScript","tailwind","react.js"],
        shortDescription:" A decentralised voting platform utilizing blockchains ultimate power to make way for secure and confidential voting process.",
        problemStatement:"Agora required a complete interface evolution to match its powerful open-source capabilities. The platform’s core functionality was robust, but the user interface needed to be elevated to feel modern, intuitive, and highly professional.",
        solution:"Every piece of the interface had to be re-engineered to lower the barrier to entry for new users while ensuring that complex contributor workflows remained exceptionally clean, structured, and completely accessible.",
        landingPageImage:"agoraLandingPage",
        githubLink:"",
        liveLink:""

    },
    { 
        id:"3",
        title:"Lockify",
        techStack:["next.js","javaScript","tailwind","postgresql"],
        shortDescription:" A decentralised voting platform utilizing blockchains ultimate power to make way for secure and confidential voting process.",
        problemStatement:"Agora required a complete interface evolution to match its powerful open-source capabilities. The platform’s core functionality was robust, but the user interface needed to be elevated to feel modern, intuitive, and highly professional.",
        solution:"Every piece of the interface had to be re-engineered to lower the barrier to entry for new users while ensuring that complex contributor workflows remained exceptionally clean, structured, and completely accessible.",
        landingPageImage:"agoraLandingPage",
        githubLink:"",
        liveLink:""

    }
])

