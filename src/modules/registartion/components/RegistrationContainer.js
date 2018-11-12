import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import { signUpUser } from '../actions';
import Registration from './Registration';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  signUpUser,
}, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),

  withState('firstNameValue', 'setFirstNameValue', ''),
  withState('lastNameValue', 'setFLastNameValue', ''),
  withState('emailValue', 'setEmailValue', ''),
  withState('passwordValue', 'setPasswordValue', ''),

  withHandlers({
    handleFirstNameValueChange: ({ setFirstNameValue }) => (e) => {
      setFirstNameValue(e.target.value);
    },

    handleLastNameValueChange: ({ setFLastNameValue }) => (e) => {
      setFLastNameValue(e.target.value);
    },

    handleEmailValueChange: ({ setEmailValue }) => (e) => {
      setEmailValue(e.target.value);
    },

    handlePasswordValueChange: ({ setPasswordValue }) => (e) => {
      setPasswordValue(e.target.value);
    },


    handleFormSubmit: ({
                         firstNameValue,
                         lastNameValue,
                         emailValue,
                         passwordValue,
                         signUpUser,
                       }) => (e) => {
      e.preventDefault();
      signUpUser({
        firstNameValue,
        lastNameValue,
        emailValue,
        passwordValue,
      });
    },
  }),
)(Registration);