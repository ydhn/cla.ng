import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MicIcon from '@material-ui/icons/Mic';
import StopIcon from '@material-ui/icons/Stop';
import { mainTheme } from '../../index';

import RecorderService from '../common/webAudio/RecorderService';
import utils from '../common/webAudio/Utils';
import WebAudioPeakMeter from '../common/webAudio/WebAudioPeakMeter';


class VoiceRecordForm extends Component {
  static propTypes = {
    resource: PropTypes.object,
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.recorderSrvc = new RecorderService()
    this.recorderSrvc.em.addEventListener('recording', (evt) => this.onNewRecording(evt))
    this.webAudioPeakMeter1 = new WebAudioPeakMeter()

    this.state = {
      record: false
    }
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ video: false, audio: true });
    this.peakMeterRawEl = document.getElementById('peak-meter-raw')
    this.recorderSrvc.onGraphSetupWithInputStream = (inputStreamNode) => {
      this.meterNodeRaw = this.webAudioPeakMeter1.createMeterNode(inputStreamNode, this.recorderSrvc.audioCtx)
      this.webAudioPeakMeter1.createMeter(this.peakMeterRawEl, this.meterNodeRaw, {})
    }
  }

  render() {
    const { resource, onChange } = this.props;

    return (
      <div style={{ textAlign: 'center' }}>
        <div id="peak-meter-raw" style={{
          display: 'inline-block',
          margin: '1em 0', border: '1px solid gray',
          width: '5em', height: '10em',
        }}></div>
        <div>
          <Button variant="fab"
            onClick={this.startRecording}>
            <MicIcon />
          </Button>
          &nbsp;&nbsp;
          <Button variant="fab"
            onClick={this.stopRecording}>
            <StopIcon />
          </Button>

        </div>
        
        
      </div>
    )
  }

  handleChange({ target }) {
    const resource = { title: "", description: target.value };
    this.props.onChange(resource);
  }

  onNewRecording(evt) {
    const blob = evt.detail.recording;
    let formData = new FormData();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', blob.blobUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = (e) => {
      if (xhr.status == 200) {
        const myBlob = xhr.response;
        const fileOfBlob = new File([myBlob], 'record.webm');    
        formData.append('sound', fileOfBlob);
        this.props.onChange({}, formData);
      }
    };
    xhr.send();
  }

  startRecording = () => {
    this.recorderSrvc.startRecording()
      .then(() => {
        this.recordingInProgress = true
      })
      .catch((error) => {
        console.error('Exception while start recording: ' + error)
        alert('Exception while start recording: ' + error.message)
      })
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.recorderSrvc.stopRecording()
    this.recordingInProgress = false
    this.meterNodeRaw.disconnect()
    this.meterNodeRaw = null
    this.peakMeterRawEl.innerHTML = ''

    this.setState({
      record: false
    });    
  }
}

export { VoiceRecordForm };