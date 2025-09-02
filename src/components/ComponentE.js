import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

 class ComponentE extends Component {
  render() {                                // In the render method the user Context value is available as this.context
    return(
      <div>
        Component E context {this.context}
         <ComponentF/>
      </div>
    )
  }
}
// #####################################################################################
ComponentE.contextType = UserContext

export default ComponentE
//

