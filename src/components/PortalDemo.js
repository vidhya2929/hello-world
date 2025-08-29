import React from 'react'
import ReactDOM from 'react-dom'
function PortalDemo() {
  return ReactDOM.createPortal(     //takes 2 parameters =>1) JSX that render, 2)The DOM node to mount the element on to
      <h1>
        Portals demo
      </h1>,
      document.getElementById('portal-root')
  )
}

export default PortalDemo
//by default it is under 'root' 
// To make it under 'portal-root', import ReactDOM 

