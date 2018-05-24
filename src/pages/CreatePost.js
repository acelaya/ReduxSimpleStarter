import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CreatePost extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Create post</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" component={CreatePost.renderField} label="Title" />
          <Field name="tags" component={CreatePost.renderField} label="Tags" />
          <Field name="content" component={CreatePost.renderField} label="Content" />
          <div className="text-right">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }

  static renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}:</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
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
})(CreatePost)
