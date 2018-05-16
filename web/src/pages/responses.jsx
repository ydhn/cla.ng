import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Get from '../components/common/get';

import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import MicIcon from '@material-ui/icons/Mic';
import EditIcon from '@material-ui/icons/Edit';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'

import { QuestionTitle } from './question';
import { BrandSpan } from '../components/common/widgets';
import { WithoutHeaderLayout } from '../layouts/default';
import { mainTheme } from '..';
import { Paper, Avatar } from '@material-ui/core';

const styles = {
  paper: {
    padding: '1rem',
    marginBottom: '0.5rem',
  },
  ResponseUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: '3rem',
    height: '3rem',
  },
  userContainer: {
    height: '4em',
    marginLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  familyRole: {
    fontSize: '1em',
    color: 'silver',
  },
  articleContent: {
    marginLeft: '4rem',
  },
};


class ResponsesView extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const { classes, match } = this.props;

    return (
      <WithoutHeaderLayout>
        <Get url={`/questions/${match.params.id}`}>
          {({ title, responses }) => (
            <div style={{ padding: "2rem 1rem" }}>
              {responses.map((r, i) =>
                <Paper className={classes.paper}>
                  <ResponseUser of={r.user} />
                  <ResponseContent
                    type={r.resource_type}
                    resource={r.resource} />
                </Paper>
              )}
            </div>
          )}
        </Get>
      </WithoutHeaderLayout>
    );
  }
}
              
class _ResponseUser extends Component {
  render() {
    const { of: user, classes } = this.props;
    
    return (
      <Typography>
        <div className={classes.ResponseUser}>
          <Avatar
            className={classes.avatar}  
            src={user.profile_img}
          />
          <div className={classes.userContainer}>
            <div className={classes.name}>
              {user.name}
            </div>
            <div className={classes.familyRole}>
              {user.familyRole}
            </div>
          </div>
        </div>
      </Typography>
    )
  }
}  

const ResponseUser = withStyles(styles)(_ResponseUser);


class _Article extends Component {
  render() {
    const { resource, classes } = this.props;

    return (
      <Typography className={classes.articleContent}>
        {resource.description}
      </Typography>
    );
  }
}

const Article = withStyles(styles)(_Article);

class Photo extends Component {
  render() {
    return null;
  }
}

class VoiceRecord extends Component {
  render() {
    return null;
  }  
}

class ResponseContent extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    resource: PropTypes.object.isRequired,
  };

  render() {
    const { type, resource } = this.props;

    switch (type) {
      case 'Article': return <Article resource={resource} />
      case 'Photo': return <Photo resource={resource} />
      case 'VoiceRecord': <VoiceRecord resource={resource} />
    }
  }
}


export default withRouter(withStyles(styles)(ResponsesView));