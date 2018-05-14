import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchAPI } from '../../utils';

export default class Get extends Component {
  static propTypes = {
    url: PropTypes.string,
  }

  state = {};

  getData() {
    if (Object.keys(this.state).includes('response')) {
      return this.state.response
    }
    else {
      this.setState({ response: null });
      fetchAPI(this.props.url).then(response => this.setState({ response }));
      return null;
    }
  }

  render() {
    const response = this.getData();
    return response ?
      this.props.children(response) :
      <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
        <CircularProgress size={70} thickness={4} />
      </div>;
  }
}