import React from 'react'  //snippet to create functional component

function Functionclick() {

  function clickHandler(){
    console.log("Button Clicked")
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>

    {/* <button onClick = {clickHandler()}> Click</button>  It becomes a function call */}
    </div>
  )
}

export default Functionclick
