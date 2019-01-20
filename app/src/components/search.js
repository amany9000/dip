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

function CustomizedInputBase(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="Menu" onClick={() => {
        console.log('query')
      }} >
        <SearchIcon style={{ fontSize: 30 }}/>
      </IconButton>
      <InputBase className={classes.input} placeholder={props.text} />
      <IconButton className={classes.iconButton} aria-label="Search">
        <ClearIcon style={{ fontSize: 30 }} />
      </IconButton>
    </div>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);