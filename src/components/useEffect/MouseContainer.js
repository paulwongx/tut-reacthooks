import React, {useState} from 'react'
import HookMouse from './HookMouse'

// Hide element to demonstrate when to use render() {<cleanup_code>} in useEffect()
function MouseContainer() {

  const [display, setDisplay] = useState(true)

  return ( /* if statement embedded in render */
    <div>
      <button onClick={()=> setDisplay(!display)} >Toggle display</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer
