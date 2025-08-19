import React, { Component } from 'react'
import Child from './Child'
export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Parent'
    }
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent(childName){
    alert(`hello ${this.state.parentName} from ${childName}`)
  }
  // 
  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}/> {/* to this attribute greethandler we assign the greet parent method*/}
      </div>
    )
  }
}

export default Parent


// Methods as props in react component
