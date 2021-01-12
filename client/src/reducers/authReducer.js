import { SIGN_IN, SIGN_OUT } from '../actions/types';

let myState = { isSignedIn: false, user: null }
function authReducer(state = myState, action) {
  switch (action.type) {
    case SIGN_IN:
      myState = { ...state , user: action.payload, isSignedIn: true }
      console.log({ myState })
      return myState;
    case SIGN_OUT:
      state= { isSignedIn: false, user: null };
      return state;
    default:
      return state;
  }
};

export default authReducer;