
import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>
        {/* {this.props.name} */}
        {/* {this.props.name()} */}
        {/* as it is a function */}
        {this.props.render(true)}
      </div>
    )
  }
}

export default User
