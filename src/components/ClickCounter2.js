import React, { Component } from 'react'

 class ClickCounter2 extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        count: 0
//     }
//   }
//   incrementCount = () =>{
//     this.setState(prevState => {
//       return {count: prevState.count + 1}
//     })
//   }
  render() {
        const { count, incrementCount } = this.props   
        {/* extracting count from the state */}
        return <button onClick={incrementCount}>Clicked {count} times</button>
  }
}
export default ClickCounter2
// Render props pattern helps to avoid repeatition of code like HOC 