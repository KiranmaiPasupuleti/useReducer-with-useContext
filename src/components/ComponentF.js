import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentF() {
    const countContext =useContext(CountContext)
  return (
    <div>ComponentF
        <button onClick={() => countContext.countDispatch('+')} >+</button>
        <button onClick={() => countContext.countDispatch("-")} >-</button>
        <button onClick={() => countContext.countDispatch("Reset")} >Reset</button>
    </div>
  )
}

export default ComponentF