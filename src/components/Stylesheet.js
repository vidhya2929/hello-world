// Using regular style sheets
import React from 'react'
import './myStyles.css'
function Stylesheet(props) {
  let className = props.primary ? 'primary':''
  return (
    <div>
      {/* here reading the value of primary prop and if it is true set the value of primary else empty string */}
      {/* <h1 className={className}>Stylesheets</h1>   */}
      {/* here the classname variable is assigned as a value to the classname attribute */}
      {/* if we want to specify multiple classes,use template literals */}
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
      {/* alternative to template literals there is a library "classnames" */}
    </div>
  )
}

export default Stylesheet
