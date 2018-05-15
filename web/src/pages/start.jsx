import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import { API_URL } from '../constants';
import { UserConsumer } from '../components/users/context';
import { mainTheme } from '../index';
import { BrandSpan } from '../components/common/widgets';
import { DefaultLayout } from '../layouts/default';
import { GlyphLogo, Logo } from '../components/common/assets';
import ButtonBase from 'material-ui/ButtonBase';

class StartPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
    classes: PropTypes.object,
  };

  render() {
    const kakaoLoginURL = `${API_URL}/users/auth/kakao`;
    const { classes } = this.props;

    return (
      <UserConsumer skipEnsureLogin>
        {user => user ? <Redirect to="/questions" /> : (
          <div className={classes.StartPage}>
            <GlyphLogo width="60px" height="60px" />
            <Logo width="100px" height="10px" fill={mainTheme.palette.primary.main} />
            <div className={classes.description}>
              우리 가족이랑 <BrandSpan>클랑</BrandSpan>
            </div>
            <ButtonBase href={kakaoLoginURL}>
              <img src="https://developers.kakao.com/assets/img/about/logos/login/kr/kakao_account_login_btn_medium_narrow.png" />
            </ButtonBase>
          </div>
        )}
      </UserConsumer>
    );
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