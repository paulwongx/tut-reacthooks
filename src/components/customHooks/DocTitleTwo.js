import React, {useState} from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'

// Using a custom hook
function DocTitleTwo() {
  const [count, setCount] = useState(0)

  useDocumentTitle(count)

  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo
