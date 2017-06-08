import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar 
          title="Wealth Compendium" 
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<span>Hello <strong>User</strong>!</span>} />
      </MuiThemeProvider>
    );
  }
}

export default App;
