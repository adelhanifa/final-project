import { SIGN_IN, SIGN_OUT } from '../actions/types';

let myState = { isSignedIn: false, user: null }
function authReducer(state = myState, action) {
  switch (action.type) {
    case SIGN_IN:
      myState = { user: action.payload, isSignedIn: true }
      console.log({ myState })
      return myState;
    case SIGN_OUT:
      myState = { isSignedIn: false, user: null };
      return myState;
    default:
      return state;
  }
};

export default authReducer;