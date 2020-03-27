import React, {useState, useMemo} from 'react'

// useMemo() - performance optimization
// Caches result of function
function Counter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => { // useMemo function to cache result of function
    let i = 0
    while (i< 200000000) i++ // intentionally making the UI slow. 2 with 8 zeros
    return counterOne % 2 === 0
  }, [counterOne])

  // even when just updating countertwo, the UI is slow
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? ' Even' : ' Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  )
}

export default Counter
