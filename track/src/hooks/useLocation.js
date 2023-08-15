import {useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { requestAuthorization, watchPosition } from 'react-native-geolocation-service';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                await requestAuthorization();
                subscriber = await watchPosition(
                {
                    watchPosition: watchPosition.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                callback
                );
            } catch (e) {
                setErr(e);
                
            }
        };


        if (shouldTrack) {
        startWatching();
        } else {
            if (subscriber) {
            subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]);

    return [err];
};
