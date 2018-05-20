import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

import { API_URL } from '../constants';
import { UserConsumer } from '../components/users/context';
import { mainTheme } from '../index';
import { BrandSpan } from '../components/common/widgets';
import { DefaultLayout } from '../layouts/default';
import { GlyphLogo, Logo } from '../components/common/assets';
import AuthDialog from '../components/dialogs/auth';

class StartPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
    classes: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { isDialogOpened: false };
  }

  render() {
    const kakaoAuthURL = `${API_URL}/users/auth/kakao`;
    const { classes } = this.props;
    const { isDialogOpened } = this.state;

    return (
      <UserConsumer skipEnsureLogin>
        {user => user ? <Redirect to="/questions" /> : (
          <div className={classes.StartPage}>
            <GlyphLogo width="60px" height="60px" />
            <Logo width="100px" height="10px" fill={mainTheme.palette.primary.main} />
            <div className={classes.description}>
              우리 가족이랑 <BrandSpan>클랑</BrandSpan>
            </div>
            <ButtonBase href={kakaoAuthURL}>
              {/* onClick={this.handleOpenAuth}> */}
              <img src="https://developers.kakao.com/assets/img/about/logos/login/kr/kakao_account_login_btn_medium_narrow.png" />
            </ButtonBase>
            {/* <AuthDialog
              authUrl={kakaoAuthURL}
              open={isDialogOpened}
              onClose={this.handleClose}
              onSuccess={this.handleAuthSuccess}
            /> */}
          </div>
        )}
      </UserConsumer>
    );
  }

  handleOpenAuth = () => {
    this.setState({ isDialogOpened: true });
  }

  handleClose = () => {
    this.setState({ isDialogOpened: false });
  }

  handleAuthSuccess = () => {
    window.reloadUser();
    setTimeout(() => this.props.history.push('/join'), 1000);
  }
}

const styles = {
  StartPage: {
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  description: {
    margin: '2rem 0 4rem',
    fontSize: '1rem',
    fontWeight: 'lighter'
  },
};

export default withRouter(withStyles(styles)(StartPage));