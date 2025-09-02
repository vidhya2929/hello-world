import React from "react";
 
const UserContext = React.createContext('CodeEvolution')  //step 1 create the context   ,,,, here this is how we add a default value to the context.comment UserProvider
// Every context object that is created using createContext comes with a provider and a consumer react component and it is required for step 2,3
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export { UserProvider, UserConsumer }

// step 2 provide a context value
// value attribute in the Component C and that can be consumed by any component that is nested within the component.

// Step 3 consume the username(value) in the desired component , 
// We need to consume the username value in componentF.(To consume a context value we need to use the consumer component)
