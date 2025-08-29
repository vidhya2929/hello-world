// import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'  //omit the .js extension
// import {Greet} from './components/Greet'  for named exports
import Welcome from  './components/Welcome'
import Hello from './components/Hello';
import { Component } from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import Functionclick from './components/Functionclick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Parent from './components/Parent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'                             // note the difference in importing the module stylesheet
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import InputFocus from './components/InputFocus';
import FRParentInput from './components/FRParentInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
function App() {
  // class App extends Component{
  //   render(){}
  // }
  return ( 
    <div className="App">
    <HoverCounter/>
    <ClickCounter/>

      {/* <ErrorBoundary>
      <Hero heroName="Batman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName="Superman"></Hero>
      </ErrorBoundary> */}

      {/* As we give 'joker', then the whole content become error rather than that particular element*/}
      {/* <ErrorBoundary>
      <Hero heroName="Joker"></Hero> 
      </ErrorBoundary> */}
      
      {/* <PortalDemo/> */}
      {/* <HookTimer/>
      <ClassTimer/> */}
      {/* <FRParentInput/> */}
      {/* <InputFocus/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA/> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>  {/*Error is the classname in the regular stylesheet*/}
      {/* <h1 className={styles.success}>Success</h1> success is the classname from the module style sheet */} 
      {/* It cannot be used in the child component as it isuse 'styles.' */}
      {/* <Inline/> */}
      {/* Applying a class based on a prop or state of the component and pass props as parameter */}
      {/* <Stylesheet primary = {true}/> */}
      {/* <PersonList/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <Parent/> */}
      {/* <Greet name="Bruce" heroName = "Batman"><p>This is children props  </p></Greet>     
      <Greet  name="Clark" heroName = "Spiderman"/>
      <button>
        Action */}
      {/* </button> */}
       {/* <Greet name="Diana " heroName = "Thor"/> {/*  if there is no content inside it then we can change it into a self-cloding tag  */}
      {/* // <Welcome /> */} {/*} it is a class component and it is dupliacted twice */}
       {/* <Welcome name="Bruce" heroName = "Batman"/> 
       <Welcome name="clark" heroName = "Spiderman"/> 
   <Hello name="Diana" heroName = "Wonder Women"/> */}
   {/* <Functionclick />
   <ClassClick/> */}
   {/* <EventBind /> */}
      {/* <Message /> */}
      {/* <Hello /> */}
      {/* <Counter /> */}
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


