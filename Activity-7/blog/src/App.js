import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: 'A short psychic broke out of jail. She was a small medium at large.',
    },
  ]);

  const [postId, setPostId] = useState(1); // start from 1 since 0 is taken

  const handleAddPost = (newText) => {
    let newPost = {
      postNumber: postId,
      text: newText,
    };
    setPostList((postList) => [...postList, newPost]);
    setPostId(postId + 1);
  };

  const handleDeletePost = (id) => {
    let updatedPostList = postList.filter((post) => post.postNumber !== id);
    setPostList(updatedPostList);
  };

  const posts = postList.map((post) => (
    <Post
      key={post.postNumber}
      text={post.text}
      id={post.postNumber}
      onDelete={handleDeletePost}
    />
  ));

  return (
    <div>
      <h2>Mini Blog</h2>
      <AddPost onAdd={handleAddPost} />
      {posts}
    </div>
  );
}

export default App;
