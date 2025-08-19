// rce and tab to get a class component (due to react snippets)

import React, { Component } from 'react'

class Counter extends Component {
  // rconst to create a constructor
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
      // modifying the state directly
      // this.state.count = this.state.count + 1;     in the UI it doesn't change ,only console changes(i.e, react will not re-render the component)
      // console.log(this.state.count)
      // Using setState 

    //   this.setState({
    //     count: this.state.count + 1
    //     // here the console value is one less than the rendered value, because calls to setState are asynchronous 
    //   }, ()=> {console.log('callback value', this.state.count)})
      console.log(this.state.count)   //It is being called before the state is actually set

       // whenever we want to update the state based on previous state then pass a function as an argument to setState method instead of passing in an object
       this.setState((prevState, props) =>({
        count: prevState.count + 1  //count: prevState.count + props.addValue
       }))
         console.log(this.state.count)
    }


    // to handle the situation where execute the code only after the state has been updated ,we pass in a callback function as the second parameter
    // setState has 2 parameters => 1)state object , 2)callback function(it is an arrow function)
  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  // react group multiple setState calls into a single update for better performance
  render() {
    return (
      <div>
      <div>count - {this.state.count}</div>
      <button onClick={()=> this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
