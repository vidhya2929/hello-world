import React, { Component } from 'react'

 class LifeCycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Harry"
    }
    console.log('LifeCycleB constructor')
  }
  static getDerivedStateFromProps(props, state){
    console.log('LifeCycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount(){
    console.log('LifeCycleB componentDidMount')
  }
  
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default LifeCycleB
// here the render method knows about the children components,execution passses on to the children after the parent component render method,the child component rendered in order,after that the parent componentDidMount execute