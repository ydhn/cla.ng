import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import { DefaultLayout } from '../layouts/default';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class SettingsPage extends Component {
  render() {
    const { classes, match } = this.props;

    return (
      <DefaultLayout>
        <div className={classes.root}>
          
        </div>
      </DefaultLayout>  
    );
  }
}

export default withRouter(withStyles(styles)(SettingsPage));