import React, { Component } from 'react';

import 'antd/dist/antd.css';
import 'antd/lib/date-picker/style/css';
import Login from './login.js';
import'./App.css';
class App extends Component {
  render() {
    return (
      <div >
        <h2><div align="center" className="main1"><b>BE ORIGINAL!</b></div></h2>
        <Login/>
      </div>
    );
  }
}

export default App;
