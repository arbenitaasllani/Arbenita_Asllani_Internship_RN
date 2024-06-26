import firebase from "firebase/compat";
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL, 
    LOGIN_USER
} from "./types";
 
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};


export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then (user =>  loginUserSuccess(dispatch, user))
        .catch((error) => {
            console.log(error);

            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
        });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    const { isNewUser } = user.additionalUserInfo;
    const userPayload = {
        id: user.user.id,
        isNewUser,
        
    };
    console.log("loginUserSuccess");

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: userPayload
    });

    Actions.main();
};
