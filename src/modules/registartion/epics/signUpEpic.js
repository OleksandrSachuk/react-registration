import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  catchError,
  map,
  pluck,
  startWith,
  switchMap, tap,
} from 'rxjs/operators';

import {
  REGISTRATION_USER,
  REGISTRATION_PENDING,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from '../actions/constants';
import { API } from '../../../configurations';

export const signUpEpic = (action$) =>
  action$
    .pipe(
      ofType(REGISTRATION_USER),
      pluck('payload'),
      switchMap((firstNameValue,
                 lastNameValue,
                 emailValue,
                 passwordValue) =>
        from(ajax.post(`${API}/users/6vf77z4hd5`, {
            firstNameValue,
            lastNameValue,
            emailValue,
            passwordValue,
            invite: "rtASDLastuev77",
          }, { 'Content-Type': 'application/json' })
            .pipe(
              map((user) => ({ type: REGISTRATION_SUCCESS, payload: user })),
              catchError((error) => of({ type: REGISTRATION_FAILURE, error })),
              startWith({ type: REGISTRATION_PENDING }),
            ),
        )),
    );