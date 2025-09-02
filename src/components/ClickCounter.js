import React, { Component } from 'react'
import withCounter  from './withCounter'
 class ClickCounter extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      count: 0
  //   }
  // }

  // incremenCount = () => { 
  //   this.setState(prevState => {
  //     return {count: prevState.count + 1}
  //   })
  // }
  
  render() {
    // const { count } = this.state  //extract count from the state and render it
    const {count, incremenCount} = this.props
    return <button onClick={incremenCount}>Clicked { count } times</button>
  }
}

export default withCounter(ClickCounter)
// To reuse the code
// Lift counter logic to Parent and pass props