// On the click of a button wesimply change a message whichis a part of the component state
import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
      // 3rd way of binding
      // this.clickHandler = this.clickHandler.bind(this)
  }
  // clickHandler(){
  //   this.setState({
  //     message: 'Goodbye!'
  //   })
  //   console.log(this)
  //   // "this" keyword within the event handler is undefined so, event binding is neccessary in react class components
  // }
  clickHandler = () =>{
    this.setState({
      message:'GoodBye!'
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
        {/*1st way of Binding */}
      {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}
      {/* now "this" keyword is not undefined anymore */}
      {/* 2nd way of binding */}
      {/* <button onClick={()=>this.clickHandler()}>Click</button>  */}
      </div>
    )
  }
}

export default EventBind
