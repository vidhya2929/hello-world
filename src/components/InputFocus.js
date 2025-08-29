import React, {useEffect, useRef} from 'react'

function InputFocus() {

  const inputRef = useRef(null)
  useEffect(()=>{
    // focus the input element - by using the 'useRef'
    inputRef.current.focus()
  },[])
  // the array is leaved empty as we have to execute the funtion only once
  return (
    <div>
      <input ref={inputRef} type='text'/>
    </div>
  )
}

export default InputFocus

// When we click the FocusInput button in the parent component, the Input element in the child component should receive the focus