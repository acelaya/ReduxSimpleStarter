import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsList from "./pages/PostsList";
import CreatePost from "./pages/CreatePost";

const store = createStore(reducers, {}, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/create" component={CreatePost} />
          <Route path="/" component={PostsList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
