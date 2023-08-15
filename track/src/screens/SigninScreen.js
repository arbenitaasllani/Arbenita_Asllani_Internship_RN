import React, { useCallback, useContext } from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native'; 
import {Text} from 'react-native-elements';
import AuthForm from "../components/AuthForm";
import { Context } from "../context/AuthContext";
// import NavLink from "../components/NavLink";

const SigninScreen =({navigation}) => {
    const {state, signin} = useContext(Context);
    
    return (
        <View style={styles.container}>
        
        <AuthForm
             headerText="Sign in To Your Account"
             submitButtonText="Sign In"
             onSubmit={() => navigation.navigate('TrackList')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
         <Text >
             Don't have an account? Sign up instead!
         </Text>
        </TouchableOpacity>
        {/* <NavLink
             routeName="Signin"
             text="Already have an account? Sign in instead!"
        /> */}
        
     </View>
 );
    
};

// SigninScreen.navigationOptions = {
//     header: null
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;