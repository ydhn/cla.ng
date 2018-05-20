import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Hidden from 'material-ui/Hidden';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    textAlign: 'center',
  },
  button: {
    padding: "8px 8px",
    minWidth: "50px",
  },
  toolbar: {
    display: 'flex',
    justifyContent: '',
  }
};

class _Header extends Component {
  render() {
    const { classes, leftActions, title, rightActions } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <div>
              {leftActions}
            </div>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>
            <div>
              {rightActions}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const Header = withStyles(styles)(_Header)
export { Header };
