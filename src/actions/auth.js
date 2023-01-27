import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "./types";

  import {login, logout} from "../services/auth.service";

  export const login_const = (username, password) => (dispatch) => {
    return login(username, password).then((data)=>{
        dispatch({
            type:LOGIN_SUCCESS,
            payload:{user:data},
        });
        return Promise.resolve();
    }, (error)=>{
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        dispatch({
            type:LOGIN_FAIL
        });

        dispatch({
            type:SET_MESSAGE,
            payload:message
        });

        return Promise.reject();
    })
  };


  export const logout_const = () => (dispatch) =>{
    logout();

    dispatch({
        type:LOGOUT,
    });
  };