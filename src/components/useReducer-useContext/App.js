// Included for reference purposes only

import React, {useReducer} from "react";
import './App.css';

import ComponentA from "./components/useReducer-useContext/ComponentA";
import ComponentB from "./components/useReducer-useContext/ComponentB";
import ComponentC2 from "./components/useReducer-useContext/ComponentC2";

// useReducer() / useContext() Lessons
export const CountContext = React.createContext() // Create context to pass vars down to child components

const initialState = 0 // initial state variable
const reducer = (state, action) => { // reducer function
  switch(action) {
    case 'increment':
      return state +1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  // count is the current value called in jsx. dispatch is the function called in jsx
  const [count, dispatch] = useReducer(reducer, initialState) // useReducer() function

  return (
    <div className="App">
      {/* countDispatch is made up key in the CountContext Object to be used in child components */}
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC2 />
        </div>
      </CountContext.Provider>
    </div>

  )
}

export default App

