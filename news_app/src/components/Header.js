import React from 'react';
import { View, Text, Platform } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                News App
            </Text>
        </View>
    );
}

const styles = { 
    header: {
        backgroundColor: Platform.OS === 'ios' ? '#72bcd4': '#ffffff',
        padding: 15,
        borderBottomColor: Platform.OS === 'ios' ? '#ffffff' : '#72bcd4',
        borderBottomWidth: 1
    },
    title: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
        color: Platform.OS === 'ios' ? '#ffffff' : '#72bcd4'
    }
}

export default Header;