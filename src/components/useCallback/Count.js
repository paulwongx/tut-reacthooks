import React from 'react'

// React.memo()
function Count({text, count}) {
  console.log(`Rendering ${text}`)
  return <div>{text} - {count}</div>
}

export default React.memo(Count)
