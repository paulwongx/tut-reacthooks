import React, {useState, useEffect} from 'react'

// useEffect(fn, [<variableName>]); conditionally run effects
function HookCounterOne() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => { // gets executed after ever render of this component (in this case, this file)
    console.log('useEffect - Updating document title')
    document.title = `You clicked ${count} times`
  }, [count]) // only update when variable inside array changes

  return (
    <div>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} ></input>
      <button onClick={() => setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne
