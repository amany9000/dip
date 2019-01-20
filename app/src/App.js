import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Tabs from './components/tabs';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'antd/dist/antd.css';
import 'antd/lib/date-picker/style/css';
import Login from './login.js';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/signin' render={() =>
            <div className="App">
              <div >
                <h2><div align="center" className="main1"><b>BE ORIGINAL!</b></div></h2>
                <Login />
              </div>
            </div>
          } />
          <Route path='/search' render={() =>
            <div className="App">
              <div className="wrapper">
                <Typography variant="h3" gutterBottom className="header">
                  Sexy Bitches
              </Typography>
                <Tabs />
              </div>
              <IconButton className="mid-icon" aria-label="Menu">
                <AddIcon style={{ fontSize: 50 }} />
              </IconButton>
              <div className="loader">
                <CircularProgress />
              </div>
            </div>
          } />
        </div>
      </Router>
    );
  }
}

export default App;
