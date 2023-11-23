import React from "react";
import { useState } from 'react';
import Post from './components/post'

const DATA = [
  {
    id: 1,
    title: "sunt aut facere repellat provident occaicate exepturi optio reprehenderit",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 2,
    title: "qui est esse",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 3,
    title: "ea molistias uasi exercitationem repellat qui spa sit aut",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 4,
    title: "eum et est occaicati",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 5,
    title: "nescuit quas dio",
    body: "lorem lorem lorem lorem"
  }
]

function App() {

  const [posts, setPosts] = useState(DATA);
  const [newTitle, setNewTitle] = useState('');

  const handleAddPost = () => {
    const newPost = {
      id: Math.floor(Math.random() * 1000), 
      title: newTitle,
      body: ''
    };
    setPosts([...posts, newPost]);
    setNewTitle('');
  }

  const handleRemovePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <input
          type="text"
          placeholder="Enter title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit" onClick={handleAddPost}>
          Add
        </button>
      </form>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <Post title={post.title} />
            <button onClick={() => handleRemovePost(post.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
