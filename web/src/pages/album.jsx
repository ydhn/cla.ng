import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Get from '../components/common/get';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import { withRouter } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { DefaultLayout } from '../layouts/default';
import { API_URL } from '../constants';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
});

class AlbumsPage extends Component {
  render() {
    const { classes, match, history } = this.props;

    return (
      <Get url={`/albums/${match.params.id}`}>
        {album => (
          <DefaultLayout
            headerLeftActions={
              <IconButton
                onClick={() => this.props.history.push(`/albums`)}>
                <KeyboardArrowLeftIcon style={{ color: 'white', fontSize: '2rem' }}/>
              </IconButton>
            }
            headerTitle={album.title}
            headerRightActions={
              <IconButton
                onClick={() => this.props.history.push(`/albums/${match.params.id}/new`)}>
                <AddAPhotoIcon style={{ color: 'white', fontSize: '1.5rem' }} />
              </IconButton>
            }>
            <div className={classes.root}>
              <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {album.photos.map(photo => (
                  <GridListTile key={photo.id} cols={1} onClick={() => history.push(`/albums/${match.params.id}/photos/${photo.id}`)}>
                    <img src={`${API_URL}${photo.photo.thumb.url}`} alt={photo.title} />
                  </GridListTile>
                ))}
              </GridList>
              <Button fullWidth color="primary" onClick={() => this.handlePhotoAlbumClick(album.title)}>
                <PhotoAlbumIcon />&nbsp;
                포토북 제작하기
              </Button>
            </div>
          </DefaultLayout>  
        )}
      </Get>
      
    );
  }

  handlePhotoAlbumClick = (title) => {
    window.confirm(`"${title}" 앨범을 포토북으로 제작 신청하시겠습니까?`);
  }
}

export default withRouter(withStyles(styles)(AlbumsPage));