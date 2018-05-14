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
    actions: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    display: PropTypes.string,
    fullWidth: PropTypes.bool,
    backgroundImage: PropTypes.string,
    bounce: PropTypes.bool,
    style: PropTypes.object,
    titleStyle: PropTypes.object,
  }

  static defaultProps = {
    actions: null,
    className: "",
    display: "block",
    fullWidth: false,
    backgroundImage: "",
    bounce: true,
    style: {},
    titleStyle: {},
  }

  constructor(props, context) {
    super(props, context)
    this.state = {title: props.title, description: props.description}
  }

  render() {
    const { title } = this.state
    const { style, titleStyle, display, backgroundImage, bounce, actions, fullWidth } = this.props
    
    const backgroundImageStyle = backgroundImage ? { backgroundColor: 'black', backgroundImage: `url("${backgroundImage}")` } : {};
    return (
      <div className={`${styles.whitePanel} ${bounce ? styles.whitePanelBounce : ""} ${this.props.className}`}
        style={{ ...style, ...backgroundImageStyle, display }}>
        <div className={styles.whitePanelTitle} style={titleStyle}>
          {title}
          <div className={`pull-right ${styles.whitePanelBtnContainer}`}
            style={{display: `${(actions) ? "inline-block" : "none"}`, cursor: "pointer",}}>
            {actions}
          </div>
        </div>
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