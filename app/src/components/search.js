import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { query } from '../utils/db'

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 540,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
};

class CustomizedInputBase extends React.Component {  
  state= { 
    data: null
  }
  
  click = () => {
    query("CzWKAz4TJnXm6gVffMduP12sAPM1PPfTx6jaF2MWjj8T", (reply, image) => {
      this.state.setState({data: reply})
    })
  }

  render() {
    const { classes } = this.props;

    return (  
      <div className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="Menu" onClick={this.click} >
          <SearchIcon style={{ fontSize: 30 }}/>
        </IconButton>
        <InputBase className={classes.input} placeholder={this.props.text} />
        <IconButton className={classes.iconButton} aria-label="Search">
          <ClearIcon style={{ fontSize: 30 }} />
        </IconButton>
        <div style={{ margin: 25 }} />
      </div>
    );
  }
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);