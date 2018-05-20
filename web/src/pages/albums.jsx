import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Color from 'color';
import Get from '../components/common/get';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import { WithoutHeaderLayout } from '../layouts/default';
import { Logo } from '../components/common/assets';
import { mainTheme } from '../index';
import Paper from '@material-ui/core/Paper';
import { API_URL } from '../constants';

const styles = {
  albumsContainer: {
  },
  albumContainer: {
    textAlign: 'center',
    display: 'inline-block',
    width: 'calc(50% - 1.6rem)',
    margin: '1rem 0.8rem',
    fontSize: '1rem',
  },
  albumImage: {
    width: '100%',
    height: '10em',
  },
  albumTitle: {

  },
  albumDescription: {
    fontSize: '0.7em',
    marginBottom: '1.5em',
  },
};


class AlbumsPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <WithoutHeaderLayout>
        <div style={{ padding: '0 1rem' }}>
          <div style={{ padding: '1rem 0.5rem 0.2rem' }}>
            <Logo fill={mainTheme.palette.primary.main} width="80px" height="30px" />
          </div>
          <div className={classes.albumsContainer}>
            <Get url="/albums">
              {albums => albums.map((album, i) => {
                const albumContainerStyle = {
                  backgroundColor: album.color,
                  color: Color(album.color).grayscale().darken(0.4).isDark() ? 'white' : Color(album.color).darken(0.5),
                };
                const descriptionStyle = {
                  color: Color(album.color).darken(0.7),
                };

                return (
                  <Paper elevation={5}
                    className={classes.albumContainer}
                    style={albumContainerStyle}
                    onClick={() => this.redirectTo(album.id)}>
                    <div style={{ display: 'flex', flexDirection: 'column', flexFlow: 'row' }}>
                      <Paper elevation={3} style={{ width: '5px', backgroundColor: Color(album.color).darken(0.1) }} />
                      <div style={{ flexGrow: 1 }}>
                        <div className={classes.albumImage}
                          style={{
                            background: `url(${API_URL}${album.last_img}) no-repeat center`,
                            backgroundSize: 'contain'
                          }}>
                        </div>
                        <div className={classes.albumTitle}>
                          {album.title}
                        </div>
                        <div className={classes.albumDescription} style={descriptionStyle}>
                          {moment(album.created_at).format("YYYY.MM.DD ~")}
                        </div>
                      </div>
                    </div>  
                  </Paper>
                );
              })}
            </Get>
          </div>
          
        </div>
      </WithoutHeaderLayout>
    );
  }

  redirectTo = (id) => this.props.history.push(`/albums/${id}`);
}

export default withRouter(withStyles(styles)(AlbumsPage));