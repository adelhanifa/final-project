
import {SIGN_IN, SIGN_OUT} from "./types.js";
export  const signInUser = (user) => {

    return {
      type: SIGN_IN,
      payload: user
    };
    
  };
  
  export const signOut = () => {
    return {
      type: SIGN_OUT
    };
  };