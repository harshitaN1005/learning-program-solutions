import React from 'react';
import Post from './Post'; // Assuming you have a Post class as in Post.js

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ''
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postObjects = data.map(post => new Post(post.id, post.title, post.body));
        this.setState({ posts: postObjects });
      })
      .catch(error => {
        this.setState({ hasError: true, errorMessage: error.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { posts, hasError, errorMessage } = this.state;

    if (hasError) {
      return <div>Error: {errorMessage}</div>;
    }

    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id} style={{
            border: '1px solid black',
            padding: '10px 20px',
            margin: '10px',
            borderRadius: '10px',
            width: '300px',
            display: 'inline-block'
          }}>
            <h3 style={{ color: post.title.length < 20 ? 'green' : 'blue' }}>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

  componentDidCatch(error, info) {
    alert('An error occurred in the Posts component!');
    console.error("Error caught in Posts component:", error, info);
  }
}

export default Posts;
