import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getPosts();
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Post List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
