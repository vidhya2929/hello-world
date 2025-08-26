import React from 'react'

function Columns() {
  const items = []
  return (
    // <div>
    //   <td>Name</td>    
    //       {/* td cannot be a child of div tag */} {/*But div is neccessary as we are passing multiple elements So ew replace the div tag using React.Fragment */}
    //   <td>Moto</td>
    // </div>

    <React.Fragment>
      {
        items.map( item => (
          <React.Fragment key = {item.id}>
            {/* Key attribute is the only attribute that can be passed to a react fragments*/}
            <h1>Title</h1>
            <p>{item.title}</p>
          </React.Fragment>
        ))
      }
      <td>Name</td>
      <td>Harry</td>
    </React.Fragment>
      
  )

}

export default Columns
