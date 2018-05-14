import React, { createContext, Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import './styles/app.scss';
import { fetchAPI } from './utils';

require('./utils');

export const User = createContext({});
export const UserConsumer = (props) => (
  <User.Consumer>
    {({ user }) => props.children(user)}
  </User.Consumer>
)
export const mainTheme = {
  typography: { fontFamily: 'Noto Sans KR' },
  palette: {
    primary: {
      main: '#EE9D80',
    },
  },
};

class App extends Component {
  state = {
    isLogined: () => !!this.state.user,
    login: this.openLoginPage,  
    //logout: () => fetchBackoffice('/auth/logout').then(() => window.location.href = '/backoffice/auth/login'),
  };

  render() {
    const muiTheme = createMuiTheme(mainTheme);
    return (
      <div className="app">
        <User.Provider value={this.state}>
          <MuiThemeProvider theme={muiTheme}>
            {require('./routes').default}
          </MuiThemeProvider>
        </User.Provider>
      </div>
    )
  }

  componentDidMount() {
    this.loadUser();
  }

  openLoginPage = () => {
    if (window.location.href.includes('/start')) return;
    window.location.href = '/start';
  }

  loadUser = (reload = false) => {
    if (Object.keys(this.state).includes('user')) return this.state.user;
    this.setState({ user: null });
    fetchAPI('/users/me').then(user => {
      if (user) {
        this.setState({ user });
      }
      else this.openLoginPage();
    }).catch(e => {
      this.openLoginPage();
    });
  }  
}

render(<App />, document.getElementById('app'));
registerServiceWorker();
