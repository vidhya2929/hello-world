import React, { Component } from 'react'

 class ClassTimer extends Component {
  interval     //(instance field / class property)
  constructor(props) {
    super(props)
  
    this.state = {
       timer: 0
    }
  }
  // To set and clear interval timer => componentDidMount & componentWillUnmount
  componentDidMount(){
    this.interval = setInterval(()=>{
      // When new state dependss on previous state, use the updater
      this.setState(prevState => ({timer: prevState.timer + 1}))  //prevState is the React's latest known state... //setState updating state in class cpmponents
    },1000)   //2 arguments -; 1)callback function
    // calls the callback every 1000 milliseconds
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
       Class Timer - {this.state.timer} 
       <button onClick={()=> clearInterval(this.interval)}>Clear Timer</button>
      </div>
    )
  }
}

export default ClassTimer
// An interval timer ticks every second and displays the value in the browser