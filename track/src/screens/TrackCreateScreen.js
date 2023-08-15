import React, {useState, useContext, useCallback } from "react";
import { StyleSheet, PermissionsAndroid } from 'react-native';
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from 'react-navigation';
import Geolocation, { requestAuthorization } from 'react-native-geolocation-service';
import Map from "../components/Map";
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
 

const TrackCreateScreen =() => {
    // const {
    //     state: {recording},
    //     addLocation
    // } = useContext(LocationContext);
    // const callback = useCallback(location => {
    //     addLocation(location, state.recording);
    // }, [state.recording]);
    // const [err] = useLocation(callback);
    

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
        <Text h3>Create Track</Text>
        <Map />
        {/* {err ? <Text> Please enable location services</Text> : null} */}
        <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;