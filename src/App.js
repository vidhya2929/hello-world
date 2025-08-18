// import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'  //omit the .js extension
// import {Greet} from './components/Greet'  for named exports
import Welcome from  './components/Welcome'
import Hello from './components/Hello';
import { Component } from 'react';

function App() {
  // class App extends Component{
  //   render(){}
  // }
  return ( 
    <div className="App">
      <Greet name="Bruce" heroName = "Batman"><p>This is children props  </p></Greet>     
      <Greet  name="Clark" heroName = "Spiderman"/>
      <button>
        Action
      </button>
       <Greet name="Diana " heroName = "Thor"/> {/*  if there is no content inside it then we can change it into a self-cloding tag 
      // <Welcome /> */}  {/*it is a class component and it is dupliacted twice*/}
      <Welcome name="Bruce" heroName = "Batman"/>
      <Welcome name="clark" heroName = "Spiderman"/>
      <Welcome name="Diana" heroName = "Wonder Women"/>

      <Hello />
   </div>
  );
}
export default App;
//  to reuse the code use the Greet code where ever wanted  
// to render different names using Greet  (to specify props for the component - specify them as attributes)
// 2 steps for Greet Function
// 1)Add a parameter to the functional component
// 2)return {props.name}
// when specifying the component we can include additional attributes, React bundle all such attributes into an object (props)
// props are immutable (it's value cannot be changed)