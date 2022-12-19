# React Counter App


## Question 1

Explain the main hooks in React and give examples.

### Ans
1. useState Hook: it allows the tracking of state in a react function component.

The State generally refers to data or properties, its initial value can be a number, string, array, object or boolean 
Example: 
import {useState} from 'react'
const [value, setValue] = useState("")
The first parameter is used to set the value while the second parameter is used to update the value i.e the first parameter

2. useEffect Hook: it allows the performance of side effects in a react components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. which is the function and dependency array, The second argument is sometimes optional.

Example:
useEffect(<function>, <dependency>)

3. useContext Hook: The context hook is a way to manage state globally.
It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
Example: 

import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("John Doe");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}


function Component4() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 4</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);

4. useRef Hook:  
## Question 2

Walk me through useState, useEffect and UseContext

### Ans


## Question 3

Explain the main hooks in React and give examples.

### Ans


