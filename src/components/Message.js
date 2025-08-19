 import React, { Component } from "react";

 class Message extends Component {   
  //creating state component
  //1)create a state object and initialize it (done inside the class constructor)
  // 2) bind this state value in this render function
  // 3)Add HTML for a button element
  constructor(){
    super() //because we extend react's component class and a call has to be made to the base class constructor
    this.state = { //state object      //use 'this' as we inside a class
      //state is a reserved keyword in react
      message: 'Welcome visitor'
    }
  }

  changeMessage(){
    // Within the body,to change the state of the component => call the 'setState' method
    this.setState({   //call this method to alter the state of class component
      // this accepts the new state of the component
      message: 'Thank you for subscribing'
    }) 
  }
  render(){
    return ( 
      <div>
         <h1>
        {this.state.message}    {/*as we changed it to state no change in UI, also it allows us to make change the message*/}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </h1> 
      </div>
    )
  }
 }
 export default Message