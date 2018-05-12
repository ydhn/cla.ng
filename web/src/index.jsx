import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import './styles/app.scss';


require('./utils');

class App extends Component {
  render() {
    const muiTheme = createMuiTheme({
      typography: { fontFamily: 'Noto Sans KR' },
      palette: {
        primary: {
          main: '#EE9D80',
        },
      },
    });

    return (
      <div className="app">
        <MuiThemeProvider theme={muiTheme}>
          {require('./routes').default}
        </MuiThemeProvider>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
registerServiceWorker();
