import React from "react";
import { createStackNavigator, createAppContainter } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from "./src/navigationRef";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import {Provider as TrackProvider} from './src/context/TrackContext';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const AuthStack = () => (
   
  <Stack.Navigator>
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Signin" component={SigninScreen} />
    <Stack.Screen name="TrackList" component={TrackListScreen} /> 
    <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    <Stack.Screen name="TrackCreate" component={TrackCreateScreen} />
    <Stack.Screen name="Account" component={AccountScreen} />

  </Stack.Navigator>
  
);


// const MainFlow = () => (
//     <Tab.Navigator>
   
    
//     </Tab.Navigator>
// );

const App = () => (
  <NavigationContainer>
 
    <AuthStack/>
    
    
    {/* <Stack.Navigator>
      <Stack.Screen name="loginFlow" component={AuthStack} options={{ headerShown: false }} />
      <Stack.Screen name="mainFlow" component={MainFlow} />
    </Stack.Navigator> */}
  </NavigationContainer>
);

export default () => {
    return (
      <TrackProvider>
      <LocationProvider>
        <AuthProvider>
            <App 
            ref={(navigator) => {
              setNavigator(navigator)}}/>
        </AuthProvider>
        </LocationProvider>
        </TrackProvider>
    );
};