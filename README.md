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
useEffect accepts two arguments. which is the callbackfunction and dependency array, The second argument is sometimes optional.

Example:
useEffect(()=> {}, [])

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

4. useRef Hook: it allows the persisting of values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.
Example: 
import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


5. useReducer Hook: It is similar to the useState Hook.

it accepts a reducer function as its first parameter and the initial state as the second.
It is used for custom state logic.
Example:
import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos />);

6. useCallback Hook: It returns a memoized callback function.
memoization is as caching a value so that it does not need to be recalculated.
This allows the isolation of intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies update.
This can help improve performance

Example: 
import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

7. useMemo Hook: The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. 

Example:
import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

## Question 2

Walk me through useState, useEffect and UseContext

### Ans
-useState is a react Hook which allows the tracking of state in a react function component.


-useEffect is a react Hook that allows the performance of side effects in a react components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. which is the callback function and dependency array, The dependency array basically tells the hook to "only trigger when the dependency array changes". The second argument is sometimes optional.


-useContext is a react hook used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”.


## Question 3

Explain how to build components in React
### Ans

Components in react can be built both functional and class-based
For a Functional component, it requires to create a javascript function the only difference in react is it returns a JSX react element, a special type of HTML adapted for javascript.

Example:

import React from 'react'

function Banner()
{
  return <div> Hello World </div>;
}

For Class based components, it creates React components with full life-cycle methods and state. This uses the ES6 Class methods.

Example:

import React from 'react'

class Banner extends React.Component {
  render(){
    return <div> Hello World </div> 
  }
}