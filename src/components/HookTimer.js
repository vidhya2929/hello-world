// useEffect => run side effcets in functional components eg: fetching data, timers, subscriptions, DOM manipulation, logging etc..
// In class Components, we used componentDidMount, componentDidUpdate, ComponentWillUnmount.In function components all of these are replaced by useEffect

import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
  const [timer, setTimer] = useState(0)
  // state -> the current value , setState -> a function to update that value , initialValue(0)-> the starting value for the state
const intervalRef = useRef()

  useEffect(()=>{
     intervalRef.current = setInterval(() =>{
      setTimer(prevTimer => prevTimer + 1)
    },1000)
    return ()=>{
      clearInterval(intervalRef.current)
    };
  },[])
  // here the variable is scoped only to the effect hook
  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  )
}

export default HookTimer
// useState lets add state to function components
// Can store any data type , eg:const isOnline,setIsOnline] = useState(true)
// Updating state replaces it not merged
//Functional updates => if new state depends on old state -> use a function:  setCount(prevCount => prevCount + 1)
// Lazy Initialization =>if initial value is expensive to compute -> pass a function: 
          // const[value, setValue] =museState(() => {
          // console.log("Expensive calculation runs once");
          // return 42;
          // });
// can call 'useState' multiple times in one component
// In class Components, we used 'this.state' and 'this.setState,' In function component we use 'useState'