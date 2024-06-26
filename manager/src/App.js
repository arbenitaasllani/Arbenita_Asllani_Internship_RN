import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { initializeApp } from "firebase/app";
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import firebase from 'firebase/compat/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';



class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBFD8X_LTDu4wkiStygMf1fSB4cUwkbS0o",
            authDomain: "manager-995c6.firebaseapp.com",
            databaseURL: "https://manager-995c6-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "manager-995c6",
            storageBucket: "manager-995c6.appspot.com",
            messagingSenderId: "792480100506",
            appId: "1:792480100506:web:6acea16142ad19cd8c6f23",
            measurementId: "G-DP9S90TZ6K"
          });
          
    }

    render() {
        const store = configureStore({reducer: reducers}, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;