import React from "react";
import Component1 from "./Component1";

function UseContext() {
  return (
    <div>
      <br />
      <hr />
      <div className="container-fluid">
        <h1 className="text-center fs-1">Use Context</h1>
        <Component1 />
        {/* 
            This is an example of "props drilling". 
             Props drilling occurs when you pass data (like a user's name or other values) 
            from a parent component down through multiple child components. 
            In the example above, data is passed from the 1st component to the 4th component using props. 
       */}
      </div>
      <br />
      <hr />
    </div>
  );
}

export default UseContext;

//  React hooks allow you to share values between multiple levels of components without passing props through level

//^ Provide Component

//1. import {createContext} from 'react'
//2. export const myContext = createContext();
//3. <MyContext.Provider  value={value}>
//            </Child>
//            </MyContext.Provider>

//^ Consumer Component

// 1. import React ,{userContext} from 'react';
//    import {myContext} from './Component1'
// 2. const value = useContext(myContext)

//? What is Context API
// React Context API = React’s built-in system (createContext, Provider, useContext)
// to share data between components without props drilling.
