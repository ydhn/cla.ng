import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            <ListItem>
              <ListItemIcon>
                <WifiIcon />
              </ListItemIcon>
              <ListItemText primary="Wi-Fi" />
              <ListItemSecondaryAction>
                
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BluetoothIcon />
              </ListItemIcon>
              <ListItemText primary="Bluetooth" />
              <ListItemSecondaryAction>
                
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </DefaultLayout>  
    );
  }
}

export default withStyles(styles)(SettingsPage);