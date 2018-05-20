import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VoiceRecordForm extends Component {
  static propTypes = {
    resource: PropTypes.object,
    onChange: PropTypes.func,
  }

  render() {
    const { resource, onChange } = this.props;

    return (
      <div>
        <textarea
          value={resource.description}
          onChange={this.handleChange}
        />
      </div>
    )
  }

  handleChange({ target }) {
    const resource = { title: "", description: target.value };
    this.props.onChange(resource);
  }
}

export { VoiceRecordForm };