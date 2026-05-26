import React from 'react'

interface NavBarProps{
    children: React.ReactNode;  // any renderable react stuff.
}

const NavBar : React.FC<{children: NavBarProps}> = ({children}) => {
  return <div>
      NavBar
    </div>
  
}

export default NavBar;
