import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './RegistrationBar.css';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const RegistrationBar = ({ classes }) => {

  return (
    <div className={ classes.root }>
      <AppBar position="static" color="default">
        <Toolbar className="RegistrationBar">
          <Typography variant="h6" color="inherit">
            <Link to='/sign-up' className="RegistrationBarButton">
              <Button variant="outlined" size="small">
                Sign Up
              </Button>
            </Link>
            <Link to='/login' className="RegistrationBarButton">
              <Button variant="outlined" size="small">
                Log In
              </Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

RegistrationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationBar);