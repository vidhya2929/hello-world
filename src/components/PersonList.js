import React from 'react'
import Person from './Person'
function PersonList() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]
  const personList = persons.map(person=>(
     // person as a parameter which is passed as the prop to the Person component
    <Person key={person.id} person={person}/>
    // Key prop is a special attribute we need to include when creating a list of elements
    // A list that is rendered using map operator should have a prop called key and the value to that prop should be unique
    // key properties are not accessible in the child component
  ))
  return (
    <div>
      {personList}
    </div>
  )
}
export default PersonList


// Refactor it 