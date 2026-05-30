import React from 'react'

interface FloatingAboutProps {
  children: React.ReactNode;  // any renderable react stuff.
  open:boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloatingAbout : React.FC<FloatingAboutProps> = ({children,open,setOpen}) => {
  return (
    {
    <div className="relative z-999 bg-amber-900/10" >
      
    </div>
    }
  )
}

export default FloatingAbout
