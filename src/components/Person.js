import React from 'react'

function Person({person}) {
  // functionmPerson({person,key})          in the person component key is not a prop and if we try to accept it ,it will result in undefined
  // If we want to access it on the child component,you should pass it as a different prop,key prop is reserved
  // Key help react identofy which item in a list have changed or added or removed and plays a crucial role in handling UI updates efficiently 
  return ( 
   <h2>
    I am {person.name}. I am {person.age} years old.I know {person.skill}.
    {/* here person represents the  object in the list, and to access the properties we need the dot operator */}
    {/* we pass the data down as props from the list component */}
    </h2>
  )
}

export default Person

// List without key attribute
// With key the react match the children in the original tree with the children in the subsequent tree ,Now the react knows that the element with the id = 3 is the new one and the elements with the key 1 & 2 have just moved(so the react will preserve the subtree and simply insert the new item at the top of the list)