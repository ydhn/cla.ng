import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DefaultLayout } from '../layouts/default';
import { WhitePanel } from '../components/common/panels';

export default class TodayPage extends Component {
  render() {
    return (
      <DefaultLayout>
        <WhitePanel>
          테스트
        </WhitePanel>  
      </DefaultLayout>
    );
  }
}
