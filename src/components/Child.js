import React from 'react'

function Child(props) {
  return (
    <div>
      {/* <button onClick = {props.greetHandler}>Greet Parent</button>   [1] */}
      <button onClick={()=> props.greetHandler('child')}>Greet Parent</button>   {/* [2] */} 
    {/* now we can pass in any number of parameters to the greetHandler */}
    </div>
  )
}

export default Child
// [1] when clicking on the button in the child component , the method executed in the parent component  should be executed
// or a child component calls a parent component method and it is achieved through props => for that we pass the method itself as a prop to the child component

// [2] how to pass parameters from child Component to parent component
// Arrow Function syntax is the simplest way to pass pararameters from child component to the parent component