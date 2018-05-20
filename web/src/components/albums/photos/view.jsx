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
  image: {
    width: '100%',
  },
});

class AlbumPhotoView extends Component {
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

    return (
      <Get url={`/albums/${match.params.id}/photos/${match.params.photo_id}`}>
        {({ album, photo }) => (
          <DefaultLayout
            headerTitle={null}  
            headerLeftActions={
              <Button style={{color: 'white', fontSize: "1rem", padding: "0 1rem 0 0" }}
                onClick={() => this.props.history.push(`/albums/${match.params.id}`)}>
                <KeyboardArrowLeftIcon style={{ color: 'white', fontSize: '2rem' }} />
                {album.title}
              </Button>
            }>
            <div className={classes.root}>
              <img className={classes.image} src={`${API_URL}${photo.photo.url}`} />
            </div>
          </DefaultLayout>
        )}
      </Get>
    );
  }
}
      
export default withRouter(withStyles(styles)(AlbumPhotoView));