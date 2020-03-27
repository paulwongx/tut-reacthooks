import React, {useState} from 'react'

// Creating a counter with a Hooks Component
function HookCounter() {

  const [count, setCount] = useState(0) // React Hooks Component

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter

