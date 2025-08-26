// cd ~/Downloads/React/hello-world
//  npm install
//  npm start
 
//  REACT
//  Open source library for building user interfaces
//  It is a JavaScript Library not a framework
//  FOCUS on UI-User Interface
//  Has a rich Ecosystem
//  Why learn React ?
//  It is a project which is created and maintained by Facebook
//  Technical Aspects of React -;
//  *Has a component based architecture => let us break down an application into small encapsulated parts and used to compose more complex UI
//  *Reusable Code
//   eg:code for article component of react can be reused for article component of angular and vue
//  *React is declarative => tell react what you want and react will build the actual UI
//  Imperative means we should explicitly specify each step and we control the flow... 
//  * react will handle efficiently updating and rendering of the components when data changes
//  *DOM updates are handled
//  *Can seamlessly integrate react into any application(portion of page, or complete page or even an entire application itself)\
//  react native for mobile application

// creating React Applications ->react app package
//  1) Using npx -;
//  npx create-react-app <project-name>
//  npx => It is a npm package runner and it's get installed when you install "node"
//  2) Using npm
//  In which we install the create-react-app package globally and then use the package to generate projects -:
//  install the package globally using the command -;
//  npm install create-react-app -g
//  create-react-app<project name>



//  Folder structure of react application created using "create react app"

//  package.json => it contains the dependencies and the scripts required for the project
//  node_modules folder => All the dependencies are installed here and it is generated when we run the create react app command or npm install
//  public folder => contains 3 files => manifest.json is concerned with progressive web apps (not needed), index.html => It is the only html file that is in our application and not going to make any changes excpet some changes in the head tag
//  the index.html have 1 div tag with the id="root" at run time the react application takes over this div tag and is resposible for the UI
//  src folder => we will be working with this folder during development =>
//    starting point for react application is index.js, In index.js we specify the root component which is app component and the DOM element which will be controlled by react
//    App.js => responsible for the HTML displayed in the browser(view which we see in the browser) 
//    App.css => for styling ->contains the classes in the app component
//    App.test.js => for unit tests -> contains simple test case
//    index.css => apply styles to the body
//    logo.svg => which is referenced in the app component
//    (serviceWorker.js => concerned with progressive web apps)

//    Control flow when we run the application
//    run command npm start -> index.html is served in the browser (index.html contains the root DOM node) ->control enters the index.js (react DOM renders the app component on to the root DOM node) ->App component contains the HTML will displayed in the browser

//    COMPONENT =; building blocks of any react applications
//    In react the component represents a part of the user interface  
//    root component is there to contain every other component and it is usually named as "app component" in the application
//    All the components are used to make up the entire application
//    Components are also reusable and can be nested inside other components
//    Same components are used with different properties to display different information

//    How a component translate the code in the application
//    The component code is usually placed in a JS file
//    Can also have component files with .jsx extensions
//    In react there are 2 component types -;


//    1)Stateless Functional Component(Functional Components);
//  SFC are literally JS functions 
//  They can optionally receive an object of properties which is referred to as props
//  and they return HTML(JSX) which describes the UI
//  [FUNCTIONAL COMPONENTS ARE JS FUNCTIONS THAT ACCEPTS AN INPUT OF PROPERTIES AND RETURNS HTML THAT DESCRIBES THE UI]


//    2)Stateful Class Component (class components)
//    regular es6 "classes that extend the component class" from the react library
//     They can optionally receive an object of properties which is referred to as props
//    They must contain a render method that returns HTML and they return HTML(JSX) which describes the UI
//    Apart from props a class component can maintain a private internal state => it can maintain some information which is private to that component and use that information to describe the user interface



//    FUNCTIONAL COMPONENTS                                                                                                          Greet.js

//    Use Func components as much as possible
//    Absence of 'this' keyword
//    Solution without using state
//    mainly responsible for UI
//    thsi is why it is also called StatelessDumbpresentational

//      Provides lifecyle hooks(note)


//    Vs CLASS COMPONENTS                                                                                                            Welcome.js
//    More feature rich
//    Maintain their own private data - state
//    Contain complex UI login
//    Provides lifecyle hooks
//    Also called as StatefulSmartContainer

//    The HTML we returned through 3 components are not regular HTML they are called JSX

