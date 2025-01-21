import React from "react";

const MenuArea = ({children}) => {
  return (
    <nav className="menu-area">
      {children}
    </nav>
  )
}

export default MenuArea;