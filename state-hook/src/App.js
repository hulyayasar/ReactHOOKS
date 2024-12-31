import './App.css';
import ClassCounter from './components/ClassCounter';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTree from './components/CounterTree';
import CounterTwo from './components/CounterTwo';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounter1UseEffect from './components/HookCounter1UseEffect';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import React, { useReducer } from "react";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const initialState = 0
export const CountContext = React.createContext()

const reducer = (state, action) => {
  switch(action){
    case "increment":
      return state + 1
      case "decrement":
        return state -1
        case "reset":
          return initialState
          default:
            return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    

      <CountContext.Provider value= {{countState: count, countDispatch: dispatch}}>
    <div className="App">
       Count Value: {count}
          <CompA />
          <CompB />
          <CompC />
        
    </div>
    </CountContext.Provider>
  );
}

export default App;
