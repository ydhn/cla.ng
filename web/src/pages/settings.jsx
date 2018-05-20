import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { fetchAPI } from '../utils';

import { DefaultLayout } from '../layouts/default';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class SettingsPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DefaultLayout>
        <div className={classes.root}>
          <List subheader={<ListSubheader>내 정보</ListSubheader>}>
            <ListItem onClick={this.logout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="로그아웃" />
              <ListItemSecondaryAction>
                
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </DefaultLayout>  
    );
  }

  logout = () => {
    window.reloadUser(false);
    fetchAPI('/users/sign_out', { method: 'DELETE' })
      .then(() => this.props.history.push('/'))
  }
}

export default withRouter(withStyles(styles)(SettingsPage));