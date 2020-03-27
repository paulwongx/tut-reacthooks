import React, {useReducer} from "react";
import './App.css';
import DataFetchingOne from "./components/useReducer-FetchData/DataFetchingOne";
import DataFetchingTwo from "./components/useReducer-FetchData/DataFetchingTwo";
import ParentComponent from "./components/useCallback/ParentComponent";
import Counter from "./components/useMemo/Counter";
import FocusInput from "./components/useRef/FocusInput";
import ClassTimer from "./components/useRef/ClassTimer";
import HookTimer from "./components/useRef/HookTimer";
import DocTitleOne from "./components/customHooks/DocTitleOne";
import DocTitleTwo from "./components/customHooks/DocTitleTwo";
import CounterOne from "./components/customHooks/CounterOne";
import CounterTwo from "./components/customHooks/CounterTwo";
import UserForm from "./components/customHooks/UserForm";
import UserFormTwo from "./components/customHooks/UserFormTwo";

// useContext() Lessons
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

function App() {

  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* useContext() */}
      {/* <UserContext.Provider value={'Paul'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <DataFetchingTwo /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <UserForm /> */}
      <UserFormTwo />
    </div>

  )
}

export default App