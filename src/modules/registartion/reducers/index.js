import {
  REGISTRATION_PENDING,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from '../actions/constants'

const initialState = {
  user: {},
  status: 'default',
};

export default function (state = initialState, action) {
  switch (action.type) {

    case REGISTRATION_PENDING:
      return Object.assign({}, state, {
        ...state,
        status:'pending',
      });

    case REGISTRATION_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        status: 'success',
        user: action.payload,
      });

    case REGISTRATION_FAILURE:
      return Object.assign({}, state, {
        ...state,
        status:'failure',
      });


    default:
      return state;
  }
}