import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Tabs from './components/tabs';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Typography variant="h3" gutterBottom className="header">
            Sexy Bitches
          </Typography>
          <Tabs />
        </div>
        <IconButton className="mid-icon" aria-label="Menu">
          <AddIcon style={{ fontSize: 50 }}/>
        </IconButton>
        <div className="loader">
          <CircularProgress />
        </div>
      </div>
    );
  }
}

export default App;
