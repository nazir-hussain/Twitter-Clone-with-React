import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import FlipMove from 'react-flip-move';
import db from './firebase';

function Feed() {
  const [posts, setPosts] = useState ([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => doc.data())));
  }, []);

  return (
    <div className='feed'>
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>

        {/* Tweet Box */}
      <TweetBox />

        {/* Post */}

      <FlipMove>
      {posts.map((post) => (
        <Post
        key={post.text}
        displayName={posts.displayName}
        userName={post.username}
        verified={post.verified}
        text={post.text}
        avatar = {post.avatar}
        image={post.image}
        />
      ))}
      </FlipMove>
    </div>
  )
}

export default Feed;