import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  whitePanel: 'whitePanel',
  whitePanelBounce: 'whitePanelBounce',
  whitePanelTitle: 'whitePanelTitle',
  whitePanelBtnContainer: 'whitePanelBtnContainer',
  whitePanelContent: 'whitePanelContent',
  whitePanelFullWidthContent: 'whitePanelFullWidthContent',
};

class WhitePanel extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    actions: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    display: PropTypes.string,
    fullWidth: PropTypes.bool,
    bounce: PropTypes.bool,
    style: PropTypes.object,
    titleStyle: PropTypes.object,
  }

  static defaultProps = {
    actions: null,
    className: "",
    display: "block",
    fullWidth: false,
    bounce: true,
    style: {},
    titleStyle: {},
  }

  constructor(props, context) {
    super(props, context)
    this.state = {title: props.title, description: props.description}
  }

  render() {
    const { title, description } = this.state
    const { style, titleStyle, display, bounce, actions, fullWidth } = this.props

    return (
      <div className={`${styles.whitePanel} ${bounce ? styles.whitePanelBounce : ""} ${this.props.className}`} style={{ ...style, display }}>
        <div className={styles.whitePanelTitle} style={titleStyle}>
          {title}
          <div className={`pull-right ${styles.whitePanelBtnContainer}`}
            style={{display: `${(actions) ? "inline-block" : "none"}`, cursor: "pointer",}}>
            {actions}
          </div>
        </div>
        <div className={styles.whitePanelDescription}>{description}</div>
        <div className={fullWidth ? styles.whitePanelFullWidthContent : styles.whitePanelContent }>
          {this.props.children}
        </div>
      </div>
    )
  }

  componentWillReceiveProps(props) {
    const newState = Object.assign({}, this.state)
    if (props.title !== undefined) {
      newState.title = props.title
    }
    if (props.description !== undefined) {
      newState.description = props.description
    }
    this.setState(newState)
  }
}

export { WhitePanel };