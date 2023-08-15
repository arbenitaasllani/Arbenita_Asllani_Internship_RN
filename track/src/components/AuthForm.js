import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText, navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <Text h3>{headerText}</Text>
        <Input 
        label="Email" 
        vakue={email} 
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        />
    <Spacer />
        <Input 
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        />
   {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
    ) : null}
        <Button title="Sign Up" onPress={() => onSubmit({email, password})} />
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
});

export default AuthForm;