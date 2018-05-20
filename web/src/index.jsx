import React, { createContext, Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import './styles/app.scss';
import { fetchAPI } from './utils';
import { User } from './components/users/context';

require('./utils');

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
    window.reloadUser = (newUser=null) => this.loadUser(true, newUser);
    this.loadUser();
  }

  openLoginPage = () => {
    if (window.location.href.includes('/start')) return;
    window.location.href = '/start';
  }

  loadUser = (reload = false, newUser = null) => {
    if (newUser !== null) {
      this.setState({ user: newUser });
      return;
    }
    if (!reload && Object.keys(this.state).includes('user')) return this.state.user;
    this.setState({ user: undefined });
    fetchAPI('/users/me').then(user => {
      this.setState({ user });
    }).catch(e => {
      window.alert(e);
      //this.openLoginPage();
    });
  }  
}

export const mainTheme = {
  typography: { fontFamily: 'Noto Sans KR' },
  palette: {
    primary: {
      main: '#EE9D80',
    },
  },
};

render(<App />, document.getElementById('app'));
registerServiceWorker();
