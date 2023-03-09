import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentD() {
    const countContext =useContext(CountContext)
  return (
    <div>ComponentD
        <button onClick={() => countContext.countDispatch('+')} >+</button>
        <button onClick={() => countContext.countDispatch("-")} >-</button>
        <button onClick={() => countContext.countDispatch("Reset")} >Reset</button>
    </div>
  )
}

export default ComponentD