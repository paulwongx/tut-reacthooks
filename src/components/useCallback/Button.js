import React from 'react'

// React.memo()
function Button({handleClick, children}) {
  console.log('Rendering button -', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default React.memo(Button) // Using React.memo to rerender only what's updated
