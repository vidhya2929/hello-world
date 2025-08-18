import React from "react";

const Hello = () =>{
  // return (
  //   <div class= 'dummyClass> 
  //     <h1>Hello Hermione</h1>
  //   </div>
  // )

  // Without using JSX
  // return React.createElement('div', null, 'Hello Hermione')    h1 style is not applied
  // return React.createElement('div', null,' <h1>Hello Hermione</h1>')   h1 style is not applied it is looks like a string
  // return React.createElement('div', null, 'h1' , 'Hello Hermione')
  return React.createElement(
    'div',
    // null,  //object of key value pairs that is applied to the element , if we want an id attribute 
    {id: 'hello', className: 'dummyClass'},
    React.createElement('h1', null, 'Hello Hermione'))  // accepts minimum 3 parameters -; 1) string that specifies the HTML tag to be rendered 2) Any optional properties 3) Children for the "div" tag
}
export default Hello  