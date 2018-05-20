import React, { Component, Fragment } from 'react';
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

import { BrandSpan } from '../components/common/widgets';
import { WithoutHeaderLayout } from '../layouts/default';
import { mainTheme } from '../index';

const styles = {
  card: {
    maxWidth: 345,
  },
  title: {
    marginTop: '2rem',
    marginLeft: '0.5rem',
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '0.4em',
    marginLeft: '0.5rem',
    color: 'white',
    width: '65%',
    wordBreak: 'keep-all',
  },
  actions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  actionButton: {
    color: 'gray',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#EEE',
    },
  },
};

export const Placeholder = ({key}) => (
  <div key={key} style={{
    display: 'inline-block',
    transform: 'translate(0, 3px)',
    width: '3em', height: '1em',
    border: '1px solid #999', borderRadius: '0.4rem'
  }}>
    
  </div>
);

export class QuestionTitle extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    noStyle: PropTypes.bool,
    emphasisStyle: PropTypes.object,
    normalStyle: PropTypes.object,
  };

  static defaultProps = {
    inline: false,
    noStyle: false,
    emphasisStyle: { color: mainTheme.palette.primary.main, fontWeight: 'bold' },
    normalStyle: { color: 'white' },
  };
  
  render() {
    const { text, inline, noStyle } = this.props;
    
    return (
      <Fragment>
        {text.split('\\n').map((line, i) =>
          <Fragment key={i}>
            {this.renderPartial(line)}
            {inline ? <span> </span> : <br />}
          </Fragment>
        )}
      </Fragment>
    )    
  }
  
  renderPartial = (line) => {
    const { emphasisStyle, normalStyle, noStyle } = this.props;

    let shouldBeStyled = true;
    return line.split('"').map((chunk, i) => {
      if (chunk === "@") {
        return <Placeholder key={i} />;
      }
      shouldBeStyled = !shouldBeStyled;
      return (
        <span key={i} style={(shouldBeStyled && !noStyle) ? emphasisStyle : normalStyle}>
          {chunk}
        </span>
      );
    });          
  }
}

class QuestionView extends Component {
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
          {q => (
            <div style={{ padding: "2rem 1rem" }}>
              <Card>
                <div className="brandBox">
                  05.18  
                </div>
                <CardMedia
                  style={{backgroundColor: '#444', height: "calc(100vh - 180px)", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
                  image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=612621fd686897b4812287430c8be9db&auto=format&fit=crop&w=2104&q=80">

                  <CardContent>
                    <Typography className={classes.title} gutterBottom variant="headline" component="h2">
                      <QuestionTitle text={q.title} />
                    </Typography>
                    <Typography className={classes.description} component="p">
                      {q.description}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Button variant="fab"
                      onClick={() => this.redirectTo(q.id, "VoiceRecord")}
                      className={classes.actionButton}>
                      <MicIcon />
                    </Button>
                    <Button variant="fab"
                      onClick={() => this.redirectTo(q.id, "Article")}
                      className={classes.actionButton}>
                      <EditIcon />  
                    </Button>
                    <Button variant="fab"
                      onClick={() => this.redirectTo(q.id, "Photo")}
                      className={classes.actionButton}>
                      <InsertPhotoIcon />  
                    </Button>
                  </CardActions>
                </CardMedia>  
              </Card>
            </div>            
          )}
        </Get>
        
      </WithoutHeaderLayout>
    );
  }

  redirectTo = (id, type) => this.props.history.push(`/questions/${id}/responses/new/${type}`);
}

export default withRouter(withStyles(styles)(QuestionView));