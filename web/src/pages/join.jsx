import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { mainTheme } from '../index';
import { UserConsumer } from '../components/users/context';

const styles = {

};

class JoinPage extends Component {
  render() {
    return (
      <UserConsumer skipEnsureClan>
        {user => (
          <div>

          </div>
        )}
      </UserConsumer>
    )
  }
}

export default withRouter(withStyles(styles)(JoinPage));