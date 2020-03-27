import React, {useState, useEffect} from 'react'

// useEffect(fn, []) with return() {<cleanup code>} 
function HookMouse() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect( () => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => { // Executed on Unmount. Include code to cancel subscriptions, timers and remove handlers
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  },[])

  return (
    <div>
      Hooks x - {x} Y - {y}
    </div>
  )
}

export default HookMouse
