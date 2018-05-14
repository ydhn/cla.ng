import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import SettingsIcon from '@material-ui/icons/Settings';

const styles = {
  root: {
    width: '100%',
    bottom: 0,
    position: 'fixed',
  },
};

class BottomNavigationBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  };

  state = {
    value: null,
  };

  render() {
    const { classes, match } = this.props;
    const { value } = this.state;
    console.log();
    return (
      <BottomNavigation
        value={match.path.split('/')?.[1]}
        onChange={this.handleChange}
        showLabels
        className={classes.root}>
        <BottomNavigationAction
          value="albums"
          label="앨범" icon={<PhotoCameraIcon />}
          onClick={() => this.handleClick("/albums")} />
        <BottomNavigationAction
          value="questions"
          label="오늘" icon={<SpeakerNotesIcon />}
          onClick={() => this.handleClick("/questions")} />
        <BottomNavigationAction
          value="settings"
          label="설정" icon={<SettingsIcon />}
          onClick={() => this.handleClick("/settings")} />
      </BottomNavigation>
    );
  }

  handleClick = (link) => this.props.history.push(link)
}

const _BottomNavigtaion = withRouter(withStyles(styles)(BottomNavigationBar));
export { _BottomNavigtaion as BottomNavigation };
