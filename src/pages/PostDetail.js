import React from 'react';
import { connect } from 'react-redux';
import PostActions from '../actions/post';
import { Link } from 'react-router-dom';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleting: false }
  }

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
        <Link to="/" className="btn btn-link">&larr; Back to list</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}
                disabled={this.state.deleting}>
          {this.state.deleting ? 'Deleting...' : 'Delete'}
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }

  onDeleteClick() {
    this.setState({ deleting: true });
    this.props.deletePost(this.props.match.params.postId, () => {
      this.props.history.push('/');
    })
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.postId] };
};

export default connect(mapStateToProps, {
  fetchPost: PostActions.fetchPost,
  deletePost: PostActions.deletePost
})(PostDetail);
