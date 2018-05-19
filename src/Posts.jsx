import React from 'react';
import axios from 'axios';

import Post from './Post';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const response = await axios('/api');
    this.setState({
      posts: response.data,
    });
  }

  render() {
    const { posts } = this.state;
    return posts.map(post => (
      <Post key={post.id} title={post.title} body={post.body} />
    ));
  }
}
