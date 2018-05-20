import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { API_URL } from '../../constants';

const styles = {
  appBar: {
    position: 'relative',
    color: 'white',
  },
  flex: {
    flex: 1,
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AuthDialog extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    authUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('message', (e) => {
      if (e.data?.success) {
        this.props.onSuccess();
      }
    });
  }

  render() {
    const { classes, open, authUrl } = this.props;
    return (
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={this.props.onClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              카카오 계정 로그인
            </Typography>
          </Toolbar>
        </AppBar>
        <iframe id="auth-container"
          className={classes.iframe}
          src={authUrl} />
      </Dialog>
    );
  }
}

export default withStyles(styles)(AuthDialog);