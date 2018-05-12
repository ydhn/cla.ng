import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DefaultLayout } from '../layouts/default';

export default class AlbumPage extends Component {
  render() {
    return (
      <DefaultLayout>
        <input name="myFile" type="file" multiple accept="image/*;capture=camera" />
      </DefaultLayout>
    );
  }
}
