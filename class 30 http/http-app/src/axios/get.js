import axios from "axios";
import { useState, useEffect } from "react"

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response)
        setPosts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App