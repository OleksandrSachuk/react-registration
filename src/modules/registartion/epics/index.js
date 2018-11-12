import { combineEpics } from 'redux-observable';
import {signUpEpic} from './signUpEpic';

export default combineEpics(
  signUpEpic,
);