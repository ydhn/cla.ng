import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from './header';
import { Footer } from './footer';
import { BottomNavigation } from './bottomNavigation';

class DefaultLayout extends Component {
  static propTypes = {
    headerLeftActions: PropTypes.element,
    headerRightActions: PropTypes.element,
  }

  render() {
    const {headerLeftActions, headerRightActions} = this.props;

    return (
      <div className="default-layout">
        <Header leftActions={headerLeftActions} rightActions={headerRightActions} />
        <div style={{ marginTop: '56px' }}>
          {this.props.children}
        </div>
        <Footer />
        <BottomNavigation />
      </div>
    );
  }
}

export { DefaultLayout };