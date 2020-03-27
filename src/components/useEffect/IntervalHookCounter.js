import React, {useState, useEffect} from 'react'

// Include variables inside useEffect(fn, [<here>]); define fns inside useEffect()
function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }


  let someProp
  useEffect(() => {
    function doSomething() { // define this inside useEffect
      console.log(someProp) // someProp is a dependency that needs to be included in the array
    }
    doSomething()
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [someProp])

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
