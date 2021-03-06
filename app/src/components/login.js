import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import '../App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/PlayArrow';
// import { query } from '../utils/db'
import { withRouter } from 'react-router-dom'


const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class OutlinedTextFields extends React.Component {
  state = {
    loading: false,
    success: false,
    publicK: '',
    privateK: '',
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = () => {


    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.props.setUser({
              publicK: this.state.publicK,
              privateK: this.state.privateK,
            })
            

            this.setState({
              loading: false,
              success: true,
              privateK: '',
              publicK: ''
            })
            this.props.history.push('/broadcast')
          }, 1500);
        },
      );
    }



    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
        },
      )

      this.props.setUser({
        publicK: this.state.publicK,
        privateK: this.state.privateK,
      }, () => {
        setTimeout(() => {
          this.setState({
            loading: false,
            success: true,
            privateK: '',
            publicK: ''
          })
          this.props.history.push('/broadcast')
        }, 1000)
      })

      //  query(this.state.data, (results, image) => {
      //     console.log("inside")
      //     if (results) {
      //       console.log('hogaya')
      //       this.props.setUser(this.state.data)
      //       this.setState({
      //         loading: false,
      //         success: true,
      //         data: ''
      //       })
      //     }else{
      //       console.log('nhi hua')
      //     }
      //   })
    }
  }

  render() {
    const { classes } = this.props;
    const { loading, success } = this.state;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success,
    });
    return (
      <Paper className="paper-card">
        <Typography variant="h3" gutterBottom className="header-email">
          Log-In
        </Typography>
        <form className="email-form" noValidate autoComplete="off">
          <TextField
            id="outlined-email-input"
            label="Public Key"
            className="email-text"
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
            value={this.state.publicK}
            onChange={(e) => this.setState({ publicK: e.target.value })}
          />
          <TextField
            id="outlined-email-input"
            label="Private Key"
            className="email-text"
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
            value={this.state.privateK}
            onChange={(e) => this.setState({ privateK: e.target.value })}
          />
        </form>
        <div className={classes.root} >
          <div className={classes.wrapper}>
            <Fab color="primary" className={buttonClassname} onClick={this.handleButtonClick}>
              {success ? <CheckIcon /> : <SaveIcon />}
            </Fab>
            {loading && <CircularProgress size={68} className={classes.fabProgress} />}
          </div>
          {/* <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={this.handleButtonClick}
          >
            LOG-IN
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div> */}
        </div>
      </Paper>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(OutlinedTextFields));