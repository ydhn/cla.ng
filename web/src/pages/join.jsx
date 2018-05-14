import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Get from '../components/common/get';

import { withRouter, Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { mainTheme } from '../index';
import { UserConsumer } from '../components/users/context';
import { Avatar, Paper } from 'material-ui';
import { Badge } from '../components/common/widgets';
import { Button } from '@material-ui/core';

class JoinPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <UserConsumer skipEnsureClan>
        {user => (
          <Paper elevation={6} className={classes.paper}>
            <div className={classes.container}>
              <Avatar
                src={user.profile_img}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />

              <div className={classes.inputContainer}>
                <Get url="/family_roles">
                  {roles => (
                    <Select fullWidth value={roles[0].id}>
                      {roles.map((r, i) => (
                        <MenuItem key={i} value={r.id}>
                          <div>
                            <Badge>
                              {r.title}
                            </Badge>
                            <small>
                              {r.description}
                            </small>
                          </div>
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </Get>
                
                <TextField
                  fullWidth
                  label="이름"
                  defaultValue={user.name}
                  margin="normal"
                />
                <br />
                <TextField
                  fullWidth
                  label="가족 이름"
                  defaultValue="아텍사랑"
                  margin="normal"
                />
                <br />
                <div className={classes.warning}>
                  아래 버튼을 누르시면 이용 약관에 동의한 것으로 간주합니다.
                </div>
                <Button className={classes.button}
                  color="primary" variant="raised" fullWidth>
                  클랑 시작하기
                </Button>
                <br />
                <br />
              </div>
            </div>
            
            
          </Paper>
        )}
      </UserConsumer>
    )
  }
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    padding: '1rem 3rem'
  },
  paper: {
    height: '100%',
    margin: '2rem !important',
  },
  avatar: {
    margin: 10,
    border: `8px solid ${mainTheme.palette.primary.main}`
  },
  bigAvatar: {
    margin: '3rem 0 1rem',
    width: 150,
    height: 150,
  },
  button: {
    color: 'white',
  },
  warning: {
    color: 'gray',
    fontSize: '0.8rem',
    textAlign: 'center',
    padding: '1rem 2rem 0.5rem',
  }
};

export default withRouter(withStyles(styles)(JoinPage));