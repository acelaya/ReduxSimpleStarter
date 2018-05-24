import React from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsList extends React.Component {
  componentDidMount() {
    // This will dispatch the action created by fetch posts, which will in turn run an API request
    // Once the request is resolved, the redux-promise middleware will dispatch the same action but with the resolved data
    // The posts reducer will then update the "posts" property from the state
    // Finally, the mapStateToProps function passed to "connect" in this component will update the posts property, causing this component to rerender
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/create">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        {_.isEmpty(this.props.posts) ? <div>Loading...</div> : this.renderPosts()}
      </div>
    );
  }

  renderPosts() {
    return (
      <ul className="list-group">
        {_.map(this.props.posts, post => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { fetchPosts })(PostsList);