//    JSX                                                                                                                          Hello.js
//   JavaScript XML(JSX) - Extension to the JavaScript language syntax
// With react library, it is an extension to write XML-like code for elements and components
//  like XML, JSX tags have a tag name, attributes, and children.
//  JSX is not a necessity to write React applications
//  JSX makes your react code simpler and elegant
//  JSX transpiles to pure JavaScript which is understood by the browsers


//  JSX Differences
//  Class -> className
//  for -> htmlFor
//  camelCase property naming convention
//   onclick -> onClick ,  tabindex => tabIndex

//  COMPONENT STATE in REACT
//  every react component returns JSX 

//  PROPS  Vs
//  props get passed to the component
//  Function parameters
//  Props are immutable
//  props => functional component
//  this.props => Class Components



//  STATE
//  managed within the component
//  Variables declared in the function body
//  state can be changed
//  useState Hook - Functional Components
//  this.state - Class Components
//  privately maintained inside the component and also it can influence what can rendered in the browser

//  setState
//  Always make use of setState and never modify the state directly 
//  Code has to be executed after the state has been updated ? Place that code in the call back function which is the second argument to the setState method
//  When you have to update state based on the previous state value, pass in a funvtion as an argument instead of the regular object. 

// Destructuring props in Functional component
// 1) Destructure it in the function parameter itself
// 2)Destructure it in the function body

// Destructuring props/states in Class Component => Using render method


// React Events

// camelCase for the event
// specify a function or a method  within curly brace
// (React events are named using camelCase rather than lowercase
// function to onClick is note passed as string , use {} and no parenthesis for function in the functioncall)


// Binding Event Handlers in React Components
// "this"ckeyword within the event handler is undefined, so event binding is necessary in class components

// Ways to bind Event Handlers in React
// 1) Use the bind keyword and bind it in the render method
// 2) Arrows in the render method => Simply call the event handler in the  arrow function body
// 3) Binding the event handler in the constructor as opposed to binding in the render method
// 4) Arrow function as a class property


// Methods as props in  react components
// Define the method in the Parent Component
// On the child component tag pass the method as a prop(in parent)
// In the child Component access the method using the props object


// How to Pass a parameter when calling the parent method from the child Component
// Arrow function in the return statement is used
// arrow function syntax is the simplest way to pass parameters from the child component to the parent component

// Conditional Rendering  
// works in the same way as the conditions work in JavaScript
// 1) if/else 
// 2) Element Variables
//       use JavaScript variables to store elements and help to render the entire component or only a part of the component as well
// 3) Ternary conditional operator
//       It can be used inside the JSX
// 4) Short circuit operator
//   specific case of ternary operator approach, when you want to render something or nothing short-circuit-operator is used

// How to display some list in React(in HTML we repeat some code for each item in the list) LIST RENDERING

// map() => accepts a function as an argument , map method goes over each element in the array and apply a transformation specified in the function body

// arr.map(para => function to be performed)

// When we have a list of objects with a few properties that have to be rendered
// Refactot the JSX into a seperate component and then use the component in the map method JSX   => person,personList

// Lists and Keys
// A "key" is a special string attribute you need to include when creating list of elements
// Keys give the element a stable identity
// Keys help React which items have changed, are added, or are removed.
// Help in efficient update of user interface

// How to use the index as a key when rendering lists
// The index is given as second parameter to the arrow function within the map method and that index is used as a value to the key prop

// Index as Key
// (when to use index as a key)

// 1)The items in your list do not have a unique id.
// 2)The list is a static list and will not change.
// 3)The list will never be reordered or filtered.

// Styling React Components

// ways to style react components
// 1)Regular CSS stylesheets              => stylesheet.js
// 2)Inline styling                       =>inline.js
// 3)CSS modules                          =>2 style sheets in the source folder=>appStyles.css (regular style sheet) & appStyles.module.css(css module style sheet)   
//  =>avaliable with react version 2 or higher(check on package.json=>react scripts)
// there is a file naming convention to be used for using css modules with create-react-app => the file name must be suffixed with .module.css
// advantage of using css modules is it sets the classes are locally scoped by default
// can't use the class that is defined in some other component
// 4)CSS in JS Libraries (styled components)

// Basics of working with forms                   => form .js
// A form element whose value is controlled by react is called controlled components. In controlled component the value of the input field is set to the state properties,then an onchange event fired whenever there is a change in the input fields value,we use setState method in the onchange value to update the state 

// When we create a react component , the component goes through several stages in it's life cycle

