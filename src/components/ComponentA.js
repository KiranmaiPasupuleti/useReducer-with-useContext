import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentA() {
    const countContext =useContext(CountContext)
  return (
    <div>ComponentA
        <button onClick={() => countContext.countDispatch('+')} >+</button>
        <button onClick={() => countContext.countDispatch("-")} >-</button>
        <button onClick={() => countContext.countDispatch("Reset")} >Reset</button>
    </div>
  )
}

export default ComponentA