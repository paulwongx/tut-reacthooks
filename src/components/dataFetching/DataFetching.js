import React, {useState, useEffect} from 'react'
import axios from 'axios'

// Fetching data with useEffect()
function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () => { // Fetch data based on button click
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`) // custom id based on input
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [idFromButtonClick]) // remember to input variable that calls useEffect on update

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
      <button type="button" onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
      {/* <ul>
        {post.map(post => (
          <li key={post.id}>{post.title}</li>
          ))}
      </ul> */}
    </div>
  )
}

export default DataFetching
