import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import { BrowserRouter, Route } from "react-router-dom";
import PostsList from "./pages/PostsList";

const store = createStore(reducers, {}, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsList} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
