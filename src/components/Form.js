import React, { Component } from 'react'

 class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comments: '',
       topic: 'react'
    }
  }
  handleUsernameChange = event => { //when we assign an handler to the onChange event, the event itself is passed as a parameter to the handler
    // Using the event we can extract the value of the input element using event.target.value
    this.setState({
      // any time we change the input value ,the value is changed using below we only need to assign the captured value back to the state property, and use setState to update the value
      username: event.target.value
    })
  }
  handleCommentsChange = event =>{
    this.setState({
      comments: event.target.value
    })
  }
  handleTopicChange = event =>{
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit = event =>{
    alert (`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
    // if we click "ok" the alert the page get refreshed and data get lost => tomavoid it event.preventDefault is used.
  }
  render() {
    // const{username, comments, topic} = this.state // wrap of Forms, after this we can remove {this.state} from 3 of them
    return (
      // <div>
      //   Form component
      // </div>
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>    
          {/* define the onChange method as a class property */}
        </div>
       {/* 1) */}
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>  
            <option value="react">React</option>
            <option vlaue="Angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
      <button type='submit'>Submit</button>
        </div>
      </form>
      // It is a regular html not a react component
    )
  }
}

export default Form
// to convert it into a control component 2 steps -;
// 1) create a component state that will control the value of the input element .Assign the state property as the value of the input element
// 2) Handling the onChange event

// controlled component for the textarea and select tag
// 3 steps => 1)Add the element html
//            2)Assign the component state to the element value
//            3)Assign an onChange handler that updates the state

// To submit this data =>