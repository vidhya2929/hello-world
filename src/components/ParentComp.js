import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

 class ParentComp extends Component {
  // to change the state
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Harry"
    }
  }
  componentDidMount(){
    setInterval(() =>{
      this.setState({
        name: "Harry"
      })
    },2000)
  }
  
  render() {
    console.log('*******************************Parent Comp Render***********************************')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
        {/* Include the regular and pure components in the JSX passing in name as a prop*/}
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        {/* When the render method is called in each of the components */}
      </div>
    )
  }
}

export default ParentComp

// After every 2 seconds parent and regular components are re-rendered but pure component is never re-rendered 