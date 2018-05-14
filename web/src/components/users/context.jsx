import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export const User = createContext({});

export class UserConsumer extends Component {
  static propTypes = {
    skipEnsureClan: PropTypes.bool,
    skipEnsureLogin: PropTypes.bool,
  };

  static defaultProps = {
    skipEnsureClan: false,
    skipEnsureLogin: false,
  };

  render() {
    const { skipEnsureClan, skipEnsureLogin } = this.props;

    return (
      <User.Consumer>
        {({ user }) => {
          if (user === undefined) return null;
          if (user) {
            if (user.clan) {
              return this.props.children(user);
            } else {
              if (skipEnsureClan) return this.props.children(user);
              else return <Redirect to="/join" />
            }
          } else {
            if (skipEnsureLogin) return this.props.children(user);
            else return <Redirect to="/start" />
          }
        }}
      </User.Consumer>
    )
  }
}
