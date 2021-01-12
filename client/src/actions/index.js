import history from "../history";
import {SIGN_IN, SIGN_OUT} from "./types.js";
// export  const signInUser = (user) => {
//     return {
//       type: SIGN_IN,
//       payload: user
//     };
    
//   };

  export const signInUser = user => async (dispatch) => {
    dispatch({ type: SIGN_IN, payload: user });
    // Do some programmatic navigation to get the user back to the root route
    history.push('/')
  };
  
  export const signOut = () => {
    return {
      type: SIGN_OUT
    };
  };