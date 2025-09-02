import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

 class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {/* here specify a function */}
        {username => {
            return <div>Hello {username}</div>
            // we are passing a function as a child to the consumer component.use the function to do anything but it should return the proper JSX.
           }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF
