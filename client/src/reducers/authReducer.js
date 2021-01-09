import { SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
    profile: {
      firstName: '',
      lastName: '',
      password:'',
      email: '',
      profileImage: '',
      interests: [],
    },
    formSubmitted: false
  }
 function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default authReducer;