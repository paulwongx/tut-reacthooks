This project is a Create React App that has React Hooks examples.
[Tutorial Link](https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=1)

## useState
./components/useState
- ClassCounter.js - Creating a Counter with a Class Component
- ClassCounterOne.js - ComponentDidMount/ ComponentDidUnmount
- HookCounter.js - Hooks in functions
- HookCounterTwo.js - useState(function)
- HookCounterThree.js - useState(\<object\>)
- HookCounterFour.js - useState(\<array\>)

## useEffect()
./components/useEffect
- HookCounterOne.js - useEffect(fn, \[\<variableName\>\]); conditionally run effects
- HookMouse.js - useEffect(fn, []); black arr to init only once
- ClassMouse.js - useEffect() - Show use of render() {\<cleanup_code\>}
- MouseContainer.js - Hides ClassMouse.js
- IntervalClassCounter.js - Classes - ComponentDidMount/ ComponentDidUnmount
- IntervalHookCounter.js - Include variables inside useEffect(fn, \[\<here\>\]); define fns inside useEffect()

## Fetching Data with useEffect using axios
./components/dataFetching
- DataFetching.js - Fetch data via API; on button click

## useContext()
./components/useContext
- ComponentC.js - Passes data to ComponentE
- ComponentE.js - useContext(); Passes data to ComponentF
- ComponentF.js - Renders variables from App.js

## useReducer()
./components/useReducer
- CounterOne.js - useReducer() - Simple state & action
- CounterTwo.js - useReducer() - Complex state & action; multiple variables in object
- CounterThree.js - useReducer() - Multiple useReducers

## useReducer() & useContext()
./components/useReducer-useContext
- App.js - useReducer()
- ComponentA.js - useContext(); App > ComponentA
- ComponentD.js - useContext(); App > ComponentB > ComponentD
- ComponentF.js - useContext(); App > ComponentC > ComponentE > ComponentF

## useReducer() & Data Fetching
./components/useReducer-FetchData
- App.js - useReducer()
- DataFetchingOne.js - useState() & API calls
- DataFetchingTwo.js - useReducer() & API calls
- useState:
  - when state is num, str, bool
  - one or two state transitions
  - no related state transitions
  - no business logic
  - local variables
- useReducer:
  - objects or arrays
  - many state transitions
  - related state transitions
  - complex business logic
  - global variables

## useCallback() - Caches function itself
./components/useCallback
- ParentComponent.js - useCallback(fn,[])
- Title.js - export React.memo()
- Count.js - export React.memo()
- Button.js - export React.memo()

## useMemo() - Caches function result
./component/useMemo
- Counter.js - useMemo(fn, [])

## useRef() - Focus element; clear mutable values
./component/useref
- FocusInput.js - useRef() focus on load
- ClassTimer.js - ComponentDidMount/ ComponentDidUnmount
- HookTimer.js - useRef() to clear timer; creates container to store mutable values; doesn't cause rerenders when data it stores changes; remembers variable after rerenders from other properties; good to clear interval timer from event handler

## Custom Hooks
./components/customHooks
- DocTitleOne.js - useEffect() to change document title onClick
- DocTitleTwo.js - using Custom Hook (function)
- CounterOne.js - functions in component
- CounterTwo.js - using Custom Hook
- UserInput.js - useState() for forms
- UserInputTwo.js - using Custom Hook for variables, button rendering logic (in an object), and reseting function

./hooks
- useDocumentTitle.js - custom Hook (function); always starts with 'use-'; put into a folder called Hooks (that has functions used across components)
- useCounter.js - Custom Hook - increment, decrement, reset
- useInput.js - Custom Hook - functions for form elements