import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Users from './Users/Users';
import UserPosts from './UserPosts/UserPosts';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route key='Users' path='/' exact component={Users} />
          <Route key='UserPosts' path='/users/:userId' exact component={UserPosts} />
          <Route key='Post' path='/users/:userId/posts/:postId' exact component={Post} />
          <Route key='PostNew' path='/users/:userId/post-form' exact component={PostForm} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
