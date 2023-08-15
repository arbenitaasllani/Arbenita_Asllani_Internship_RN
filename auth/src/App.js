import React, { Component } from "react";
import {View } from 'react-native';
import firebase from 'firebase/compat/app';
import { Button, Header, Spinner } from './components/common';
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
     firebase.initializeApp({
      apiKey: "AIzaSyClv0RfgzzUPaT3OaYzixHHxPMdZFDjkxs",
      authDomain: "authentication-fc9ac.firebaseapp.com",
      projectId: "authentication-fc9ac",
      storageBucket: "authentication-fc9ac.appspot.com",
      messagingSenderId: "386137119562",
      appId: "1:386137119562:web:ba16d5d4e72b3a420fbfb3",
      measurementId: "G-B4H8GW61D6"
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({loggedIn: false });
    }
  });
}

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
          <Button onPress={() => firebase.auth.signOut()}>
              Log Out
          </Button>
      );
    case false: 
      return <LoginForm />;
    default: 
    return <Spinner size="large" />
  }
}


  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    ); 
  }
}

export default App;