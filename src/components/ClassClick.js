import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler(){
    console.log('clicked the button')
  }
  render() {
    return (
      <div>
        {/* In a class COmponent methods will be accessed using "this" keyword */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
