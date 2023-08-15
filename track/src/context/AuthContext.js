import { AsyncStorageStatic } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";



const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': 
            return { ...state, errorMessage: action.payload};
        case 'signup':
            return { errorMessage: '', token: action.payload};
        default:
            return state;
    }
};

//QUIC EXAMPLE
//const add = (a,b) => a + b;


const signup = dispatch => {

    return ({email, password}) => {

    };
    // return async ({email, password}) => { 
    //     try {
    //         const response = await trackerApi.post('/signup', {email, password});
    //         await AsyncStorageStatic.setItem('token', response.data.token);
    //         dispatch({type: 'signup', payload: response.data.token});

    //         navigate('TrackList');
    //     } catch (err){
    //         //we use dispatch anytime we want to update our state
    //         dispatch({ type: 'add_error', payload: 'Something went wrong with sign up!!!' }); 
    //     }
        
    // };   
};

const signin = (dispatch) => {
    return ({email, password}) => {
        //try to sign in
        //Handle success by updating state
        //handling failure by showing error message (somehow)
    };
};

const signout = dispatch => {
    return () => {
        //somehow sign out!!!
    };
};

export const {Provider, Context} = createDataContext (
    authReducer,
    { signin, signout, signup },
    { token: null }
        // errorMessage: '' }

);