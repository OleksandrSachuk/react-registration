import { REGISTRATION_USER } from './constants';

export const signUpUser =
  ({
     firstNameValue,
     lastNameValue,
     emailValue,
     passwordValue,
   }) => {
    return {
      type: REGISTRATION_USER, payload: {
        firstNameValue,
        lastNameValue,
        emailValue,
        passwordValue,
      },
    }
  };