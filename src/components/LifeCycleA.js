import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
// To trigger an update lifecycle we need to change either the props or state

 class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Harry"
    }
    console.log('LifeCycleA constructor')
  }
  static getDerivedStateFromProps(props, state){
    console.log('LifeCycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount(){
    console.log('LifeCycleA componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('LifeCycleA shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifeCycleA getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifeCycleA componentDidUpdate')
  }
  changeState = () => {
    this.setState({
      name: 'codevolution'
    })
  }
  render() {
    console.log('LifecycleA render')
    return (
      <div>
       <div>LifeCycle A</div>          
       {/* LifeCycle A is the parent component */}
       <button onClick={this.changeState}>Change state</button>
       <LifeCycleB />
       {/* LifeCycle B is the child component */}
      </div>
    )
  }
}

export default LifeCycleA
// 