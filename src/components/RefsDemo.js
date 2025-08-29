// the username input field to be focussed through refs
import React, { Component } from 'react'

 class RefsDemo extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
    this.cbRef = null  //step 1   create a property and assign a value of null 
    this.setCbRef = (element) => {          
      //we create a method that will assign a DOM element(as a parameter) to the ref we have just created
      this.cbRef = element  // attach this ref to the element
    }
  }
  componentDidMount(){
    if(this.cbRef){
      this.cbRef.focus()
    }
    // this.inputRef.current.focus()  //Calling the focus method on the current property inside the object 
    // console.log(this.inputRef)

    // react will call the ref callback with the DOM element when the component mounts ans call it with null when it unmounts
  }
  clickHandler = () => {
    alert(this.inputRef.current.value)   //accessing the value property of the input DOM node which is available as the current property
  }
  render() {
    return (
      <div>
        <input type = "text" ref={this.inputRef}/>
        <input type="text" ref = {this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>
        {/* As the page reloads we want o focus the input field */}
      </div>
    )
  }
}

export default RefsDemo
// 3 steps
// 1) create a Ref => Using react.createRef() method
// 2)Attach the ref to the input element in the render method => Use reserved 'ref' attribute
// Second way to set refs => callback refs
// focussing an input field using callback refs 
// 4 steps

// Refs cannot br attached to functional component

