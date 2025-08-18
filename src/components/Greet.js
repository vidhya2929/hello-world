import React from 'react' //any component we are creating must be imported

// function Greet(){
//   return <h1>Hello Harry</h1>
// } 

// rewrite the greet function with es6 a rrow function syntax
// reusabililty =>
const Greet = (props) => {                        //functional component
  console.log(props)
 return (
  <div>
 <h1>Hello {props.name} a.k.a{ props.heroName}</h1>
{/* JSX should contain only one wrapper element */}
 {props.children}
 </div>
//  we can return only one HTML element, so enclose all content in one wrapper 
) //(a.k.a => also known as)
}
// export const Greet = () => <h1>Hello Harry</h1>  //named export => here we have to import the component with the exact same name
 


// To render it in the browser -;
// export the Greet function from the Greet.js and import it in App.js and include it in the app component 

export default Greet 
// default export => allows us to import the component with any name


