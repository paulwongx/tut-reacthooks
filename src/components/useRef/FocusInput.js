import React, {useEffect, useRef} from 'react'

function FocusInput() {

  const inputRef = useRef(null)

  useEffect(() => {
    //focus the input element
    inputRef.current.focus() // .current is just something Reactjs does. Sets ref's current property as corresponding DOM node
  },[])

  return (
    <div>
      <input ref={inputRef} type="text"></input>
    </div>
  )
}

export default FocusInput
