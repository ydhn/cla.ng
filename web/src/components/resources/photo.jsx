import React, { Component } from 'react';
import ImageUploader from '../common/imageUploader';
import PropTypes from 'prop-types';
import { Conditional } from '../common/conditionalRendering';

import { mainTheme } from '../../index';

class PhotoForm extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  render() {
    const { onChange } = this.props;

    return (
      <div>
        <ImageUploader
          withPreview  
          withIcon={true}
          withLabel={false}
          buttonText="여기를 눌러 사진 선택"
          onChange={this.onDrop}
          imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />
      </div>
    )
  }

  onDrop = (photo) => {
    const toArray = (fileList) => Array.prototype.slice.call(fileList);
    const photos = toArray(this.state.photos).concat(toArray(photo));
    let formData = new FormData();
    for (let i = 0; i < photos.length; i++) {
      const exts = photos[i].name.split('.')
      const ext = exts[exts.length-1]
      formData.append('photos[]', photos[i], `${i}.${ext}`);
    }
    
    this.setState({photos}, () => 
      this.props.onChange(photos, formData)
    );
  }
}

export { PhotoForm };