import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Get from '../components/common/get';
import moment from 'moment';

import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import MicIcon from '@material-ui/icons/Mic';
import EditIcon from '@material-ui/icons/Edit';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'

import { API_URL } from '../constants';
import { QuestionTitle } from './question';
import { BrandSpan } from '../components/common/widgets';
import { WithoutHeaderLayout } from '../layouts/default';
import { mainTheme } from '../index';
import { Paper, Avatar, AppBar } from '@material-ui/core';

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
  titleBar: {
    display: 'block',
    textAlign: 'center',
    marginBottom: '1rem',
    padding: '1.5rem',
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
  articleContentPre: {
    margin: 0,
    whiteSpace: 'pre-wrap',
  },
  articleContentImg: {
    width: '100%',
  },
  articleContentAudio: {
    width: '100%',
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
              <AppBar position="relative" className={classes.titleBar}>
                <QuestionTitle text={title} inline noStyle />
              </AppBar>
              {responses.map((r, i) =>
                <Paper className={classes.paper}>
                  <ResponseUser
                    of={r.user}
                    createdAt={r.resource.created_at} />
                  <ResponseContent
                    type={r.resource_type}
                    resource={r.resource} />
                </Paper>
              )}
              {this.renderRecommendation(responses)}
            </div>
          )}
        </Get>
      </WithoutHeaderLayout>
    );
  }

  renderRecommendation = (responses) => {
    const { classes } = this.props;
    let flag = false;
    for (let i = 0; i < responses.length; i++) {
      if (responses[i].resource?.description?.includes("홍콩")) {
        flag = true;
        break;
      }
    }

    if (flag) {
      return (
        <Paper className={classes.paper}>
          <div style={{ fontSize: "1rem", color: "gray", marginBottom: "0.5rem" }}>
            이런 상품은 어떠세요?<br/>
            우리 가족에게 딱 맞는 여행 상품!
          </div>
          <img src="http://www.penchat.net/wp-content/uploads/2016/05/RISE-logo-570x315.png" style={{ width: '100%' }} />
          <div style={{ fontSize: "1rem" }}>
            RISE Conference 2018 at Hongkong<br/>
            https://riseconf.com/
          </div>
        </Paper>
      )
    }
    else return null;
  }
}
              
class _ResponseUser extends Component {
  render() {
    const { of: user, createdAt, classes } = this.props;
    
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
              {user.familyRole} / {moment(createdAt).calendar()}
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
        <pre className={classes.articleContentPre}>
          {resource.description}
        </pre>
      </Typography>
    );
  }
}

const Article = withStyles(styles)(_Article);

class _Photo extends Component {
  render() {
    const { resource, classes } = this.props;
    return (
      <div className={classes.articleContent}>
        <img className={classes.articleContentImg} src={`${API_URL}${resource.photo?.url}`} />
      </div>
    )
  }
}

const Photo = withStyles(styles)(_Photo);

class _VoiceRecord extends Component {
  render() {
    const { resource, classes } = this.props;
    console.log(resource);
    return (
      <div className={classes.articleContent}>
        <audio className={classes.articleContentAudio}
          preload controls type='video/webm'
          src={`${API_URL}${resource.sound?.url}`} />
      </div>
    )
  }  
}

const VoiceRecord = withStyles(styles)(_VoiceRecord);

class ResponseContent extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    resource: PropTypes.object.isRequired,
  };

  render() {
    const { type, resource } = this.props;

    switch (type) {
      case 'VoiceRecord': return <VoiceRecord resource={resource} />
      case 'Photo': return <Photo resource={resource} />
      default: return <Article resource={resource} />
    }
  }
}


export default withRouter(withStyles(styles)(ResponsesView));