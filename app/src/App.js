import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Tabs from './components/tabs';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import 'antd/dist/antd.css';
import 'antd/lib/date-picker/style/css';
import Login from './components/login';
import './App.css';
import Country from './components/country';
import Broadcast from './components/broadcast';
class App extends Component {

  state = {
    publicK: null,
    privateK: null
  }

  setUser = ({publicK, privateK}) => {
    console.log(publicK)
    console.log(privateK)
    this.setState({ publicK, privateK })
  }

  currencies = [
    {
      value: 'USD',
      label: 'USA',
    },
    {
      value: 'EUR',
      label: 'Europe',
    },
    {
      value: 'BTC',
      label: 'India',
    },
    {
      value: 'JPY',
      label: 'Japan',
    },
  ];

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const styles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      menu: {
        width: 200,
      },
    });

    return (
      <Router>
        <div>
          {/* <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </AppBar> */}
          <Route path='/signin' render={() =>
            <div className="App">
              <div className="wrapper">
                <Typography variant="h3" gutterBottom className="header">
                  Decentralized Intellectual Property
                </Typography>
                <Login  setUser={this.setUser} />
              </div>
            </div>
          } />
          <Route path='/search' render={() =>
            <div className="App">
              <div className="wrapper">
                <Typography variant="h3" gutterBottom className="header-search">
                  Decentralized Intellectual Property
                </Typography>
                <Tabs />
                <div className="extra-tags">
                  <Country />
                  <span>{"   "}</span>
                  <TextField
                    style={{"marginTop": "0px"}}
                    id="standard-password-input"
                    label="Tags"
                    className={styles.textField}
                    type="text"
                    autoComplete="current-password"
                    margin="normal"
                  />
                </div>
              </div>
              <IconButton className="mid-icon" aria-label="Menu">
                <AddIcon style={{ fontSize: 50 }} />
              </IconButton>
              {/* <div className="loader">
                <CircularProgress />
              </div> */}
            </div>
          } />
          <Route path='/broadcast' render={() =>
            <div className="App">
              <div className="wrapper">
                <Typography variant="h3" gutterBottom className="header">
                  Decentralized Intellectual Property
                </Typography>
                <Broadcast privateK={this.state.privateK} publicK={this.state.publicK} />
              </div>
            </div>
          } />
          

          {/* <Route exact path="/  /:id"
              render={() => (
                this.props.authedUser
                  ? <Question />
                  : <Redirect to="/signin" />
              )}
            />
            <Route exact path="/newquestion"
              render={() => (
                this.props.authedUser
                  ? <NewQuestion />
                  : <Redirect to="/signin" />
              )}
            /> */}
        <Route exact path="/"
              render={() => (
                  <Redirect to="/signin" />
              )}
        />
        </div>

      </Router>
    );
  }
}

export default App;
