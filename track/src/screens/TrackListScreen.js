import React from "react";
import {View, StyleSheet, Text, Button} from 'react-native';

const TrackListScreen =({navigation}) => {
    return <>
    <Text style={{fontSize: 48}}>Track List Screen</Text>
    
    <Button 
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
    />
    <Button 
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
    />
    <Button 
        title="Go to Track"
        onPress={() => navigation.navigate('TrackCreate')}
    />
    </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;