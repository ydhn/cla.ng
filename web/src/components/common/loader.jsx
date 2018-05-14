import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import { fetchAPI } from '../../utils';

class APILoader extends Component {
  static propTypes = {
    path: PropTypes.string,
  }

  getData() {
    if (Object.keys(this.state).includes('response')) {
      return this.state.response
    }
    else {
      this.setState({ response: null });
      fetchAPI(this.props.path).then(response => this.setState(response));
      return null;
    }
  }

  render() {
    const response = this.getData();
    return response ?
      this.props.children(response) :
      <div style={{ width: '100%', height: '100%' }}>
        <CircularProgress />
      </div>;
  }
}