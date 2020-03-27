import {useState} from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const reset = () => {
    setValue(initialValue)
  }
  const bind = { // object
    value, // same as value: value but this is ES6 syntax
    onChange: e => { // receives event as argument and sets value as event.target.value
      setValue(e.target.value)
    }
  }

  return [value, bind, reset] // returns value, bind object, and reset function

}

export default useInput
