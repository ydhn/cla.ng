import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mainTheme } from '../../index';

const BrandSpan = (props) => (
  <span style={{ color: mainTheme.palette.primary.main, fontWeight: 'bold' }}>
    {props.children}
  </span>
)

class Badge extends Component {
  static propTypes = {
    color: PropTypes.string,
    marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    color: "#777",
    marginRight: "0.3em",
  }

  render() {
    return (
      <span style={{
        backgroundColor: this.props.color,
        color: "white",
        borderRadius: "1em",
        padding: "0.1em 0.5em",
        marginRight: this.props.marginRight,
        fontSize: "0.9em",
        userSelect: "none",
      }}>
        {this.props.children}
      </span>
    )
  }
}

export { Badge, BrandSpan };