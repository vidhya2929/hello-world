// The file name is an HOC convention
import React from 'react'

const withCounter = (wrappedComponent) => {
  class WithCounter extends React.Component {  // new Component will be in pascal case
    
    
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }                                                                         //Common functionality that has to be shared
    incrementCount = () => {
      this.setState(prevState => {
        return {count: prevState.count + 1}
      })
    }

    
    render(){
      return <wrappedComponent count={this.state.count} incrementCount = {this.incrementCount}  {...this.props}/>  //passed as props
    }
  }
  return WithCounter
}
export default withCounter
// Apply this to the ClickCounter and HoverCounter

// A function that accepts a component and returns an enhanced component
// Pattern that is used to share common functionalities between components without having to repeat the code  