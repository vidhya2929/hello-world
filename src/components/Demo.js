import React, { Component } from 'react'

export class Demo extends Component {
  interval
  constructor(props) {
    super(props)
  
    this.state = {
       timer: 0
    }
  }
  // To set and clear the interval  componentDidMount and componentWillUnmount
  componentDidMount(){
    this.interval = setInterval(()=>{
      this.setState(prevState =>({timer: prevState.timer +1}))
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  
  render() {
    return (
      <div>
        
          Class-Timer - {this.state.timer}
          <button onClick={() => clearInterval(thisInterval)}>Clear Timer</button>
      </div>
    )
  }
}

export default Demo
