import {useEffect} from 'react'

// Custom Hook
function useDocumentTitle(count) { // Start with the word use for convention and linters read it as such
  useEffect(() => {
    document.title = `Count ${count}`
  },[count])
}

export default useDocumentTitle
