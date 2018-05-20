import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowOnly extends Component {
  static propTypes = {
    if: PropTypes.any,
  };

  render() {
    if (!this.props.if) return null;
    return this.props.children();
  }
}

class Conditional extends Component {
  static propTypes = {
    if: PropTypes.any,
    then: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    else: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  };

  static defaultProps = {
    if: true,
    then: () => { },
    else: () => { },
  };

  render() {
    if (this.props.if) return this.props.then();
    else return this.props.else();
  }
}

export { ShowOnly, Conditional };