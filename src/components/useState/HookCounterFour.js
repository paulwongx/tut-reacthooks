import React, {useState} from 'react'

// React Hooks Tutorial - 5 - useState with array
function HookCounterFour() {

  const [items, setItems] = useState([])

  const addItem = () => {
    // Using setState with Arrays
    setItems([...items, { // make copy using spread operator, then append new item
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1 // random number from 1 to 10. (0*10+1=0 to 0.99*10=9.99+1=10.99)
    }])
  }

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))

        }
      </ul>
    </div>
  )
}

export default HookCounterFour
