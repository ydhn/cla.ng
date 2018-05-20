import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { objectToFormData } from '../../utils';

class ArticleForm extends Component {
  static propTypes = {
    resource: PropTypes.object,
    onChange: PropTypes.func,
  }

  render() {
    const { resource, onChange } = this.props;
    const textareaStyle = {
      width: '100%',
      minHeight: '15rem',
      border: 'none',
      outline: 'none',
      fontSize: '1.3rem',
      resize: 'none',
    };

    return (
      <div>
        <textarea
          style={textareaStyle}
          placeholder=" 당신의 생각을 들려주세요."
          value={resource.description}
          onChange={this.handleChange}
        />
      </div>
    )
  }

  handleChange = ({ target }) => {
    const resource = { title: "", description: target.value };
    this.props.onChange(resource, objectToFormData(resource));
  }
}

export { ArticleForm };