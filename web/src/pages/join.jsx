import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Get from '../components/common/get';

import { fetchAPI, objectToFormData } from '../utils';
import { withRouter, Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { mainTheme } from '../index';
import { UserConsumer } from '../components/users/context';
import { Avatar, Paper } from 'material-ui';
import { Badge } from '../components/common/widgets';
import { Button } from '@material-ui/core';

class JoinPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "",
        family_role_id: 0,
      }
    };
  }

  render() {
    const { classes } = this.props;
    const { form } = this.state; 

    return (
      <UserConsumer skipEnsureClan>
        {user => user.clan ? <Redirect to="/questions" /> :(
          <Paper elevation={6} className={classes.paper}>
            <div className={classes.container}>
              <Avatar
                src={user.profile_img}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />

              <div className={classes.inputContainer}>
                <Get url="/family_roles">
                  {roles => (
                    <Select fullWidth
                      inputRef={ref => this.frSelector = ref}  
                      onChange={({ target }) => this.handleChange('family_role_id', target.value)}  
                      value={form.family_role_id || roles[0].id}>
                      {roles.map((r, i) => (
                        <MenuItem key={i} value={r.id}>
                          <div>
                            <Badge>{r.title}</Badge>
                            <small>{r.description}</small>
                          </div>
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </Get>
                
                <TextField
                  inputRef={ref => this.nameField = ref}
                  fullWidth label="이름" margin="normal"
                  value={form.name || user.name}
                  onChange={({ target }) => this.handleChange('name', target.value)}
                />
                <br />
                <TextField
                  fullWidth label="가족 이름" margin="normal"
                  value="아텍사랑" 
                />
                <br />
                <div className={classes.warning}>
                  아래 버튼을 누르시면 이용 약관에 동의한 것으로 간주합니다.
                </div>
                <Button className={classes.button}  
                  onClick={this.handleClick}  
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

  handleChange = (name, value) => this.setState({ form: { ...this.state.form, [name]: value } });
  handleClick = () => {
    let { form } = this.state;
    debugger
    form = {
      ...form,
      name: this.nameField.value,
      family_role_id: form.family_role_id ? form.family_role_id : this.frSelector.value,
    };
  
    fetchAPI('/users', {
      method: 'POST',
      body: objectToFormData(form)
    }).then(response => {
      window.reloadUser(response);
      this.props.history.push('/questions');
    }).catch(e => {
      window.alert(e.message);
    });
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
    margin: '1rem !important',
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