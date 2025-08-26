import React from 'react'

function FragmentDemo() {
  return (
    // <div>  
    //   {/* here we can replace this div with react fragment  and that will prevent the extra node from being added to the DOM */}
    //   <h1>Fragment Demo</h1>
    //   <p>This describes the Fragment Demo component</p>
    // </div>

    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This describes the Fragment Demo component</p>
    </React.Fragment>
  )
}

export default FragmentDemo
