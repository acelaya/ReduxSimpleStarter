import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostDetail extends React.Component {
  componentDidMount() {
    const { postId } = this.props.match.params;
    this.props.fetchPost(postId);
  }

  render() {
    const { post } = this.props;

    if (! post) {
      return <h3>Loading post...</h3>
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.postId] };
};

export default connect(mapStateToProps, { fetchPost })(PostDetail);
