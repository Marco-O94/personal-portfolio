import React, { ReactNode } from 'react'

const MainMenu = ({children}: {children: ReactNode}) => {
  return (
    <div className="drawer">
  <input id="main-menu" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="main-menu" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
  )
}

export default MainMenu