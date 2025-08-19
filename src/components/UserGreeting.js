import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  
  render() {
    // if(this.state.isLoggedIn){            [1]
    //   return (
    //    <div>
    //     Welcome Harry
    //    </div> 
    //   )
    // } 
    // else{
    //   return (
    //     <div>
    //       Welcome Guest
    //     </div>
    //   )
    // }

// if else statements don't work inside the JSX

    // return (
    //   <div>
    //     <div>Welcome Harry</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  //   let message   // store the element to be rendered     [2]
  // if(this.state.isLoggedIn){
  //   message = <div>Welcome Harry</div>
  // }
  // else{
  //   message = <div>Welcome Guest</div>
  // }
  // return <div>{message}</div>
 
  // return(                            [3]
  //   this.state.isLoggedIn ?
  //   <div>Welcome Harry</div> :
  //   <div>Welcome Guest</div>
  // )

  //  short circuit Operator;
  // either hello harry or nothing
  this.state.isLoggedIn && <div>Welcome Guest</div> 
  // here the expession first evaluates the left gan side of the operato
  }
}

export default UserGreeting
