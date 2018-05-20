import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from './header';
import { Footer } from './footer';
import { BottomNavigation } from './bottomNavigation';
import { Logo } from '../components/common/assets';

class DefaultLayout extends Component {
  static propTypes = {
    headerLeftActions: PropTypes.element,
    headerTitle: PropTypes.element,
    headerRightActions: PropTypes.element,
  }

  static defaultProps = {
    headerTitle: <Logo width="70px" height="25px" />,
  }

  render() {
    const { headerLeftActions, headerRightActions } = this.props;

    return (
      <div className="default-layout">
        <Header
          leftActions={headerLeftActions}
          title={headerTitle}
          rightActions={headerRightActions} />
        <div style={{ marginTop: '56px' }}>
          {this.props.children}
        </div>
        <Footer />
        <BottomNavigation />
      </div>
    );
  }
}

class WithoutHeaderLayout extends Component {
  render() {
    return (
      <div className="default-layout">
        <div>
          {this.props.children}
        </div>
        <Footer />
        <BottomNavigation />
      </div>
    );
  }
}

export { DefaultLayout, WithoutHeaderLayout };