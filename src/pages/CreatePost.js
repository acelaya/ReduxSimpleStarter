import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import { connect } from 'react-redux';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = { saving: false };
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Create post</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" component={CreatePost.renderField} label="Title" />
          <Field name="tags" component={CreatePost.renderField} label="Tags" />
          <Field name="content" component={CreatePost.renderField} label="Content" />
          <div style={{ textAlign: 'right' }}>
            <Link to="/" className="btn btn-link">Cancel</Link>
            <button type="submit" className="btn btn-primary" disabled={this.state.saving}>
              {this.state.saving ? 'Saving...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  static renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}:</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched && error && <span>{field.meta.error}</span>}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.setState({ saving: true });
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }
}

const validate = (values) => {
  let errors = {};

  if (! values.title) {
    errors.title = 'Enter title';
  }
  if (! values.tags) {
    errors.tags = 'Enter tags';
  }

  return errors;
};

export default reduxForm({
  validate,
  form: 'CreatePostForm'
})(connect(null, { createPost })(CreatePost))
