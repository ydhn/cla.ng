import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Get from '../../common/get';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { withRouter } from 'react-router-dom';

import { DefaultLayout } from '../../../layouts/default';
import { API_URL } from '../../../constants';
import { fetchAPI } from '../../../utils';
import { PhotoForm } from '../../resources/photo';
import { TextField } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  resourceForm: {
    padding: '2rem 2rem 0',
  },
});

class AlbumPhotoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resource: {
        title: "",
        description: "",
      },
      body: null,
    };
  }

  render() {
    const { classes, match } = this.props;
    const { resource, body } = this.state;

    return (
      <Get url={`/albums/${match.params.id}`}>
        {album => (
          <DefaultLayout
            headerLeftActions={
              <Button style={{color: 'white', fontSize: "1rem", padding: "0 1rem 0 0" }}
                onClick={() => this.props.history.push(`/albums/${match.params.id}`)}>
                <KeyboardArrowLeftIcon style={{ color: 'white', fontSize: '2rem' }} />
                {album.title}
              </Button>
            }
            headerTitle={null}
            headerRightActions={
              <Button
                disabled={!body} onClick={this.handleSubmit}
                style={{ color: 'white', fontSize: "1rem", padding: 0 }}>
                완료
              </Button>
            }>
            <div className={classes.root}>
              <div className={classes.resourceForm}>
                <TextField
                  fullWidth
                  value={resource.title}
                  placeholder="제목을 입력해주세요."
                  onChange={({ target }) => this.setState({resource: {...resource, title: target.value}})} />
                <TextField
                  multiline fullWidth
                  value={resource.description}
                  placeholder="설명을 입력해주세요."
                  onChange={({ target }) => this.setState({ resource: { ...resource, description: target.value } })} />
              </div>
              <PhotoForm onChange={this.handleFileChange} />
            </div>
          </DefaultLayout>
        )}
      </Get>
    );
  }

  handleFileChange = (resource, body) => this.setState({ body });

  handleSubmit = () => {
    const { match } = this.props;
    let { resource, body } = this.state;
    body.append('title', resource.title);
    body.append('description', resource.description);
    const options = { 'Content-Type': 'multipart/form-data', method: 'POST', body };
    
    fetchAPI(`/albums/${match.params.id}/photos`, options)
      .then(response => this.redirectToPhoto(response.id));
  }

  redirectToPhoto = (id) => this.props.history.push(`/albums/${this.props.match.params.id}`);
}
      
export default withRouter(withStyles(styles)(AlbumPhotoEdit));