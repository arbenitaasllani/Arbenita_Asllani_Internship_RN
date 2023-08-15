import React, {useContext} from "react";
import {View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
// import NavLink from "../components/NavLink";


const SignupScreen =({navigation}) => {
    const { state, signup} = useContext(AuthContext);

    return (
    <View style={styles.container}>
        
       <AuthForm
            headerText="Sign up for Tracker"
            submitButtonText="Sign Up"
            onSubmit={() => navigation.navigate('TrackList')}

       />
       <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text >
            Already have an account? Sign in instead!
        </Text>
       </TouchableOpacity>      
    </View>
)
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
      
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200 

    }
   
  
});

export default SignupScreen;