// Life cycle methods available for a class component,this method not exist on a functional component
// methods below are for the version of react 16.4 and above
// 4 phases of methods=>

// Mounting  => Called when an instance of a component is being created and inserted into the DOM
// 4 methods for Mounting => constructor,static getDerivedStateFromProps, render and componentDidMount

// updating => when a component is being re-rendered as a result of changes to either its props or state
// 5 methods for updating => static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate

// Unmounting => when a component is being removed from the DOM
// 1 method => componentWillUnmount

// Error Handling =>when there is an error during rendering, in a lifecycle method, or in the constructor of any child component
// 2 methods => static getDerivedStateFromError and componentDidCatch

// //Mounting =>
// 1)constructor(props) => A special function that will get called whenever a new component is created
//                       It is perfect for initializing the state and bindingthe event handlers
//                       don't make HTTP requests from within the constructor
// when defining our own constructor =>
// 1.1)call a special function called "super" it will call the baseclass constructor =>In our component we have access to this.props only after we have initially called super passing the props as argument
// 1.2)constructor is the only place where change or set the state by directly overwriting this.state  (in all other scenarios we use this.setState)

// 2)static getDerivedStateFromProps => Used when the state of the component depends on changes in props over time
// we have a component and the initial state of the component depends on the props being passed to the component in such scenario we can use this method to set state
// Set the state
// Since this is a static method, it does not have accesss to the "this" keyword
// don't cause any side effects. Eg: HTTP requests

// 3)render() => only required method in the class component
// IM (Read props & state and return JSX )
// It is a pure function for the given state and props it should always render the same UI
// Do not change state or interact with DOM or make ajax calls
//Since it is a render method JSX, which also contains the other children component rightAfter the parent render method children components lifecycle methods are also executed

// 4)componentDidMount() => This method will be called only once in the whole lifecycle of a given component and it is invoked immediately after a component and all its children components have been rendered to the DOM.
// perfect to cause side effects .eg: Interact with the DOM or perform any ajax calls to load data.


// UPDATING LIFECYCLE METHODS
// 1) static getDerivedStateFromProps(props,state) => Method is called every time a component is re-rendered. It is used when the 'state' depends on the props of the component.(rarely used method)
// 2) shouldComponentUpdate(nextProps, nextState) =>Dictates if the component should re-render or not(by default all class components will re-render when the state changes)
//                                                  Performance Optimization
//                                                  Do not cause sie Effects. eg: HTTP requests .Calling the setState method
//                                                  (rarely used)
// 3)render() =>above
// 4)getSnapshotBeforeUpdate(prevProps,prevState) =>Called right before the changes from the virtual DOM are to be reflected in the DOM(rarely used)
//                                                  Capture some information from the DOM
//                                                  Method will either return null or return a value.Returned value will be passed as the third parameter to the componentDidUpdate(next method)
// 4)componentDidUpdate(prevProps, prevState, snapshot)  => Called after the render is finished in the re-render cycles. Called only once.
//                                                          Cause side effects

// UNMOUNTING =>
  // 1)componentWillUnmount() =>Method is invoked immediately before a component is unmounted and destroyed 
//                              Cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers.
//                              Do not call the setState method
// Error Handling Phase Methods
// 1)static getDerivedStateFromError(error)
// 2)ComponentDidCatch(error, info)
// These two are used when there is an error either during rendering, in a lifecycle method, or in the constructor of any child component

// Fragments                                        ==>FragmentDemo.js
// let us to group a list of children elements without adding extra nodes to the DOM
// It can accepts the 'key' attribute when rendering the list of items


// PURE Component 
// Only work with class based components
// while using pure component never mutate the state.Always return a new object that reflects the new state
// prevents unneccessary renders
// 2nd way to create a class component
// snippet => rpce

// Regular Component                                  
// A regular component does not implement the shouldComponentUpdate method.It always returns true by default.


// Pure Component
// A pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparison

// Shallow Comparison (SC)
// Primitive Types
// a (SC) b returns true if a and b have the same value and are of the same type
// eg: string 'Vishwas' (SC) string 'Vishwas' returns true

// Complex Types
// a (SC) b returns true if a and b reference the exact same object


// SC of prevState with currentState
// Sc of prevProps with currentProps     
// If there is a difference between these then the component will Re-render

// Pure Comp to classbased components
// memo.react yo functional components