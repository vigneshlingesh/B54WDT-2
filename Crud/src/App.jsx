import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [posts, setPosts] = useState([ ]);

  const getPost = async() =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
  }

  useEffect(() =>{
    getPost();
  }, []);

  return (
    <div className="App">
     <h1>Your Post Is Here</h1>

     {posts.map(posts =>(
      <div key={posts.id}>
        <h2>Title: {posts.title}</h2>
        <h2>body: {posts.body}</h2>
      </div>
     ))}
    </div>
  )
}

export default App
