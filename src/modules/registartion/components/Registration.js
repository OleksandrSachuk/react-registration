import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import RegistrationBar from './RegistrationBar';

const propTypes = {
  handleFirstNameValueChange: PropTypes.func.isRequired,
  handleLastNameValueChange: PropTypes.func.isRequired,
  handleEmailValueChange: PropTypes.func.isRequired,
  handlePasswordValueChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

const styles = (theme) => ({
  button: {
    margin: '25px',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },

  root: {
    width: '50%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

const Registration = ({
                        classes,
                        handleFirstNameValueChange,
                        handleLastNameValueChange,
                        handleEmailValueChange,
                        handlePasswordValueChange,
                        handleFormSubmit,
                      }) =>
  (
    <div>
      <RegistrationBar />

      <form noValidate autoComplete="off" onSubmit={ handleFormSubmit }>
        <div>
          <TextField
            id="filled-first_name"
            label="First name"
            margin="normal"
            variant="outlined"
            onChange={ handleFirstNameValueChange }
          />
        </div>

        <div>
          <TextField
            id="filled-last_name"
            label="Last name"
            margin="normal"
            variant="outlined"
            onChange={ handleLastNameValueChange }
          />
        </div>

        <div>
          <TextField
            id="filled-email"
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
            onChange={ handleEmailValueChange }
          />
        </div>

        <div>
          <TextField
            id="filled-password"
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={ handlePasswordValueChange }
          />
        </div>

        <div>
          <Button
            variant="contained"
            color="primary"
            className={ classes.button }
            onClick={ handleFormSubmit }
          >
            Create Account
          </Button>
        </div>

      </form>

    </div>
  );

Registration.propTypes = propTypes;

export default withStyles(styles)(Registration);