import React, { useState, useEffect } from 'react';

function Community() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch community posts (use a mock for now)
    setPosts([
      { id: 1, user: 'John', content: 'Completed my first 5k!' },
      { id: 2, user: 'Jane', content: 'Tried a new healthy recipe today.' },
    ]);
  }, []);

  return (
    <div>
      <h2>Community</h2>
      <ul>
        {/* should be dynamic and in footer / a new page */}
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.user}</strong>: {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Community;
