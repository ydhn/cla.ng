import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Get from '../common/get';

import { WithoutHeaderLayout } from '../../layouts/default';
import { QuestionTitle } from '../../pages/question';
import { ArticleForm } from './article';
import { PhotoForm } from './photo';
import { VoiceRecordForm } from './voiceRecord';
import { fetchAPI, objectToFormData } from '../../utils';

const styles = {
  paper: {
    padding: '1rem',
  },
  titleBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
    fontSize: '1.5rem',
    padding: '0.5rem 0.5rem 0.5rem 1rem',
  },
  questionTitle: {
    textAlign: 'center',
    fontSize: '1.5rem',
    padding: '1rem 0',
  },
  button: {
    color: 'white',
    fontSize: '1.3rem',
    minWidth: '60px',
    padding: 0,
  }
};

class ResourceEdit extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    questionId: PropTypes.number.isRequired,
    date: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    date: moment(),
    title: '질문이 없습니다.',
    type: 'Article',
  };

  constructor(props) {
    super(props);
    this.state = {
      resource: {},
    };
  }

  render() {
    const { questionId, date, classes, match } = this.props;
    const { resource } = this.state;
    const type = match.params.resource_type;

    return (
      <WithoutHeaderLayout>
        <Get url={`/questions/${match.params.id}`}>
          {q => (
            <div style={{ padding: "2rem 1rem" }}>
              <AppBar position="relative" className={classes.titleBar}>
                <div>{date.format("MM.DD")}</div>
                <Button className={classes.button}
                  onClick={this.handleSubmit}>
                  완료
                </Button>
              </AppBar>
              <Paper className={classes.paper}>
                <div className={classes.questionTitle}>
                  <QuestionTitle
                    inline noStyle text={q.title}
                    normalStyle={{ fontWeight: 'lighter', color: 'black', textAlign: 'center' }}
                  />
                </div>
                <this.ResourceForm type={type} resource={resource} />
              </Paper>
            </div>
          )}
        </Get>
      </WithoutHeaderLayout>
    )
  }

  ResourceForm = ({ type, resource }) => {
    switch (type) {
      case 'Article': return (
        <ArticleForm
          resource={resource}
          onChange={this.handleChange} />
      )
      case 'Photo': return (
        <PhotoForm
          resource={resource}
          onChange={this.handleChange} />
      )
      case 'VoiceRecord': return (
        <VoiceRecordForm
          resource={resource}
          onChange={this.handleChange} />
      )
    }
  }

  handleChange = (resource) => this.setState({ resource });
  handleSubmit = () => {
    const { match } = this.props;
    const type = match.params.resource_type;
    const { resource } = this.state;
    fetchAPI(`/questions/${match.params.id}/responses/${type}`, {
      method: 'POST',
      body: objectToFormData(resource)
    }).then(response => this.redirectToResponses(match.params.id));
  }

  redirectToResponses = (id) => this.props.history.push(`/questions/${id}/responses/`);
}

export default withRouter(withStyles(styles)(ResourceEdit));