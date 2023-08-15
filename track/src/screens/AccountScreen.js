import React from "react";
import {View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
// import Spacer from "../components/Spacer";
// import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen =({navigation}) => {
    return <>
    <Text style={{fontSize: 48}}>Account Screen</Text>
    <Button title="Sign out" onPress={() => navigation.navigate('Signin')} />
    </>
};

const styles = StyleSheet.create({});

export default AccountScreen;