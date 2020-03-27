import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setLoading(false)
        setPost(response.data)
        setError('') // clears any previous message if one was previously displayed
      })
      .catch( error => {
        setLoading(false)
        setPost({}) // hide any existing post in the browser
        setError(`Something went wrong! ${error}`)
      })
  }, [])

  return (
    <div>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  )
}

export default DataFetchingOne
