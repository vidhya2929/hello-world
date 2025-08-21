import React from 'react'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana','Bruce']
  // to make map function more simple we can store the result of the map function on a const
  const nameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
  // Adding the key prop but here wedon't have an ID that uniquely identifies each item in the array so use the names itskef as the key
  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
      {nameList}
      {/* map method to render list */}
      {/* {
        names.map(name =><h2>{name}</h2>)
      } */}
    </div>
  )
}

export default NameList
