import React from 'react'

const heading = {
  fontSize: '72px', //key is the css propertyname and which is camelCased and it's value is specified as a string
  color: 'blue'
}
function inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default inline
// In react, inline styles are not specified as a string,they specified within object key is the camelcased version of the styling and it's value is a string