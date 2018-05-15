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

import { BrandSpan } from '../components/common/widgets';
import { Placeholder } from './questions';
import { WithoutHeaderLayout } from '../layouts/default';

const styles = {
  card: {
    maxWidth: 345,
  },
  title: {
    marginTop: '2rem',
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '0.4em',
    color: 'white',
    width: '60%',
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
                  title="Title"  
                  style={{height: "calc(100vh - 180px)", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
                  image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=612621fd686897b4812287430c8be9db&auto=format&fit=crop&w=2104&q=80">

                  <CardContent>
                    <Typography className={classes.title} gutterBottom variant="headline" component="h2">
                      올해의<br />
                      <BrandSpan>버킷 리스트</BrandSpan>는?
                    </Typography>
                    <Typography className={classes.description} component="p">
                      버킷 리스트란 죽기 전에 꼭 해보고 싶은 일들을 적은 목록입니다. 올해 당신이 꼭 이루고싶은 버킷리스트는 무엇인가요?
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Button className={classes.actionButton} variant="fab">
                      <MicIcon />
                    </Button>
                    <Button className={classes.actionButton} variant="fab">
                      <EditIcon />  
                    </Button>
                    <Button className={classes.actionButton} variant="fab">
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
}

export default withRouter(withStyles(styles)(QuestionView));