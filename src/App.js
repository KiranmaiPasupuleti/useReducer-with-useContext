import React, {useReducer,useContext} from 'react';
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

import './App.css';

export const CountContext = React.createContext()

const initialState = 0 
const reducer = (state,action) => {
  switch(action) {
      case "+":
          return state + 1 
      case "-":
          return state - 1 
      case "Reset":
          return initialState 
      default:
          return state
  }
}


function App() {

  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch:dispatch}}>
      <div className="App">
        Count - {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>

      </div>
    </CountContext.Provider>
  );
}

export default App;
