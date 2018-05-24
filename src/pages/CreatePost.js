import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CreatePost extends React.Component {
  render() {
    return (
      <div>
        <h3>Create post</h3>
        <form>
          <Field name="title" component={CreatePost.renderField} label="Title" />
          <Field name="tags" component={CreatePost.renderField} label="Tags" />
          <Field name="content" component={CreatePost.renderField} label="Content" />
        </form>
      </div>
    );
  }

  static renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}:</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }
}

export default reduxForm({
  form: 'CreatePostForm'
})(CreatePost)
