import React, {Component} from "react";   // these 2 imports are required for class functions
 
class Welcome extends Component{                   //In a class component the properties are available through 'this.props' which is reserved in class components
  render(){
    return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
  }
}
export default Welcome